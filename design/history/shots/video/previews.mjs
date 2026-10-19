// Records a short moving preview for every still on the dashboard's Video page (entry 214). Each preview is about three
// seconds leading into its still's moment, as an MP4 that plays while you point at the still. Charts and reels are drawn
// frame by frame from viz.html (PalitViz.render, so their timing is exact). The animated desktop is filmed in real time
// from v3's own playback with Chrome's screencast, lined up with the playback's clock (PalitV3.clock).
// It reads the stills from design/history/data/clips.js (run capture.py first), writes <clip>-<n>.mp4 next to each still,
// and adds each preview's path to clips.js.
// Usage: node design/history/shots/video/previews.mjs http://localhost:8790   (needs headless Chrome and ffmpeg)
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, "..", "..", "data", "clips.js");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, "");
const FPS = 12, SECONDS = 3, LEAD = 2.4;   // a preview runs from 2.4 seconds before its still to 0.6 seconds after
// Where each of v3's stills sits in its playback, in seconds of the playback's clock: the demo (?play) or deep dive 2 (?play=users)
const DESK = {
  picking: ["demo", 6.4], landed: ["demo", 13.2], days: ["demo", 27.4], spectrum: ["demo", 42.6], card: ["demo", 49.8], desk: ["demo", 70.5],
  first: ["users", 14.4], naming: ["users", 35], longtime: ["users", 63]
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TMP = mkdtempSync(join(tmpdir(), "palit-previews-"));

async function browser(w, h, name) {
  const port = 9500 + Math.floor(Math.random() * 400);
  const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", "--autoplay-policy=no-user-gesture-required", "--remote-debugging-port=" + port, "--window-size=" + w + "," + h, "--user-data-dir=" + join(TMP, "profile-" + name), "about:blank"], { stdio: "ignore" });
  let targets = null;
  for (let i = 0; i < 80 && !targets; i++) { await sleep(150); try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch (e) {} }
  const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener("open", r));
  let id = 0; const pending = new Map(), listeners = [];
  ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method) listeners.forEach(f => f(m)); });
  const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
  const evaluate = async expr => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.result ? r.result.result.value : undefined; };
  await send("Page.enable"); await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: false });
  return { send, evaluate, on: f => listeners.push(f), close: () => { try { ws.close(); } catch (e) {} proc.kill(); } };
}
async function load(b, url, wait) {
  await b.send("Page.navigate", { url });
  for (let i = 0; i < 100; i++) { await sleep(100); if (await b.evaluate("document.readyState") === "complete") break; }
  await b.evaluate("Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))");
  await sleep(wait || 300);
}
function encode(dir, out, vf) {
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(dir, "f%03d.jpg"), "-vf", vf, "-c:v", "libx264", "-preset", "slow", "-crf", "30", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", out]);
}

// Charts and reels: each frame is the chart drawn at that moment
async function charts(jobs, name) {
  const b = await browser(960, 540, name);
  for (const j of jobs) {
    const u = new URL(BASE + "/design/" + j.href), t = Number(u.searchParams.get("t") || 0);
    u.searchParams.delete("t"); u.searchParams.delete("play"); u.searchParams.set("x", String(Date.now()));
    await load(b, u.toString(), 500);
    const dir = join(TMP, j.key); mkdirSync(dir, { recursive: true });
    const t0 = Math.max(0, t - LEAD);
    for (let f = 0; f < FPS * SECONDS; f++) {
      await b.evaluate("window.PalitViz && PalitViz.render(" + (t0 + f / FPS).toFixed(3) + ")");
      const shot = await b.send("Page.captureScreenshot", { format: "jpeg", quality: 85 });
      writeFileSync(join(dir, "f" + String(f).padStart(3, "0") + ".jpg"), Buffer.from(shot.result.data, "base64"));
    }
    encode(dir, j.out, "scale=640:360:flags=lanczos");
    console.log("chart", j.key, t0.toFixed(1) + "s to " + (t0 + SECONDS).toFixed(1) + "s");
  }
  b.close();
}

// The animated desktop: v3 plays in real time and the screencast films it; each preview takes the frames from its window
async function desktop(mode, jobs) {
  const b = await browser(1440, 900, "v3-" + mode), frames = [];
  let n = 0;
  b.on(m => {
    if (m.method !== "Page.screencastFrame") return;
    const p = m.params, file = join(TMP, mode + "-" + String(n++).padStart(5, "0") + ".jpg");
    writeFileSync(file, Buffer.from(p.data, "base64"));
    frames.push({ at: p.metadata.timestamp * 1000, file });
    b.send("Page.screencastFrameAck", { sessionId: p.sessionId });
  });
  await load(b, BASE + "/design/v3/index.html?clean&keys=0&wait" + (mode === "users" ? "&play=users" : "&play") + "&x=" + Date.now(), 1500);
  await b.send("Page.startScreencast", { format: "jpeg", quality: 85, maxWidth: 1440, maxHeight: 900, everyNthFrame: 1 });
  await b.evaluate("PalitV3.play()");
  let clock = null;
  for (let i = 0; i < 200 && !clock; i++) { await sleep(50); clock = await b.evaluate("PalitV3.clock()"); }
  const until = Math.max(...jobs.map(j => j.from + SECONDS)) + 0.5;
  while ((Date.now() - clock) / 1000 < until) await sleep(250);
  await b.send("Page.stopScreencast");
  b.close();
  for (const j of jobs) {
    const dir = join(TMP, j.key); mkdirSync(dir, { recursive: true });
    for (let f = 0; f < FPS * SECONDS; f++) {
      const want = clock + (j.from + f / FPS) * 1000;
      let pick = frames[0];
      for (const fr of frames) { if (fr.at <= want) pick = fr; else break; }   // the screen as it last painted
      writeFileSync(join(dir, "f" + String(f).padStart(3, "0") + ".jpg"), readFileSync(pick.file));
    }
    encode(dir, j.out, "scale=576:360:flags=lanczos,pad=640:360:32:0:color=0x1c1c1e");   // the desk on the player's dark frame, like the stills
    console.log("desktop", mode, j.key, j.from.toFixed(1) + "s to " + (j.from + SECONDS).toFixed(1) + "s, " + frames.length + " frames filmed");
  }
}

const src = readFileSync(DATA, "utf8"), CL = JSON.parse(src.match(/window\.PALIT\.clips = (\{[\s\S]*\});/)[1]);
const chartJobs = [], deskJobs = { demo: [], users: [] };
Object.entries(CL.shots).forEach(([clip, shots]) => shots.forEach((s, i) => {
  const key = clip + "-" + (i + 1), out = join(HERE, key + ".mp4");
  if (s.href.startsWith("video/viz.html")) chartJobs.push({ key, href: s.href, out });
  else if (s.href.startsWith("v3/")) {
    const scene = new URL(BASE + "/design/" + s.href).searchParams.get("scene"), d = DESK[scene];
    if (d) deskJobs[d[0]].push({ key, out, from: Math.max(0, d[1] - LEAD) });
  }
}));
const thirds = [0, 1, 2].map(k => chartJobs.filter((_, i) => i % 3 === k));
await Promise.all([...thirds.map((jobs, k) => charts(jobs, "viz" + k)), desktop("demo", deskJobs.demo), desktop("users", deskJobs.users)]);

// Every still that has a preview gets its path in clips.js
Object.entries(CL.shots).forEach(([clip, shots]) => shots.forEach((s, i) => {
  const f = clip + "-" + (i + 1) + ".mp4";
  if (existsSync(join(HERE, f))) s.preview = "shots/video/" + f; else delete s.preview;
}));
writeFileSync(DATA, src.replace(/window\.PALIT\.clips = \{[\s\S]*\};/, () => "window.PALIT.clips = " + JSON.stringify(CL, null, 1) + ";"));
rmSync(TMP, { recursive: true, force: true });
console.log("previews:", Object.values(CL.shots).flat().filter(s => s.preview).length, "of", Object.values(CL.shots).flat().length);
