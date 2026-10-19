# Takes the stills for the dashboard's clips (the Video page, entry 192): each clip's charts from design/video/viz.html at
# chosen moments, and its desktop moments from prototype v3's scenes, with headless Chrome. Then writes
# design/history/data/clips.js, which the dashboard reads.
# Usage: python3 design/history/shots/video/capture.py http://localhost:8790
# Then node design/history/shots/video/previews.mjs http://localhost:8790 makes the moving previews (entry 214).
# (any server that serves the project's design/ folder at /design/)
import json
import os
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "..", "data", "clips.js")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Each clip's stills: ("viz", scene, seconds into it, label), ("reel", set, seconds into it, label) for the deep dives'
# reels of our own screens (design/video/reels.js, entry 206), or ("v3", scene, label). Filmed clips have none yet.
SHOTS = {
    "splash": [("viz", "splash", 0.5, "The mark, turning color"), ("viz", "splash", 2.6, "Palit")],
    "brief": [("viz", "brief", 3, "The brief, word for word"), ("viz", "brief", 9, "Our answer to it")],
    "problem": [("viz", "problem", 9, "33 of 51 designers"), ("viz", "problem", 20, "2 of 8 references"), ("viz", "problem", 30, "More creative, more alike"), ("viz", "problem", 42, "Pantone and Palit")],
    "people": [("viz", "people", 16, "Who loves it, who won't"), ("viz", "people", 28, "You have to earn it")],
    "demo": [("v3", "picking", "The loupe"), ("v3", "landed", "Kept, at the edge"), ("v3", "days", "Days"), ("v3", "spectrum", "Spectrum"), ("v3", "card&n=106", "The specimen card"), ("v3", "desk", "The palette beside the work")],
    "process": [("viz", "decisions", 14, "Every decision since the brief")],
    "dive1": [("reel", "ground", 2, "Our lo-fi sheets"), ("reel", "ground", 16, "The ideations"), ("reel", "ground", 22, "From the ground up"), ("viz", "look", 10, "Built for handoff, or for the story"), ("viz", "look", 22, "1 of 11 pickers"), ("viz", "look", 46, "Up to 8 times"), ("viz", "look", 56, "Pure white"), ("reel", "cut", 2, "v1"), ("reel", "cut", 12, "v2, merged"), ("reel", "cut", 25, "What we cut")],
    "dive2": [("reel", "day1", 2.4, "Persona 1, before: v2's first open"), ("v3", "first", "Day one"), ("reel", "weeks", 7, "Before: three specimen cards"), ("v3", "naming", "A few weeks in: naming"), ("reel", "years", 9, "Before: v2's Spectrum"), ("v3", "longtime", "Years in")],
    "dive3": [("viz", "story", 10, "Memory drifts"), ("viz", "story", 30, "Before a click: 2 of 9"), ("reel", "clutter", 3, "A friend: visually cluttered"), ("reel", "clutter", 9, "Back to the roughest lo-fi sheets"), ("reel", "clutter", 19, "The story workshop"), ("reel", "clutter", 27, "The preview"), ("reel", "dial", 2, "Only color"), ("reel", "dial", 12, "The hunt")],
    "horizon": [("viz", "horizon", 10, "A Palit MCP"), ("viz", "horizon", 19, "Inside the tools you use"), ("viz", "horizon", 28, "You still find every color")],
    "splash-end": [("viz", "splash", 2.6, "Palit, once more")],
    "credits": [("viz", "credits", 1.9, "The credits, on one screen")],
}


def shoot(job):
    base, clip, i, spec, tmp = job
    if spec[0] == "viz":
        url, size, label = "%s/design/video/viz.html?scene=%s&t=%s" % (base, spec[1], spec[2]), (1920, 1080), spec[3]
    elif spec[0] == "reel":
        url, size, label = "%s/design/video/viz.html?scene=reel&set=%s&t=%s" % (base, spec[1], spec[2]), (1920, 1080), spec[3]
    else:
        url, size, label = "%s/design/v3/index.html?clean&scene=%s" % (base, spec[1]), (1440, 900), spec[2]
    raw = os.path.join(tmp, "%s-%d.png" % (clip, i))
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=%d,%d" % size,
                    "--user-data-dir=" + os.path.join(tmp, "p-%s-%d" % (clip, i)), "--virtual-time-budget=4000",
                    "--screenshot=" + raw, url], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=90)
    im = Image.open(raw).convert("RGB")
    out = Image.new("RGB", (960, 540), (28, 28, 30))   # the desk sits on the player's dark frame, like the video
    if size == (1920, 1080):
        out = im.resize((960, 540), Image.LANCZOS)
    else:
        out.paste(im.resize((864, 540), Image.LANCZOS), (48, 0))
    name = "%s-%d.jpg" % (clip, i + 1)
    out.save(os.path.join(HERE, name), quality=84, optimize=True)
    rec = {"file": "shots/video/" + name, "label": label, "kind": "viz" if spec[0] == "reel" else spec[0], "href": url.split("/design/", 1)[1]}
    # the moving preview for this still, if previews.mjs has made one (entry 214)
    if os.path.exists(os.path.join(HERE, "%s-%d.mp4" % (clip, i + 1))):
        rec["preview"] = "shots/video/%s-%d.mp4" % (clip, i + 1)
    return clip, i, rec


def main():
    base = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8790").rstrip("/")
    tmp = tempfile.mkdtemp(prefix="palit-clips-")
    jobs = [(base, clip, i, spec, tmp) for clip, specs in SHOTS.items() for i, spec in enumerate(specs)]
    found = {}
    with ThreadPoolExecutor(max_workers=6) as pool:
        for clip, i, rec in pool.map(shoot, jobs):
            found.setdefault(clip, {})[i] = rec
    shots = {clip: [found[clip][i] for i in sorted(found[clip])] for clip in SHOTS}
    with open(DATA, "w") as f:
        f.write("// The stills for the dashboard's clips (entry 192), written by design/history/shots/video/capture.py. Don't edit by hand.\n")
        f.write("window.PALIT = window.PALIT || {};\n")
        f.write("window.PALIT.clips = " + json.dumps({"shots": shots}, ensure_ascii=False, indent=1) + ";\n")
    print("%d stills for %d clips" % (sum(len(v) for v in shots.values()), len(shots)))


if __name__ == "__main__":
    main()
