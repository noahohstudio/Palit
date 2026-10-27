// The front page and its lock (entries 294 and 295). Friends see the preview: the end splash, one line, the prototype and
// the film in silent snippets. The rest of the dashboard opens only with the password, every time the page opens: nothing
// is remembered. On the public site the rest is encrypted, and the password is its key, so without it there is nothing to
// read and no address to follow.
(function () {
  "use strict";
  var P = window.PALIT || {}, G = window.PALIT_GATE || {};

  function el(tag, attrs, kids) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "text") node.textContent = v;
      else if (k === "class") node.className = v;
      else node.setAttribute(k, v);
    });
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function openLink(label, href, cls) { return el("a", { href: href, text: label, class: cls || null, target: "_blank", rel: "noopener" }); }

  /* ---------- The preview ---------- */

  /* The end splash once, one line, the prototype, and the film in silent snippets with its own subtitles. Each snippet
     plays while it's in view and loops; a click holds it. */
  var io = null, raf = 0;
  function renderPreview(view) {
    var PV = P.preview;
    if (!PV) return;
    var reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    function mm(s) { s = Math.round(s); return Math.floor(s / 60) + ":" + pad(s % 60); }
    function go(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    var box = el("div", { class: "pr" });

    // The end splash plays once on the way in and rests on the mark. A click plays it again
    var open = el("video", { class: "pr-open", src: "preview/opener.mp4", poster: "preview/opener.jpg", playsinline: "", preload: "auto", role: "img", "aria-label": "Palit" });
    open.muted = true;
    if (!reduce) { open.autoplay = true; open.addEventListener("click", function () { open.currentTime = 0; go(open); }); }
    box.appendChild(open);
    box.appendChild(el("div", { class: "pr-hero" }, [
      el("h1", { text: PV.line }),
      el("div", { class: "pr-try" }, [openLink("Try the prototype", "../v3/index.html", "btn primary"), openLink("Watch it play", "../v3/index.html?play")])
    ]));

    box.appendChild(el("div", { class: "pr-head" }, [el("h2", { text: "The film, in snippets" }), el("p", { text: "Silent, with subtitles. The line under each one is the whole " + mm(PV.seconds) + " film." })]));
    var films = [], list = el("ol", { class: "pr-list" });
    PV.snippets.forEach(function (s) {
      var v = el("video", { src: "preview/" + s.id + ".mp4", poster: "preview/" + s.id + ".jpg", playsinline: "", loop: "", preload: "none", "aria-hidden": "true" });
      v.muted = true;
      var b = el("button", { type: "button", class: "pr-film" + (reduce ? " held" : ""), "aria-label": "Play " + s.title }, [v, el("span", { class: "pr-state", text: reduce ? "Play" : "Paused" })]);
      var fill = el("i"), f = { v: v, b: b, fill: fill, held: reduce };
      function show() {
        b.classList.toggle("held", f.held);
        b.setAttribute("aria-label", (v.paused ? "Play " : "Pause ") + s.title);
        if (v.duration) fill.style.width = (v.currentTime / v.duration * 100) + "%";
      }
      b.addEventListener("click", function () {
        if (v.paused) { f.held = false; go(v); tick(); } else { f.held = true; v.pause(); }
        show();
      });
      v.addEventListener("play", show);
      v.addEventListener("pause", show);
      b._f = f; f.play = function () { go(v); tick(); };
      films.push(f);
      list.appendChild(el("li", null, [
        b,
        el("div", { class: "pr-track", "aria-hidden": "true" }, [el("span", { style: "left:" + (s.from / PV.seconds * 100).toFixed(2) + "%;width:" + ((s.to - s.from) / PV.seconds * 100).toFixed(2) + "%" }, [fill])]),
        el("div", { class: "pr-cap" }, [el("h3", { text: s.title }), el("p", { text: s.line })])
      ]));
    });
    box.appendChild(list);
    box.appendChild(el("p", { class: "pr-foot", text: "Noah Oh and Daeun Chung, The Cooper Union School of Art, for the SVSD design competition." }));
    view.appendChild(box);

    // A snippet loads once it's on screen and plays while at least half of it is in view
    if (window.IntersectionObserver) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          var f = e.target._f;
          if (e.isIntersecting) f.v.preload = "auto";
          if (e.intersectionRatio >= 0.5) { if (!f.held && f.v.paused) f.play(); }
          else if (!f.v.paused) f.v.pause();
        });
      }, { threshold: [0, 0.5] });
      films.forEach(function (f) { io.observe(f.b); });
    }
    // How far through it is, on the track
    function tick() {
      if (raf) return;
      raf = requestAnimationFrame(function step() {
        var any = false;
        films.forEach(function (f) { if (!f.v.paused) { any = true; if (f.v.duration) f.fill.style.width = (f.v.currentTime / f.v.duration * 100) + "%"; } });
        raf = any && document.body.contains(box) ? requestAnimationFrame(step) : 0;
      });
    }
  }
  function stopPreview() { if (io) { io.disconnect(); io = null; } }
  window.PalitFront = { renderPreview: renderPreview, stopPreview: stopPreview };

  /* ---------- Opening the rest ---------- */

  var opened = false;
  function bytes(b64) { var s = atob(b64), u = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; }
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join(""); }
  // Each file runs as its own script, in order, so each keeps its own top level, and knows the address it came from
  function runAll(files) {
    files.forEach(function (f) {
      var s = document.createElement("script");
      s.setAttribute("data-src", new URL(f.path, location.href).href);
      s.text = f.code;
      document.body.appendChild(s);
      s.remove();
    });
  }
  function loadAll(files, done, fail) {
    (function next(i) {
      if (i >= files.length) { done(); return; }
      var s = document.createElement("script");
      s.src = files[i];
      s.onload = function () { next(i + 1); };
      s.onerror = function () { fail("The dashboard didn't load. Reload the page and try again."); };
      document.body.appendChild(s);
    })(0);
  }
  // From here the dashboard routes the page; it starts where the address points (Plan, from the preview)
  function hand() {
    opened = true;
    window.removeEventListener("hashchange", route);
    stopPreview();
  }
  function unlock(value, fail) {
    if (!(window.crypto && crypto.subtle && window.TextEncoder)) { fail("Admin needs the page opened from its site."); return; }
    var fromPreview = onPreview();
    function after() { if (fromPreview) location.hash = "plan"; }
    if (G.locked) {
      // The public site: the dashboard comes encrypted (AES-GCM, its key drawn from the password with PBKDF2), so a wrong
      // password simply can't open it
      var L = G.locked;
      fetch(L.file, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (box) {
        return crypto.subtle.importKey("raw", new TextEncoder().encode(value), "PBKDF2", false, ["deriveKey"]).then(function (k) {
          return crypto.subtle.deriveKey({ name: "PBKDF2", salt: bytes(box.salt), iterations: box.iterations, hash: "SHA-256" }, k, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
        }).then(function (key) {
          return crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(box.iv) }, key, bytes(box.data));
        }).then(function (plain) {
          hand();
          runAll(JSON.parse(new TextDecoder().decode(plain)));
          after();
        }, function () { fail("That's not the password."); });
      }, function () { fail("The dashboard didn't load. Reload the page and try again."); });
      return;
    }
    // Locally the files are plain: check the password, then load them
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)).then(function (buf) {
      if (hex(buf) !== G.hash) { fail("That's not the password."); return; }
      hand();
      loadAll(G.files || [], after, fail);
    });
  }
  function passwordForm(cancel) {
    var input = el("input", { type: "password", placeholder: "Password", "aria-label": "Admin password", autocomplete: "current-password" });
    var go = el("button", { type: "submit", class: "go", text: "Open" });
    var err = el("span", { class: "err", role: "status" });
    var form = el("form", null, [input, go, err]);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      err.textContent = ""; go.disabled = true;
      unlock(input.value, function (m) { go.disabled = false; err.textContent = m; input.select(); });
    });
    if (cancel) input.addEventListener("keydown", function (e) { if (e.key === "Escape") cancel(); });
    return { form: form, input: input };
  }

  /* ---------- The bar and the gate ---------- */

  function renderAdmin() {
    var box = document.getElementById("admin"), open = el("button", { type: "button", class: "quiet", text: "Admin" });
    box.textContent = "";
    open.addEventListener("click", function () {
      box.textContent = "";
      var f = passwordForm(renderAdmin), cancel = el("button", { type: "button", class: "quiet", text: "Cancel" });
      cancel.addEventListener("click", renderAdmin);
      box.appendChild(f.form); box.appendChild(cancel);
      f.input.focus();
    });
    box.appendChild(open);
  }
  // Any other address, while the rest is closed
  function renderGate(view) {
    var f = passwordForm(null);
    view.appendChild(el("div", { class: "pr-gate" }, [el("h1", { text: "The rest of the dashboard is for the team." }), f.form, el("p", null, [el("a", { href: "#", text: "See the preview" })])]));
    setTimeout(function () { f.input.focus(); }, 0);
  }
  function onPreview() { var h = location.hash; return !h || h === "#" || h === "#preview"; }
  function route() {
    if (opened) return;
    document.body.classList.add("previewing");
    renderAdmin();
    stopPreview();
    var view = document.getElementById("view");
    view.textContent = "";
    if (onPreview()) renderPreview(view); else renderGate(view);
    document.title = "Palit";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
