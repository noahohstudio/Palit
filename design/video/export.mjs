// The whole cut as one film (October 21, Noah: “all rebuilds are in - lets put them together”). Records every section of the
// player frame by frame at 1920 by 1080 and 60 frames a second, on the workshop's virtual clock (design/workshop/blocks/
// vclock.js, so nothing stutters or drops), joins the sections with no gap and no overlap, and mixes the sound the way the
// player plays it: the house and calm tracks in their runs, rising and fading as the player's do, dipping under every line,
// and the intro's and outro's own voice takes. Writes design/video/footage/exports/palit-cut-<date>-<time>.mp4, off the
// public site like the footage and the music.
//
// Usage: node design/video/export.mjs http://localhost:8790 [options]
//   --subs              show the subtitle bar (off by default: Noah's player has it off, and the subtitles get redone in
//                       our colors once the voice recordings are in)
//   --music-level 0.35  the house track's level (Noah's player setting, October 21); --calm-level, --lift-level and
//                       --after-level set the other tracks', which otherwise play at their levels in script.js
//   --only a,b,c        only these sections, one after another (for a quick check)
//   --par 4             sections recorded at once
//   --guide             the voiceover guide instead (October 21): silent, with the player's prompter (the line being said,
//                       who says it and its file name, the next one counting down, the film's time): the film at 720p
//                       with the lines under it, 1280 by 920, at 30 frames a second
// Needs headless Chrome and ffmpeg. The whole cut takes about 15 to 20 minutes.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const args = process.argv.slice(2);
const opt = (name, d) => { const i = args.indexOf("--" + name); return i >= 0 ? args[i + 1] : d; };
const BASE = (args.find(a => /^https?:\/\//.test(a)) || "http://localhost:8790").replace(/\/$/, "");
const GUIDE = args.includes("--guide"), SUBS = args.includes("--subs"), FPS = GUIDE ? 30 : 60, W = GUIDE ? 1280 : 1920, H = GUIDE ? 920 : 1080, PAR = Number(opt("par", 4));
const LEVEL = { music: Number(opt("music-level", 0.35)), calm: opt("calm-level", null), lift: opt("lift-level", null), after: opt("after-level", null) };
const ONLY = opt("only", "") ? opt("only", "").split(",") : null;
const VCLOCK = readFileSync(join(HERE, "..", "workshop", "blocks", "vclock.js"), "utf8");
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TMP = mkdtempSync(join(tmpdir(), "palit-export-"));
const OUTDIR = join(HERE, "footage", "exports");
mkdirSync(OUTDIR, { recursive: true });
const now = new Date(), pad = n => String(n).padStart(2, "0");
const OUT = join(OUTDIR, `palit-${GUIDE ? "voiceover-guide" : "cut"}-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${ONLY ? "-part" : ""}.mp4`);

// ---- the script, as the player reads it (Noah's script edits are folded into script.js)
globalThis.window = globalThis; globalThis.localStorage = { getItem: () => null };
createRequire(import.meta.url)(join(HERE, "script.js"));
const S = globalThis.PALIT_SCRIPT;
const secs = S.sections.filter(x => !x.cut);
const openAt = x => x.statement ? x.statementAt : x.start;
const F = t => Math.round(t * FPS);
// Each section's frames, end to end: from where it opens (its statement) to where the next one opens
let spans = secs.map((x, i) => ({ x, a: F(openAt(x)), b: i + 1 < secs.length ? F(openAt(secs[i + 1])) : F(S.total) })).filter(s => s.b > s.a);
if (ONLY) spans = spans.filter(s => ONLY.includes(s.x.id));
const T0 = spans[0].a / FPS, T1 = spans[spans.length - 1].b / FPS;

// ---- the picture
async function browser(name) {
  const prof = join(TMP, "profile-" + name);
  mkdirSync(prof, { recursive: true });
  const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", "--autoplay-policy=no-user-gesture-required", "--remote-debugging-port=0", "--window-size=" + W + "," + H, "--user-data-dir=" + prof, "about:blank"], { stdio: "ignore" });
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
  await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  await send("Page.addScriptToEvaluateOnNewDocument", { source: VCLOCK });
  // The player's own settings for this film, in this headless browser only: the subtitle bar on or off
  await send("Page.addScriptToEvaluateOnNewDocument", { source: `(function () { try { if (/\\/player\\.html$/.test(location.pathname)) { var k = JSON.parse(localStorage.getItem("palit-video-kit") || "{}"); k.showSubs = ${SUBS}; localStorage.setItem("palit-video-kit", JSON.stringify(k)); } } catch (e) {} })();` });
  return { send, evaluate, close: () => { try { ws.close(); } catch (e) {} proc.kill(); } };
}
const STEP = `(async () => { await __VT.step(${1000 / FPS}); for (let i = 0; i < 500 && !PalitPlayer.ready(); i++) await new Promise(r => __VT.realTimeout(r, 20)); return PalitPlayer.ready() ? PalitPlayer.time() : -PalitPlayer.time() - 1; })()`;
const READY = `(async () => { for (let i = 0; i < 1500 && !(window.PalitPlayer && PalitPlayer.ready()); i++) await new Promise(r => __VT.realTimeout(r, 20)); return !!(window.PalitPlayer && PalitPlayer.ready()); })()`;
async function recordSpan(b, s, file) {
  const x = s.x, n = s.b - s.a;
  await b.send("Page.navigate", { url: BASE + "/design/video/player.html?clean&music=0" + (GUIDE ? "&prompter" : "") + "&x=" + Date.now() + "#" + x.id });
  for (let i = 0; i < 200; i++) { await sleep(100); if (await b.evaluate("!!window.PalitPlayer && !!window.__VT && document.readyState === 'complete'")) break; }
  if (!(await b.evaluate(READY))) console.log("still loading in", x.id, "after 30 seconds; recording anyway");
  await b.evaluate(STEP);   // one still step, so the player's frame loop is running
  const t0 = await b.evaluate("(PalitPlayer.play(), PalitPlayer.time())");
  if (Math.abs(t0 * FPS - s.a) > 0.51) console.log("note:", x.id, "opens at", t0, "for frame", s.a);
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-preset", "medium", "-crf", GUIDE ? "21" : "15", "-pix_fmt", "yuv420p", "-r", String(FPS), file], { stdio: ["pipe", "ignore", "inherit"] });
  const done = new Promise(r => ff.on("close", r));
  const began = Date.now();
  let stuck = 0;
  for (let k = 0; k < n; k++) {
    const shot = await b.send("Page.captureScreenshot", { format: "jpeg", quality: 95, optimizeForSpeed: true });
    if (!ff.stdin.write(Buffer.from(shot.result.data, "base64"))) await new Promise(r => ff.stdin.once("drain", r));
    const t = await b.evaluate(STEP);
    if (typeof t === "number" && t < 0 && !stuck++) console.log("in", x.id, "at", (-t - 1).toFixed(2), "s something on screen never finished loading; recording on");
  }
  ff.stdin.end(); await done;
  console.log("recorded", x.id + ":", n, "frames in", Math.round((Date.now() - began) / 1000), "s");
}
async function picture() {
  const queue = spans.map((s, i) => Object.assign({ file: join(TMP, "seg-" + String(i).padStart(3, "0") + ".mp4") }, s)).sort((p, q) => (q.b - q.a) - (p.b - p.a));
  const files = queue.slice().sort((p, q) => p.a - q.a).map(s => s.file);
  async function worker(k) { const b = await browser("w" + k); while (queue.length) { const s = queue.shift(); await recordSpan(b, s, s.file); } b.close(); }
  await Promise.all(Array.from({ length: Math.min(PAR, queue.length) }, (_, k) => worker(k)));
  writeFileSync(join(TMP, "list.txt"), files.map(f => "file '" + f + "'").join("\n") + "\n");
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", join(TMP, "list.txt"), "-c", "copy", join(TMP, "picture.mp4")]);
}

// ---- the sound, the way the player plays it (player.html: gate, under, loopPos, loopFade, layerVolume)
const clamp = v => Math.max(0, Math.min(1, v));
const cues = [];
S.sections.forEach(x => (x.lines || []).forEach(l => {
  const text = (l.text || "").trim();
  if (!text || /^\[/.test(text) || typeof l.start !== "number") return;
  cues.push({ start: x.start + l.start, end: x.start + l.end });
}));
function under(t) { let d = 0; cues.forEach(k => { if (t >= k.start - 0.25 && t <= k.end) d = Math.max(d, clamp((t - (k.start - 0.25)) / 0.25)); else if (t > k.end && t < k.end + 0.6) d = Math.max(d, clamp(1 - (t - k.end) / 0.6)); }); return d; }
const duration = f => Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString().trim());
function layer(key, attack, release) {
  const cfg = S[key]; if (!cfg || !cfg.src) return null;
  const file = join(HERE, cfg.src); if (!existsSync(file)) { console.log("no", key, "track at", file); return null; }
  const dur = duration(file) || cfg.length, lf = cfg.loopFrom || 0, lt = Math.min(dur, cfg.loopTo || dur);
  return { key, cfg, file, dur, lf, lt, attack, release, level: LEVEL[key] !== null && LEVEL[key] !== undefined ? Number(LEVEL[key]) : cfg.level, duck: cfg.duck !== undefined ? cfg.duck : 0.3, windows: globalThis.palitMusicWindows(S, {}, key) };
}
const LAYERS = [layer("music", 0.4, 1.5), layer("calm", 1.5, 2), layer("lift", 0.8, 1.5), layer("after", 1.5, 2)].filter(Boolean);
function gate(L, t) { let g = 0; L.windows.forEach(w => { if (t >= w[0] && t <= w[1]) g = Math.max(g, Math.min(clamp((t - w[0]) / L.attack), w[3] ? clamp((w[1] - t) / w[3]) : 1)); else if (t > w[1]) g = Math.max(g, clamp(1 - (t - w[1]) / L.release)); }); return g; }
function runAt(L, t) { for (const w of L.windows) if (t >= w[0] && t <= w[1] + L.release) return w; return null; }
function loopFade(L, t) { const w = runAt(L, t); if (!L.cfg.loop || !w) return 1; const want = (w[2] || 0) + (t - w[0]); return want < L.lt ? 1 : clamp(((want - L.lt) % Math.max(1, L.lt - L.lf)) / 1.2); }
function volume(L, t) { return clamp(L.level * gate(L, t) * loopFade(L, t) * (1 - (1 - L.duck) * under(t))); }
// Where the track sounds: pieces of it laid on the video's clock, split where a looping track comes round again
function pieces(L) {
  const out = [];
  L.windows.forEach(w => {
    const end = Math.min(w[1] + L.release, S.total);
    let t = w[0], pos = w[2] || 0;
    while (t < end - 1e-6) {
      const stop = L.cfg.loop ? L.lt : L.dur;
      if (stop - pos <= 1e-6) { if (!L.cfg.loop) break; pos = L.lf; continue; }
      const d = Math.min(stop - pos, end - t);
      out.push({ at: t, from: pos, to: pos + d });
      t += d; pos += d;
    }
  });
  return out;
}
function envelopeWav(L, file) {   // the layer's volume, 1000 times a second, as a mono WAV
  const rate = 1000, n = Math.ceil(S.total * rate) + 1, data = Buffer.alloc(n * 2);
  for (let i = 0; i < n; i++) data.writeInt16LE(Math.round(volume(L, i / rate) * 32767), i * 2);
  const h = Buffer.alloc(44);
  h.write("RIFF", 0); h.writeUInt32LE(36 + data.length, 4); h.write("WAVE", 8); h.write("fmt ", 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24); h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write("data", 36); h.writeUInt32LE(data.length, 40);
  writeFileSync(file, Buffer.concat([h, data]));
}
const hasAudio = f => execFileSync("ffprobe", ["-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "csv=p=0", f]).toString().trim() !== "";
function sound() {
  const inputs = [], graph = [], mixes = [], AF = "aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo";
  LAYERS.forEach(L => {
    const ps = pieces(L); if (!ps.length) return;
    const env = join(TMP, "env-" + L.key + ".wav"); envelopeWav(L, env);
    const ti = inputs.push(L.file) - 1, ei = inputs.push(env) - 1;
    graph.push(`[${ti}:a]${AF},asplit=${ps.length}` + ps.map((_, i) => `[${L.key}s${i}]`).join(""));
    ps.forEach((p, i) => graph.push(`[${L.key}s${i}]atrim=start=${p.from.toFixed(4)}:end=${p.to.toFixed(4)},asetpts=PTS-STARTPTS,adelay=${Math.round(p.at * 1000)}:all=1[${L.key}p${i}]`));
    graph.push(ps.map((_, i) => `[${L.key}p${i}]`).join("") + `amix=inputs=${ps.length}:normalize=0:duration=longest,apad=whole_dur=${S.total.toFixed(3)},atrim=end=${S.total.toFixed(3)}[${L.key}raw]`);
    graph.push(`[${ei}:a]aresample=48000,pan=stereo|c0=c0|c1=c0,aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo,apad=whole_dur=${S.total.toFixed(3)},atrim=end=${S.total.toFixed(3)}[${L.key}env]`);
    graph.push(`[${L.key}raw][${L.key}env]amultiply[${L.key}]`);
    mixes.push(`[${L.key}]`);
    console.log(L.key + ":", ps.map(p => `${p.from.toFixed(2)}-${p.to.toFixed(2)} at ${p.at.toFixed(2)}`).join(", "), "level", L.level, "duck", L.duck);
  });
  // The filmed voice takes, heard while their sections play, and a voice's tail runs on past its cut (the intro's “Palit”)
  secs.filter(x => x.footage && x.footage.src).forEach(x => {
    const f = join(HERE, x.footage.src); if (!existsSync(f) || !hasAudio(f)) return;
    const from = x.footage.from || 0, len = x.seconds + (x.footage.tail || 0), i = inputs.push(f) - 1, k = "f" + i;
    graph.push(`[${i}:a]${AF},atrim=start=${from.toFixed(4)}:end=${(from + len).toFixed(4)},asetpts=PTS-STARTPTS,adelay=${Math.round(x.start * 1000)}:all=1[${k}]`);
    mixes.push(`[${k}]`);
    console.log("voice:", x.id, "at", x.start.toFixed(2), "for", len.toFixed(2), "s");
  });
  graph.push(mixes.join("") + `amix=inputs=${mixes.length}:normalize=0:duration=longest,atrim=start=${T0.toFixed(4)}:end=${T1.toFixed(4)},asetpts=PTS-STARTPTS,alimiter=limit=0.97:level=false[mix]`);
  execFileSync("ffmpeg", ["-y", "-loglevel", "error"].concat(...inputs.map(f => ["-i", f])).concat(["-filter_complex", graph.join(";"), "-map", "[mix]", "-c:a", "pcm_s16le", "-ar", "48000", join(TMP, "sound.wav")]));
}

// ---- together
const began = Date.now();
console.log("exporting", spans.length, "sections,", ((T1 - T0)).toFixed(1), "s, at", W + "x" + H, FPS, "fps;", GUIDE ? "the voiceover guide, silent" : "subtitles " + (SUBS ? "on" : "off"));
if (!GUIDE) sound();
await picture();
if (GUIDE) execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", join(TMP, "picture.mp4"), "-c:v", "copy", "-an", "-movflags", "+faststart", OUT]);
else execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", join(TMP, "picture.mp4"), "-i", join(TMP, "sound.wav"), "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", OUT]);
// The dashboard's screening (its Video page, entry 267) plays the newest whole film
if (!ONLY && !GUIDE) {
  const size = Number(execFileSync("stat", ["-f", "%z", OUT]).toString().trim()) || 0, made = new Date();
  const rec = { file: "../video/footage/exports/" + OUT.split("/").pop(), made: made.getFullYear() + "-" + pad(made.getMonth() + 1) + "-" + pad(made.getDate()) + "T" + pad(made.getHours()) + ":" + pad(made.getMinutes()) + ":00", seconds: Math.round(S.total * 100) / 100, frames: F(S.total), fps: FPS, width: W, height: H, size, subtitles: SUBS, levels: { house: LEVEL.music, calm: LEVEL.calm }, entry: 266 };
  writeFileSync(join(HERE, "..", "history", "data", "screening.js"), "// The whole cut as one film, for the Video page's screening (entry 266). Written by design/video/export.mjs each time it\n// makes the film; the film itself stays off the public site with the footage, so it only plays on the local dashboard.\nwindow.PALIT = window.PALIT || {};\nwindow.PALIT.screening = " + JSON.stringify(rec, null, 2) + ";\n");
}
await sleep(800);
try { rmSync(TMP, { recursive: true, force: true }); } catch (e) {}
console.log("wrote", OUT, "in", Math.round((Date.now() - began) / 1000), "s");
