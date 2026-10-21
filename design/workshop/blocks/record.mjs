// The block-by-block workshop's loops (entry 223): splits the whole cut into moments (each statement, each beat of a chart,
// reel or the animated desktop, each line of the filmed parts, and the sections with no lines), records every section from
// the real player (camera, subtitles, chips and all), and cuts each moment into its own MP4 that loops. Writes
// design/workshop/blocks/moments.js and blocks/<section>/01.mp4, 02.mp4, ...
//
// Round three (Noah, m001: “I want the highest frame rate possible”; m003: “I want our recordings to be perfectly clear and
// the framerate they came in”): it no longer films the player in real time. vclock.js stops the page's clock, and each
// frame is stepped on exactly 1/60 of a second and captured whole, however long it takes to draw, so a loop never
// stutters or drops a frame, and the footage is on its exact frame every time.
//
// Usage: node design/workshop/blocks/record.mjs http://localhost:8790 [what]
//   what: nothing for the whole cut, a section (dive1), a block (start, dive1, dive2, dive3, closing, splash), or several, comma
//   separated. FPS=30 in the environment records at 30 frames a second; STATEMENTS=1 records only the statements (a few
//   seconds each) and leaves every other loop as it is. Needs headless Chrome and ffmpeg.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, renameSync, rmSync, readdirSync, unlinkSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, "..", "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, "");
const FPS = Number(process.env.FPS) || 60, PAR = 3, MIN = 1.6, ONLY_STATEMENTS = process.env.STATEMENTS === "1";
const VCLOCK = readFileSync(join(HERE, "vclock.js"), "utf8");
// The blocks Noah reviews side by side, each in its own workshop (blocks.html?block=...)
// (splash: the splash at both ends, on its own for one last look, October 21)
const BLOCKS = { start: ["opening", "intro", "splash", "brief", "problem", "people", "demo", "process"], dive1: ["dive1"], dive2: ["dive2"], dive3: ["dive3"], closing: ["horizon", "outro", "splash-end", "credits"], splash: ["splash", "splash-end"] };
const WANT = process.argv[3] ? [].concat(...process.argv[3].split(",").map(w => BLOCKS[w] || [w])) : null;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TMP = mkdtempSync(join(tmpdir(), "palit-blocks-"));

// ---- the moments, from the script as it stands (script.js, with Noah's lines folded in)
globalThis.window = globalThis; globalThis.localStorage = { getItem: () => null };
createRequire(import.meta.url)(join(ROOT, "video", "script.js"));
const S = globalThis.PALIT_SCRIPT, VT = globalThis.palitVideoTime;
const moments = [];
const said = l => typeof l.start === "number";
S.sections.forEach(x => {
  if (x.cut) return;
  const end = x.start + x.seconds;
  if (x.statement) moments.push({ section: x.id, kind: "statement", label: "Statement", start: x.statementAt, end: x.start, lines: [] });
  const lines = (x.lines || []).filter(said);
  if (x.beats && x.beats.length) {
    const bs = x.beats.map(b => ({ label: b.label, sec: b.sec })).sort((a, b) => a.sec - b.sec);
    const ms = bs.map((b, i) => ({ section: x.id, kind: "beat", label: b.label, sec: b.sec, start: x.start + VT(x, b.sec), end: i + 1 < bs.length ? x.start + VT(x, bs[i + 1].sec) : end, lines: [] }));
    ms[0].start = Math.min(ms[0].start, x.start);
    lines.forEach(l => {
      let m = ms.find(mm => Math.abs(mm.sec - l.beat) < 0.01);
      if (!m) m = ms.filter(mm => mm.start <= x.start + l.start + 0.01).pop() || ms[0];
      m.lines.push(l.id);
    });
    ms.forEach(m => { delete m.sec; moments.push(m); });
  } else if (lines.length) {
    lines.forEach((l, i) => moments.push({ section: x.id, kind: "line", label: (x.part === "filmed" ? "Filmed: " : "") + "line " + (i + 1), start: i ? x.start + l.start : x.start, end: i + 1 < lines.length ? x.start + lines[i + 1].start : end, lines: [l.id] }));
  } else moments.push({ section: x.id, kind: "whole", label: x.title, start: x.start, end, lines: [] });
});
// m001, m002, ... number the whole cut (the full workshop's boards use them); each section's moments are also numbered on
// their own (dive1/01), so a block's workshop keeps its notes when another block gains or loses a moment
const inSection = {};
moments.forEach((m, i) => {
  m.n = i + 1; m.id = "m" + String(i + 1).padStart(3, "0");
  const k = inSection[m.section] = (inSection[m.section] || 0) + 1, nn = String(k).padStart(2, "0");
  m.key = m.section + "/" + nn; m.file = "blocks/" + m.section + "/" + nn + ".mp4";
  m.start = Math.round(m.start * 100) / 100; m.end = Math.round(m.end * 100) / 100;
});

// ---- record each section from the player, a frame at a time
async function browser(name) {
  // Chrome picks a free port itself and writes it to DevToolsActivePort in its own profile, so recorders running side by
  // side (one per block session) can never connect to each other's Chrome (a random port could, and one did)
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
  ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method === "Inspector.targetCrashed") console.log("the page crashed in", name); else if (m.method === "Runtime.exceptionThrown") console.log("page error in", name + ":", JSON.stringify(m.params.exceptionDetails).slice(0, 300)); });
  const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
  const evaluate = async expr => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.result ? r.result.result.value : undefined; };
  await send("Page.enable"); await send("Runtime.enable"); await send("Inspector.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 720, deviceScaleFactor: 1, mobile: false });
  await send("Page.addScriptToEvaluateOnNewDocument", { source: VCLOCK });
  return { send, evaluate, close: () => { try { ws.close(); } catch (e) {} proc.kill(); } };
}
// One frame on: the clock steps, then waits (in real time) until everything on screen has loaded and every video is on its frame
// (at most 10 seconds a frame: anything longer is a page that will never be ready, and the recording goes on, saying so)
const STEP = `(async () => { await __VT.step(${1000 / FPS}); for (let i = 0; i < 500 && !PalitPlayer.ready(); i++) await new Promise(r => __VT.realTimeout(r, 20)); return PalitPlayer.ready() ? PalitPlayer.time() : -PalitPlayer.time() - 1; })()`;
const READY = `(async () => { for (let i = 0; i < 1500 && !(window.PalitPlayer && PalitPlayer.ready()); i++) await new Promise(r => __VT.realTimeout(r, 20)); return !!(window.PalitPlayer && PalitPlayer.ready()); })()`;
async function recordSection(b, x, out) {
  await b.send("Page.navigate", { url: BASE + "/design/video/player.html?clean&music=0&x=" + Date.now() + "#" + x.id });
  for (let i = 0; i < 200; i++) { await sleep(100); if (await b.evaluate("!!window.PalitPlayer && !!window.__VT && document.readyState === 'complete'")) break; }
  if (!(await b.evaluate(READY))) console.log("still loading in", x.id, "after 30 seconds; recording anyway");
  await b.evaluate(STEP);   // one still step, so the player's frame loop is running
  const t0 = await b.evaluate("(PalitPlayer.play(), PalitPlayer.time())");
  const end = ONLY_STATEMENTS ? x.start + 0.05 : Math.min(x.start + x.seconds + 0.3, S.total - 0.05);   // the player stops just short of the very end
  const n = Math.max(1, Math.ceil((end - t0) * FPS));
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "16", "-pix_fmt", "yuv420p", out], { stdio: ["pipe", "ignore", "inherit"] });
  const done = new Promise(r => ff.on("close", r));
  const began = Date.now();
  let stuck = 0;
  for (let k = 0; k < n; k++) {
    const shot = await b.send("Page.captureScreenshot", { format: "jpeg", quality: 92, optimizeForSpeed: true });
    if (!ff.stdin.write(Buffer.from(shot.result.data, "base64"))) await new Promise(r => ff.stdin.once("drain", r));
    const t = await b.evaluate(STEP);
    if (typeof t === "number" && t < 0 && !stuck++) console.log("in", x.id, "at", (-t - 1).toFixed(2), "s something on screen never finished loading; recording on");
  }
  ff.stdin.end(); await done;
  return { t0, n, secs: (Date.now() - began) / 1000 };
}
function cut(m, rec, src, out) {
  const a = Math.max(0, Math.round((m.start - rec.t0) * FPS)), z = Math.min(rec.n, Math.round((Math.max(m.end, m.start + MIN) - rec.t0) * FPS));
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", src, "-vf", `trim=start_frame=${a}:end_frame=${Math.max(a + 1, z)},setpts=PTS-STARTPTS`, "-r", String(FPS), "-c:v", "libx264", "-preset", "veryfast", "-crf", "21", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", out]);
}
const sections = S.sections.filter(x => !x.cut && (!WANT || WANT.includes(x.id)) && (!ONLY_STATEMENTS || x.statement)).sort((a, b) => b.seconds - a.seconds);
if (WANT && !sections.length) { console.log("nothing to record for", process.argv[3]); process.exit(1); }
const queue = sections.slice();
async function worker(k) {
  const b = await browser("w" + k);
  while (queue.length) {
    const x = queue.shift(), src = join(TMP, x.id + ".mp4"), dir = join(HERE, x.id);
    const rec = await recordSection(b, x, src);
    mkdirSync(dir, { recursive: true });
    const mine = moments.filter(m => m.section === x.id && (!ONLY_STATEMENTS || m.kind === "statement"));
    mine.forEach(m => cut(m, rec, src, join(HERE, "..", m.file)));
    // loops left from an older split of this section
    if (!ONLY_STATEMENTS) readdirSync(dir).filter(f => /^\d{2}\.mp4$/.test(f) && !mine.some(m => m.file.endsWith("/" + f))).forEach(f => unlinkSync(join(dir, f)));
    rmSync(src, { force: true });
    console.log("recorded", x.id + ":", rec.n, "frames at", FPS, "fps in", Math.round(rec.secs), "s,", mine.length, "moments");
  }
  b.close();
}
await Promise.all(Array.from({ length: Math.min(PAR, queue.length) }, (_, k) => worker(k)));
// the loops from before round three, named m001.mp4 ... (only after a whole run)
if (!WANT && !ONLY_STATEMENTS) readdirSync(HERE).filter(f => /^m\d{3}\.mp4$/.test(f)).forEach(f => unlinkSync(join(HERE, f)));
// until a section is recorded again, the full workshop keeps playing its loop from before round three
moments.forEach(m => { if (!existsSync(join(HERE, "..", m.file)) && existsSync(join(HERE, m.id + ".mp4"))) m.file = "blocks/" + m.id + ".mp4"; });
{
  // written whole and then moved into place, so a workshop (or another block's recording) never reads half a file
  const tmp = join(HERE, ".moments.js.part");
  writeFileSync(tmp, "// The block-by-block workshop's moments (entry 223), written by design/workshop/blocks/record.mjs. Don't edit by hand.\n" +
    "window.PALIT_BLOCKS = " + JSON.stringify({ made: new Date().toISOString(), total: S.total, fps: FPS, blocks: BLOCKS, moments }, null, 1) + ";\n");
  renameSync(tmp, join(HERE, "moments.js"));
}
await sleep(800);   // let Chrome close its profiles before the temp folder goes
try { rmSync(TMP, { recursive: true, force: true }); } catch (e) {}
console.log(moments.length, "moments,", Math.round(S.total), "seconds");
