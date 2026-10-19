// A small Chrome DevTools Protocol driver: headless Chrome, one page, no puppeteer.
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
export const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
export const sleep = ms => new Promise(r => setTimeout(r, ms));
export async function launch({ port = 9400 + Math.floor(Math.random() * 300), profile, ua } = {}) {
  mkdirSync(profile, { recursive: true });
  const args = ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--allow-file-access-from-files", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check", "--window-size=1440,900", "--lang=en-US", "about:blank"];
  const proc = spawn(CHROME, args, { stdio: "ignore" });
  let ver = null;
  for (let i = 0; i < 60 && !ver; i++) { try { ver = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); } catch (e) { await sleep(200); } }
  if (!ver) { proc.kill(); throw new Error("Chrome did not start"); }
  const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const target = list.find(t => t.type === "page");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map(); const waiters = []; const logs = [];
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result); }
    else if (m.method) {
      if (m.method === "Runtime.exceptionThrown") logs.push("EXC " + JSON.stringify(m.params.exceptionDetails).slice(0, 400));
      if (m.method === "Runtime.consoleAPICalled") logs.push(m.params.type + " " + m.params.args.map(a => a.value ?? a.description ?? "").join(" ").slice(0, 300));
      for (const w of waiters.slice()) if (w.method === m.method) { waiters.splice(waiters.indexOf(w), 1); w.res(m.params); }
    }
  };
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const once = (method, ms = 30000) => new Promise(res => { const w = { method, res }; waiters.push(w); setTimeout(() => { const k = waiters.indexOf(w); if (k >= 0) { waiters.splice(k, 1); res(null); } }, ms); });
  await send("Page.enable"); await send("Runtime.enable");
  if (ua) await send("Network.setUserAgentOverride", { userAgent: ua });
  const page = {
    send, logs,
    async size(width, height, scale = 2) { await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: scale, mobile: false }); },
    async go(url, settle = 2500) { const l = once("Page.loadEventFired", 45000); await send("Page.navigate", { url }); await l; await sleep(settle); },
    async eval(expr) { const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails).slice(0, 500)); return r.result.value; },
    async shot(file, clip) {
      const p = { format: "png", captureBeyondViewport: false }; if (clip) p.clip = Object.assign({ scale: 1 }, clip);
      const r = await send("Page.captureScreenshot", p);
      const fs = await import("node:fs"); fs.writeFileSync(file, Buffer.from(r.data, "base64"));
    },
    async close() { try { ws.close(); } catch (e) {} proc.kill(); await sleep(300); }
  };
  return page;
}
