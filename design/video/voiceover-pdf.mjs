// voiceover-pdf.mjs <base url>: prints the voiceover script (voiceover.html) to PDF, the whole script, Daeun's lines and Noah's, into
// design/video/footage/exports/, beside the silent guide (October 21, entry 273).
//   node design/video/voiceover-pdf.mjs http://localhost:8790
import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const BASE = (process.argv[2] || "http://localhost:8790").replace(/\/$/, "");
const HERE = dirname(fileURLToPath(import.meta.url)), OUTDIR = join(HERE, "footage", "exports");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = ms => new Promise(r => setTimeout(r, ms));
const now = new Date(), pad = n => String(n).padStart(2, "0"), day = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
const when = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
mkdirSync(OUTDIR, { recursive: true });
// Its own Chrome on a port of its own (the port it picks is in DevToolsActivePort)
const prof = mkdtempSync(join(tmpdir(), "palit-pdf-"));
const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--remote-debugging-port=0", "--user-data-dir=" + prof, "about:blank"], { stdio: "ignore" });
let port = 0; for (let i = 0; i < 150 && !port; i++) { await sleep(100); try { port = Number(readFileSync(join(prof, "DevToolsActivePort"), "utf8").split("\n")[0]) || 0; } catch (e) {} }
let targets = null; for (let i = 0; i < 80 && !targets; i++) { await sleep(150); try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch (e) {} }
const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl); await new Promise(r => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise(r => { const k = ++id; pending.set(k, r); ws.send(JSON.stringify({ id: k, method, params })); });
const ev = async e => { const r = await send("Runtime.evaluate", { expression: e, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
await send("Page.enable"); await send("Runtime.enable");
const foot = label => `<div style="font: 8px -apple-system, system-ui, sans-serif; color: #6b6b70; width: 100%; padding: 0 14mm; display: flex; justify-content: space-between;"><span>${label}, ${when}</span><span><span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;
for (const [q, name, label] of [["", "palit-voiceover-script", "Palit voiceover script"], ["?who=Daeun", "palit-voiceover-daeun", "Palit voiceover, Daeun's lines"], ["?who=Noah", "palit-voiceover-noah", "Palit voiceover, Noah's lines"]]) {
  await send("Page.navigate", { url: BASE + "/design/video/voiceover.html" + q + (q ? "&" : "?") + "x=" + Date.now() });
  for (let i = 0; i < 100; i++) { await sleep(100); if (await ev("document.readyState === 'complete' && !!window.PalitVoiceover")) break; }
  await sleep(300);
  const r = await send("Page.printToPDF", { printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: "<span></span>", footerTemplate: foot(label) });
  const file = join(OUTDIR, `${name}-${day}.pdf`); writeFileSync(file, Buffer.from(r.result.data, "base64"));
  console.log("wrote", file, await ev("JSON.stringify(PalitVoiceover.tally)"));
}
ws.close(); proc.kill(); await sleep(300); try { rmSync(prof, { recursive: true, force: true }); } catch (e) {}
