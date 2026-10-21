// A virtual clock for recording the player frame by frame (round three, Noah, m001: “I want the highest frame rate
// possible”; m003: “I want our recordings to be perfectly clear and the framerate they came in”). record.mjs injects this
// into every frame of the page before its own scripts run. Time then stands still until the recorder calls
// __VT.step(ms): timers fire in order, animation frames run, and every CSS transition, CSS animation and Web Animation is
// moved on by exactly that much. Each frame is captured whole, however long it takes to draw, so nothing stutters or drops.
// Videos can't follow a virtual clock; the player seeks them to the exact frame instead (its syncFilm, when __VT is set).
(function () {
  if (window.__VTon) return;
  window.__VTon = true;
  var top = window;
  try { if (window.top !== window && window.top.__VT) top = window.top; } catch (e) {}
  var W = window, VT = top.__VT;
  if (!VT) {
    var real = W.performance.now.bind(W.performance);
    VT = W.__VT = {
      frames: true, now: real(), now0: real(), date0: Date.now(), seq: 1, timers: [], rafs: [], wins: [],
      realTimeout: W.setTimeout.bind(W), realRAF: W.requestAnimationFrame.bind(W),
      // a real task, so the promises a timer settles run before the next timer fires
      yieldTask: function () { return new Promise(function (r) { var ch = new MessageChannel(); ch.port1.onmessage = function () { r(); }; ch.port2.postMessage(0); }); }
    };
  }
  VT.wins.push(W);
  function dead(w) { try { return w !== top && (!w.frameElement || !w.document); } catch (e) { return true; } }
  // ---- the clock itself
  try { Object.defineProperty(W.performance, "now", { value: function () { return VT.now; }, configurable: true }); } catch (e) {}
  var RealDate = W.Date;
  function VDate() {
    if (!new.target) return new RealDate(VT.date0 + VT.now - VT.now0).toString();
    var a = Array.prototype.slice.call(arguments);
    return Reflect.construct(RealDate, a.length ? a : [VT.date0 + VT.now - VT.now0], new.target);
  }
  VDate.prototype = RealDate.prototype;
  VDate.now = function () { return Math.floor(VT.date0 + VT.now - VT.now0); };
  VDate.parse = RealDate.parse; VDate.UTC = RealDate.UTC;
  W.Date = VDate;
  // ---- timers and animation frames
  function add(fn, ms, args, every) { var id = VT.seq++; VT.timers.push({ id: id, w: W, due: VT.now + Math.max(0, Number(ms) || 0), fn: fn, args: args, every: every }); return id; }
  W.setTimeout = function (fn, ms) { return add(fn, ms, Array.prototype.slice.call(arguments, 2), 0); };
  W.setInterval = function (fn, ms) { return add(fn, ms, Array.prototype.slice.call(arguments, 2), Math.max(1, Number(ms) || 0)); };
  W.clearTimeout = W.clearInterval = function (id) { for (var i = 0; i < VT.timers.length; i++) if (VT.timers[i].id === id) { VT.timers.splice(i, 1); return; } };
  W.requestAnimationFrame = function (cb) { var id = VT.seq++; VT.rafs.push({ id: id, w: W, cb: cb }); return id; };
  W.cancelAnimationFrame = function (id) { for (var i = 0; i < VT.rafs.length; i++) if (VT.rafs[i].id === id) { VT.rafs.splice(i, 1); return; } };
  // ---- CSS transitions and animations, and Web Animations: held from the moment they're made, and moved on by hand
  function hold(a) { try { if (a.__vt) return; a.__vt = 1; var st = a.playState; if (st === "finished" || st === "idle") return; a.pause(); a.currentTime = 0; } catch (e) {} }
  var animate = W.Element.prototype.animate;
  if (animate) W.Element.prototype.animate = function () { var a = animate.apply(this, arguments); hold(a); return a; };
  if (W !== top) return;
  function holdAll() { VT.wins = VT.wins.filter(function (w) { return !dead(w); }); VT.wins.forEach(function (w) { try { w.document.getAnimations().forEach(hold); } catch (e) {} }); }
  // CSS ones have no hook, so they're caught within a few milliseconds of real time, before they can move
  (function watch() { holdAll(); VT.realTimeout(watch, 6); })();
  function stepAnims(doc, dt) {
    var list, ended = 0; try { list = doc.getAnimations(); } catch (e) { return 0; }
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      try {
        var st = a.playState;
        if (st === "finished" || st === "idle") continue;
        if (!a.__vt) { hold(a); continue; }   // just made: its first frame shows now
        if (st === "running") a.pause();
        var t = (a.currentTime || 0) + dt * (a.playbackRate || 1), end = a.effect ? a.effect.getComputedTiming().endTime : 0;
        if (isFinite(end) && t >= end) { a.finish(); ended++; } else a.currentTime = t;
      } catch (e) {}
    }
    return ended;
  }
  VT.step = async function (dt) {
    var target = VT.now + dt;
    for (var guard = 0; guard < 20000; guard++) {
      var best = null;
      for (var i = 0; i < VT.timers.length; i++) { var tm = VT.timers[i]; if (tm.due <= target && (!best || tm.due < best.due || (tm.due === best.due && tm.id < best.id))) best = tm; }
      if (!best) break;
      if (best.due > VT.now) VT.now = best.due;
      if (best.every) best.due += best.every; else VT.timers.splice(VT.timers.indexOf(best), 1);
      if (dead(best.w)) { var k = VT.timers.indexOf(best); if (k >= 0) VT.timers.splice(k, 1); continue; }
      try { if (typeof best.fn === "function") best.fn.apply(best.w, best.args); else best.w.eval(String(best.fn)); } catch (e) { console.error(e); }
      await VT.yieldTask();
    }
    VT.now = target;
    var rafs = VT.rafs; VT.rafs = [];
    for (var j = 0; j < rafs.length; j++) { if (!dead(rafs[j].w)) { try { rafs[j].cb(target); } catch (e) { console.error(e); } } }
    await VT.yieldTask();
    VT.wins = VT.wins.filter(function (w) { return !dead(w); });
    var ended = 0;
    VT.wins.forEach(function (w) { ended += stepAnims(w.document, dt); });
    // an animation that ended sends its events (finish, transitionend) on the browser's next real frame: wait for it, so
    // whatever they set off (an element removed) is in this frame, as it would be live
    if (ended) { await new Promise(function (r) { VT.realRAF(function () { r(); }); }); await VT.yieldTask(); }
    return VT.now;
  };
})();
