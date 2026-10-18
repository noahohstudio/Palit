// Palit handoff (entry 89): what Noah writes in a workshop or on the dashboard is kept in this
// browser, so when he says he's done, Claude can read it straight from the page in the browser
// pane. Nothing leaves this computer. Each record: id, title, page, text (the words, as they'd
// be pasted into chat), done, doneAt, updatedAt.

(function (root) {
  "use strict";
  var KEY = "palit-handoff";
  function all() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; }
  }
  function write(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); return true; } catch (e) { return false; } }
  // Save what's written. Changing it after Done reopens it, so Claude never reads a stale "done".
  function put(id, rec) {
    var a = all(), old = a[id] || {};
    var changed = rec.text !== undefined && rec.text !== old.text;
    a[id] = Object.assign({}, old, rec, { id: id, page: location.pathname, updatedAt: new Date().toISOString() });
    if (changed && old.done && !rec.done) { a[id].done = false; a[id].doneAt = null; }
    write(a);
    return a[id];
  }
  function done(id) {
    var a = all();
    if (!a[id]) return null;
    a[id].done = true;
    a[id].doneAt = new Date().toISOString();
    write(a);
    return a[id];
  }
  function get(id) { return all()[id] || null; }
  root.PalitHandoff = { all: all, get: get, put: put, done: done };
})(window);
