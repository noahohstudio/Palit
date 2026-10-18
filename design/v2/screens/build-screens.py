#!/usr/bin/env python3
"""Builds screens.js for prototype v2 from screens.json and the desktop images in this folder.

Each entry names a desktop image (2880 x 1800, a 1440 x 900 desktop at 2x), where Palit's menu bar
icon sits, the regions a picked color says it came from, and the colors kept before the prototype
opens (seeds). Coordinates are in desktop points (1440 x 900). The images are embedded as data URIs
so the prototype can read real pixels even when opened from Finder.

Run it from anywhere:  python3 design/v2/screens/build-screens.py
"""
import base64
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    with open(os.path.join(HERE, "screens.json")) as f:
        entries = json.load(f)
    out = []
    for e in entries:
        with open(os.path.join(HERE, e["file"]), "rb") as f:
            data = f.read()
        mime = "image/png" if e["file"].endswith(".png") else "image/jpeg"
        out.append(dict(e, data="data:" + mime + ";base64," + base64.b64encode(data).decode()))
    with open(os.path.join(HERE, "screens.js"), "w") as f:
        f.write("// Built by build-screens.py from screens.json. Don't edit by hand.\n")
        f.write("window.PALIT_V2_SCREENS = " + json.dumps({"list": out}, ensure_ascii=False) + ";\n")
    print(len(out), "screens in screens.js")


if __name__ == "__main__":
    main()
