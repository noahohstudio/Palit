// The video's script and blocking, begun the night of October 18, 2026 (entry 173), rebuilt October 19 around Noah's
// deep dives (entry 176): the look, the user (from day one to year four) and the story, at about eight minutes.
// Every line is a draft for Noah and Daeun to rewrite; the page (design/video/index.html) keeps their edits and hands
// them to Claude with "I'm done".
// A filmed intro and outro, and everything between them animated (Noah, October 18): a real-looking desktop with a
// cursor, motion graphics of how the design changed, small data visualizations in the design system's look, and
// voiceover on top. The camera keeps moving so nothing repeats: close on the cursor, the whole desk, the palette at the
// edge, the window alone on gray (Noah, October 19). Every statistic is from the dashboard's research
// (design/history/data/research.js), with its source on screen.
// statement: the white screen that opens a section, one line in our header type with one word in one of our colors
// (Noah, October 19). The lines are placeholders until Noah writes them; the script page edits them.
// viz: the data visualization that plays the section (design/video/viz.html?scene=), driven by the player's clock.
// inserts: a visualization laid over part of a section, from at for seconds.
// part: filmed, desktop (prototype v3 playing itself) or motion (a motion graphic).
// at: the moment of the animation a line plays over, in seconds into the section as it was drawn (its authored length).
// beats: the moments of a section's animation, named, so the script page can show and change which one a line plays over
// (Noah, October 19: “The demo is playing one part while I'm still saying another part”).
// caption: a small line just above a statement's text (Noah, October 19: “Deep dive number one”).
// headers: big type over a filmed shot, one after another (the walk-in, Noah, October 19); the script page edits them.
// research: what the clip brings in, by kind: study (published), ours (our own measuring), tools (the competitor review),
// precedent (history) or brief (the competition's own words). The dashboard's Video page lists them with each clip.
// who: Noah or Daeun. The speaker split is Claude's draft; who speaks each line is theirs to pick.
// The music plays in long runs, not section by section (Noah, entry 197): the house track from the very start to its own
// end, then the product with no music, the reflective track under the deep dives, and the house track again for the outro.
// Each track's plan names where a run starts and ends; the timing at the bottom turns it into seconds.
// Noah's lines, speakers and statements from the script page, folded in on October 19 before publishing (entry 221), so the
// public site shows his words; the page still keeps any later edits in his browser
window.PALIT_SCRIPT = {
  updated: "2026-10-19",
  // Music under the exciting moments, quiet, and quieter still under the voices (entry 189). The beat is JVD's “Miami Vice”, used
  // free as a non-profit proposal, with the producer credited at the end (Noah's call). The file itself stays off the public site
  // (publish.sh leaves out design/video/audio/). level and duck are 0 to 1; duck is the share left under a voice.
  // The end credits (Noah, entry 190): who made it, the music, the pictures (from design/v2/screens/screens.json), the research
  // quoted on screen (design/history/data/research.js), and thanks. The friends and supporters are Noah's to name.
  credits: [
    { k: "Made by", v: ["Noah", "Daeun"] },
    { k: "Music", v: ["“Miami Vice” by JVD", "“Morning Garden - Acoustic Chill” by folk_acoustic, via Pixabay"] },
    { k: "Pictures", v: ["Wikipedia, “Crocoite” (CC BY-SA 4.0)", "“Crocoite from the Dundas extended mine, Dundas, Tasmania, Australia” by JJ Harrison, CC BY-SA 2.5, via Wikimedia Commons", "Wikipedia, “Brownstone” (CC BY-SA 4.0)", "“Harlem, New York brownstones” by Paul Lowry, CC BY 4.0, via Wikimedia Commons", "Wallpaper: macOS iMac Silver"] },
    { k: "Research", v: ["Koch et al., DRS 2018", "Doshi & Hauser, Science Advances, 2024", "Stoner, Loken & Stadler Blank, Journal of Consumer Psychology, 2018", "Bertsch et al., 2007", "Carroll & Rosson, 1987", "Whittaker et al., 2011", "Bae et al., Journal of Experimental Psychology: General, 2015", "Xin, Lam & Luo, Color Research & Application, 2004"] },
    { k: "Thanks", v: ["Naheel and SVSD", "Kaia Sasaki", "[More friends and supporters: yours to name, Noah]"] }
  ],
  // Noah's thanks, word for word, on white before the credits roll (entry 191)
  thanks: "Thanks to supporters and the people involved in the planning and build of this project.",
  // The calm track under the research and the deep dives (entries 191, 194 and 212). Noah, October 19: “The deep dive music is
  // also just, really sad. Can we choose something thats calmer, but also happy?” His pick from the shortlist (docs/09):
  // “Morning Garden - Acoustic Chill” by folk_acoustic, downloaded from Pixabay on October 19 (3:53, 256 kbps, -13.7 LUFS,
  // so it plays at 0.18 to sit as quietly as the old track did). It loops from where the music starts to where it ends
  // (loopFrom and loopTo, in the track), and seamAt starts it at the point that lands its loop on deep dive 3's statement, so
  // the guitar comes in again from the top there. The old track is kept beside it (audio/realization-ambient-piano.mp3), and
  // both stay off the public site with the house track.
  calm: { src: "audio/calm.mp3", title: "Morning Garden - Acoustic Chill", by: "folk_acoustic", source: "https://pixabay.com/music/acoustic-group-morning-garden-acoustic-chill-15013/", license: "Pixabay Content License, no credit required, credited anyway", level: 0.18, duck: 0.5, length: 233.06,
    loop: true, loopFrom: 0.73, loopTo: 230.35,
    // From deep dive 1's statement to the outro, in one run
    plan: [{ from: "dive1", to: "outro", seamAt: "dive3" }] },
  music: { src: "audio/miami-vice-jvd.mp3", title: "Miami Vice", by: "JVD", source: "https://prodbyjvd.beatstars.com/beat/miami-vice-24161567", license: "Free for non-profit use, credited at the end (Noah)", level: 0.3, duck: 0.3, length: 132.05,
    // From the top to the track's own end (2:12), and from the outro to the end, starting the beat again
    // fadeOut: the music fades over the last seconds of the run, as the credits go to black (Noah, October 19)
    plan: [{ from: "start", length: "track" }, { from: "outro", to: "end", fadeOut: 1.8 }] },
  frame: "1920 by 1080 at 30 frames a second. The animated desktop is 16:10, so wide shots sit at 1728 by 1080 in the middle, with 96px either side; close shots fill the frame.",
  sections: [
    {
      // Noah, October 19: “Be like 5 to 7 seconds to just have the intro. I'm kind of envisioning that we film me and Daeun walking
      // into the archive room together and getting seated.” The headers are placeholders from his message; he writes them later.
      // October 19, his note on the clip: “We could shorten this down to 4 seconds. It's just going to be a series of clips before we sit down.”
      id: "opening", part: "filmed", title: "Walking in", seconds: 4,
      scene: { status: "filmed", label: "Filmed October 19: Noah and Daeun walk into the archive room together and sit down" },
      screen: "Noah and Daeun walk into the archive room together and take their seats, with no voice yet. Big headers come in over the shot, one after another, in our type, white on the film.",
      headers: ["Noah", "Daeun", "Cooper Union", "Color palette"],
      text: ["Noah", "Daeun", "Cooper Union", "Color palette"],
      note: "Noah, October 19: “Just big headers with Noah, Daeun, Cooper Union, color palette, maybe. I don't know, something like that. I'll come up with that as soon as we kind of get everything rolling.” The headers are yours to write here; each one shows for an equal share of the shot.",
      lines: [],
      refs: [213]
    },
    {
      // Noah, October 19: “I think we can cut this down to under 10, like 8 or 9 seconds. We just say our lines pretty quickly.”
      // Then, the same day: “The text goes by way too fast” at 9 seconds, so it's said quickly (pace, 3.2 words a second) but
      // not squeezed; the footage sets the real timing once it's in (entry 219)
      id: "intro", part: "filmed", title: "Intro, in the archive room", start: 0, seconds: 20, pace: 3.2,
      scene: { status: "filmed", label: "Filmed October 19, in the library or archive room (entry 165)" },
      screen: "Noah and Daeun at a table in the archive room. If the library has an old color book, it's open between them; if not, a scan of Werner's Nomenclature of Colours (1821) cuts in.",
      text: ["Noah", "Daeun", "Palit"],
      note: "Yours to write, Noah. One starting point, from the precedent in the story workshop: Werner's Nomenclature named each color by where it's found in animals, vegetables and minerals, and Darwin took it on the Beagle.",
      lines: [
        { id: "intro-1", at: 0, who: "Noah", text: "We're designers." },
        { id: "intro-2", at: 7.4, who: "Daeun", text: "And we're inspired by where colors come from, and how we keep them as designers." },
        { id: "intro-3", at: 10, who: "Noah", text: "But today, the colors we keep from our screens lose that specialty." },
        { id: "intro-4", at: 15.4, who: "Daeun", text: "I'm Daeun." },
        { id: "intro-5", at: 16.8, who: "Noah", text: "And I'm Noah, and let us introduce you to Palit." }
      ],
      research: [{ kind: "precedent", label: "Werner's Nomenclature of Colours (1814), in the story workshop's precedents" }],
      refs: [120]
    },
    {
      id: "splash", viz: "splash", part: "motion", title: "Palit", seconds: 4,
      scene: { status: "ready", href: "viz.html?scene=splash&play", label: "Palit's splash: the mark fills with one color after another, then the name" },
      screen: "Pure white. Palit's mark, the square for now and Daeun's logo once it's in brand.js, fills with one color after another from the archive and settles on the demo's red; the name arrives beside it, bigger now, with no caption under it (Noah, October 19).",
      text: ["Palit"],
      note: "Noah, October 19: “There should be a splash screen for Palit when I say \"Palit\" to introduce it”. It lands right after “this is Palit.” The line under the name is Claude's draft, and the mark is brand.js's, so Daeun's logo drops in. The line below is from Noah's note on the script page: “I'll say something like \"Let's begin with the premise\".”",
      beats: [{ at: 0, label: "The mark turns color" }, { at: 2.6, label: "The name" }],
      lines: [
        { id: "splash-1", at: 2.6, who: "Noah", text: "Let's begin with the premise." }
      ],
      refs: [203]
    },
    {
      id: "brief", statement: { text: "Naheel's Brief", word: "Brief", color: "#2e6b6f", seconds: 3 }, viz: "brief", part: "motion", title: "The brief", start: 20, seconds: 15,
      scene: { status: "ready", href: "viz.html?scene=brief&play", label: "The brief, typed on: its two key lines, then our answer" },
      screen: "The brief's lines type on in black on white. “storytelling” gets an ink underline. Then two quiet cards answer it: who it's for, and what the story is.",
      text: ["“Pick a specific group of people and design a product they'll love, even if others might hate it.”", "“There's just one constraint: Your product must center around the theme of “storytelling.””", "For visual designers, in the ideation phase", "The story: where every color was found"],
      beats: [{ at: 0, label: "The brief" }, { at: 7.1, label: "Our answer" }],
      lines: [
        { id: "brief-1", at: 0, who: "Daeun", text: "Naheel's brief asked for a product one group would love, even if others might hate it, centred on storytelling." },
        { id: "brief-2", at: 7.1, who: "Noah", text: "Ours is for visual designers in the ideation and exploratory phase. And the story, lies with the color: where you found it, and the journey it took to get there." }
      ],
      research: [{ kind: "brief", label: "The SVSD brief, word for word (docs/06-svsd-brief.md)" }],
      refs: [121, 123]
    },
    {
      id: "problem", statement: { text: "Our Problem with color today", word: "problem", color: "#d14808", seconds: 3 }, viz: "problem", part: "motion", title: "The problem, and what we believe", start: 35, seconds: 45,
      scene: { status: "ready", href: "viz.html?scene=problem&play", label: "33 of 51 as dots, Noah's eight references and where they point, palettes growing alike, then Pantone beside Palit" },
      screen: "51 dots, 33 of them filling in. Then Noah's eight references as swatches, each labeled with where it points: two to a page about the work, the rest to image files, a repost or nothing. Then rows of palettes growing alike, and on white, Pantone's consistency beside Palit's ownership.",
      text: ["33 of 51 designers save inspiration; designers distrust sources that are poorly documented (Koch et al., DRS 2018)", "2 of 8 references on Noah's boards point to a page about the work", "With AI suggestions, stories got more creative, and more alike (Doshi & Hauser, Science Advances, 2024)", "Pantone sells consistency. Palit sells ownership."],
      beats: [{ at: 0, label: "33 of 51 designers" }, { at: 12, label: "2 of 8 references" }, { at: 22, label: "More creative, more alike" }, { at: 32, label: "Pantone and Palit" }],
      lines: [
        { id: "problem-1", at: 0, who: "Noah", text: "Designers collect color. Its a known fact. But, in one survey, 33 of 51 designers saved inspiration, yet distrusted sources that were poorly documented. Designer peers of mine have told me that they rely on screenshots for palettes, of which they lose all the time." },
        { id: "problem-2", at: 12, who: "Daeun", text: "Of eight references on our own boards, only two point to a page about the work. The rest are image files, a repost, or nothing at all." },
        { id: "problem-3", at: 22, who: "Daeun", text: "And, tools now pick colors for you. In one study, AI suggestions made people's stories a little more creative, but much more alike." },
        { id: "problem-4", at: 32, who: "Noah", text: "Just as Pantone sells consistency. Palit sells ownership over the journey: there is no palette generator. You find every color before you use it, and it's yours in your own way." }
      ],
      research: [{ kind: "study", label: "Koch et al., DRS 2018: 33 of 51 designers save inspiration" }, { kind: "ours", label: "Noah's 8 references, traced: 2 point to a page about the work" }, { kind: "study", label: "Doshi & Hauser, Science Advances, 2024: more creative, and more alike" }],
      refs: [123, 125, 177]
    },
    {
      id: "people", statement: { text: "Who is Palit for?", word: "Who", color: "#4f7cac", seconds: 3 }, viz: "people", part: "motion", title: "Who loves it, and who won't", start: 80, seconds: 30,
      scene: { status: "ready", href: "viz.html?scene=people&play", label: "Two people, side by side: one who'll love it, one who won't, and the tension between them" },
      screen: "Two quiet cards, labeled as hypotheses until interviews back them: a designer who keeps a channel of references for every project and screenshots colors they can never trace, and someone who just wants a palette in one click. A line between them pulls taut. Then one word lands.",
      text: ["A hypothesis: the designer who keeps a channel for every project", "A hypothesis: someone who wants a quick hex, or a palette in one click", "You have to earn it."],
      note: "The brief's own tension: a product one group will love, even if others hate it. The personas stay hypotheses until interviews back them up.",
      beats: [{ at: 0, label: "Who'll love it" }, { at: 10, label: "Who won't" }, { at: 20, label: "You have to earn it" }],
      lines: [
        { id: "people-1", at: 0, who: "Daeun", text: "Palit is for designers who love to explore, and train their eye for color. Ones who value archiving the precious materials they have found." },
        { id: "people-2", at: 10, who: "Noah", text: "It isn't for someone who wants a quick, unconsidered system in one click. That tension is on purpose." },
        { id: "people-3", at: 20, who: "Noah", text: "Palit doesn't just give you a color palette. You have to discover it to earn it, which is something we are so excited about. So what does this tool look like?" }
      ],
      research: [{ kind: "ours", label: "The audience: visual designers in the ideation phase (A23); both people are hypotheses until interviews back them up" }],
      refs: [178, 184]
    },
    {
      // The camera (entry 215): close on the loupe and the keep, close on naming, wide for Days, in again for Spectrum and the card,
      // wide for the palette beside the work. Moments are in v3's own time; the player follows the drawn cursor.
      camera: [[0, 1], [5.6, 1.55], [12.6, 1.3], [18.6, 1.5], [25.6, 1.1], [34.6, 1.22], [41.6, 1.18], [48.6, 1.3], [57.6, 1.2], [64.6, 1]],
      id: "demo", statement: { text: "What does Palit look like?", word: "look", color: "#5e4b8b", seconds: 3 }, part: "desktop", title: "Demo: a day with Palit", start: 80, seconds: 75,
      scene: { status: "ready", href: "../v3/index.html?clean&play", label: "Prototype v3, played hands-free (P), timed to these lines" },
      screen: "The animated desktop: Wikipedia and a crocoite photo in Preview, Palit as a square in the menu bar. The camera moves: close on the menu bar square, wide for the desk, close on the loupe as it reads the crystal, along the palette at the edge, the window alone on gray for Days and Spectrum, then wide again as the palette is dragged beside the work.",
      text: ["⌥⇧C", "Click", "Right-click", "⇧-click"],
      beats: [{ at: 0, label: "The menu bar" }, { at: 6, label: "The loupe" }, { at: 13, label: "Kept, at the edge" }, { at: 19, label: "Naming, and a whole palette" }, { at: 26, label: "Days" }, { at: 35, label: "The zoom" }, { at: 42, label: "Spectrum" }, { at: 49, label: "The specimen card" }, { at: 58, label: "The table" }, { at: 65, label: "Sharing, and the palette beside the work" }],
      lines: [
        // Noah's edit on the script page (October 19) says the loupe and the keep in one line, demo-2, so from demo-3 on each line
        // plays over the moment after the one it was drafted for, and demo-10 is gone. The drafts below follow his order.
        { id: "demo-1", at: 0, who: "Daeun", text: "Palit is a screenless software, with an emphasis on reducing visual clutter for designers" },
        { id: "demo-2", at: 6, who: "Noah", text: "You click a shortcut, and the picker reads the color under it, from anything on screen. The color you collect lands on the edge of your screen, in the palette chip." },
        { id: "demo-3", at: 19, who: "Noah", text: "You can right click to name it as you keep, or hold Shift to keep a collection." },
        { id: "demo-4", at: 26, who: "Noah", text: "When you open the dashboard, you are met with your picks of that day, every place you looked, and what you kept from there." },
        { id: "demo-5", at: 35, who: "Noah", text: "Zoom out for only color. Zoom in, and the story comes back." },
        { id: "demo-6", at: 42, who: "Daeun", text: "The spectrum presents everything you've ever found, by hue. You can click a name to change it." },
        { id: "demo-7", at: 49, who: "Daeun", text: "Open a color, and its a specimen: where it came from, your name for it, and a scratch pad to write down anything that offers context." },
        { id: "demo-8", at: 58, who: "Daeun", text: "You can bring colors to the table, try them together, and keep what works as a palette." },
        { id: "demo-9", at: 65, who: "Daeun", text: "Share it with codes, or float your palette pinned right beside your work." }
      ],
      research: [{ kind: "ours", label: "Prototype v3, playing itself: what each step of the journey became" }],
      refs: [159, 160, 167, 171, 175]
    },
    {
      id: "process", viz: "decisions", part: "motion", title: "How we worked", start: 155, seconds: 15,
      scene: { status: "ready", href: "viz.html?scene=decisions&play", label: "The decisions as data: every one of them, day by day, with the counts beside them" },
      screen: "Every logged decision as a small square, stacked by day and colored by kind, while the counts climb beside them: six workshops, 23 competitors, 67 research findings, and every decision with its reason.",
      text: ["6 workshops", "23 competitors", "67 research findings", "Over 170 decisions, each with its reason"],
      beats: [{ at: 0, label: "Every decision, day by day" }],
      lines: [
        { id: "process-1", who: "Noah", text: "Every step was a decision we can trace, hosted on a dashboard designed by us: six workshops, 23 competitors, 67 research findings, and over 170 decisions, big and small, logged as we went, with the reasoning for each. Filed. We wanted to design exactly the same way we'd use palette - collecting our journey to inform our choices." }
      ],
      research: [{ kind: "ours", label: "The decision log, every entry with its reason" }, { kind: "tools", label: "23 competitors, reviewed" }, { kind: "ours", label: "67 research findings, each with its source" }],
      refs: [74]
    },
    {
      id: "dive1", statement: { caption: "Deep dive number one", text: "From the ground Up?", word: "Up", color: "#d14808", seconds: 3 }, viz: "look", part: "motion", title: "Deep dive 1: a palette for a tool that collects color", start: 175, seconds: 90,
      // Noah, October 19: “I want to show our ugly screens... V1 versus V2 versus V3.” Two reels of our own screens (reels.js)
      // open and close it: from the ground up, then what we cut, version by version. The drawn bars for the cuts are skipped
      // (resume 90), since the real windows tell it now.
      inserts: [{ at: 0, seconds: 25, reel: "ground" }, { at: 70, resume: 90, seconds: 30, reel: "cut" }],
      scene: { status: "ready", href: "viz.html?scene=look&play", label: "Our own screens from October 16, then a picker built for handoff beside Palit, the eleven pickers, neutral everywhere, one pair of grays on three grounds and pure white, then v1, v2, v2 merged and v3, and what we cut" },
      screen: "Our own screens first, from October 16, one huge screen at a time with a cursor that points and clicks, then pulling back to show each set together: twelve lo-fi sheets, then the flows and the ideations, then Noah's reason for going neutral, on black. Then Sip's real menu bar app beside v3's real card; the eleven pickers; the window going neutral; one pair of grays on white, mid gray and black, with the count up to eight times; pure white, then the colors drop away into the app's own palette study, on black; Noah's reason. Then v1 on its desk, the desk dropping away to black as the camera moves into the window; v2, v2 merged and v3 wiping into each other; the cuts as bars on gray tracks; and what we cut, fading one by one.",
      text: ["Entry 11, October 16: twelve lo-fi sheets in Rivet", "“So there's strong research and reasoning behind every step, starting with who it's for and why.” Noah", "Sip asks which format you need. Palit asks where you found it.", "1 of 11 pickers keeps any trace of where a color came from", "Up to 8 times different, from the background alone, for 38 gray pairs (Xin, Lam & Luo, 2004)", "Pure white", "v2 merged: 29 controls and 61 words. v3: 16 and 23", "What we cut: the chip, the capture card, numbers on the tiles, New York, the column of weekdays"],
      note: "Noah's pick (entry 79), with his October 19 notes: the real screens, from the lowest fidelity up, and what we lost. The reels are Claude's draft; the line on why pure white still needs your reason, in your words.",
      beats: [{ ins: 0, at: 0, label: "Our lo-fi sheets" }, { ins: 0, at: 4.5, label: "What Noah liked in them" }, { ins: 0, at: 9, label: "The flows" }, { ins: 0, at: 14, label: "The ideations" }, { ins: 0, at: 20, label: "From the ground up" }, { at: 8, label: "Sip asks for a format" }, { at: 17, label: "1 of 11 pickers" }, { at: 25, label: "Neutral everywhere" }, { at: 33, label: "Up to 8 times" }, { at: 50, label: "White, mid gray and black" }, { at: 60, label: "Why pure white" }, { ins: 1, at: 0, label: "v1, v2, v2 merged, v3" }, { ins: 1, at: 18, label: "The cuts, measured" }, { ins: 1, at: 24, label: "What we cut" }],
      lines: [
        { id: "dive1-1", ins: 0, at: 0, who: "Daeun", text: "How do you design a palette for a tool whose whole job is color?" },
        { id: "dive1-g1", ins: 0, at: 4.5, who: "Daeun", text: "We started lo-fi: twelve sheets on the first day. None of them caught our eye, but the cards that let the color take the room did." },
        { id: "dive1-g2", ins: 0, at: 9, who: "Daeun", text: "So we went flow by flow, then idea by idea: a specimen card, a fan deck, an Albers lab, each from a reference on our boards." },
        { id: "dive1-g3", ins: 0, at: 20, who: "Noah", text: "Then we started again from the ground up, so there's strong research and reasoning behind every step." },
        { id: "dive1-2", at: 8, who: "Daeun", text: "Sip, the closest tool, is built for handoff: it asks which format you need. Palit asks where you found it." },
        { id: "dive1-3", at: 17, who: "Daeun", text: "Of eleven color pickers we studied, only one keeps any trace of where a color came from." },
        { id: "dive1-4", at: 25, who: "Daeun", text: "We went neutral everywhere, with no accent color. The colors you keep are the only color." },
        { id: "dive1-5", at: 33, who: "Daeun", text: "Then the hardest question: what surface shows a color as it is? None does. Change only the gray behind two colors, and how different they look can change by up to eight times." },
        { id: "dive1-6", at: 50, who: "Daeun", text: "We kept pure white, and gave judging its own place: every palette shows each color on white, mid gray and black." },
        { id: "dive1-7", at: 60, who: "Noah", text: "[Noah: why pure white beat the grays, in your words]" },
        { id: "dive1-8", ins: 1, at: 0, who: "Daeun", text: "Then we cut: numbers off the tiles, filters down to seven letters, names onto the colors. When the window crowded again, we took away almost half its controls. Nothing distracts from the color." },
        { id: "dive1-9", ins: 1, at: 24, who: "Daeun", text: "Along the way we lost the chip, the capture card and a serif for your names. A sound says a color is kept, cards live in the archive, and the serif didn't feel like the same tool." }
      ],
      research: [{ kind: "tools", label: "11 color pickers: only Pick keeps any trace of where a color came from" }, { kind: "study", label: "Xin, Lam & Luo, Color Research & Application, 2004: up to 8 times, for 38 gray pairs" }, { kind: "ours", label: "Measured on Days: 29 to 16 controls, 61 to 23 words, 8 to 4 type sizes" }],
      refs: [11, 13, 15, 16, 27, 58, 79, 80, 84, 87, 88, 95, 135, 156, 157, 206]
    },
    {
      camera: [[0, 1], [13.6, 1.4], [26, 1.15], [33.6, 1.35], [48, 1.1], [61.6, 1.12]],
      id: "dive2", statement: { caption: "Deep dive number two", text: "Your line about the people who use it", word: "people", color: "#4f7cac", seconds: 3 }, part: "desktop", title: "Deep dive 2: from day one to year four", start: 275, seconds: 90,
      // Noah, October 19: “a little less pretty data visualization and more ugly, terrible ways we experimented with early Palit,
      // and then how we changed it.” Before each of the three users, a reel of what we tried first (reels.js); v3 waits under
      // each one. The chart of four years is out; the day one screen and Spectrum years in stay (“so strong”, “beautiful”).
      inserts: [{ at: 14, seconds: 12, reel: "day1" }, { at: 34, seconds: 12, reel: "weeks" }, { at: 62, seconds: 14, reel: "years" }],
      scene: { status: "ready", href: "../v3/index.html?clean&play=users", label: "Prototype v3, played hands-free: day one, a few weeks in, years in, waiting under a reel of what came before each" },
      screen: "The animated desktop, three times, each after its persona's card on black and a short reel of what we tried first. Persona 1, day one: v2 opening on “Nothing under this letter yet.”, then the workshop's ways to open; then an empty window that says why, and No. 001. Persona 2, a few weeks in: naming as a stack, then three specimen cards, the camera moving across them; then a name typed into a card, a palette pinned to the desktop. Persona 3, years in: the archive as a list, three ways to open it, v2's half fan; then 1,802 colors, a search, and a spectrum that never ends.",
      text: ["v2, the first time it opens: “Nothing under this letter yet.”", "Day one", "New users skip the manual and start working (Carroll & Rosson, 1987)", "Three specimen cards: your name as the hero", "A few weeks in", "People who named something valued it more (Stoner et al., 2018)", "What you come up with yourself, you remember better (86 studies; Bertsch et al., 2007)", "The archive as a list, newest last", "Years in", "Search and time beat folders (345 people; Whittaker et al., 2011)"],
      note: "Noah's pick (entry 176): the user-centric deep dive, built from his three users (D25). October 19: the four-year chart is replaced by the screens we tried first. The reels are Claude's draft.",
      beats: [{ at: 0, label: "Three personas" }, { ins: 0, at: 0, label: "Persona 1: day one" }, { ins: 0, at: 1.8, label: "Before: v2's first open" }, { ins: 0, at: 6.6, label: "Before: ways a new user's Palit could open" }, { at: 14, label: "Day one" }, { ins: 1, at: 0, label: "Persona 2: a few weeks in" }, { ins: 1, at: 1.8, label: "Before: naming as a stack" }, { ins: 1, at: 5.4, label: "Before: three specimen cards" }, { at: 34, label: "A few weeks in" }, { ins: 2, at: 0, label: "Persona 3: years in" }, { ins: 2, at: 1.8, label: "Before: the archive as a list" }, { ins: 2, at: 5, label: "Before: where it opens" }, { ins: 2, at: 10.5, label: "Before: v2's Spectrum" }, { at: 62, label: "Years in" }],
      lines: [
        { id: "users-1", at: 0, who: "Noah", text: "Palit has to work on day one and in year four. So we designed for three personas, built from our research: someone opening it for the first time, someone a few weeks in, and someone with years of colors." },
        { id: "users-d1", ins: 0, at: 1.8, who: "Noah", text: "Our first archive opened on a single line: “Nothing under this letter yet.” It felt empty, and it didn't say why." },
        { id: "users-2", at: 14, who: "Noah", text: "New users skip the manual and start working. So day one is an empty window that says why, and one keystroke starts the first hunt. Your first color becomes number one." },
        { id: "users-w1", ins: 1, at: 1.8, who: "Noah", text: "Naming started as a form: a stack of colors to name one at a time. Then we drew three cards, and your name became the hero." },
        { id: "users-3", at: 34, who: "Noah", text: "A few weeks in, the colors become yours. You name them, and in three studies, people who named something valued it more; what you come up with yourself, you remember better. Pin a palette to your desktop, and a project stays consistent." },
        { id: "users-y1", ins: 2, at: 1.8, who: "Noah", text: "For years of colors, we first tried a list, newest last, and a wall of everything. Both only get longer." },
        { id: "users-4", at: 62, who: "Noah", text: "Years in, it's about finding them again. People find things by searching and by time, not folders, so Palit keeps days, and searches by name, place or code. And once your colors fill a full circle, Spectrum never ends." }
      ],
      research: [{ kind: "study", label: "Carroll & Rosson, 1987: new users skip the manual" }, { kind: "study", label: "Stoner, Loken & Stadler Blank, 2018: naming something makes it feel more yours" }, { kind: "study", label: "Bertsch et al., 2007: what you come up with, you remember better (86 studies)" }, { kind: "study", label: "Whittaker et al., 2011: search and time beat folders (345 people)" }, { kind: "ours", label: "Three users: day one, a few weeks in, years in (D25)" }],
      refs: [15, 16, 96, 97, 99, 120, 129, 166, 85, 81, 131, 167, 206]
    },
    {
      id: "dive3", statement: { caption: "Deep dive number three", text: "Your line about the story", word: "story", color: "#5b3a63", seconds: 3 }, viz: "story", part: "motion", title: "Deep dive 3: where the story lives", start: 370, seconds: 90,
      // Noah, October 19: a design friend “said it was visually cluttered”, and “Let's show our prototyping for that in the
      // lowest fidelity possible, then work our way up.” After the research and the audit, a reel from paper up to the preview,
      // then v3's zoom stop by stop. The drawn three ways, diary and dial are skipped (resume 66 and 90).
      inserts: [{ at: 34, resume: 66, seconds: 30, reel: "clutter" }, { at: 66, resume: 90, seconds: 14, reel: "dial" }],
      scene: { status: "ready", href: "viz.html?scene=story&play", label: "Memory drifting and the audit, then a designer friend's feedback and our prototyping from paper up, then v3's zoom stop by stop" },
      screen: "A yellowish green remembered greener, sliding along a hue bar. The audit as a table in v3's own rows: nine parts of a color's story, two in ink before a click. Then a designer friend's feedback in Noah's words, on black. Then back to our redesign from the ground up: the roughest lo-fi sheets, the research and the story workshop, the preview of his picks, the camera moving across each set. Then v3's zoom on black, the app alone, each stop growing out of the last: only color, your names, and where, the hunt.",
      text: ["Colors drift toward their category in memory (Bae et al., 2015)", "2 of 9", "A designer friend: visually cluttered", "Paper first", "The story workshop", "The preview", "Only color, your names, and where, the hunt"],
      note: "Noah's pick (entry 176): the deep dive on the tool and the brief. October 19: our UXR, a designer friend's feedback (when it came is Noah's to add), and the prototyping from the lowest fidelity up. Noah's paper sketches go in design/video/sketches/. The reels are Claude's draft.",
      beats: [{ at: 0, label: "Memory drifts" }, { at: 16, label: "Before a click: 2 of 9" }, { ins: 0, at: 0, label: "A friend: visually cluttered" }, { ins: 0, at: 7, label: "Our roughest lo-fi sheets" }, { ins: 0, at: 15, label: "The research and the story workshop" }, { ins: 0, at: 23, label: "The preview" }, { ins: 1, at: 0, label: "Only color" }, { ins: 1, at: 3.5, label: "Your names" }, { ins: 1, at: 7, label: "And where" }, { ins: 1, at: 10.5, label: "The hunt" }],
      lines: [
        { id: "dive3-1", at: 0, who: "Noah", text: "Memory alone can't hold a color: a color you remember drifts toward the middle of its category. So Palit keeps the exact color, and its story." },
        { id: "dive3-2", at: 16, who: "Noah", text: "The brief asked for storytelling, and our first archive hid the story one click deep. Before you clicked, you saw two of the nine things Palit keeps about a color." },
        { id: "dive3-c1", ins: 0, at: 0, who: "Noah", text: "A designer friend told us it was visually cluttered. Why were we adding so many clicks? Why couldn't you see what matters as it appears?" },
        { id: "dive3-c2", ins: 0, at: 7, who: "Noah", text: "So we went back to our redesign from the ground up: our roughest lo-fi sheets, then the research behind them." },
        { id: "dive3-3", ins: 0, at: 15, who: "Noah", text: "We tried three ways to bring it forward: an archive of places, a ruled catalogue after a color book from 1821, and days, each with its places." },
        { id: "dive3-4", ins: 0, at: 23, who: "Noah", text: "We chose days with their places. It reads like a diary of where your eye went." },
        { id: "dive3-5", ins: 1, at: 0, who: "Noah", text: "And the zoom became a dial for the story: only color, then your names, then where, then the whole hunt. From any color, you can keep following the trail." }
      ],
      research: [{ kind: "study", label: "Bae et al., Journal of Experimental Psychology: General, 2015: colors drift toward their category in memory" }, { kind: "ours", label: "The audit: before a click, 2 of the 9 parts of a color's story" }, { kind: "precedent", label: "Werner, Vanderpoel, Ridgway, Wada and Pantone, from the story workshop" }],
      refs: [11, 120, 124, 126, 127, 134, 206]
    },
    {
      id: "horizon", statement: { text: "Your line about the horizon", word: "horizon", color: "#7a8b99", seconds: 3 }, viz: "horizon", part: "motion", title: "On the horizon", seconds: 30,
      scene: { status: "ready", href: "viz.html?scene=horizon&play", label: "What's next, rising over a horizon line: a Palit MCP, and Palit inside the tools you already use" },
      screen: "A coding assistant's terminal: the Palit MCP connects by its mark, reads three colors you found, with where you found each, and says it never makes one. Then the palette chip floats over the tools you already use and docks at a window's edge. Then a found square and one line, centered: you still find every color.",
      text: ["A Palit MCP: it reads your archive and brings the colors you found into your design system. It never makes one.", "Inside the tools you already use, not another window", "You still find every color."],
      note: "Noah's horizon (entry 193): the MCP and the plugins are his, and neither may read as pro-AI or add clutter. Claude's suggestions are listed beside it, for Noah to pick.",
      beats: [{ at: 0, label: "A Palit MCP" }, { at: 14, label: "Inside the tools you use" }, { at: 23, label: "You still find every color" }],
      lines: [
        { id: "horizon-1", at: 0, who: "Noah", text: "On the horizon: a Palit MCP. An assistant could read your archive and bring the colors you found into your design system. It never makes a color; it only uses the ones you kept." },
        { id: "horizon-2", at: 14, who: "Noah", text: "The possibilities for Palit are endless - design workflows, creative projects, integration into software, even the color grading of the footage we use in this video was done with Palit" },
        { id: "horizon-3", at: 23, who: "Noah", text: "Whatever comes next keeps one rule: you go out and find every color." }
      ],
      // Claude's suggestions for the horizon, each with what keeps it true to Palit; Noah picks
      suggestions: [
        { title: "A specimen book of your year", how: "Your colors and where you found them, printed like Werner's Nomenclature. The archive, made physical; nothing generated." },
        { title: "Picking from the physical world", how: "Your iPhone's camera as the loupe, keeping where you stood. You still go out and find it." },
        { title: "Testing with designers", how: "The two people in this video are still hypotheses; interviews and tests come next." },
        { title: "A palette that travels to a team", how: "Shared only once you sign off on the network (Q23), so the archive stays yours and local first." }
      ],
      research: [{ kind: "ours", label: "Q10, where AI fits: a narrow, read-only MCP over your archive" }, { kind: "ours", label: "The opinion, in Noah's words (A70): no palette generation, no AI; you go out and find it" }],
      refs: [123, 193]
    },
    {
      id: "outro", part: "filmed", title: "What's next", start: 465, seconds: 25,
      scene: { status: "filmed", label: "Filmed with the intro, October 19" },
      screen: "Back in the archive room. Daeun's mark for Palit fills with one color after another.",
      text: ["Palit"],
      note: "Noah, October 19: “Our outro is going to be way less: 12 seconds, 15 seconds.” It ends on Palit's mark becoming the last color you kept, then the hopeful line, then the last one: go find a color. Then the splash plays once more, and the credits.",
      lines: [
        { id: "outro-1", who: "Daeun", text: "Palit's mark becomes the last color you kept." },
        { id: "outro-2", who: "Noah", text: "And we'll keep exploring how a palette travels to a team, and into the tools you already use." },
        { id: "outro-3", who: "Daeun", text: "Until then, go find a color. Thank you." }
      ],
      refs: [163, 108]
    },
    {
      id: "splash-end", viz: "splash", part: "motion", title: "Palit, once more", seconds: 4,
      scene: { status: "ready", href: "viz.html?scene=splash&play", label: "The splash again, to close" },
      screen: "The splash once more, right after the last line: the mark fills with one color after another and settles, then the name and its line.",
      text: ["Palit", "Every color, with where you found it."],
      note: "Noah, October 19: “I also think we could just play the splash one more time at the very end to really drill the message home.”",
      lines: [],
      refs: [203]
    },
    {
      // Noah, October 19: “after they appear for about 2 seconds, we can fade them out just as quickly and then fade out the music.
      // Screen goes to black”
      id: "credits", viz: "credits", part: "motion", title: "Credits", seconds: 4,
      scene: { status: "ready", href: "viz.html?scene=credits&play", label: "The credits on one screen, for two seconds" },
      screen: "One screen on white: Noah's thanks at the top, then who made it, the music, the pictures, the research we quote, and the friends and supporters, in columns, small enough to fit. Two seconds; anyone curious can pause.",
      text: ["Thanks to supporters and the people involved in the planning and build of this project.", "Made by Noah and Daeun", "Music", "Pictures, with their licenses", "The research we quote", "Thanks: friends and supporters"],
      note: "Noah, October 19: “Credits do not need to be 12 seconds. It could be 2 seconds, really quickly, on one screen. People who are interested can pause just to see it.”",
      lines: [],
      refs: [190]
    }
  ]
};
// Where a track plays: its runs as [start, end, where in the track it starts], in the video's time (entry 197).
// "start" and "end" are the video's; a section's id is where it opens (its statement, when it has one).
window.palitMusicWindows = function (S, edits, layer) {
  var M = S[layer || "music"];
  if (!M || !M.plan) return [];
  function at(name, end) {
    if (name === "start") return 0;
    if (name === "end") return S.total;
    var x = S.sections.filter(function (y) { return y.id === name; })[0];
    return x ? (x.statement ? x.statementAt : x.start) : (end ? S.total : 0);
  }
  return M.plan.map(function (r) {
    var a = at(r.from), b = r.length === "track" ? a + (M.length || 0) : at(r.to || "end", true), from = r.trackAt || 0;
    // seamAt: start a looping track partway in, so its loop comes round just as that section opens (entry 212)
    if (r.seamAt && M.loop && M.loopTo) { var gap = at(r.seamAt) - a; if (gap > 0 && gap <= M.loopTo - (M.loopFrom || 0)) from = M.loopTo - gap; }
    return [a, Math.min(b, S.total), Math.round(from * 100) / 100, r.fadeOut || 0];
  });
};
// The timing comes from the script itself (Noah, entry 205): each line takes as long as it takes to say, a little faster than a
// normal pace, and the picture waits for it. Each section's beats are the moments of its animation, and each line plays over
// one of them (its at, or the moment Noah picks for it on the script page, saved as beats). A line's start and end are when
// it's said, once the lines before it have been said. A moment whose line is deleted fast-forwards (skip); a section whose
// lines are all deleted is cut, statement and all. Each section's warp maps its video time to the animation's time, so every
// moment lands on its line however the lines change; floor keeps a moment that's said from being squeezed to less than that
// share of its length. Pages read start, seconds, statementAt, cut, each line's beat, start and end, and warp.
// minLine: no line is on screen for less than this, so a short one (“I'm Daeun.”) can be read (Noah, October 19, entry 219)
window.PALIT_PACE = { wordsPerSecond: 2.8, gap: 0.45, tail: 0.8, ask: 6, skip: 0.34, minLine: 1.2, floor: { motion: 0.5, desktop: 0.75, filmed: 0 } };
window.palitEdits = function () { try { return JSON.parse(localStorage.getItem("palit-video-script") || "null") || {}; } catch (e) { return {}; } };
// A section's timeline with its inserts spliced in (entry 206): the main animation runs up to an insert's at, the insert plays
// for its own seconds while the main one waits, and the main one carries on from resume (a chart can skip ahead; the
// animated desktop can't, so it carries on from at). Sets each insert's start and end and the section's span, in section time.
window.palitSpans = function (x) {
  var A = x.authored, t = 0, from = 0, spans = [];
  (x.inserts || []).forEach(function (n, i) {
    var at = Math.max(from, Math.min(A, n.at)), resume = x.part === "desktop" ? at : Math.max(at, Math.min(A, n.resume !== undefined ? n.resume : at));
    spans.push({ kind: "main", s: t, e: t + (at - from), m0: from });
    t += at - from;
    n.start = t; n.end = t + n.seconds; n.holdAt = at;
    spans.push({ kind: "ins", s: t, e: n.end, i: i, at: at });
    t = n.end; from = resume;
  });
  spans.push({ kind: "main", s: t, e: t + (A - from), m0: from });
  x.spans = spans; x.span = t + (A - from);
  return x.span;
};
// Section time for a moment of the main animation: a moment where an insert comes in plays after the insert
window.palitSecAt = function (x, m) {
  var sp = x.spans || [];
  for (var i = 0; i < sp.length; i++) { var p = sp[i]; if (p.kind !== "main") continue; if (m < p.m0) return p.s; if (m < p.m0 + (p.e - p.s)) return p.s + (m - p.m0); }
  return x.span !== undefined ? x.span : m;
};
// Where the main animation is at a section time: an insert holds it at the moment it came in
window.palitMainTime = function (x, s) {
  var sp = x.spans || [];
  for (var i = 0; i < sp.length; i++) { var p = sp[i]; if (s < p.e || i === sp.length - 1) return p.kind === "main" ? p.m0 + Math.max(0, s - p.s) : p.at; }
  return s;
};
// A line's or a beat's moment, in section time: an insert's are counted from the insert's start
window.palitMoment = function (x, o) { return o.ins !== undefined && x.inserts && x.inserts[o.ins] ? x.inserts[o.ins].start + o.at : window.palitSecAt(x, o.at); };
window.palitRetime = function (S, edits) {
  var P = window.PALIT_PACE, e = edits || window.palitEdits(), txt = e.text || {}, picks = e.beats || {};
  function words(s) { s = (s || "").trim(); return s ? s.split(/\s+/).length : 0; }
  var wps = P.wordsPerSecond;
  function say(s) { return /^\[/.test((s || "").trim()) ? P.ask : Math.max(P.minLine || 0, words(s) / wps); }
  var t = 0;
  S.sections.forEach(function (x) {
    wps = x.pace || P.wordsPerSecond;   // a section can be said a little faster (the intro)
    if (x.authored === undefined) x.authored = x.seconds;
    var A = window.palitSpans(x), all = x.lines || [], floor = x.part in P.floor ? P.floor[x.part] : 0.5, skip = Math.min(floor || 1, P.skip);
    // Authored beats: each line's at, or spread over the authored length by words where a section has none
    if (all.length && !all.every(function (l) { return typeof l.at === "number"; })) {
      var tw = all.reduce(function (n, l) { return n + Math.max(1, words(l.text)); }, 0), acc = 0;
      all.forEach(function (l) { l.at = Math.round(x.authored * acc / tw * 10) / 10; acc += Math.max(1, words(l.text)); });
    }
    all.forEach(function (l) { l.sec0 = Math.round(window.palitMoment(x, l) * 1000) / 1000; });
    (x.beats || []).forEach(function (b) { b.sec = Math.round(window.palitMoment(x, b) * 1000) / 1000; });
    // Walk every line, said or not: pa and pb are where the last moment began, in the animation and in the video
    var warp = [[0, 0]], pa = 0, pb = 0, pEnd = 0, pace = 1, said = 0;
    all.forEach(function (l) {
      var text = txt[l.id] !== undefined ? txt[l.id] : l.text, on = !!text.trim();
      var a = picks[l.id] !== undefined && isFinite(+picks[l.id]) ? +picks[l.id] : l.sec0;
      a = Math.max(pa, Math.min(A, a));   // a line can't go back to a moment before the line ahead of it
      var b = pb + (a - pa) * pace;
      if (on) b = said ? Math.max(pEnd + P.gap, b) : Math.max(pEnd, b);
      else b = Math.max(pEnd, b);
      l.beat = a; l.start = on ? Math.round(b * 100) / 100 : undefined; l.end = on ? Math.round((b + say(text)) * 100) / 100 : undefined;
      if (b > 0 || a > 0) warp.push([Math.round(b * 1000) / 1000, a]);
      if (on) { pEnd = b + say(text); said++; }
      pa = a; pb = b; pace = on ? floor : skip;
    });
    x.cut = all.length > 0 && !said;
    var E = x.cut ? 0 : said ? Math.max(pEnd + P.tail, pb + (A - pa) * pace) : A;
    // fit: the lines are said faster, to fit the section into that many seconds (the intro, entry 215)
    if (x.fit && E > x.fit) { var sq = x.fit / E; warp = warp.map(function (w) { return [Math.round(w[0] * sq * 1000) / 1000, w[1]]; }); all.forEach(function (l) { if (typeof l.start === "number") { l.start = Math.round(l.start * sq * 100) / 100; l.end = Math.round(l.end * sq * 100) / 100; } }); E = x.fit; }
    if (said) warp.push([Math.round(E * 1000) / 1000, A]);
    x.seconds = Math.round(E * 10) / 10; x.warp = warp;
    // Mark where each insert starts and ends on the warp, so the animated desktop can wait out an insert exactly
    if (said) (x.inserts || []).forEach(function (n) {
      [n.start, n.end].forEach(function (sa) {
        if (warp.some(function (w) { return Math.abs(w[1] - sa) < 1e-6; })) return;
        var v = window.palitVideoTime(x, sa);
        for (var i = 1; i < warp.length; i++) if (warp[i][1] > sa) { warp.splice(i, 0, [Math.round(v * 1000) / 1000, sa]); return; }
        warp.push([Math.round(v * 1000) / 1000, sa]);
      });
    });
    if (x.statement) { x.statementAt = t; if (!x.cut) t = Math.round((t + x.statement.seconds) * 10) / 10; }
    x.start = t; t = Math.round((t + x.seconds) * 10) / 10;
  });
  S.total = Math.round(t * 10) / 10;
  return S;
};
// Where the animation is, given the time into a section (and back again)
window.palitSceneTime = function (x, into) {
  var w = x.warp || [[0, 0]];
  if (into <= w[0][0]) return into;
  for (var i = 0; i < w.length - 1; i++) if (into <= w[i + 1][0]) { var d = w[i + 1][0] - w[i][0]; return d > 0 ? w[i][1] + (into - w[i][0]) * (w[i + 1][1] - w[i][1]) / d : w[i + 1][1]; }
  var l = w[w.length - 1]; return l[1] + (into - l[0]);
};
window.palitVideoTime = function (x, at) {
  var w = x.warp || [[0, 0]];
  for (var i = 0; i < w.length - 1; i++) if (at <= w[i + 1][1]) { var d = w[i + 1][1] - w[i][1]; return d > 0 ? w[i][0] + (at - w[i][1]) * (w[i + 1][0] - w[i][0]) / d : w[i][0]; }
  var l = w[w.length - 1]; return l[0] + (at - l[1]);
};
window.palitRetime(window.PALIT_SCRIPT);
