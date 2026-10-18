// Palit color math, for the design system page.
// sRGB to OKLab and OKLCH with Björn Ottosson's formulas. Similarity is the Euclidean
// distance in OKLab × 100, labeled ΔE. Thresholds match CLAUDE.md and the v0 prototype;
// design/fixtures/sample-archive.json holds the expected outputs.

(function (root) {
  "use strict";

  var T = {
    nearlyIdentical: 2, close: 5, keptBefore: 7,
    neutralChroma: 0.03, mutedChroma: 0.09,
    darkL: 0.42, midL: 0.72,
    warmHueBelow: 110, warmHueAbove: 330, coolHueFrom: 150, coolHueTo: 300
  };

  function toLinear(c) {
    c = c / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  function hexToRgb(hex) {
    var h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  function oklab(hex) {
    var rgb = hexToRgb(hex).map(toLinear), r = rgb[0], g = rgb[1], b = rgb[2];
    var l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    var m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    var s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return {
      L: 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
      a: 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
      b: 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    };
  }

  function oklch(hex) {
    var o = oklab(hex);
    var h = Math.atan2(o.b, o.a) * 180 / Math.PI;
    if (h < 0) h += 360;
    return { L: o.L, C: Math.sqrt(o.a * o.a + o.b * o.b), h: h };
  }

  function deltaE(hexA, hexB) {
    var p = oklab(hexA), q = oklab(hexB);
    return Math.sqrt(Math.pow(p.L - q.L, 2) + Math.pow(p.a - q.a, 2) + Math.pow(p.b - q.b, 2)) * 100;
  }

  // "Reads as": describes, never prescribes.
  function reads(hex) {
    var c = oklch(hex), out = [];
    if (c.C >= T.neutralChroma) {
      if (c.h < T.warmHueBelow || c.h > T.warmHueAbove) out.push("Warm");
      else if (c.h >= T.coolHueFrom && c.h <= T.coolHueTo) out.push("Cool");
      else out.push("Between warm and cool");
    }
    out.push(c.L < T.darkL ? "Dark" : c.L < T.midL ? "Mid value" : "Light");
    out.push(c.C < T.neutralChroma ? "Neutral" : c.C < T.mutedChroma ? "Muted" : "Saturated");
    return out;
  }

  // Labels as the v0 prototype and the fixture use them: under ΔE 2 is "Nearly identical",
  // anything else under ΔE 7 is "Close".
  function closeness(d) {
    return d < T.nearlyIdentical ? "Nearly identical" : d < T.keptBefore ? "Close" : null;
  }

  // "Kept before": the 3 closest other captures within ΔE 7, closest first.
  function keptBefore(hex, others) {
    return others
      .map(function (o) { return { number: o.number, deltaE: Math.round(deltaE(hex, o.hex) * 10) / 10 }; })
      .filter(function (o) { return o.deltaE < T.keptBefore; })
      .sort(function (a, b) { return a.deltaE - b.deltaE; })
      .slice(0, 3)
      .map(function (o) { o.label = closeness(o.deltaE); return o; });
  }

  function family(hex) {
    var c = oklch(hex);
    if (c.C < T.neutralChroma) return "neutral";
    var h = c.h;
    if (h < 40 || h >= 350) return "red";
    if (h < 75) return "orange";
    if (h < 115) return "yellow";
    if (h < 165) return "green";
    if (h < 215) return "teal";
    if (h < 275) return "blue";
    if (h < 320) return "purple";
    return "magenta";
  }

  function value(hex) {
    var L = oklch(hex).L;
    return L < T.darkL ? "dark" : L < T.midL ? "mid" : "light";
  }

  // Human-first naming (A24): until you name a color, a plain hue word plus the place you found it.
  function placeholder(hex, place) {
    var c = oklch(hex), v = value(hex), f = family(hex);
    var word;
    if (f === "neutral") word = v === "mid" ? "Gray" : (v === "dark" ? "Dark" : "Light") + " neutral";
    else word = v === "mid" ? f[0].toUpperCase() + f.slice(1) : (v === "dark" ? "Dark " : "Light ") + f;
    return word + " from " + place;
  }

  function displayOklch(hex) {
    var c = oklch(hex);
    return (c.L * 100).toFixed(1) + "% " + c.C.toFixed(3) + " " + Math.round(c.h) + "°";
  }

  function displayRgb(hex) { return hexToRgb(hex).join(" "); }

  var api = {
    thresholds: T, oklab: oklab, oklch: oklch, deltaE: deltaE, reads: reads, closeness: closeness, keptBefore: keptBefore,
    family: family, value: value, placeholder: placeholder, displayOklch: displayOklch, displayRgb: displayRgb
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.PalitColor = api;
})(typeof window !== "undefined" ? window : this);
