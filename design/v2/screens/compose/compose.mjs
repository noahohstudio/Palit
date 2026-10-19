#!/usr/bin/env node
/* Builds the desks after crocoite and brownstone: real pages and photos in Safari and Preview windows over the Mac's
   iMac Silver wallpaper, drawn by compose.html in headless Chrome at 1440 by 900 points, 2x.

   desks.json holds one recipe per desk. Each window lists, front to back, where it sits (points), what it shows
   (a page capture or a photo in ../sources/, or a screenshot Noah drops in ../incoming/), and the source a pick on it
   names (app, place, title, url). The regions in screens.json are made from those windows, so they always match.

     node design/v2/screens/compose/compose.mjs capture [id ...]   captures the live pages a recipe names into ../sources/
     node design/v2/screens/compose/compose.mjs build [id ...]     draws desk-<id>.jpg, updates screens.json, runs build-screens.py

   build skips a desk whose images aren't there yet (the Pinterest and Cosmos screenshots) and says what it's waiting for.
   It never touches crocoite or brownstone, and keeps them first, so v3's playback and its numbering don't shift.
   It keeps any seeds already set on a desk in screens.json; new desks start with none. Needs macOS (sips, the wallpaper)
   and Google Chrome. */
import { launch, sleep } from "./cdp.mjs";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const SCREENS = resolve(HERE, "..");
const WALLPAPER = "/System/Library/Desktop Pictures/iMac Silver.heic";
const KEEP_FIRST = ["crocoite", "brownstone"];
const ICON = [1270, 12];
const BAR = { safari: 52.5, preview: 38.5 };
const FALLBACK = { app: "Desktop", place: "Desktop", title: "iMac Silver wallpaper" };
const MENU_BAR = { x: 0, y: 0, w: 1440, h: 24, app: "Menu bar", place: "the menu bar", title: "The menu bar" };

const [cmd = "build", ...only] = process.argv.slice(2);
const recipes = JSON.parse(readFileSync(join(HERE, "desks.json"), "utf8")).filter(r => !only.length || only.includes(r.id));
if (!recipes.length) { console.error("No desk in desks.json matches " + only.join(", ")); process.exit(1); }
const tmp = join(tmpdir(), "palit-desks"); mkdirSync(tmp, { recursive: true });

// An image path from a recipe, relative to this folder. "name.*" finds name.png, name.jpg or name.jpeg.
function find(src) {
  const p = resolve(HERE, src);
  if (!p.endsWith(".*")) return existsSync(p) ? p : null;
  for (const ext of ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"]) { const q = p.slice(0, -1) + ext; if (existsSync(q)) return q; }
  return null;
}

async function capture() {
  const page = await launch({ profile: join(tmp, "profile") });
  try {
    for (const r of recipes) for (const w of r.windows) {
      if (!w.capture) continue;
      const c = w.capture, out = resolve(HERE, w.image.src), vw = w.w, vh = Math.round(w.h - BAR[w.kind]);
      await page.size(vw, vh, 2);
      await page.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: c.scheme || "light" }] });
      await page.go(c.url, c.settle || 5000);
      if (c.hide) await page.eval(`(() => { const s = document.createElement("style"); s.textContent = ${JSON.stringify(c.hide.join(",") + "{ display: none !important; }")}; document.head.appendChild(s); return 1; })()`);
      await page.eval(`window.scrollTo(0, ${c.scroll || 0})`); await sleep(c.after || 2500);
      const shot = await page.send("Page.captureScreenshot", { format: "jpeg", quality: 92 });
      mkdirSync(dirname(out), { recursive: true }); writeFileSync(out, Buffer.from(shot.data, "base64"));
      console.log(`${r.id}: captured ${c.url} at ${vw} by ${vh}, scrolled ${c.scroll || 0} → ${out.slice(SCREENS.length + 1)}`);
    }
  } finally { await page.close(); }
}

// The wallpaper as macOS fills a 1440 by 900 screen: scaled to cover, centered (matches desk-crocoite.jpg)
function wallpaper() {
  const out = join(tmp, "wallpaper-2880.png");
  if (!existsSync(out)) execFileSync("sips", ["-s", "format", "png", "-z", "2880", "2880", WALLPAPER, "--out", out], { stdio: "ignore" });
  const crop = join(tmp, "wallpaper-cover.png");
  if (!existsSync(crop)) execFileSync("sips", ["-c", "1800", "2880", out, "--out", crop], { stdio: "ignore" });
  return pathToFileURL(crop).href;
}

// screens.json in its own compact style: one line per region, seed and spot
function inline(v) {
  if (Array.isArray(v)) return "[" + v.map(inline).join(", ") + "]";
  if (v && typeof v === "object") return "{ " + Object.keys(v).map(k => JSON.stringify(k) + ": " + inline(v[k])).join(", ") + " }";
  return JSON.stringify(v);
}
function formatScreens(list) {
  return "[\n" + list.map(e => {
    const lines = [], keys = Object.keys(e);
    lines.push("    " + ["id", "label", "file"].filter(k => k in e).map(k => JSON.stringify(k) + ": " + inline(e[k])).join(", "));
    for (const k of keys) {
      if (["id", "label", "file"].includes(k)) continue;
      const v = e[k];
      if (Array.isArray(v) && v.length && typeof v[0] === "object") lines.push("    " + JSON.stringify(k) + ": [\n" + v.map(x => "      " + inline(x)).join(",\n") + "\n    ]");
      else lines.push("    " + JSON.stringify(k) + ": " + inline(v));
    }
    return "  {\n" + lines.join(",\n") + "\n  }";
  }).join(",\n") + "\n]\n";
}

function entryFor(r, old) {
  const regions = r.windows.map(w => Object.assign({ x: w.x, y: w.y, w: w.w, h: w.h }, w.source)).concat([MENU_BAR]);
  const e = { id: r.id, label: r.label, file: "desk-" + r.id + ".jpg", icon: ICON, regions, fallback: FALLBACK, seeds: old && old.seeds ? old.seeds : [] };
  if (r.spots) e.spots = r.spots;
  e.credit = r.credit;
  return e;
}

async function build() {
  const path = join(SCREENS, "screens.json"), list = JSON.parse(readFileSync(path, "utf8"));
  const check = formatScreens(list); if (check !== readFileSync(path, "utf8")) console.log("(screens.json gets reformatted in its compact style)");
  const page = await launch({ profile: join(tmp, "profile") }), wall = wallpaper();
  let built = 0;
  try {
    await page.size(1440, 900, 2);
    for (const r of recipes) {
      if (KEEP_FIRST.includes(r.id)) { console.log(r.id + ": left as it is"); continue; }
      const missing = r.windows.filter(w => !find(w.image.src)).map(w => w.image.src.replace(/^\.\.\//, ""));
      if (missing.length) { console.log(`${r.id}: waiting for ${missing.join(", ")}`); continue; }
      const recipe = JSON.parse(JSON.stringify(r));
      recipe.windows.forEach(w => { w.image.src = pathToFileURL(find(w.image.src)).href; });
      await page.go(pathToFileURL(join(HERE, "compose.html")).href, 200);
      await page.eval(`drawDesk(${JSON.stringify(recipe)}, ${JSON.stringify(wall)})`);
      await sleep(400);
      const shot = await page.send("Page.captureScreenshot", { format: "jpeg", quality: 88 });
      writeFileSync(join(SCREENS, "desk-" + r.id + ".jpg"), Buffer.from(shot.data, "base64"));
      const i = list.findIndex(e => e.id === r.id), e = entryFor(r, list[i]);
      if (i >= 0) list[i] = e; else list.push(e);
      built++; console.log(`${r.id}: desk-${r.id}.jpg`);
    }
  } finally { await page.close(); }
  // crocoite and brownstone stay first, then the desks in desks.json's order, then anything else
  const order = KEEP_FIRST.concat(JSON.parse(readFileSync(join(HERE, "desks.json"), "utf8")).map(r => r.id));
  list.sort((a, b) => (order.indexOf(a.id) + 1 || 999) - (order.indexOf(b.id) + 1 || 999));
  writeFileSync(path, formatScreens(list));
  if (built) console.log(execFileSync("python3", [join(SCREENS, "build-screens.py")]).toString().trim());
}

if (cmd === "capture") await capture();
else if (cmd === "build") await build();
else { console.error("Usage: compose.mjs capture|build [id ...]"); process.exit(1); }
