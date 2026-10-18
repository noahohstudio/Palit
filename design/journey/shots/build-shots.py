#!/usr/bin/env python3
"""Builds shots.js from shots.json and the screenshots in this folder (D9, entry 78).

Each entry in shots.json names a PNG in this folder and says where Palit's menu bar icon sits,
which regions a picked color came from, and where playback picks. This script adds each image's
size and embeds it as a data URI, so the prototype can read colors from its pixels even when the
page is opened straight from Finder. Coordinates are in the screenshot's own pixels, so a Retina
screenshot uses its full size.

An entry in shots.json:
  {
    "file": "desk-1.png",
    "icon": [2558, 28],                       where Palit's menu bar icon goes
    "regions": [                              where a picked color says it came from
      {"x": 240, "y": 100, "w": 1960, "h": 1456,
       "place": "stoopnotes.studio", "type": "Browser",
       "title": "Bergen Street, golden hour", "url": "stoopnotes.studio/walks/bergen-street"}
    ],
    "play": {"pick": [848, 1060],             what playback picks and names
             "palette": [[1072, 526], [848, 460]]}   what it keeps as a palette, with ⇧ held
  }

Run it from anywhere:  python3 design/journey/shots/build-shots.py
Then open the prototype with ?shot=1 for the first screenshot.
"""
import base64
import json
import os
import struct
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    with open(os.path.join(HERE, "shots.json")) as f:
        entries = json.load(f)
    out = []
    for e in entries:
        path = os.path.join(HERE, e["file"])
        with open(path, "rb") as f:
            data = f.read()
        if data[:8] != b"\x89PNG\r\n\x1a\n":
            sys.exit(e["file"] + " isn't a PNG. Save screenshots as PNG (⌘⇧3 does).")
        w, h = struct.unpack(">II", data[16:24])
        out.append(dict(e, w=w, h=h, data="data:image/png;base64," + base64.b64encode(data).decode()))
    js = ("// Built by build-shots.py from shots.json and the PNGs in this folder. Don't edit by hand.\n"
          "window.PALIT_SHOTS = " + json.dumps({"list": out}) + ";\n")
    with open(os.path.join(HERE, "shots.js"), "w") as f:
        f.write(js)
    print(len(out), "screenshot" + ("" if len(out) == 1 else "s"), "in shots.js")


if __name__ == "__main__":
    main()
