// Deep dive 3's real screens, captured crisp (twice the pixels) with where every piece sits, so viz.html's story scene can
// move them: v3's zoom at its four stops and the card, each color's place at each stop (so the colors can slide and grow
// from one stop to the next, the way v3 morphs them), the story workshop's three ways to bring the story forward, our
// roughest lo-fi sheets from October 16, v2's Days and its card, and the preview of Noah's picks.
// Usage: node design/video/dive3/capture.mjs http://localhost:8790   (needs headless Chrome; about a minute)
// Writes the .jpg files beside this script and shots.js (window.PALIT_DIVE3). Coordinates are CSS pixels, relative to the
// picture each one belongs to.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, "");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = ms => new Promise(r => setTimeout(r, ms));
const prof = mkdtempSync(join(tmpdir(), "palit-dive3-"));

// Chrome picks its own free port and writes it to DevToolsActivePort in the profile, so this never shares a Chrome with
// another recorder running at the same time
const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", "--remote-debugging-port=0", "--user-data-dir=" + prof, "about:blank"], { stdio: "ignore" });
let targets = null, port = null;
for (let i = 0; i < 120 && !targets; i++) { await sleep(150); try { if (!port) port = Number(readFileSync(join(prof, "DevToolsActivePort"), "utf8").split("\n")[0]); targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch (e) {} }
const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
const run = async expr => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); if (r.result && r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 400)); return r.result.result.value; };
await send("Page.enable"); await send("Runtime.enable");
async function size(w, h) { await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 2, mobile: false }); }
async function go(url, wait) { await send("Page.navigate", { url: BASE + url }); for (let i = 0; i < 100; i++) { await sleep(100); if (await run("document.readyState === 'complete'")) break; } await sleep(wait); }
// A picture of one part of the page, at twice its size
async function shot(name, r) { const res = await send("Page.captureScreenshot", { format: "jpeg", quality: 86, clip: { x: r[0], y: r[1], width: r[2], height: r[3], scale: 1 } }); writeFileSync(join(HERE, name), Buffer.from(res.result.data, "base64")); console.log("wrote", name, r.join(" ")); }
const RECT = "const R = n => { const q = n.getBoundingClientRect(); return [Math.round(q.left * 10) / 10, Math.round(q.top * 10) / 10, Math.round(q.width * 10) / 10, Math.round(q.height * 10) / 10]; };";
const HEX = "const HX = n => { const m = getComputedStyle(n).backgroundColor.match(/\\d+/g) || [0, 0, 0]; return '#' + m.slice(0, 3).map(v => ('0' + Number(v).toString(16)).slice(-2)).join(''); };";
const out = { made: new Date().toISOString(), v3: { stops: {} }, v2: {}, lofi: {}, story: {}, next: {} };

// ---- v3: the window at the zoom's four stops, every color's place in it, and the card a click opens
await size(1440, 900);
for (const stop of ["compact", "days", "where", "hunt"]) {
  await go("/design/v3/index.html?clean&scene=" + stop, 2600);
  const d = await run(`(() => { ${RECT} ${HEX}
    const pw = document.getElementById("pw"), w = R(pw), body = document.getElementById("body"), b = R(body);
    const tiles = [...body.querySelectorAll(".t[data-n]")].map(t => { const r = R(t); return [Number(t.getAttribute("data-n")), Math.round((r[0] - w[0]) * 10) / 10, Math.round((r[1] - w[1]) * 10) / 10, r[2], r[3], HX(t)]; });
    const zb = [...pw.querySelectorAll(".bar button, .bar [role=button]")].map(n => [n.textContent.trim(), R(n)]).filter(x => x[0] === "+" || x[0] === "−");
    return { win: w, body: [b[0] - w[0], b[1] - w[1], b[2], b[3]], radius: parseFloat(getComputedStyle(pw).borderRadius) || 12, tiles, zoom: zb.map(x => [x[0], x[1][0] - w[0], x[1][1] - w[1], x[1][2], x[1][3]]) };
  })()`);
  out.v3.win = [d.win[2], d.win[3]]; out.v3.body = d.body; out.v3.radius = d.radius; if (d.zoom.length) out.v3.zoom = d.zoom;
  out.v3.stops[stop] = { img: "v3-" + stop + ".jpg", tiles: d.tiles };
  await shot("v3-" + stop + ".jpg", d.win);
  if (stop === "compact") {
    // The window with nothing in it but its bars: what the colors move over while they change places
    await run(`(() => { const s = document.createElement("style"); s.textContent = "#body > * { visibility: hidden !important; }"; document.head.appendChild(s); })()`);
    await sleep(300);
    await shot("v3-chrome.jpg", d.win);
  }
  if (stop === "hunt") {
    // Click Hyacinth red (No. 106, kept today from the crocoite photo): its card opens, with the trail at the top
    await run(`document.querySelector('#body .t[data-n="106"]').click()`);
    await sleep(1800);
    const c = await run(`(() => { ${RECT}
      const w = R(document.getElementById("pw")), sh = document.querySelector(".sheet"), rel = r => [Math.round((r[0] - w[0]) * 10) / 10, Math.round((r[1] - w[1]) * 10) / 10, r[2], r[3]];
      const leafs = [...sh.querySelectorAll("*")].filter(n => !n.children.length && n.textContent.trim());
      const trail = leafs.filter(n => /^(Today|Crocoite photo|No\\. 106|›)$/.test(n.textContent.trim()) && R(n)[1] < 200).map(n => [n.textContent.trim(), rel(R(n))]);
      return { spec: rel(R(sh.querySelector(".spec"))), sw: rel(R(sh.querySelector(".sw"))), name: rel(R(sh.querySelector(".sp-nm"))), trail };
    })()`);
    out.v3.card = Object.assign({ img: "v3-card.jpg", n: 106 }, c);
    await shot("v3-card.jpg", d.win);
  }
}

// ---- v2 as it was on the afternoon of October 18 (frozen-oct18.html): Days, and the card one click away
await go("/design/v2/frozen-oct18.html?clean&scene=days", 3000);
let v = await run(`(() => { ${RECT} ${HEX}
  const w = R(document.getElementById("pw")), t = document.querySelector('[data-n="29"]'), r = R(t);
  return { win: w, tile: [r[0] - w[0], r[1] - w[1], r[2], r[3]], hex: HX(t) };
})()`);
out.v2.win = [v.win[2], v.win[3]]; out.v2.days = { img: "v2-days.jpg", tile: v.tile, n: 29, hex: v.hex };
await shot("v2-days.jpg", v.win);
await go("/design/v2/frozen-oct18.html?clean&scene=card", 3000);
v = await run(`(() => { ${RECT}
  const w = R(document.getElementById("pw")), s = R(document.querySelector(".spec"));
  return { win: w, spec: [s[0] - w[0], s[1] - w[1], s[2], s[3]] };
})()`);
out.v2.card = { img: "v2-card.jpg", spec: v.spec };
await shot("v2-card.jpg", v.win);

// ---- The preview of Noah's picks (entry 134): Days, each with its places
await go("/design/next/index.html?screen=days", 2600);
v = await run(`(() => { ${RECT} return R(document.getElementById("win")); })()`);
out.next.days = { img: "next-days.jpg", size: [v[2], v[3]] };
await shot("next-days.jpg", v);

// ---- The story workshop (entry 120), question 3: what the archive centers on. The three ways the line names, in its order
await size(1600, 1000);
await go("/design/workshop/story.html?only=center", 2600);
const opts = await run(`(() => { ${RECT}
  return [...document.querySelectorAll(".opts > .opt")].map(o => {
    const p = o.querySelector(".pv"), r = R(p);
    // the window drawn inside the preview: the biggest rounded box in it
    const w = [...p.querySelectorAll("*")].filter(n => parseFloat(getComputedStyle(n).borderTopLeftRadius) > 0 && n.getBoundingClientRect().width > r[2] * 0.6).sort((a, b) => b.getBoundingClientRect().width - a.getBoundingClientRect().width)[0];
    const q = w ? R(w) : r;
    return { r: [r[0], r[1] + scrollY, r[2], r[3]], win: [q[0] - r[0], q[1] - r[1], q[2], q[3]] };
  });
})()`);
const WAYS = [["places", 1, "Where you found them"], ["catalogue", 3, "A ruled catalogue, after Werner"], ["days", 2, "Days, each with its places"]];
for (const [k, i, name] of WAYS) {
  // the clip is in the page's own coordinates; scroll it into view first, clear of the workshop's bar at the bottom
  const r = opts[i].r;
  await run(`window.scrollTo(0, ${Math.max(0, r[1] - 60)})`); await sleep(500);
  out.story[k] = { img: "story-" + k + ".jpg", name, size: [r[2], r[3]], win: opts[i].win };
  await shot("story-" + k + ".jpg", r);
}

// ---- Our roughest lo-fi sheets (entry 11, October 16, Rivet), the first screen of each, and where the diary by day sits
await size(1440, 900);
const LOFI = { structural: "2678554f-9a8d-484f-a643-a97c36a64a36", expressive: "9b76a61e-f36d-46ae-b723-3d08f87c54f7", editorial: "e8b9e345-b093-4ad1-8dee-1f03a96a0137" };
for (const [k, pid] of Object.entries(LOFI)) {
  await go("/design/explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-" + pid + "/index.html", 1500);
  out.lofi[k] = { img: "lofi-" + k + ".jpg", size: [1440, 900] };
  if (k === "editorial") {
    out.lofi[k].diary = await run(`(() => { ${RECT}
      const h = [...document.querySelectorAll("div, h3, p, span")].filter(n => !n.children.length && n.textContent.trim() === "2. Diary by day")[0];
      let p = h; while (p.parentElement && p.getBoundingClientRect().height < 300) p = p.parentElement; return R(p);
    })()`);
  }
  await shot("lofi-" + k + ".jpg", [0, 0, 1440, 900]);
}

writeFileSync(join(HERE, "shots.js"), "// Deep dive 3's real screens and where every piece sits in them, written by design/video/dive3/capture.mjs. Don't edit by hand.\n" +
  "window.PALIT_DIVE3 = " + JSON.stringify(out) + ";\n");
console.log("wrote shots.js");
try { ws.close(); } catch (e) {}
proc.kill();
await sleep(600);
try { rmSync(prof, { recursive: true, force: true }); } catch (e) {}
