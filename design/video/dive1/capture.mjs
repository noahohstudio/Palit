// Deep dive 1's stills (October 21): our own screens at twice the size, so the look scene's camera can push into them, and the
// controls the v3 workshop counted (design/workshop/v3.html, measure()) on v2 merged and v3, so the scene can mark them on the
// real screens. Writes JPEGs and stills.js (window.PALIT_DIVE1: each still's size, the boxes, and the colors of v3's chrome)
// into design/video/dive1/. v1 comes from the saved copy of the journey served at /v1test/ (as in process.py).
// Usage: node design/video/dive1/capture.mjs http://localhost:8790   (needs headless Chrome; about a minute)
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, "");
const sleep = ms => new Promise(r => setTimeout(r, ms));
const LOFI = "design/explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/";
const IDEA = "design/explorations/flows-arena-cosmos/";
const FLOW = "design/explorations/flows/";
// name: [path, viewport width, height, scale, crop ("pw" for Palit's window), what to measure, what to do first]
// The chip and the capture card only show once something is kept or opened, so their prototypes' own functions do that first:
// keep() picks a point on the photo in the browser (the chip drops from the menu bar), openCard() opens No. 028's card
const SHOTS = {
  "lofi-11": [LOFI + ".rivet-preview-8a0d3485-6a57-43ab-9472-c83de1bc8ed4/index.html", 960, 600, 3],
  "idea-specimen": [IDEA + "02-card/industrial-specimen.html", 960, 600, 2],
  "idea-fan": [IDEA + "03-archive/radial-fan-deck.html", 960, 600, 2],
  "idea-albers": [IDEA + "04-collect/albers-workbench.html", 960, 600, 2],
  "chip": [FLOW + "01-capture/.rivet/this-prototype-flow-1-of-4-capturing-a-c-94b1/.rivet-preview-353a54dd-5487-4c7c-9f7a-40011b1ad797/index.html", 960, 600, 2, null, "ticket", "keep(560, 330)"],
  "capture-card": [FLOW + "02-card/.rivet/this-prototype-flow-2-of-4-the-capture-c-271d/.rivet-preview-739053ea-079b-4fc8-bd33-5cff0fe2bcd4/index.html", 1280, 800, 2, null, "stage", "openCard()"],
  "v1": ["v1test/journey/index.html#/archive", 1440, 900, 2, null, "v1"],
  "v2a": ["design/v2/frozen-oct18.html?clean&scene=days", 1440, 900, 2, null, "count"],
  "v2b": ["design/v2/index.html?clean&scene=days", 1440, 900, 2, null, "count"],
  "v3": ["design/v3/index.html?clean&scene=days", 1440, 900, 2, null, "count"],
  "v3-first": ["design/v3/index.html?clean&scene=first", 1440, 900, 2, null, "chrome"],
  "v3-card": ["design/v3/index.html?clean&scene=card", 1440, 900, 2, "pw", "spec"],
  "v3-study": ["design/v3/index.html?clean&scene=study", 1440, 900, 2, "pw", "study"]
};

// The v3 workshop's count (design/workshop/v3.html, measure()), with each control's box, in the page's points
const COUNT = `(() => {
  var doc = document, w = window, pw = doc.getElementById("pw"), body = doc.getElementById("body");
  function shown(n) {
    for (var x = n; x && x !== doc.body; x = x.parentElement) { var cs = w.getComputedStyle(x); if (cs.display === "none" || cs.visibility === "hidden" || x.hidden) return false; }
    var r = n.getBoundingClientRect(), b = (body && body.contains(n) ? body : pw).getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > b.top + 1 && r.top < b.bottom - 1 && r.right > b.left && r.left < b.right;
  }
  var skip = ".sheet, .menu, .toast, .selpill, .zname, .wmenu", ctl = [], words = 0;
  pw.querySelectorAll("button, input, label.search").forEach(function (b) {
    if (b.closest(skip)) return;
    if (b.tagName === "LABEL") { var inp = b.querySelector("input"); if (inp && shown(inp)) return; }
    if (!shown(b) || (body && body.contains(b))) return;
    var r = b.getBoundingClientRect();
    ctl.push([Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height), (b.getAttribute("aria-label") || b.textContent || b.placeholder || "").trim().replace(/\\s+/g, " ").slice(0, 30)]);
  });
  var tw = doc.createTreeWalker(pw, NodeFilter.SHOW_TEXT);
  for (var t = tw.nextNode(); t; t = tw.nextNode()) { var s = t.nodeValue.trim(), p = t.parentElement; if (!s || !p || p.closest(skip) || !shown(p) || p.closest(".t, .fan-card, .chip, .big")) continue; words += s.split(/\\s+/).length; }
  var r = pw.getBoundingClientRect();
  function box(n) { var q = n.getBoundingClientRect(); return [Math.round(q.left), Math.round(q.top), Math.round(q.width), Math.round(q.height)]; }
  // The first row of colors (where the names sit), and the desktop palette at the screen's edge with each strip's color
  var tiles = Array.prototype.slice.call(doc.querySelectorAll("#body .t")).filter(shown).slice(0, 6).map(box);
  var st = doc.querySelector(".strips"), strips = st && st.getBoundingClientRect().width > 0 && w.getComputedStyle(st).display !== "none" ? { box: box(st), chips: Array.prototype.map.call(st.querySelectorAll("button"), function (b) { return { box: box(b), color: w.getComputedStyle(b).backgroundColor }; }) } : null;
  return { win: [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)], controls: ctl, words: words, tiles: tiles, strips: strips };
})()`;
// v1's archive: its window, the two rows of filter chips, and the first row of tiles with the labels under them
const V1 = `(() => {
  function box(n) { var r = n.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)]; }
  var tiles = Array.prototype.slice.call(document.querySelectorAll("button.tile")).slice(0, 6), chips = Array.prototype.filter.call(document.querySelectorAll("button"), function (b) { return /^(All|Red|Orange|Yellow|Green|Teal|Blue|Purple|Neutral|Any value|Dark|Mid|Light)$/.test(b.textContent.trim()); });
  var win = tiles.length ? tiles[0].closest("section, .archive, .win, [class*=window]") : null;
  return { win: win ? box(win) : null, chips: chips.map(box), tiles: tiles.map(function (b) { var r = box(b), img = b.querySelector("i, span, div"); return { box: r, label: b.getAttribute("aria-label") || "" }; }) };
})()`;
// v3's chrome, for the samples: where each neutral is and what it is (computed, so the values are the window's own)
const CHROME_SAMPLES = `(() => {
  var pw = document.getElementById("pw"), out = [], seen = {};
  function add(n, prop, label) { var r = n.getBoundingClientRect(), c = getComputedStyle(n)[prop]; out.push({ at: [Math.round(r.left + Math.min(r.width / 2, 18)), Math.round(r.top + r.height / 2)], color: c, label: label }); }
  add(pw, "backgroundColor", "the window");
  Array.prototype.forEach.call(pw.querySelectorAll("*"), function (n) {
    var s = (n.childNodes.length === 1 && n.firstChild.nodeType === 3) ? n.textContent.trim() : ""; if (!s) return;
    var c = getComputedStyle(n).color; if (seen[c]) return; seen[c] = 1; add(n, "color", s.slice(0, 40));
  });
  return out;
})()`;
const STUDY = `(() => Array.prototype.map.call(document.querySelectorAll(".grounds"), function (n) { var r = n.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)]; }))()`;

async function browser() {
  // Chrome picks its own free port and writes it to DevToolsActivePort in its profile, so several recorders never share one
  const prof = mkdtempSync(join(tmpdir(), "dive1-"));
  const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", "--remote-debugging-port=0", "--user-data-dir=" + prof, "about:blank"], { stdio: "ignore" });
  let targets = null, port = null;
  for (let i = 0; i < 100 && !targets; i++) {
    await sleep(150);
    try { if (!port) port = Number(readFileSync(join(prof, "DevToolsActivePort"), "utf8").split("\n")[0]) || null; if (port) targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch (e) {}
  }
  const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener("open", r));
  let id = 0; const pending = new Map();
  ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
  const evaluate = async expr => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.result ? r.result.result.value : undefined; };
  await send("Page.enable"); await send("Runtime.enable");
  return { send, evaluate, close: () => { try { ws.close(); } catch (e) {} proc.kill(); setTimeout(() => { try { rmSync(prof, { recursive: true, force: true }); } catch (e) {} }, 800); } };
}

// Where an element sits, in the page's points
const RECT = sel => `(() => { var n = document.querySelector(${JSON.stringify(sel)}); if (!n) return null; var r = n.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)]; })()`;

// node capture.mjs <base> [name ...] re-shoots only those, keeping the rest of stills.js
const ONLY = process.argv.slice(3);
let out = { made: new Date().toISOString(), stills: {}, marks: {} };
if (ONLY.length) { try { globalThis.window = globalThis; (await import("node:module")).createRequire(import.meta.url)(join(HERE, "stills.js")); out = Object.assign(globalThis.PALIT_DIVE1, { made: out.made }); } catch (e) {} }
const b = await browser();
for (const [name, [path, w, h, scale, crop, measure, prep]] of Object.entries(SHOTS)) {
  if (ONLY.length && ONLY.indexOf(name) < 0) continue;
  await b.send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: scale, mobile: false });
  await b.send("Page.navigate", { url: BASE + "/" + path });
  await sleep(4200);   // let a scene settle (the pages animate in)
  if (prep) { await b.evaluate(prep); await sleep(1600); }
  let clip = { x: 0, y: 0, width: w, height: h, scale: 1 };
  if (crop) { const r = await b.evaluate(`(() => { var n = document.getElementById(${JSON.stringify(crop)}); if (!n) return null; var r = n.getBoundingClientRect(); return [r.left, r.top, r.width, r.height]; })()`); if (r) clip = { x: r[0], y: r[1], width: r[2], height: r[3], scale: 1 }; }
  const shot = await b.send("Page.captureScreenshot", { format: "jpeg", quality: 88, clip, captureBeyondViewport: false });
  writeFileSync(join(HERE, name + ".jpg"), Buffer.from(shot.result.data, "base64"));
  out.stills[name] = { src: "dive1/" + name + ".jpg", w: Math.round(clip.width), h: Math.round(clip.height), scale, page: path, clip: crop ? [Math.round(clip.x), Math.round(clip.y)] : [0, 0] };
  if (measure === "count") out.marks[name] = await b.evaluate(COUNT);
  if (measure === "v1") out.marks[name] = await b.evaluate(V1);
  if (measure === "chrome") out.marks[name] = await b.evaluate(CHROME_SAMPLES);
  if (measure === "study") out.marks[name] = await b.evaluate(STUDY);
  if (measure === "ticket") out.marks[name] = { chip: await b.evaluate(RECT(".ticket .chip")), ticket: await b.evaluate(RECT(".ticket")) };
  if (measure === "stage") out.marks[name] = { card: await b.evaluate(RECT("#stage")) };
  // the card itself, and its first row (Found), in the crop's own points
  if (measure === "spec") { const s = await b.evaluate(RECT("#pw .spec")), f = await b.evaluate(RECT("#pw .sp-rows")); out.marks[name] = { card: s && [s[0] - clip.x, s[1] - clip.y, s[2], s[3]], rows: f && [f[0] - clip.x, f[1] - clip.y, f[2], f[3]] }; }
  console.log(name, clip.width + "x" + clip.height, "at", scale + "x", measure && out.marks[name] ? (out.marks[name].controls ? out.marks[name].controls.length + " controls, " + out.marks[name].words + " words" : "measured") : "");
}
b.close();
writeFileSync(join(HERE, "stills.js"), "// Deep dive 1's stills and the boxes measured on them, written by design/video/dive1/capture.mjs. Don't edit by hand.\n" +
  "window.PALIT_DIVE1 = " + JSON.stringify(out) + ";\n");
console.log("wrote stills.js");
