# Takes the stills of how Palit's screens changed, for the video's deep dives (the reels in design/video/reels.js) and the
# dashboard: v2 as it was on the afternoon of October 18, v2 merged, the preview, the workshops' options and v3, with
# headless Chrome. v1's stills come from a saved copy of the journey before the feature workshop, served at /v1test/
# (its chip's styles weren't saved, so there's no still of the chip). Writes JPEGs to design/history/shots/process/.
# Usage: python3 design/history/shots/video/process.py http://localhost:8790
import os
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "process")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
APP, WIDE = (1440, 900), (1920, 1080)

# name: (path under the server, window size)
SHOTS = {
    "v1-archive": ("v1test/journey/index.html#/archive", APP),
    "v1-spectrum": ("v1test/journey/index.html#/spectrum", APP),
    "v1-popover": ("v1test/journey/index.html#/popover", APP),
    "v2a-days": ("design/v2/frozen-oct18.html?clean&scene=days", APP),
    "v2a-zoom-out": ("design/v2/frozen-oct18.html?clean&scene=zoom-out", APP),
    "v2a-collections": ("design/v2/frozen-oct18.html?clean&scene=collections", APP),
    "v2a-pins": ("design/v2/frozen-oct18.html?clean&scene=pins", APP),
    "v2a-spectrum": ("design/v2/frozen-oct18.html?clean&scene=spectrum", APP),
    "v2a-card": ("design/v2/frozen-oct18.html?clean&scene=card", APP),
    "v2b-first": ("design/v2/index.html?clean&scene=first", APP),
    "v2b-days": ("design/v2/index.html?clean&scene=days", APP),
    "v2b-all": ("design/v2/index.html?clean&scene=all", APP),
    "v2b-palettes": ("design/v2/index.html?clean&scene=palettes", APP),
    "v2b-table": ("design/v2/index.html?clean&scene=table", APP),
    "v2b-card": ("design/v2/index.html?clean&scene=card", APP),
    "next-first": ("design/next/index.html?screen=first", APP),
    "next-days": ("design/next/index.html?screen=days", APP),
    "next-compact": ("design/next/index.html?screen=compact", APP),
    "next-hunt": ("design/next/index.html?screen=hunt", APP),
    "next-card": ("design/next/index.html?screen=card", APP),
    "v3-first": ("design/v3/index.html?clean&scene=first", APP),
    "v3-days": ("design/v3/index.html?clean&scene=days", APP),
    "v3-compact": ("design/v3/index.html?clean&scene=compact", APP),
    "v3-where": ("design/v3/index.html?clean&scene=where", APP),
    "v3-hunt": ("design/v3/index.html?clean&scene=hunt", APP),
    "v3-zoom-in": ("design/v3/index.html?clean&scene=zoom-in", APP),
    "v3-spectrum": ("design/v3/index.html?clean&scene=spectrum", APP),
    "v3-naming": ("design/v3/index.html?clean&scene=naming", APP),
    "v3-card": ("design/v3/index.html?clean&scene=card", APP),
    "v3-longtime": ("design/v3/index.html?clean&scene=longtime", APP),
    "v3-study": ("design/v3/index.html?clean&scene=study", APP),
    "story-diagnosis": ("design/workshop/story.html?only=diagnosis", WIDE),
    "story-center": ("design/workshop/story.html?only=center", WIDE),
    "story-glance": ("design/workshop/story.html?only=glance", WIDE),
    "story-new": ("design/workshop/story.html?only=new", WIDE),
    "story-between": ("design/workshop/story.html?only=between", WIDE),
    "story-longtime": ("design/workshop/story.html?only=longtime", WIDE),
    "v3-workshop": ("design/workshop/v3.html", WIDE),
    "features-workshop": ("design/workshop/features.html", WIDE),
}


def shoot(job):
    base, name, (path, size), tmp = job
    raw = os.path.join(tmp, name + ".png")
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=%d,%d" % size,
                    "--user-data-dir=" + os.path.join(tmp, "p-" + name), "--virtual-time-budget=6000",
                    "--screenshot=" + raw, base + "/" + path], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=120)
    im = Image.open(raw).convert("RGB")
    im.save(os.path.join(OUT, name + ".jpg"), quality=88, optimize=True)
    return name, im.size


def main():
    base = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8790").rstrip("/")
    only = set(sys.argv[2:])
    os.makedirs(OUT, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="palit-process-")
    jobs = [(base, n, s, tmp) for n, s in SHOTS.items() if not only or n in only]
    with ThreadPoolExecutor(max_workers=6) as pool:
        for name, size in pool.map(shoot, jobs):
            print(name, size)


if __name__ == "__main__":
    main()
