// Palit design system: shared component builders.
// Used by the design system page (design/system/) and the prototype (design/journey/).
// Needs color.js loaded first. PalitUI.create(captures, options) binds the builders to a
// list of captures, so kept-before and lookups always see the same archive.

(function (root) {
  "use strict";

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "text") n.textContent = v;
      else if (k === "class") n.className = v;
      else if (k === "style") n.setAttribute("style", v);
      else n.setAttribute(k, v);
    });
    (kids || []).forEach(function (c) { if (c !== null && c !== undefined && c !== false) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function pad(n) { var s = String(n); return s.length < 3 ? ("00" + s).slice(-3) : s; }
  function no(n) { return "No. " + pad(n); }
  function title(c) { return c.name || c.placeholder; }
  function when(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) + ", " +
      d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).toLowerCase();
  }
  function place(c) { return c.source.split(" — ")[0]; }
  function sourceTitle(c) { return c.source.split(" — ").slice(1).join(" — ") || c.source; }
  function swatchLabel(c) { return no(c.number) + ", " + (c.name ? c.name : "unnamed, " + c.placeholder) + ", " + c.hex; }
  function day(iso) { return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric" }); }
  // A run of numbers, like a palette's: "No. 030–033".
  function range(nums) { return nums.length > 1 ? no(nums[0]) + "–" + pad(nums[nums.length - 1]) : no(nums[0]); }

  var FAMILIES = [["all", "All"], ["red", "Red"], ["orange", "Orange"], ["yellow", "Yellow"], ["green", "Green"], ["teal", "Teal"], ["blue", "Blue"], ["purple", "Purple"], ["neutral", "Neutral"]];
  var VALUES = [["all", "Any value"], ["dark", "Dark"], ["mid", "Mid"], ["light", "Light"]];
  var REP = { red: "#a8432a", orange: "#d98e04", yellow: "#f0c23b", green: "#8bae7c", teal: "#2e6b6f", blue: "#4f7cac", purple: "#5e4b8b", neutral: "#8c8a86" };

  function create(captures, options) {
    options = options || {};
    var PC = root.PalitColor;
    var order = options.neighborOrder || ["NW", "N", "NE", "W", "E", "SW", "S", "SE"];

    function byNumber(n) { return captures.filter(function (c) { return c.number === n; })[0]; }

    // A new capture, appended to the archive. Numbers are never reused.
    function newCapture(hex, from) {
      var n = Math.max.apply(null, captures.map(function (c) { return c.number; }).concat([0])) + 1;
      var c = {
        number: n, capturedAt: new Date().toISOString(), hex: hex, name: null,
        placeholder: PC.placeholder(hex, from.place), sourceType: from.sourceType, source: from.source,
        project: from.project || null, neighbors: from.neighbors || [hex, hex, hex, hex, hex, hex, hex, hex],
        oklch: PC.displayOklch(hex), rgb: PC.displayRgb(hex), reads: PC.reads(hex), family: PC.family(hex), value: PC.value(hex)
      };
      captures.push(c);
      return c;
    }

    function kept(c) {
      return PC.keptBefore(c.hex, captures.filter(function (o) { return o.number !== c.number; }));
    }

    function techList(c, dl) {
      dl = dl || el("dl", { class: "tech" });
      [["Hex", c.hex], ["RGB", c.rgb], ["OKLCH", c.oklch]].forEach(function (p) {
        dl.appendChild(el("dt", { text: p[0] }));
        dl.appendChild(el("dd", { text: p[1] }));
      });
      return dl;
    }
    function sourceBlock(c, onSource) {
      var url = null;
      if (c.url) {
        url = onSource ? el("button", { type: "button", class: "url", "aria-label": "Go back to " + c.url, text: c.url }) : el("span", { class: "url", text: c.url });
        if (onSource) url.addEventListener("click", function () { onSource(c); });
      }
      return el("div", { class: "source" }, [
        el("p", { class: "k", text: c.sourceType }),
        el("p", { class: "p", text: place(c) }),
        el("p", { class: "ti", text: sourceTitle(c) }),
        url ? el("p", null, [url]) : null,
        el("p", { class: "tm num", text: when(c.capturedAt) })
      ]);
    }
    function neighborGrid(c, size) {
      var cells = [], pos = { NW: 0, N: 1, NE: 2, W: 3, E: 5, SW: 6, S: 7, SE: 8 };
      for (var i = 0; i < 9; i++) cells.push(null);
      order.forEach(function (k, i) { cells[pos[k]] = c.neighbors[i]; });
      cells[4] = c.hex;
      var g = el("div", { class: "neighbors", role: "img", "aria-label": "The color and its 8 neighbors", style: size ? "width:" + size + "px" : null });
      cells.forEach(function (hex, i) { g.appendChild(el("div", { class: i === 4 ? "center" : null, style: "background:" + hex })); });
      return g;
    }
    function readsRow(c) {
      return el("div", { class: "reads" }, (c.reads || PC.reads(c.hex)).map(function (r) { return el("span", { class: "descriptor", text: r }); }));
    }
    // Similar (A47, A48, A53): the colors you've kept that are close to this one, each with where
    // it came from and when. No count and no score: your own history, not a measure.
    function similarList(c, onPick) {
      var list = kept(c);
      if (!list.length) return el("p", { class: "ts-caption", text: "Nothing close yet. This one is new to your archive." });
      var box = el("div", { class: "kept" });
      list.forEach(function (k) {
        var o = byNumber(k.number);
        var b = el("button", { type: "button", "aria-label": "Show " + swatchLabel(o) }, [
          el("span", { class: "ks", style: "background:" + o.hex }),
          el("span", { class: "kn" + (o.name ? "" : " placeholder") }, [title(o), el("span", { class: "kw", text: sourceTitle(o) + ", " + day(o.capturedAt) })])
        ]);
        if (onPick) b.addEventListener("click", function () { onPick(o.number); });
        box.appendChild(b);
      });
      return box;
    }
    // A note on every color (A54): a quiet scratchpad that stays. You decide what it's for.
    function noteBlock(c, editable, onNote) {
      var n = el("div", { class: "cnote", contenteditable: editable ? "true" : "false", role: editable ? "textbox" : null, "aria-multiline": editable ? "true" : null, "aria-label": "Note on this color", "data-placeholder": "Anything you want to remember about it", spellcheck: "true" });
      n.textContent = c.note || "";
      if (editable) n.addEventListener("input", function () {
        var v = n.innerText.trim();
        if (!v) n.textContent = "";
        c.note = v || null;
        if (onNote) onNote(c);
      });
      return n;
    }
    function chip(c) {
      return el("span", { class: "chip-raw", role: "status" }, [
        el("span", { class: "cs", style: "background:" + c.hex }),
        el("span", null, [el("span", { class: "cn" + (c.name ? "" : " placeholder"), text: title(c) }), " ", el("span", { class: "cno num", text: no(c.number) })])
      ]);
    }
    // A palette (entry 67): the colors you keep in one run, after ⌥⇧C, by holding ⇧ and
    // clicking. Each color stays its own numbered capture with its own source; the palette only
    // groups them, and never merges or dedupes them (A1). Until you name it, it has a placeholder
    // from where you found it (A24). Draft wording.
    function newPalette(place) { return { name: null, placeholder: "Palette from " + place, place: place, numbers: [] }; }
    function addToPalette(p, c) { p.numbers.push(c.number); c.palette = p; return p; }
    function paletteColors(p) { return p.numbers.map(byNumber).filter(Boolean); }
    // A run of one color is just a color.
    function endPalette(p) {
      if (p.numbers.length > 1) return p;
      paletteColors(p).forEach(function (c) { delete c.palette; });
      return null;
    }
    // The palette strip: its colors side by side on 1 px ink rules (A32). With onPick, each
    // color is a button that opens its own story, and `current` marks the one you're on.
    function paletteStrip(p, opts) {
      opts = opts || {};
      var box = el("div", { class: "pal-strip", role: opts.onPick ? "group" : "img" });
      function label() {
        box.setAttribute("aria-label", opts.onPick ? "Colors in " + title(p) : title(p) + ": " + paletteColors(p).map(swatchLabel).join("; "));
      }
      function cell(c) {
        if (!opts.onPick) return el("span", { style: "background:" + c.hex });
        var b = el("button", { type: "button", style: "background:" + c.hex, "aria-label": "Show " + swatchLabel(c), "aria-current": c.number === opts.current ? "true" : null });
        b.addEventListener("click", function () { opts.onPick(c.number); });
        return b;
      }
      paletteColors(p).forEach(function (c) { box.appendChild(cell(c)); });
      label();
      box.add = function (c, quiet) { var n = cell(c); if (!quiet) n.classList.add("in"); box.appendChild(n); label(); };
      return box;
    }
    // A color's palette, in its story (entry 67): the colors kept with it, this one marked, and
    // the palette's name, which you can give here too, any time (A27).
    function paletteBlock(c, opts) {
      opts = opts || {};
      var p = c.palette;
      var name = el("div", { class: "pal-n", contenteditable: opts.editable ? "true" : "false", role: opts.editable ? "textbox" : null, "aria-label": opts.editable ? "Name this palette" : null, "data-placeholder": p.placeholder, spellcheck: "false" });
      name.textContent = p.name || "";
      if (opts.editable) {
        name.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); name.blur(); } });
        name.addEventListener("input", function () {
          var v = name.textContent.trim();
          if (!v) name.textContent = "";
          p.name = v || null;
        });
      }
      var pin = null;
      if (opts.onPin) {
        var pinned = !!(opts.isPinned && opts.isPinned(p));
        pin = el("button", { type: "button", class: "pal-pin", "aria-pressed": String(pinned), text: pinned ? "Pinned to the desktop" : "Pin to the desktop" });
        pin.addEventListener("click", function () { opts.onPin(p); });
      }
      return el("div", { class: "pal" }, [
        paletteStrip(p, { onPick: opts.onPick, current: c.number }),
        name,
        el("p", { class: "pal-m num", text: p.numbers.length + " colors, " + range(p.numbers) }),
        pin
      ]);
    }
    function tile(c, onPick, current) {
      var b = el("button", { type: "button", class: "tile", "aria-label": swatchLabel(c), "aria-current": current ? "true" : null, "data-n": c.number }, [
        el("div", { class: "ts", style: "background:" + c.hex }),
        el("div", { class: "tb" }, [
          el("div", { class: "tn" + (c.name ? "" : " placeholder"), text: title(c) }),
          el("div", { class: "tm" }, [el("span", { text: no(c.number) }), el("span", { text: place(c) })])
        ])
      ]);
      if (onPick) b.addEventListener("click", function () { onPick(c.number); });
      return b;
    }
    function storyPanel(host, c, opts) {
      opts = opts || {};
      host.textContent = "";
      host.appendChild(el("p", { class: "ts-small num", text: no(c.number) }));
      var name = el("div", { class: "sn", contenteditable: opts.editable ? "true" : "false", role: opts.editable ? "textbox" : null, "aria-label": opts.editable ? "Name this color" : null, "data-placeholder": c.placeholder, spellcheck: "false" });
      name.textContent = c.name || "";
      if (opts.editable) {
        name.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); name.blur(); } });
        name.addEventListener("input", function () {
          var v = name.textContent.trim();
          if (!v) name.textContent = "";
          c.name = v || null;
          if (opts.onRename) opts.onRename(c);
        });
      }
      host.appendChild(name);
      host.appendChild(el("p", { class: "shint", text: c.name ? "Your name." : "Placeholder until you name it." }));
      host.appendChild(el("div", { style: "height:120px;margin-top:14px;background:" + c.hex + ";box-shadow:inset 0 0 0 1px var(--swatch-edge)", role: "img", "aria-label": swatchLabel(c) }));
      host.appendChild(el("section", null, [el("h4", { text: "Note" }), noteBlock(c, opts.editable, opts.onNote)]));
      host.appendChild(el("section", null, [el("h4", { text: "Identity" }), techList(c)]));
      host.appendChild(el("section", null, [el("h4", { text: "Where it came from" }), sourceBlock(c, opts.onSource)]));
      if (c.palette) host.appendChild(el("section", null, [el("h4", { text: "Palette" }), paletteBlock(c, opts)]));
      host.appendChild(el("section", null, [el("div", { class: "two" }, [neighborGrid(c, 96), el("div", null, [el("h4", { text: "Reads as" }), readsRow(c)])])]));
      host.appendChild(el("section", null, [el("h4", { text: "Similar" }), similarList(c, opts.onPick)]));
      if (c.project) host.appendChild(el("section", null, [el("h4", { text: "Project" }), el("p", { class: "ts-body", text: c.project })]));
    }
    // The desktop palette (D8, A49–A52): your latest picks, or a palette you pin. Docked at the
    // right edge as thin bars that open when you point at them; drag it off the edge to float it,
    // and it snaps back at the edge. Click copies the hex, ⌥-click RGB, ⌘-click OKLCH. A new pick
    // lands in it with a small ring. opts: latest(), pinned(), onUnpin(), canWrite(), onCopy().
    function deskPalette(opts) {
      opts = opts || {};
      var MAX = 8;
      var box = el("div", { class: "dpal docked", role: "toolbar", "aria-label": "Desktop palette" });
      var grip = el("span", { class: "dp-grip", title: "Drag it off the edge to move it", "aria-hidden": "true" });
      var list = el("div", { class: "dp-list" });
      var foot = el("div", { class: "dp-foot" });
      var note = el("span", { class: "dp-note", role: "status", "aria-live": "polite" });
      [grip, list, foot, note].forEach(function (n) { box.appendChild(n); });
      var noteTimer = null, peekTimer = null, drag = null;
      function say(t, stay) {   // stay: keep it up, for a paused scene
        note.textContent = t;
        box.classList.add("saying");
        clearTimeout(noteTimer);
        if (!stay) noteTimer = setTimeout(function () { box.classList.remove("saying"); }, 1400);
      }
      function copyFrom(c, e, stay) {
        var kind = e.altKey ? "RGB" : (e.metaKey || e.ctrlKey) ? "OKLCH" : "Hex";
        var text = kind === "RGB" ? c.rgb : kind === "OKLCH" ? c.oklch : c.hex;
        if (opts.onCopy) opts.onCopy(text, kind, c);
        if ((!opts.canWrite || opts.canWrite()) && navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
        say("Copied " + text, stay);
      }
      box.refresh = function (landed) {
        var p = opts.pinned ? opts.pinned() : null;
        var items = p ? paletteColors(p) : (opts.latest ? opts.latest() : []).slice(0, MAX);
        list.textContent = "";
        if (!items.length) list.appendChild(el("span", { class: "dp-empty", title: "Nothing kept yet" }));
        items.forEach(function (c) {
          var label = no(c.number) + ", " + title(c) + ", " + c.hex;
          var b = el("button", { type: "button", style: "background:" + c.hex, title: label, "aria-label": "Copy " + label, "data-n": c.number });
          if (landed && c.number === landed) b.classList.add("landed");
          b.addEventListener("click", function (e) { copyFrom(c, e); });
          list.appendChild(b);
        });
        foot.textContent = "";
        if (p) {
          foot.appendChild(el("span", { class: "dp-pin", title: title(p), text: "Pinned" }));
          if (opts.onUnpin) {
            var u = el("button", { type: "button", class: "dp-unpin", text: "Unpin", "aria-label": "Unpin " + title(p) });
            u.addEventListener("click", function () { opts.onUnpin(p); });
            foot.appendChild(u);
          }
        }
        box.classList.toggle("is-pinned", !!p);
      };
      box.peek = function (ms) {
        box.classList.add("open");
        clearTimeout(peekTimer);
        if (ms) peekTimer = setTimeout(function () { box.classList.remove("open"); }, ms);
      };
      box.say = say;
      box.copyFrom = copyFrom;
      box.dock = function () { box.classList.remove("floating", "near-edge"); box.classList.add("docked"); box.style.left = ""; box.style.top = ""; };
      box.floatAt = function (x, y) { box.classList.remove("docked"); box.classList.add("floating"); box.style.left = x + "px"; box.style.top = y + "px"; };
      // Drag it off the edge to float it; bring it back to the edge and it docks (A50).
      function hostScale(host) { var r = host.getBoundingClientRect(); return host.offsetWidth ? r.width / host.offsetWidth : 1; }
      box.dragTo = function (x, y) {   // x, y in the host's own units; used by playback too
        var host = box.offsetParent;
        if (!host) return;
        var w = host.offsetWidth, h = host.offsetHeight;
        x = Math.max(4, Math.min(w - box.offsetWidth - 4, x));
        y = Math.max(32, Math.min(h - box.offsetHeight - 4, y));
        box.floatAt(x, y);
        box.classList.toggle("near-edge", w - (x + box.offsetWidth) < 48);
      };
      box.drop = function () { if (box.classList.contains("near-edge")) box.dock(); };
      box.addEventListener("pointerdown", function (e) {
        if (e.target !== grip && e.target !== box && e.target !== foot) return;
        var host = box.offsetParent;
        if (!host) return;
        var s = hostScale(host), hr = host.getBoundingClientRect(), br = box.getBoundingClientRect();
        drag = { s: s, hr: hr, dx: (e.clientX - br.left) / s, dy: (e.clientY - br.top) / s, x0: e.clientX, y0: e.clientY, moved: false };
        if (box.setPointerCapture) box.setPointerCapture(e.pointerId);
        e.preventDefault();
      });
      box.addEventListener("pointermove", function (e) {
        if (!drag) return;
        if (!drag.moved && Math.abs(e.clientX - drag.x0) + Math.abs(e.clientY - drag.y0) < 6) return;
        drag.moved = true;
        box.dragTo((e.clientX - drag.hr.left) / drag.s - drag.dx, (e.clientY - drag.hr.top) / drag.s - drag.dy);
      });
      box.addEventListener("pointerup", function () {
        if (!drag) return;
        var moved = drag.moved;
        drag = null;
        if (moved) box.drop();
      });
      box.refresh();
      return box;
    }
    // Name it beside the cursor (A52, Noah's idea): a right-click while picking keeps the color and
    // opens a small field next to the pointer. Return names it; Esc leaves it for later. Draft copy.
    function nameOverlay(c, onDone) {
      var input = el("input", { class: "no-in", type: "text", "aria-label": "Name this color", placeholder: c.placeholder, spellcheck: "false", autocomplete: "off" });
      var box = el("div", { class: "name-over", role: "dialog", "aria-label": "Name " + no(c.number) }, [
        el("div", { class: "no-top" }, [el("span", { class: "cs", style: "background:" + c.hex }), input, el("span", { class: "cno num", text: no(c.number) })]),
        el("p", { class: "no-hint", text: "Return names it. Esc leaves it for later." })
      ]);
      var finished = false;
      function finish(keep) {
        if (finished) return;
        finished = true;
        var v = input.value.trim();
        if (keep && v) c.name = v;
        if (onDone) onDone(!!(keep && v));
      }
      input.addEventListener("keydown", function (e) {
        e.stopPropagation();
        if (e.key === "Enter") { e.preventDefault(); finish(true); }
        else if (e.key === "Escape") { e.preventDefault(); finish(false); }
      });
      box.input = input;
      box.finish = finish;
      return box;
    }
    function filterBar(host, state, onChange) {
      host.textContent = "";
      var fam = el("div", { class: "group", role: "group", "aria-label": "Hue family" });
      FAMILIES.forEach(function (f) {
        var b = el("button", { type: "button", "aria-pressed": String(state.family === f[0]) }, [f[0] !== "all" ? el("span", { class: "fs", style: "background:" + REP[f[0]] }) : null, f[1]]);
        b.addEventListener("click", function () { state.family = f[0]; onChange(); });
        fam.appendChild(b);
      });
      var val = el("div", { class: "group", role: "group", "aria-label": "Value" });
      VALUES.forEach(function (v) {
        var b = el("button", { type: "button", "aria-pressed": String(state.value === v[0]) }, [v[1]]);
        b.addEventListener("click", function () { state.value = v[0]; onChange(); });
        val.appendChild(b);
      });
      host.appendChild(fam);
      host.appendChild(val);
    }

    return {
      captures: captures, byNumber: byNumber, newCapture: newCapture, kept: kept,
      techList: techList, sourceBlock: sourceBlock, neighborGrid: neighborGrid, readsRow: readsRow,
      similarList: similarList, noteBlock: noteBlock, chip: chip, tile: tile, storyPanel: storyPanel, filterBar: filterBar,
      newPalette: newPalette, addToPalette: addToPalette, paletteColors: paletteColors, endPalette: endPalette,
      paletteStrip: paletteStrip, paletteBlock: paletteBlock, deskPalette: deskPalette, nameOverlay: nameOverlay
    };
  }

  root.PalitUI = {
    el: el, pad: pad, no: no, range: range, day: day, title: title, when: when, place: place, sourceTitle: sourceTitle, swatchLabel: swatchLabel,
    FAMILIES: FAMILIES, VALUES: VALUES, REP: REP, create: create
  };
})(window);
