// The splash workshop's loops (October 21): each splash concept in the real player, at the start of the film and at the end,
// with a little of what comes before and after it, so the cut in and the cut out can be judged too. Recorded frame by frame
// at 60 fps the way the block-by-block loops are (vclock.js stops the page's clock and steps it), with the subtitles off, as
// in the export. Writes design/workshop/splash/<concept>-start.mp4 and <concept>-end.mp4.
//
// Usage: node design/workshop/splash/record.mjs http://localhost:8790 [concepts]
//   concepts: comma separated (now,wall,archive,fan,mosaic,giants by default). LOCKUP=big records the bigger lockup instead,
//   as <concept>-big-start.mp4 and <concept>-big-end.mp4. Needs headless Chrome and ffmpeg.
import { spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, "..", "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, "");
const CONCEPTS = (process.argv[3] || "now,wall,archive,fan,mosaic,giants").split(",").filter(Boolean);
const BIG = process.env.LOCKUP === "big", FPS = 60, PAR = 3, PRE = 1.2, POST = 0.9;
const VCLOCK = readFileSync(join(ROOT, "workshop", "blocks", "vclock.js"), "utf8");
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TMP = mkdtempSync(join(tmpdir(), "palit-splash-"));

// where the two splashes sit in the film, from the script as it stands
globalThis.window = globalThis; globalThis.localStorage = { getItem: () => null };
createRequire(import.meta.url)(join(ROOT, "video", "script.js"));
const S = globalThis.PALIT_SCRIPT, sec = id => S.sections.find(x => x.id === id);
const PLAYS = { start: sec("splash"), end: sec("splash-end") };

async function browser(name) {
  // Chrome picks its own free port and writes it to DevToolsActivePort, so recorders side by side never meet
  const prof = join(TMP, "profile-" + name);
  mkdirSync(prof, { recursive: true });
  const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", "--autoplay-policy=no-user-gesture-required", "--remote-debugging-port=0", "--window-size=1280,720", "--user-data-dir=" + prof, "about:blank"], { stdio: "ignore" });
  let port = 0;
  for (let i = 0; i < 150 && !port; i++) { await sleep(100); try { port = Number(readFileSync(join(prof, "DevToolsActivePort"), "utf8").split("\n")[0]) || 0; } catch (e) {} }
  if (!port) throw new Error("Chrome didn't start for " + name);
  let targets = null;
  for (let i = 0; i < 80 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch (e) { await sleep(150); } }
  const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener("open", r));
  let id = 0; const pending = new Map();
  ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method === "Runtime.exceptionThrown") console.log("page error in", name + ":", JSON.stringify(m.params.exceptionDetails).slice(0, 300)); });
  const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
  const evaluate = async expr => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.result ? r.result.result.value : undefined; };
  await send("Page.enable"); await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 720, deviceScaleFactor: 1, mobile: false });
  await send("Page.addScriptToEvaluateOnNewDocument", { source: VCLOCK });
  // the subtitles off, as the export has them
  await send("Page.addScriptToEvaluateOnNewDocument", { source: `(function () { try { if (/\\/player\\.html$/.test(location.pathname)) { var k = JSON.parse(localStorage.getItem("palit-video-kit") || "{}"); k.showSubs = false; localStorage.setItem("palit-video-kit", JSON.stringify(k)); } } catch (e) {} })();` });
  return { send, evaluate, close: () => { try { ws.close(); } catch (e) {} proc.kill(); } };
}
const STEP = `(async () => { await __VT.step(${1000 / FPS}); for (let i = 0; i < 500 && !PalitPlayer.ready(); i++) await new Promise(r => __VT.realTimeout(r, 20)); return PalitPlayer.time(); })()`;
const READY = `(async () => { for (let i = 0; i < 1500 && !(window.PalitPlayer && PalitPlayer.ready()); i++) await new Promise(r => __VT.realTimeout(r, 20)); return !!(window.PalitPlayer && PalitPlayer.ready()); })()`;
async function record(b, concept, play) {
  const x = PLAYS[play], from = Math.max(0, x.start - PRE), to = Math.min(x.start + x.seconds + POST, S.total - 0.05);
  const out = join(HERE, concept + (BIG ? "-big" : "") + "-" + play + ".mp4");
  // (since entry 287 the film's splash is the wall with the bigger lockup, so the smaller one is asked for by name)
  await b.send("Page.navigate", { url: BASE + "/design/video/player.html?clean&music=0&splash=" + concept + "&lockup=" + (BIG ? "big" : "small") + "&x=" + Date.now() + "#" + x.id });
  for (let i = 0; i < 200; i++) { await sleep(100); if (await b.evaluate("!!window.PalitPlayer && !!window.__VT && document.readyState === 'complete'")) break; }
  await b.evaluate(`PalitPlayer.seek(${from})`);
  if (!(await b.evaluate(READY))) console.log("still loading", concept, play, "after 30 seconds; recording anyway");
  await b.evaluate(STEP);
  const t0 = await b.evaluate("(PalitPlayer.play(), PalitPlayer.time())");
  const n = Math.max(1, Math.ceil((to - t0) * FPS));
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out], { stdio: ["pipe", "ignore", "inherit"] });
  const done = new Promise(r => ff.on("close", r));
  for (let k = 0; k < n; k++) {
    const shot = await b.send("Page.captureScreenshot", { format: "jpeg", quality: 92, optimizeForSpeed: true });
    if (!ff.stdin.write(Buffer.from(shot.result.data, "base64"))) await new Promise(r => ff.stdin.once("drain", r));
    await b.evaluate(STEP);
  }
  ff.stdin.end(); await done;
  console.log("recorded", concept, play + ":", n, "frames from", t0.toFixed(2), "s");
}
const queue = [];
CONCEPTS.forEach(c => ["start", "end"].forEach(p => queue.push([c, p])));
async function worker(k) {
  const b = await browser("w" + k);
  while (queue.length) { const [c, p] = queue.shift(); await record(b, c, p); }
  b.close();
}
await Promise.all(Array.from({ length: Math.min(PAR, queue.length) }, (_, k) => worker(k)));
await sleep(800);
try { rmSync(TMP, { recursive: true, force: true }); } catch (e) {}
// the times the workshop page shows under each loop
console.log(JSON.stringify({ start: { from: Math.max(0, PLAYS.start.start - PRE), at: PLAYS.start.start, seconds: PLAYS.start.seconds }, end: { from: Math.max(0, PLAYS.end.start - PRE), at: PLAYS.end.start, seconds: PLAYS.end.seconds } }));
