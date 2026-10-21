// The deep dives' reels: our own screens, from the lowest fidelity up, kept the way Palit keeps a color: each with its
// date, the log entry it came from, and what changed (Noah, October 19: “I want to show our ugly screens. I want to show
// kind of the extremely low-fidelity mockups we worked with”). Only work from October 16 on (Noah: “October 16, to be safe”).
// Rebuilt from Noah's notes on the clips (entry 215): one huge screen at a time that slides on to the next, a cursor that
// points and clicks, the camera pulling back to show a set together, the desk dropping away to black for the window alone,
// versions wiping into each other, the zoom's stops growing out of each other, and personas named on screen.
// viz.html?scene=reel&set=ground draws one; the player lays it over its deep dive as an insert (script.js).
// Every caption is a draft for Noah. A note in quotes is someone's words from the log, word for word.
// Kinds (viz.html has the details): strip, window, versions, bars, title, quote, list, shot, row and sketch.
// at: seconds into the reel an item comes in; a strip's path and a version's times are seconds into the item. Paths are
// from design/video/. win is where the window sits in its screenshot, as fractions. focus: [x, y, scale] pushes a shot in.
(function () {
  var V3WIN = [0.104, 0.069, 0.882, 0.929], V1WIN = [0.065, 0.062, 0.94, 0.9], P = "../history/shots/process/", H = "../history/shots/";
  window.PALIT_REELS = {
    // Deep dive 1 opened from the ground up (Noah's statement: “From the ground Up?”). Since October 21 deep dive 1 is one scene
    // (viz.html's look) and plays neither this reel nor cut; both stay as they were for the log's links (entries 206 and 216)
    ground: { seconds: 25, items: [
      { at: 0, kind: "strip", entry: 11, date: "October 16", title: "Twelve lo-fi sheets in Rivet", note: "None caught Noah's eye. What he liked: cards that let the color take the room.",
        shots: [[H + "lofi-04.jpg", "Round 2"], [H + "lofi-06.jpg", "Read like a magazine"], [H + "lofi-11.jpg", "The expressive pass"]],
        path: [{ at: 0, show: 0, cur: [0.3, 0.42] }, { at: 1.3, cur: [0.62, 0.5], click: true }, { at: 2.8, show: 1, cur: [0.4, 0.35] }, { at: 4.2, cur: [0.55, 0.7], click: true }, { at: 5.6, show: 2, cur: [0.35, 0.5] }, { at: 7.3, show: "all" }] },
      { at: 9, kind: "strip", entry: 16, date: "October 16", title: "Then flow by flow, and twelve more from our references", note: "A capture card, the archive as a grid, a specimen card, a fan deck, an Albers lab.",
        shots: [[H + "flows-04.jpg", "Keeping a color"], [H + "flows-11.jpg", "The archive as a grid"], [H + "ideations-04.jpg", "A specimen card"], [H + "ideations-07.jpg", "A fan deck"], [H + "ideations-11.jpg", "An Albers lab"]],
        path: [{ at: 0, show: 0, cur: [0.82, 0.18] }, { at: 0.9, cur: [0.86, 0.2], click: true }, { at: 1.9, show: 1, cur: [0.3, 0.45] }, { at: 3.6, show: 2, cur: [0.68, 0.35] }, { at: 4.4, cur: [0.66, 0.6], click: true }, { at: 5.4, show: 3, cur: [0.5, 0.5] }, { at: 7, show: 4, cur: [0.62, 0.48], click: true }, { at: 8.6, show: "all" }] },
      // Noah asked for a more pivotal quote than entry 27's; this is his reason for going neutral against the recommendation
      { at: 20, kind: "quote", bg: "#000", entry: 9, date: "October 16", title: "The canvas goes neutral everywhere, against the recommendation", text: "A neutral canvas lets you judge color honestly.", who: "Noah" }
    ] },
    // Deep dive 1 ends on what we cut, version by version (Noah: “V1 versus V2 versus V3”, and what we lost)
    cut: { seconds: 30, items: [
      { at: 0, kind: "window", entry: 58, date: "October 18", title: "v1: every tile carried its number, its name and its source", note: "The core journey, built from the design system.", src: P + "v1-archive.jpg", win: V1WIN, winAt: 1.6,
        path: [{ at: 2.6, cur: [0.2, 0.4] }, { at: 3.6, cur: [0.24, 0.47], click: true }] },
      { at: 5, kind: "versions", win: V3WIN, winAt: 0, title: "v2", note: "Measured on Days.",
        shots: [[P + "v2a-days.jpg", "v2: a wall with nothing on it but color", 95, "October 18"], [P + "v2b-days.jpg", "v2, merged: 29 controls and 61 words around the colors", 156, "October 18"], [P + "v3-days.jpg", "v3: 16 controls and 23 words", 159, "October 18"]],
        times: [0, 4.4, 8.8] },
      { at: 18, kind: "bars", entry: 159, date: "October 18", title: "Then we cut, measured on Days", note: "v2 in the afternoon, v2 merged that evening, then v3.",
        rows: [{ label: "Controls around the colors", max: 29, values: [["v2, the afternoon", 15, "#2e6b6f"], ["v2, merged", 29, "#d14808"], ["v3", 16, "#f0c23b"]] },
               { label: "Words outside them", max: 61, values: [["v2, the afternoon", 23, "#2e6b6f"], ["v2, merged", 61, "#d14808"], ["v3", 23, "#f0c23b"]] }] },
      { at: 24, kind: "list", title: "What we cut along the way", rows: [
        ["The chip after every capture", 84], ["The capture card", 88], ["Numbers on the tiles", 95], ["New York for your names", 135], ["The column of weekdays", 157]
      ] }
    ] },
    // Deep dive 2: each persona, then what we tried for them first (Noah: “our day 1 user, midweek user, and year 4 user are
    // personas ... actual personas we studied and designed for”). Out of the cut since October 21 (entry 255): deep dive 2's
    // inserts are its own scenes now (viz.html's users1, users2 and users3); these three stay for the record.
    day1: { seconds: 12, items: [
      { at: 0, kind: "title", bg: "#000", title: "Persona 1: day one", sub: "Opening Palit for the first time" },
      { at: 1.8, kind: "shot", entry: 120, date: "October 18", title: "v2, the first time it opens", note: "“Why does the dashboard feel so empty?” Noah", src: P + "v2a-empty.jpg", focus: [0.035, 0.22, 1.9] },
      { at: 6.6, kind: "shot", entry: 129, date: "October 18", title: "How a new user's Palit could open", note: "We picked one line: every color in Palit is one you found.", src: P + "story-new.jpg", focus: [0.5, 0.45, 1.12] }
    ] },
    weeks: { seconds: 12, items: [
      { at: 0, kind: "title", bg: "#000", title: "Persona 2: a few weeks in", sub: "The colors become yours" },
      { at: 1.8, kind: "shot", entry: 16, date: "October 16", title: "Naming, at first: a stack to triage", note: "“Name it so you remember it”, one color at a time.", src: H + "ideations-12.jpg", focus: [0.52, 0.45, 1.25] },
      { at: 5.4, kind: "strip", entry: 99, date: "October 18", title: "Three specimen cards", note: "“Specimen card vibe, but with your name being the hero is exactly what I want” Noah",
        shots: [[H + "look-type-a.jpg", "The name under the color"], [H + "look-type-b.jpg", "Your name as the hero"], [H + "look-type-c.jpg", "The number as the hero"]],
        path: [{ at: 0, show: 0, cur: [0.5, 0.82] }, { at: 1.5, show: 1, cur: [0.45, 0.62] }, { at: 2.4, cur: [0.48, 0.66], click: true }, { at: 3.6, show: 2, cur: [0.4, 0.35] }, { at: 5, show: "all" }] }
    ] },
    years: { seconds: 14, items: [
      { at: 0, kind: "title", bg: "#000", title: "Persona 3: years in", sub: "Thousands of colors, found again" },
      { at: 1.8, kind: "shot", entry: 15, date: "October 16", title: "The archive as a list, newest last", src: H + "flows-10.jpg", from: "Flow explorations", focus: [0.5, 0.3, 1.2] },
      { at: 5, kind: "strip", entry: 97, date: "October 18", title: "Where it opens: everything, today, or one color", note: "It opens on today.",
        shots: [[H + "look-home-a.jpg", "Everything, newest first"], [H + "look-home-b.jpg", "Today first"], [H + "look-home-c.jpg", "One color"]],
        path: [{ at: 0, show: 0, cur: [0.5, 0.5] }, { at: 1.3, show: 1, cur: [0.3, 0.3] }, { at: 2, cur: [0.32, 0.34], click: true }, { at: 2.9, show: 2, cur: [0.5, 0.5] }, { at: 4.2, show: "all" }] },
      { at: 10.5, kind: "shot", entry: 96, date: "October 18", title: "Spectrum in v2: half a fan, and then it ends", note: "Now it loops once your colors fill a full circle (entry 167).", src: P + "v2a-spectrum.jpg", focus: [0.5, 0.75, 1.15] }
    ] },
    // Deep dive 3: a designer friend's feedback, then back to our redesign from the ground up: the roughest lo-fi sheets, the
    // research behind them and the story workshop, then the preview (Noah: “go back to our redesign era, when we pivoted fully”)
    clutter: { seconds: 30, items: [
      // When the friend saw it isn't in the log yet: Noah's to say
      { at: 0, kind: "quote", bg: "#000", title: "A designer friend called it visually cluttered", text: "Why are we adding so many different clicks? Why can't we see all the crucial information when it appears, or with the different scroll sections?", who: "Noah, on the feedback" },
      { at: 7, kind: "strip", entry: 11, date: "October 16", title: "Back to our roughest lo-fi sheets", note: "A diary by day, and days as stripes, were already there.",
        shots: [[H + "lofi-07.jpg", "Read like a page: a diary by day"], [H + "lofi-12.jpg", "Days as stripes"], [H + "lofi-08.jpg", "A ledger and a wall by hue"]],
        path: [{ at: 0, show: 0, cur: [0.62, 0.45] }, { at: 1.2, cur: [0.64, 0.52], click: true }, { at: 2.4, show: 1, cur: [0.72, 0.78] }, { at: 4, show: 2, cur: [0.5, 0.4] }, { at: 5.6, show: "all" }] },
      { at: 15, kind: "strip", entry: 120, date: "October 18", title: "The research behind them, and the story workshop", note: "What's wrong, what the archive centers on, how much shows before a click.",
        shots: [[P + "story-diagnosis.jpg", "Which of these is it?"], [P + "story-center.jpg", "What it centers on"], [P + "story-glance.jpg", "Before a click"]],
        path: [{ at: 0, show: 0, cur: [0.66, 0.2] }, { at: 1.4, show: 1, cur: [0.5, 0.42] }, { at: 2.3, cur: [0.52, 0.46], click: true }, { at: 3.6, show: 2, cur: [0.45, 0.5] }, { at: 5.4, show: "all" }] },
      { at: 23, kind: "strip", entry: 134, date: "October 18", title: "Noah's picks, in a local preview", note: "“We need to visualize, and run it through my eyes once more” Noah",
        shots: [[P + "next-days.jpg", "Days, with their places"], [P + "next-compact.jpg", "Compact"], [P + "next-hunt.jpg", "The hunt"]],
        path: [{ at: 0, show: 0, cur: [0.4, 0.3] }, { at: 1.6, show: 1, cur: [0.5, 0.5] }, { at: 3.2, show: 2, cur: [0.3, 0.4] }, { at: 4.2, cur: [0.32, 0.43], click: true }, { at: 5.4, show: "all" }] }
    ] },
    // Deep dive 3 ends on v3's zoom, the dial for the story: the app alone on black, each stop growing out of the last
    // (Noah: “a big moment where we have the actual app itself just be almost the entire screen”)
    dial: { seconds: 14, items: [
      { at: 0, kind: "versions", morph: "grow", win: V3WIN, winAt: 0, title: "Only color", note: "Prototype v3: the zoom's four stops.",
        shots: [[P + "v3-compact.jpg", "Only color", 127, "October 18"], [P + "v3-days.jpg", "Your names", 127, "October 18"], [P + "v3-where.jpg", "And where", 127, "October 18"], [P + "v3-hunt.jpg", "The hunt", 127, "October 18"]],
        times: [0, 3.5, 7, 10.5] }
    ] }
  };
})();
