// Palit's brand, in one place (entry 173): the prototype's menu bar and the video's player both read it, so the logo goes in
// once and shows up everywhere. The logo is in (entry 220): two squares, offset, their overlap open (palit-logo.svg, as it came;
// mark.svg, the same shape cut for masking), filled with the last color you kept (the logo brief, entry 163).
//
// To use the new logo: put it next to this file (an SVG is best) and set mark to its path from this folder, e.g. "mark.svg".
//   markMode "fill": the logo is a shape, filled with the last color you kept (the logo brief, entry 163)
//   markMode "image": the logo shows with its own colors
window.PALIT_BRAND = {
  name: "Palit",
  mark: "mark.svg",
  markMode: "fill",
  // The speaker chips' colors: Claude's draft until Noah and Daeun pick theirs (entry 164)
  speakers: { Noah: "#d23c2a", Daeun: "#2fb3ad" }
};
(function () {
  // Paths here are from design/brand/, so pages elsewhere get the mark resolved from this script's own address
  var s = document.currentScript, B = window.PALIT_BRAND;
  if (s && B.mark && !/^(data:|https?:|\/)/.test(B.mark)) B.markUrl = new URL(B.mark, s.src).href; else B.markUrl = B.mark;
})();
