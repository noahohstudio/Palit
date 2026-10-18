// Checks design/system/color.js against the expected values in design/fixtures/sample-archive.json.
// Run: node design/system/color.test.js

const path = require("path");
const fs = require("fs");
const C = require(path.join(__dirname, "color.js"));
const d = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "fixtures", "sample-archive.json"), "utf8"));

const caps = d.captures.map(c => ({ number: c.number, hex: c.srgbHex }));
const failures = [];
let checks = 0;

function check(ok, what) {
  checks++;
  if (!ok) failures.push(what);
}

for (const c of d.captures) {
  const got = C.oklch(c.srgbHex);
  const exp = c.expected.oklch;
  const hueGap = Math.min(Math.abs(got.h - exp.h), 360 - Math.abs(got.h - exp.h));
  check(Math.abs(got.L - exp.L) <= 0.0005, `No. ${c.number}: L`);
  check(Math.abs(got.C - exp.C) <= 0.0005, `No. ${c.number}: C`);
  check(exp.C <= 0.005 || hueGap <= 0.5, `No. ${c.number}: hue`);
  check(JSON.stringify(C.reads(c.srgbHex)) === JSON.stringify(c.expected.reads), `No. ${c.number}: reads as`);
  check(C.displayOklch(c.srgbHex) === c.expected.display.oklch, `No. ${c.number}: OKLCH display`);
  check(C.displayRgb(c.srgbHex) === c.expected.display.rgb, `No. ${c.number}: RGB display`);
  const kept = C.keptBefore(c.srgbHex, caps.filter(o => o.number !== c.number));
  const asList = a => JSON.stringify(a.map(x => [x.number, x.deltaE, x.label]));
  check(asList(kept) === asList(c.expected.keptBefore), `No. ${c.number}: kept before`);
}

if (failures.length) {
  console.log(`${checks - failures.length}/${checks} checks passed. Failed:\n` + failures.join("\n"));
  process.exit(1);
}
console.log(`${checks}/${checks} checks passed`);
