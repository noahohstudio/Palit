// Deep dive 2's stills (October 21): the screens its inserts show (viz.html's users1, users2 and users3), taken with headless
// Chrome at 2x or 3x and cropped to the window, so the camera can push in on them and still be sharp. The v3 windows are the
// ones the animated desktop picks up from when each insert ends, so the insert can hand over to it on the same frame.
// Writes JPEGs to design/history/shots/process/ as d2-*.jpg.
// Usage: node design/history/shots/video/users-stills.mjs http://localhost:8790 [name ...]
import { spawn } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url)), OUT = join(HERE, "..", "process");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, ""), ONLY = process.argv.slice(3);
const sleep = ms => new Promise(r => setTimeout(r, ms));

// name: the page, the window size, the scale, what to do once it's loaded (in the page), and what to crop to (a selector)
const V3 = "design/v3/index.html?clean";
const SHOTS = {
  // v2 as it was on the afternoon of October 18, opened by someone with no colors yet (entry 120)
  "d2-v2a-empty": { url: "design/v2/frozen-oct18.html?clean", size: [1440, 900], dpr: 3, crop: "#pw",
    act: "PalitV2.colors().length = 0; PalitV2.open();" },
  // v3's first open (A71, A75)
  "d2-v3-first": { url: V3 + "&scene=first", size: [1440, 900], dpr: 2, crop: "#pw" },
  // v3's Days, a few weeks in (the 111 colors)
  "d2-v3-days": { url: V3 + "&scene=days", size: [1440, 900], dpr: 2, crop: "#pw" },
  // v3's card for No. 107, the red from the crocoite photo, still unnamed: where the second persona's playback starts. Its
  // placeholder loses "photo" there, so it sits on one line (Noah, dive2/09), and so it does here
  "d2-v3-card": { url: V3 + "&scene=card&n=107", size: [1440, 900], dpr: 2, crop: "#pw", wait: 2600,
    act: "(function () { var c = PalitV2.colors().filter(function (x) { return x.number === 107; })[0]; c.placeholder = c.placeholder.replace(/ photo$/, ''); PalitV2.card(107); })();" },
  // v3's longtime archive (1,802 colors) in Days at only color: where the third persona's playback starts
  "d2-v3-longdays": { url: V3 + "&scene=longtime", size: [1440, 900], dpr: 2, crop: "#pw", wait: 2400,
    act: "(function () { var t = Array.prototype.filter.call(document.querySelectorAll('.tabs button'), function (b) { return b.textContent === 'Days'; })[0]; t.click(); setTimeout(function () { dispatchEvent(new KeyboardEvent('keydown', { key: '-', metaKey: true, bubbles: true })); }, 700); })();" },
  // Naming as a form, a stack to triage (entry 16), and the archive as a list, newest last (entry 15), at the size their stills
  // were taken (shots/ideations-12.jpg and flows-10.jpg)
  "d2-triage-stack": { url: "design/explorations/flows-arena-cosmos/04-collect/triage-stack.html", size: [1280, 800], dpr: 2, crop: "viewport" },
  "d2-list": { url: "design/explorations/flows/04-collect/.rivet/this-prototype-flow-4-of-4-collecting-na-de1c/.rivet-preview-c15b9812-fa2a-4643-9f3e-2a988d857010/index.html", size: [1280, 800], dpr: 2, crop: "viewport" },
  // The look workshop's three type options and three home screens (entries 97 and 99), as Noah saw them
  "d2-look-type-a": { url: "design/workshop/look.html", size: [1440, 900], dpr: 3, crop: "#item-type .opt:nth-child(1) .pv", wait: 1500 },
  "d2-look-type-b": { url: "design/workshop/look.html", size: [1440, 900], dpr: 3, crop: "#item-type .opt:nth-child(2) .pv", wait: 1500 },
  "d2-look-type-c": { url: "design/workshop/look.html", size: [1440, 900], dpr: 3, crop: "#item-type .opt:nth-child(3) .pv", wait: 1500 },
  "d2-look-home-a": { url: "design/workshop/look.html", size: [1440, 900], dpr: 3, crop: "#item-home .opt:nth-child(1) .pv", wait: 1500 },
  "d2-look-home-b": { url: "design/workshop/look.html", size: [1440, 900], dpr: 3, crop: "#item-home .opt:nth-child(2) .pv", wait: 1500 },
  "d2-look-home-c": { url: "design/workshop/look.html", size: [1440, 900], dpr: 3, crop: "#item-home .opt:nth-child(3) .pv", wait: 1500 }
};

async function shoot(name, s) {
  const prof = mkdtempSync(join(tmpdir(), "d2-stills-"));
  const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", "--remote-debugging-port=0", "--window-size=" + s.size.join(","), "--user-data-dir=" + prof, "about:blank"], { stdio: "ignore" });
  // Chrome picks its own free port and writes it in the profile (DevToolsActivePort), so harnesses running at once never share one
  let port = null;
  for (let i = 0; i < 150 && !port; i++) { await sleep(100); try { port = Number(readFileSync(join(prof, "DevToolsActivePort"), "utf8").split("\n")[0]) || null; } catch (e) {} }
  let targets = null;
  for (let i = 0; i < 80 && !targets; i++) { await sleep(150); try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch (e) {} }
  const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener("open", r));
  let id = 0; const pending = new Map();
  ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
  const ev = async expr => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.result ? r.result.result.value : undefined; };
  await send("Page.enable"); await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: s.size[0], height: s.size[1], deviceScaleFactor: s.dpr, mobile: false });
  await send("Page.navigate", { url: BASE + "/" + s.url });
  for (let i = 0; i < 100; i++) { await sleep(100); if (await ev("document.readyState === 'complete'")) break; }
  await sleep(1200);
  if (s.act) { await ev(s.act); }
  await sleep(s.wait || 1400);
  if (s.crop === "viewport") { const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 92 }); writeFileSync(join(OUT, name + ".jpg"), Buffer.from(shot.result.data, "base64")); console.log(name, s.size.map(v => v * s.dpr).join("x")); ws.close(); proc.kill(); await sleep(300); try { rmSync(prof, { recursive: true, force: true }); } catch (e) {} return; }
  const r = await ev(`(function () { var n = document.querySelector(${JSON.stringify(s.crop)}); if (!n) return null; n.scrollIntoView({ block: "center" }); var b = n.getBoundingClientRect(); return [b.left, b.top, b.width, b.height]; })()`);
  if (!r) { console.log("no", s.crop, "in", name); ws.close(); proc.kill(); return; }
  await sleep(300);
  // in the page's own coordinates, scroll included, which is what the clip is measured in
  const r2 = await ev(`(function () { var b = document.querySelector(${JSON.stringify(s.crop)}).getBoundingClientRect(); return [b.left + scrollX, b.top + scrollY, b.width, b.height]; })()`);
  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 92, clip: { x: r2[0], y: r2[1], width: r2[2], height: r2[3], scale: 1 }, captureBeyondViewport: true });
  writeFileSync(join(OUT, name + ".jpg"), Buffer.from(shot.result.data, "base64"));
  console.log(name, Math.round(r2[2] * s.dpr) + "x" + Math.round(r2[3] * s.dpr), "from", r2.map(v => Math.round(v * 10) / 10).join(","));
  ws.close(); proc.kill(); await sleep(300); try { rmSync(prof, { recursive: true, force: true }); } catch (e) {}
}
for (const [name, s] of Object.entries(SHOTS)) if (!ONLY.length || ONLY.includes(name)) await shoot(name, s);
