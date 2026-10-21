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
  // The closing's block, round three: the pictures now credit every picture by someone else that the cut shows, as of October 21:
  // the two desks the playbacks use, the eight references on our boards that the problem shows (with the two that still credit
  // their source, in the problem's own words), and Sip's home page in deep dive 1. Those two lines are Claude's drafts. A line in
  // brackets would show on screen as a note, so anything still to be named goes in a group's todo, which the credits never show.
  // The names are Noah's (October 21, the closing's workshop): “For our names, lets do Noah Oh and Daeun Chung. I'd also like to
  // thank Ricky Yurewitch, Carmelle Safdie, Mike Essl, and The Cooper Union”, and “kaia is actually spelt Kaya.” More music may
  // come (his note): add its credit to Music, and the credits' type steps down by itself if a column runs long.
  credits: [
    { k: "Made by", v: ["Noah Oh", "Daeun Chung"] },
    { k: "Music", v: ["“Miami Vice” by JVD", "“Can't Get You Off My Mind” by Michael Ramir C., via Mixkit", "“Jungle Voices” by Diego Nava, via Mixkit", "“Atoms in Peace” by Alejandro Magaña (A. M.), via Mixkit"] },
    { k: "Pictures", v: ["Wikipedia, “Crocoite” (CC BY-SA 4.0)", "“Crocoite from the Dundas extended mine, Dundas, Tasmania, Australia” by JJ Harrison, CC BY-SA 2.5, via Wikimedia Commons", "Wikipedia, “Brownstone” (CC BY-SA 4.0)", "“Harlem, New York brownstones” by Paul Lowry, CC BY 4.0, via Wikimedia Commons", "Wallpaper: macOS iMac Silver", "Eight references from our boards, as we saved them; two still credit their source: francofrontera.com, on SOUND, and The Dieline, on Ravex", "Sip's home page (sipapp.io), captured October 19, 2026, © Sip"] },
    { k: "Research", v: ["Koch et al., DRS 2018", "Doshi & Hauser, Science Advances, 2024", "Stoner, Loken & Stadler Blank, Journal of Consumer Psychology, 2018", "Bertsch et al., 2007", "Carroll & Rosson, 1987", "Whittaker et al., 2011", "Bae et al., Journal of Experimental Psychology: General, 2015", "Xin, Lam & Luo, Color Research & Application, 2004"] },
    { k: "Thanks", v: ["Naheel and SVSD", "Kaya Sasaki", "Ricky Yurewitch", "Carmelle Safdie", "Mike Essl", "The Cooper Union"] }
  ],
  // Noah's thanks, word for word, on white before the credits roll (entry 191)
  thanks: "Thanks to supporters and the people involved in the planning and build of this project.",
  // The deep dives' track (the music workshop, October 21, entry 274): Noah's pick, “Jungle Voices” by Diego Nava, from Mixkit
  // (1:38, 128 BPM, -12.3 LUFS). His note: “Oh, very great vibe, even from just initial swelling, uh, from the overlay when it
  // fades in, this track is really good for what we're looking for. Let's keep this”. It starts on deep dive 1's statement, as he
  // heard it, but it's 10 seconds shorter than deep dive 1, so the extended copy plays bars 40 to 43 twice (1:15.2 to 1:22.7, cut
  // just before the downbeat, where the phrase repeats most alike): 1:45.2 long, fading out 2.4 s before deep dive 2's statement.
  // The original is kept beside it (audio/jungle-voices.mp3). From deep dive 2's statement to the outro plays the track after it
  // (after, below). Morning Garden, the calm track before it (entries 194 and 212), is kept as audio/calm.mp3.
  calm: { src: "audio/jungle-voices-extended.mp3", title: "Jungle Voices", by: "Diego Nava", source: "https://assets.mixkit.co/music/517/517.mp3", license: "Mixkit Stock Music Free License, no attribution required, credited anyway", level: 0.3, duck: 0.5, length: 105.21,
    plan: [{ from: "dive1", to: "dive2" }] },
  // The track after Jungle Voices, from deep dive 2's statement to the outro (3:13, under deep dives 2 and 3 and the horizon).
  // Noah, October 21: “I hope that Jungle Voices can kind of stretch that far. If it can't, please let me know, and then we can
  // find another track to continue after it ends”. His pick from the music workshop's third slot (entry 275): “Atoms in Peace”
  // by Alejandro Magaña (A. M.), from Mixkit (3:47, about 96 BPM, -11.1 LUFS, so 0.26 plays it as loud as Jungle Voices at 0.3).
  // Then: “I've gone back and watched form where jungle voices kicks in, and I'm feeling slightly off about it. Lets revisit
  // music after we have our audio files in”. So all of the music here stands until the voiceover is in.
  after: { src: "audio/atoms-in-peace.mp3", title: "Atoms in Peace", by: "Alejandro Magaña (A. M.)", source: "https://assets.mixkit.co/music/107/107.mp3", license: "Mixkit Stock Music Free License, no attribution required, credited anyway", level: 0.26, duck: 0.5, length: 226.85,
    plan: [{ from: "dive2", to: "outro" }] },
  // The demo's track (the music workshop, October 21, entry 274): Noah's pick, “Can't Get You Off My Mind” by Michael Ramir C.,
  // from Mixkit (1:31, -13.7 LUFS), from the demo's statement for the length of the track: its soft start sits under “What does
  // Palit look like?” and the first keeps, the beat drops 25 s in, and it ends on its own 0.7 s into How we worked. It takes the
  // place of A. G. Cook's “Idyll” (Noah: “I actually think we might have to abandon Idol by A.G. Cook for the other songs, because
  // they go very well with what we're looking for.”). His note on how it dips under the lines is for the mix (docs/12).
  lift: { src: "audio/cant-get-you-off-my-mind.mp3", title: "Can't Get You Off My Mind", by: "Michael Ramir C.", source: "https://assets.mixkit.co/music/1210/1210.mp3", license: "Mixkit Stock Music Free License, no attribution required, credited anyway", level: 0.3, duck: 0.3, length: 90.65,
    plan: [{ from: "demo", length: "track" }] },
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
      // Noah, October 20, on the block-by-block workshop (m001): “For the initial walk in, lets have a fun, colorful, extremely bold
      // way of showing our names and school. It should say "Cooper Union School of Art". Take away "Color palette". No fade in, and
      // it should be pretty huge as we walk in, covering the screen. "Noah" should come first, then "Daeun", on the screen at the
      // same time. Then they are replaced by a large "Cooper Union School of Art" text. Colors, you decide.” (entry 225)
      id: "opening", part: "filmed", title: "Walking in", seconds: 4, motion: "kit",
      scene: { status: "filmed", label: "Filmed October 19: Noah and Daeun walk up to the Foundation Building, in, up the stairs and into the archive room" },
      screen: "The b-roll, cut on the house track's hits: the plaza and the arches, the brass doors, the stairs, the archive room. Huge titles cut on over it with no fade, in each person's color: Noah, then Daeun beside him, then Cooper Union School of Art.",
      // The rough cut (entry 225): four cuts from the b-roll, placed for timing only, not graded (footage/README.md). The public
      // site doesn't have the footage, so the player shows the stand-in there.
      footage: { src: "footage/rough/opening.mp4" },
      headers: ["Noah", "Daeun", "Cooper Union School of Art"],
      // When each title cuts on, in seconds into the shot, and which titles share the screen: on the house track's hits (0.05,
      // 1.31 and 2.42 seconds in, measured), so the type lands with the beat and the cuts. colors: a speaker's name takes that
      // speaker's chip color, so each of us keeps one color for the whole film; the school is a deep blue that holds against the
      // white stairs and the archive room, and answers the warm stone and brass of the shots. Round three (Noah, October 21: “When
      // Cooper Union appears on the screen, there's a slight millisecond where it's too early or too late for the cut. I just want
      // it to be right on the cut”): the titles change on the picture's own cuts, 1.30 and 2.40 seconds in (frames 78 and 144 at
      // 60 fps), a hair before the beat they used to wait for.
      titles: { at: [0, 1.30, 2.40], show: [[0], [0, 1], [2]], colors: ["Noah", "Daeun", "#1f3fae"] },
      text: ["Noah", "Daeun", "Cooper Union School of Art"],
      note: "Noah, October 20 (m001): “Colors, you decide. Whatever looks great with our footage. Same font and spacing - looks beautiful.” The colors are Claude's pick: your chip red and Daeun's chip turquoise, so the walk-in introduces the colors that follow each of you through the video, and a deep blue for the school that holds against the white stairs and the archive room.",
      lines: [],
      refs: [213, 225]
    },
    {
      // Noah, October 19: “I think we can cut this down to under 10, like 8 or 9 seconds. We just say our lines pretty quickly.”
      // Then, the same day: “The text goes by way too fast” at 9 seconds, so it's said quickly (pace, 3.2 words a second) but
      // not squeezed; the footage sets the real timing once it's in (entry 219)
      // The footage sets the timing now (entry 225). Noah, October 20: “Daeun and I sit down, before I say my first line. I'd like to
      // keep this, as almost a quick cut/transition into our interview-styled introductions.” (m002) “This whole section where we
      // offer the introduction should remain uncut” (m003). “The exact moment I say "Palit", that should cue the splash” (m006).
      // So the shot plays whole from the sit-down, and the section ends at 11.72 seconds, where “Palit” begins (found from the
      // voice take's loudness); the voice runs on under the splash for its last half second (tail).
      // footage: the shot with its voice take lined up under it (the phone take, 0.78 seconds in, matched by cross-correlation).
      // clock: the section is exactly this long, and each line's said is when it's said in the shot.
      id: "intro", part: "filmed", title: "Intro, in the archive room", start: 0, seconds: 20, pace: 3.2, motion: "kit",
      // Round two (Noah, m002: “we shouldn't see the moment we stand before we sit, when this clip plays, we should already be on
      // the way down”): the graded cut started 0.80 s into the take. Round three (m002: “You could cut it even earlier, just
      // slightly, so that we start on the motion of us coming down, right in the motion”): 0.70 s in, the frame the descent starts,
      // so every time here is 0.70 s earlier than in the take
      footage: { src: "footage/rough/intro.mp4", tail: 0.6 }, clock: 11.02,
      // Our names as we say them (Noah, October 21: “When Don says her name and then I say my name, could we have our names appear
      // at the bottom left and right of the screen, in our respective colors, as we say them ... They shouldn't be too small, but
      // shouldn't be too distracting either”): Daeun's under her, on the left, as she starts “Daeun” (8.88 s into the shot), and
      // Noah's under him, on the right, as he starts “Noah” (9.62 s); each rises in just before, and both leave together on a quick
      // rise just before the cut to the splash. Times are seconds into the shot, measured from the voice.
      names: { show: [{ who: "Daeun", at: 8.8, side: "left" }, { who: "Noah", at: 9.54, side: "right" }], out: 10.62 },
      scene: { status: "filmed", label: "Filmed October 19, on the sofa in the archive room, in front of the card catalog" },
      screen: "Noah and Daeun on the black sofa in the archive room, in front of the card catalog: they sit down, then introduce themselves and Palit, in one shot.",
      text: ["Noah", "Daeun", "Palit"],
      note: "Filmed October 19. The shot plays whole from the sit-down (m002, m003), with the voice take lined up under it, and the splash comes in as Noah says “Palit” (m006). The subtitles follow the script's words, timed to the shot, until the footage is transcribed.",
      lines: [
        // said: from the voice take's pauses and who's moving their lips in the shot; the words are the script's until the
        // footage is transcribed
        { id: "intro-1", at: 0, said: [0.46, 1.05], who: "Noah", text: "We're designers." },
        { id: "intro-2", at: 7.4, said: [1.06, 5.15], who: "Daeun", text: "And we're inspired by where colors come from, and how we keep them as designers." },
        { id: "intro-3", at: 10, said: [5.54, 8.3], who: "Noah", text: "But today, the colors we keep from our screens lose that specialty." },
        { id: "intro-4", at: 15.4, said: [8.66, 9.3], who: "Daeun", text: "I'm Daeun." },
        { id: "intro-5", at: 16.8, said: [9.32, 11.42], who: "Noah", text: "And I'm Noah, and let us introduce you to Palit." }
      ],
      research: [{ kind: "precedent", label: "Werner's Nomenclature of Colours (1814), in the story workshop's precedents" }],
      refs: [120]
    },
    {
      // Noah, October 20 (m007): “Can the splash be a little more creative? Maybe the colored squares come together, starting and
      // fading in as whole squares, then have a subtraction effect as they begin to touch and merge? After all, the logo is supposed
      // to be two color cards coming together. ... Maybe it slides out from the icon? ... the splash should be fun and witty. The logo
      // itself could be bigger compared to the text.” (entry 226)
      id: "splash", viz: "splash", part: "motion", title: "Palit", seconds: 4, motion: "kit",
      scene: { status: "ready", href: "viz.html?scene=splash&play", label: "Palit's splash: two color cards come together, their overlap cut away, and the name slides out of the mark" },
      screen: "Pure white. Two squares, Noah's red and Daeun's turquoise, pop in whole and snap together; where they overlap, the white cuts through, the way the logo's does. As they lock, their colors drain to the logo's own black, and the name is dealt out of the mark a letter at a time, farthest first, each one straightening as it lands. The mark is bigger than the name (round two, entry 235).",
      text: ["Palit"],
      note: "Noah, October 19: “There should be a splash screen for Palit when I say \"Palit\" to introduce it”. It lands right after “this is Palit.” The line under the name is Claude's draft, and the mark is brand.js's, so Daeun's logo drops in. The line below is from Noah's note on the script page: “I'll say something like \"Let's begin with the premise\".”",
      beats: [{ at: 0, label: "Two cards come together" }, { at: 1.25, label: "The name" }],
      lines: [
        { id: "splash-1", at: 2.6, who: "Noah", text: "Let's begin with the premise." }
      ],
      refs: [203]
    },
    {
      id: "brief", motion: "kit", statement: { text: "Naheel's Brief", word: "Brief", color: "#2e6b6f", seconds: 3 }, viz: "brief", part: "motion", title: "The brief", start: 20, seconds: 15,
      // Noah, October 20 (m010): “Not loving the centred nature of the brief. And, not loving how each word fades in. Could we try
      // line by line instead? And I'm curious to know how we can make the highlighting a little more authentic.” (m011): “Could we
      // integrate some color into this rep? for such an important moment, it feels a little matter of fact, or gray” (entry 227)
      scene: { status: "ready", href: "viz.html?scene=brief&play", label: "The brief, line by line on the left edge, a cursor highlighting “storytelling”, then our answer as two color chips" },
      screen: "The brief's two lines rise in one line at a time, on the left edge. A cursor comes in and drags across “storytelling”, and the selection is a color from the archive. Then the brief is pushed up and shrinks, and our answer rises in as two color chips, a block of color over a white label: who it's for, and what the story is.",
      text: ["“Pick a specific group of people and design a product they'll love, even if others might hate it.”", "“There's just one constraint: Your product must center around the theme of “storytelling.””", "Who it's for: visual designers in the ideation and exploratory phase", "The story: where you found each color, and the journey it took to get there"],
      beats: [{ at: 0, label: "The brief" }, { at: 7.1, label: "Our answer" }],
      lines: [
        { id: "brief-1", at: 0, who: "Daeun", text: "Naheel's brief asked for a product one group would love, even if others might hate it, centred on storytelling." },
        { id: "brief-2", at: 7.1, who: "Noah", text: "Ours is for visual designers in the ideation and exploratory phase. And the story, lies with the color: where you found it, and the journey it took to get there." }
      ],
      research: [{ kind: "brief", label: "The SVSD brief, word for word (docs/06-svsd-brief.md)" }],
      refs: [121, 123]
    },
    {
      id: "problem", motion: "kit", statement: { text: "Our Problem with color today", word: "problem", color: "#d14808", seconds: 3 }, viz: "problem", part: "motion", title: "The problem, and what we believe", start: 35, seconds: 51,
      // Noah, October 20, on m013 to m016 (entry 228): the grid fills the screen, then pulls back; the eight real references, then
      // the six that lead nowhere drop; “...stories got more creative, but more alike”; and the references acknowledged before
      // Pantone's line is pushed up by Palit's. His notes are in compass.js, word for word.
      scene: { status: "ready", href: "viz.html?scene=problem&play", label: "33 of 51 from a screen full of color, our eight real references and the six that drop, palettes growing alike, our references, then Palit pushing Pantone up" },
      screen: "A screen full of the archive's colors pulls back to 51 squares, and 33 fill in as the number counts up. Then our eight real references, each labeled with where it leads; the six that lead nowhere drop off the screen and the two that do come forward. Then rows of palettes running together, then our references, Pantone's chips and the specimen cards, and Pantone's line as the header, pushed up and shrunk by Palit's, with the color landing on “ownership”.",
      text: ["33 of 51 designers save inspiration; designers distrust sources that are poorly documented (Koch et al., DRS 2018)", "Only 2 of 8 references on our boards led back to the work", "With AI suggestions, stories got more creative, but more alike (Doshi & Hauser, Science Advances, 2024)", "From our boards: what Palit's cards borrow (Pantone's chips, specimen cards)", "Pantone sells consistency. Palit sells ownership.", "You find every color before you use it."],
      beats: [{ at: 0, label: "33 of 51 designers" }, { at: 12, label: "2 of 8 references" }, { at: 22, label: "More creative, but more alike" }, { at: 32, label: "Our references, Pantone and Palit" }],
      lines: [
        { id: "problem-1", at: 0, who: "Noah", text: "Designers collect color. Its a known fact. But, in one survey, 33 of 51 designers saved inspiration, yet distrusted sources that were poorly documented. Designer peers of mine have told me that they rely on screenshots for palettes, of which they lose all the time." },
        // Claude's draft, round two (m014, Noah: “What does it mean that the two lead back to the work? Can we simplify the language,
        // and make sure the messaging values authenticity and ties directly to our goal?”): what the two have that the six lost is
        // credit, where each came from; that's the story Palit keeps. was: the texts this replaces, so an edit saved with one of
        // them gives way to the draft (palitFresh)
        { id: "problem-2", at: 12, who: "Noah", text: "We traced the eight references on our own boards. Only two still credit where they came from. The other six had lost their story.", was: ["Of eight references on our own boards, only two point to a page about the work. The rest are image files, a repost, or nothing at all.", "We traced eight references from our own mood boards back to their source. Only two led to the original work. The other six were dead ends."] },
        { id: "problem-3", at: 22, who: "Daeun", text: "And, tools now pick colors for you. In one study, AI suggestions made people's stories a little more creative, but much more alike." },
        // Claude's draft (m016, Noah: “We need to acknowledge our references, such as pantone, specimen cards, and why.”), from
        // Noah's own reason for the cards (entry 12, October 16: “charming, collectible, touchable. The paper should set off the color.”)
        { id: "problem-refs", at: 32, who: "Daeun", text: "Our cards borrow from two references on our boards: Pantone's chips, and mineral specimen cards. Collectible, touchable, with the paper setting off the color." },
        { id: "problem-4", at: 38, who: "Noah", text: "Just as Pantone sells consistency. Palit sells ownership over the journey: there is no palette generator. You find every color before you use it, and it's yours in your own way." }
      ],
      research: [{ kind: "study", label: "Koch et al., DRS 2018: 33 of 51 designers save inspiration" }, { kind: "ours", label: "Noah's 8 references, traced: 2 point to a page about the work" }, { kind: "study", label: "Doshi & Hauser, Science Advances, 2024: more creative, and more alike" }],
      refs: [123, 125, 177]
    },
    {
      id: "people", motion: "kit", statement: { text: "Who is Palit for?", word: "Who", color: "#4f7cac", seconds: 3 }, viz: "people", part: "motion", title: "Who loves it, and who won't", start: 80, seconds: 30,
      // Noah, October 20 (m018): “could we have the key words appear as colored words on the rightside, beside the card, then at the
      // end, they fall, then the blocks appear much faster? To show how the value are what goes into a palette for a project.”
      // (m020): “the connecting line feels a little thin, and a little too dark.” (entry 229)
      scene: { status: "ready", href: "viz.html?scene=people&play", label: "Two people, side by side: what one values falls into a palette, the other presses Generate, and the tension between them" },
      screen: "Two cards, labeled as hypotheses until interviews back them. What the designer who'll love it values lands beside their card as Daeun says it, a word at a time in found colors, then falls into the card as its palette. Someone who wants a palette in one click presses Generate. A thick, light line pulls between them. Then “You have to earn it”, the color landing on “earn”.",
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
      // v3 now frames each moment itself (entry 230): it names where the camera should be and how close (data-cam), and the player
      // eases there; these keyframes are only the fallback when v3 names nothing. Noah, October 20: “More intentional framing of
      // what we're following”. floor: 1 means the demo is never played faster than it was drawn to fit a short line (m025: “This
      // demo happens a little bit faster than I'd like it to”).
      camera: [[0, 1], [6.6, 1.55], [14.6, 1.3], [22.6, 1.5], [32.6, 1.1], [42.6, 1.22], [49.6, 1.18], [58.6, 1.3], [68.6, 1.2], [76.6, 1]],
      id: "demo", motion: "kit", floor: 1, statement: { text: "What does Palit look like?", word: "look", color: "#5e4b8b", seconds: 3 }, part: "desktop", title: "Demo: a day with Palit", start: 80, seconds: 86,
      scene: { status: "ready", href: "../v3/index.html?clean&play", label: "Prototype v3, played hands-free (P), timed to these lines" },
      screen: "The animated desktop: Wikipedia and a crocoite photo in Preview, Palit as a square in the menu bar. The camera moves: close on the menu bar square, wide for the desk, close on the loupe as it reads the crystal, along the palette at the edge, the window alone on gray for Days and Spectrum, then wide again as the palette is dragged beside the work.",
      text: ["⌥⇧C", "Click", "Right-click", "⇧-click"],
      // More room for each feature (Noah, October 20, m025 to m031), in v3's own time
      beats: [{ at: 0, label: "The menu bar" }, { at: 6, label: "The loupe" }, { at: 14, label: "Kept, at the edge" }, { at: 22, label: "Naming, and a whole palette" }, { at: 32, label: "Days" }, { at: 42, label: "The zoom" }, { at: 49, label: "Spectrum" }, { at: 58, label: "The specimen card" }, { at: 68, label: "The table" }, { at: 76, label: "Sharing, and the palette beside the work" }],
      lines: [
        // Noah's edit on the script page (October 19) says the loupe and the keep in one line, demo-2, so from demo-3 on each line
        // plays over the moment after the one it was drafted for, and demo-10 is gone. The drafts below follow his order.
        { id: "demo-1", at: 0, who: "Daeun", text: "Palit is a screenless software, with an emphasis on reducing visual clutter for designers" },
        { id: "demo-2", at: 6, who: "Noah", text: "You click a shortcut, and the picker reads the color under it, from anything on screen. The color you collect lands on the edge of your screen, in the palette chip." },
        { id: "demo-3", at: 22, who: "Noah", text: "You can right click to name it as you keep, or hold Shift to keep a collection." },
        { id: "demo-4", at: 32, who: "Noah", text: "When you open the dashboard, you are met with your picks of that day, every place you looked, and what you kept from there." },
        { id: "demo-5", at: 42, who: "Noah", text: "Zoom out for only color. Zoom in, and the story comes back." },
        { id: "demo-6", at: 49, who: "Daeun", text: "The spectrum presents everything you've ever found, by hue. You can click a name to change it." },
        { id: "demo-7", at: 58, who: "Daeun", text: "Open a color, and its a specimen: where it came from, your name for it, and a scratch pad to write down anything that offers context." },
        { id: "demo-8", at: 68, who: "Noah", text: "You can bring colors to the table, try them together, and keep what works as a palette." },
        { id: "demo-9", at: 76, who: "Noah", text: "Share it with codes, or float your palette pinned right beside your work." }
      ],
      research: [{ kind: "ours", label: "Prototype v3, playing itself: what each step of the journey became" }],
      refs: [159, 160, 167, 171, 175]
    },
    {
      id: "process", motion: "kit", viz: "decisions", part: "motion", title: "How we worked", start: 155, seconds: 15,
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
      id: "dive1", motion: "kit", statement: { caption: "Deep dive number one", text: "From the ground Up?", word: "Up", color: "#d14808", seconds: 3 }, viz: "look", part: "motion", title: "Deep dive 1: a palette for a tool that collects color", start: 175, seconds: 104.6,
      // Noah, October 19: “I want to show our ugly screens... V1 versus V2 versus V3.” Rebuilt in one piece on October 21 (entry 257): one scene
      // (viz.html's look) over our own screens, in place of the two reels that were laid over the drawn charts and glitched (Noah,
      // October 21: “the video playback seems to be glitching on Deep Dive one”). Each line's at is the moment it's said at the
      // script's pace, so the scene plays at the speed it was drawn; a rewritten line still moves its moment (palitRetime).
      scene: { status: "ready", href: "viz.html?scene=look&play", label: "Our own screens from October 16 on: the lo-fi sheets, the flows and the ideas with their references; starting again from the ground up; Sip beside Palit; the eleven pickers; v3's chrome sampled; one color and a pair of grays on three grounds; pure white and the palette study; v1 to v3 with the controls counted on the real screens; and what we lost" },
      screen: "Our twelve lo-fi sheets from October 16 rise in, dim, and the camera pushes into the expressive pass, where the color takes the room; a hand opens one of its swatches. The camera moves on along one table to the twelve flow prototypes, then the twelve ideas, and the three the line names come forward with the references they were drawn from (Ravex and Aesop's Köln label, Núria Garcia's cards, Josef Albers). Everything falls away into black: entry 27, start from the ground up, its three steps rising into place. The black rises away; Sip's real menu bar app floats up and a hand clicks its format menu; Palit's card pushes in beside it, and Palit's line pushes Sip's up, with the cursor's box on “where” and Palit's Found row marked. The eleven pickers, each with what it keeps of where a color came from; only Pick does. v3's empty window, its chrome sampled like Palit samples, four neutrals, then the colors come in, the only color; Noah's reason for the neutral canvas beside it. One kept color on white, mid gray and black, “None does.” pushing the question up, then a pair of grays on the three, up to 8 times. Pure white, the palette study floating up and the camera pushing into its row of white, mid gray and black, then holding for Noah's reason. Black again: v1 on its desk, the desk dropping away; v2, v2 merged and v3 wiping in, with the numbers, the filters, the names and the controls around the colors marked on the real screens, 29 falling to 16. Then, on white, what we lost beside what does its job now.",
      text: ["Entry 11, October 16: twelve lo-fi sheets in Rivet, on the first day", "Entry 15: then flow by flow; entry 16: then idea by idea, each drawn from a reference", "A specimen card, a fan deck, an Albers lab, with the references they came from", "Entry 27, October 16: start from the ground up. Who it's for, and why; then the concept; then the big rocks", "Sip asks which format you need. Palit asks where you found it.", "1 of 11 pickers keeps any trace of where a color came from", "“A neutral canvas lets you judge color honestly.” Noah, entry 9", "What surface shows a color as it is? None does.", "Up to 8 times different, from the gray behind them alone, for 38 pairs of grays (Xin, Lam & Luo, 2004)", "Pure white; entry 87: pure white stays", "v1, v2, v2 merged, v3: 29 controls around the colors to 16, 61 words outside them to 23", "What we lost along the way: the chip, the capture card, New York for your names"],
      note: "Noah's pick (entry 79), with his October 19 notes: the real screens, from the lowest fidelity up, and what we lost. Rebuilt on October 21 as one piece in the kit's language. The captions and labels on screen are Claude's drafts, kept with their moments. Pure white needs no line of its own (Noah, October 21: “I think it's self-explanatory. It's just standard”): the scene holds six seconds on the palette study.",
      beats: [{ at: 0, label: "The question, over our lo-fi sheets" }, { at: 5.45, label: "Twelve sheets, and the expressive pass" }, { at: 15.19, label: "Flow by flow, idea by idea" }, { at: 24.92, label: "From the ground up" }, { at: 31.44, label: "Sip asks for a format" }, { at: 39.04, label: "1 of 11 pickers" }, { at: 45.56, label: "Neutral everywhere" }, { at: 51.72, label: "The hardest question, up to 8 times" }, { at: 63.96, label: "Pure white, and a place to judge" }, { at: 71.91, label: "Why pure white" }, { at: 78.36, label: "Then we cut: v1 to v3" }, { at: 90.59, label: "What we lost" }],
      lines: [
        { id: "dive1-1", at: 0, who: "Daeun", text: "How do you design a palette for a tool whose whole job is color?" },
        { id: "dive1-g1", at: 5.45, who: "Daeun", text: "We started lo-fi: twelve sheets on the first day. None of them caught our eye, but the cards that let the color take the room did." },
        // “on our boards” stays (Noah, October 21: “let's keep on our boards, even if the Albers Lab came from the Albers' book, because
        // it was an executive decision we made after reviewing kind of what features we could kind of fix”)
        { id: "dive1-g2", at: 15.19, who: "Noah", text: "So we went flow by flow, then idea by idea: a specimen card, a fan deck, an Albers lab, each from a reference on our boards." },
        { id: "dive1-g3", at: 24.92, who: "Noah", text: "Then we started again from the ground up, so there's strong research and reasoning behind every step." },
        { id: "dive1-2", at: 31.44, who: "Daeun", text: "Sip, the closest tool, is built for handoff: it asks which format you need. Palit asks where you found it." },
        { id: "dive1-3", at: 39.04, who: "Daeun", text: "Of eleven color pickers we studied, only one keeps any trace of where a color came from." },
        { id: "dive1-4", at: 45.56, who: "Noah", text: "We went neutral everywhere, with no accent color. The colors you keep are the only color." },
        { id: "dive1-5", at: 51.72, who: "Noah", text: "Then the hardest question: what surface shows a color as it is? None does. Change only the gray behind two colors, and how different they look can change by up to eight times." },
        { id: "dive1-6", at: 63.96, who: "Daeun", text: "We kept pure white, and gave judging its own place: every palette shows each color on white, mid gray and black." },
        // No line here (Noah, October 21: “going with pure white, I think it's self-explanatory. It's just standard. We don't have to
        // change anything there. Looks fine.”): the scene holds six seconds on the palette study, and nothing in brackets shows on screen
        { id: "dive1-7", at: 71.91, who: "Noah", text: "[No line: the palette study holds, and pure white speaks for itself]", was: ["[Noah: why pure white beat the grays, in your words]"] },
        { id: "dive1-8", at: 78.36, who: "Noah", text: "Then we cut: numbers off the tiles, filters down to seven letters, names onto the colors. When the window crowded again, we took away almost half its controls. Nothing distracts from the color." },
        { id: "dive1-9", at: 90.59, who: "Noah", text: "Along the way we lost the chip, the capture card and a serif for your names. A sound says a color is kept, cards live in the archive, and the serif didn't feel like the same tool." }
      ],
      research: [{ kind: "tools", label: "11 color pickers: only Pick keeps any trace of where a color came from" }, { kind: "study", label: "Xin, Lam & Luo, Color Research & Application, 2004: up to 8 times, for 38 gray pairs" }, { kind: "ours", label: "Measured on Days, the v3 workshop's way, on the real screens: 29 to 16 controls, 61 to 23 words" }, { kind: "ours", label: "v3's chrome, from its own styles: white, ink, one gray and a lighter gray" }],
      refs: [9, 11, 15, 16, 27, 47, 58, 79, 80, 84, 87, 88, 95, 135, 155, 156, 157, 159, 206, 216, 217]
    },
    {
      // Rebuilt October 21 in its own session (Noah: “Let's work in blocks now”, and the block “kind of stayed the same”). The
      // three personas open it as cards, and each persona's moment is an insert of its own (viz.html's users1, users2 and
      // users3): its card on black, what we tried first for it with a hand marking what was wrong, then v3's window, exactly
      // where the animated desktop picks up. Under each insert v3 changes to that persona's archive. floor: 1, as in the demo:
      // never played faster than it was drawn, so each line has its moment whole. The lines are as they were, re-timed only.
      // The statement's line is Claude's draft until Noah writes his (it was the placeholder “Your line about the people who use it”)
      camera: [[0, 1.08], [11.7, 1.22], [27.2, 1.08]],
      // Its color is Workwear blue (No. 009, the people statement's) a step lighter (Noah, dive2/01: “Could we also have the color a little lighter?”)
      id: "dive2", motion: "kit", floor: 1, statement: { caption: "Deep dive number two", text: "The people we designed for", word: "people", color: "#6f97c6", seconds: 3 }, part: "desktop", title: "Deep dive 2: from day one to year four", start: 275, seconds: 42.1,
      inserts: [{ at: 0.1, seconds: 24.8, viz: "users1" }, { at: 11.7, seconds: 12, viz: "users2" }, { at: 27.2, seconds: 10.6, viz: "users3" }],
      scene: { status: "ready", href: "../v3/index.html?clean&play=users", label: "Prototype v3, played hands-free: day one, a few weeks in, years in, each after its persona's card and what we tried first" },
      screen: "The three personas first, on white: v3's own window on day one and in year four side by side, landing in the first and last of three cards as the middle one floats up; each card names its persona and the research behind it, and lifts as it's named. Then each persona's moment: its card on black, then what we tried first, big, a hand marking what was wrong: v2's first open (“Nothing under this letter yet.”) wiping into v3's one line; naming as a form, then the look workshop's three specimen cards, the second chosen; a list, newest last, and a wall of everything, both growing longer as the camera pulls back. Each ends on v3's window where the animated desktop picks up: day one, one keystroke and No. 001; a few weeks in, a name typed into its card, slip and all, then a palette pinned beside the work; years in, 1,802 colors scrolled by day, a search, and Spectrum coming round.",
      text: ["Day one", "Year four", "Three personas, built from our research", "Persona 1: Day one. Opening Palit for the first time", "New users skip the manual and start working. Carroll & Rosson, 1987", "Persona 2: A few weeks in. The colors become yours", "People who named something valued it more. Stoner, Loken & Stadler Blank, 2018", "Persona 3: Years in. Thousands of colors, found again", "Search and time beat folders. 345 people. Whittaker et al., 2011", "Entry 120: v2, the first time it opens", "Entry 129: v3, one line that says why", "Entry 16: naming, at first, a stack to triage", "Entry 99: three specimen cards", "A list, newest last", "A wall of everything, newest first"],
      note: "Noah's pick (entry 176): the user-centric deep dive, built from his three users (D25). Rebuilt October 21 in its own session: the personas as cards, each persona's moment on black, our first screens with a hand marking what was wrong, and each insert handing over to v3 on the same window. The statement, the cards' words and the captions are Claude's drafts.",
      beats: [{ ins: 0, at: 0, label: "Three personas, built from our research" }, { ins: 0, at: 14.4, label: "Persona 1: day one" }, { ins: 0, at: 15.85, label: "Before: v2's first open" }, { at: 0.1, label: "Day one: one keystroke, and No. 001" }, { ins: 1, at: 0, label: "Persona 2: a few weeks in" }, { ins: 1, at: 2.35, label: "Before: naming as a form" }, { ins: 1, at: 6.75, label: "Before: three specimen cards" }, { at: 11.7, label: "A few weeks in: your name, and a palette on the desktop" }, { ins: 2, at: 0, label: "Persona 3: years in" }, { ins: 2, at: 2.35, label: "Before: a list, and a wall of everything" }, { at: 27.2, label: "Years in: days, a search, and Spectrum" }],
      lines: [
        { id: "users-1", ins: 0, at: 0.3, who: "Noah", text: "Palit has to work on day one and in year four. So we designed for three personas, built from our research: someone opening it for the first time, someone a few weeks in, and someone with years of colors." },
        { id: "users-d1", ins: 0, at: 16, who: "Daeun", text: "Our first archive opened on a single line: “Nothing under this letter yet.” It felt empty, and it didn't say why." },
        { id: "users-2", at: 0.1, who: "Noah", text: "New users skip the manual and start working. So day one is an empty window that says why, and one keystroke starts the first hunt. Your first color becomes number one." },
        { id: "users-w1", ins: 1, at: 1.8, who: "Daeun", text: "Naming started as a form: a stack of colors to name one at a time. Then we drew three cards, and your name became the hero." },
        { id: "users-3", at: 11.7, who: "Noah", text: "A few weeks in, the colors become yours. You name them, and in three studies, people who named something valued it more; what you come up with yourself, you remember better. Pin a palette to your desktop, and a project stays consistent." },
        { id: "users-y1", ins: 2, at: 1.8, who: "Daeun", text: "For years of colors, we first tried a list, newest last, and a wall of everything. Both only get longer." },
        { id: "users-4", at: 27.2, who: "Noah", text: "Years in, it's about finding them again. People find things by searching and by time, not folders, so Palit keeps days, and searches by name, place or code. And once your colors fill a full circle, Spectrum never ends." }
      ],
      research: [{ kind: "study", label: "Carroll & Rosson, 1987: new users skip the manual" }, { kind: "study", label: "Stoner, Loken & Stadler Blank, 2018: naming something makes it feel more yours" }, { kind: "study", label: "Bertsch et al., 2007: what you come up with, you remember better (86 studies)" }, { kind: "study", label: "Whittaker et al., 2011: search and time beat folders (345 people)" }, { kind: "ours", label: "Three users: day one, a few weeks in, years in (D25)" }],
      refs: [15, 16, 96, 97, 99, 120, 129, 166, 85, 81, 131, 167, 206, 255]
    },
    {
      // The statement's line is Claude's draft until Noah writes his (it was the placeholder “Your line about the story”)
      id: "dive3", motion: "kit", statement: { caption: "Deep dive number three", text: "Where does the story live?", word: "story", color: "#5b3a63", seconds: 3 }, viz: "story", part: "motion", title: "Deep dive 3: where the story lives", start: 370, seconds: 65.3,
      // Noah, October 19: a design friend “said it was visually cluttered”, and “Let's show our prototyping for that in the
      // lowest fidelity possible, then work our way up.” Rebuilt in the kit on October 21, in its own block: one continuous scene
      // (viz.html's story), no inserts, each beat drawn to the length of its line so the warp is one to one, and our real
      // screens captured crisp by design/video/dive3/capture.mjs. The clutter and dial reels in reels.js aren't used here now.
      scene: { status: "ready", href: "viz.html?scene=story&play", label: "Memory drifting, v2's Days and its card one click away, a designer friend's feedback on black, our roughest lo-fi sheets, the story workshop's three ways, the preview, and v3's zoom morphing stop by stop" },
      screen: "A yellowish green remembered greener: the remembered swatch slides along the hue toward the middle of green, then Palit keeps the exact one, its code and its mark. Then v2's real Days: a click grows its card out of the color and all nine parts of a color's story light up, then it closes and two stay, and “Before a click: 2 of 9” pushes “Our first archive” up. Then on black, “visually cluttered.”, pushed up by Noah's two questions. Then our roughest lo-fi sheets land like paper, and the camera goes to the diary by day. Then the story workshop's question, three empty places, and its three ways floating in as they're named; two drop, and days with their places grows into the preview of Noah's picks. Then v3 alone on black: a hand clicks +, and every color slides and grows from one stop to the next (only color, your names, and where, the hunt), the names pushing each other up; then Hyacinth red grows into its card, and the camera goes to the trail.",
      text: ["Colors you remember drift toward the center of their category. Bae et al., 2015", "#a8c83c", "Our first archive", "Before a click: 2 of 9", "What Palit keeps about a color", "A designer friend called it visually cluttered.", "“Why are we adding so many different clicks?”", "“Why can't we see all the crucial information when it appears, or with the different scroll sections?” Noah, on the feedback", "Our roughest lo-fi sheets, in Rivet", "What does the archive center on?", "Where you found them; A ruled catalogue, after Werner, 1821; Days, each with its places", "Noah's picks, in a local preview", "Only color, Your names, And where, The hunt", "The zoom, a dial for the story"],
      note: "Noah's pick (entry 176): the deep dive on the tool and the brief. October 19: our UXR, a designer friend's feedback (when it came is Noah's to add), and the prototyping from the lowest fidelity up; paper first was dropped for our redesign from the ground up (entry 216). Rebuilt in the kit on October 21. The statement's line, the headers “Our first archive”, “What Palit keeps about a color” and “The zoom, a dial for the story”, and the choreography are Claude's drafts.",
      // Each beat starts where its line does, at the length the line takes to say, so the picture lands on the words
      beats: [{ at: 0, label: "Memory drifts" }, { at: 9.74, label: "Before a click: 2 of 9" }, { at: 20.9, label: "A friend: visually cluttered" }, { at: 30.28, label: "Our roughest lo-fi sheets" }, { at: 37.87, label: "Three ways to bring it forward" }, { at: 47.96, label: "Days with their places" }, { at: 54.13, label: "The zoom, a dial for the story" }, { at: 61.27, label: "Following the trail" }],
      lines: [
        { id: "dive3-1", at: 0, who: "Daeun", text: "Memory alone can't hold a color: a color you remember drifts toward the middle of its category. So Palit keeps the exact color, and its story." },
        { id: "dive3-2", at: 9.74, who: "Noah", text: "The brief asked for storytelling, and our first archive hid the story one click deep. Before you clicked, you saw two of the nine things Palit keeps about a color." },
        { id: "dive3-c1", at: 20.9, who: "Noah", text: "A designer friend told us it was visually cluttered. Why were we adding so many clicks? Why couldn't you see what matters as it appears?" },
        { id: "dive3-c2", at: 30.28, who: "Noah", text: "So we went back to our redesign from the ground up: our roughest lo-fi sheets, then the research behind them." },
        { id: "dive3-3", at: 37.87, who: "Daeun", text: "We tried three ways to bring it forward: an archive of places, a ruled catalogue after a color book from 1821, and days, each with its places." },
        { id: "dive3-4", at: 47.96, who: "Noah", text: "We chose days with their places. It reads like a diary of where your eye went." },
        { id: "dive3-5", at: 54.13, who: "Noah", text: "And the zoom became a dial for the story: only color, then your names, then where, then the whole hunt. From any color, you can keep following the trail." }
      ],
      research: [{ kind: "study", label: "Bae et al., Journal of Experimental Psychology: General, 2015: colors drift toward their category in memory" }, { kind: "ours", label: "The audit: before a click, 2 of the 9 parts of a color's story" }, { kind: "study", label: "Eckert & Stacey, 2000: designers remember examples by where they came from (the story workshop's research)" }, { kind: "precedent", label: "Werner's Nomenclature of Colours (1821), the ruled catalogue, from the story workshop" }],
      refs: [11, 120, 124, 126, 127, 134, 206, 209, 216, 254, 256, 259]
    },
    {
      // The closing's block, round three: rebuilt on the motion kit from Noah's horizon (entry 193) and his notes on the clip (entry
      // 217). The colors are the palette the demo keeps from the crocoite photo (v3's Nos. 114 to 116), and the last color kept, the
      // crystal's golden tip (#e09336), carries the closing: the statement's box, the box on “find”, and the mark, which takes it
      // just before the outro's first line says it does. The statement is Claude's draft, for Noah to write. Each line's at is the
      // moment it plays over, drawn to the time the line takes to say, so the picture keeps time with the words. enter: false: the
      // scene floats its own terminal up, since the player's fade-in would show the dark window as a gray box first.
      id: "horizon", motion: "kit", enter: false, statement: { text: "What's on the horizon?", word: "horizon", color: "#e09336", seconds: 3 }, viz: "horizon", part: "motion", title: "On the horizon", seconds: 29.2,
      scene: { status: "ready", href: "viz.html?scene=horizon&play", label: "A Palit MCP reads your palette and never makes a color; the palette, floating, lands in the tools you use; you still find every color" },
      screen: "A coding assistant's terminal floats up. /mcp add palit, and Palit's mark docks in its title bar. Asked for button tokens from the palette kept in the demo, it reads the archive: the three colors float up as Palit's cards, each with its number and where it was found, the camera leans in, and each takes its token. Nothing generated. The colors gather into the desktop palette, floating alone; then a design canvas, a poster and an app's inspector rise in as they're named, and the palette docks at each one's edge as its colors land in the work; then our own film, the palette at its edge. Then Palit's mark, black, over “You still find every color.”: the cursor boxes “find” in the last color you kept, and the mark takes it.",
      text: ["> /mcp add palit", "Palit is connected. It reads your archive and never makes a color.", "> Make button tokens from my crocoite palette.", "Palette from Crocoite photo, kept October 18", "Three tokens, each a color you kept. Nothing generated.", "You still find every color."],
      note: "Noah's horizon (entry 193): the MCP and the plugins are his, and neither may read as pro-AI or add clutter. The statement and the words in the terminal are Claude's drafts. Claude's suggestions for what else is on the horizon are listed beside it, for Noah to pick.",
      beats: [{ at: 0, label: "A Palit MCP" }, { at: 5.9, label: "It reads your palette" }, { at: 12.6, label: "The palette, in the tools you use" }, { at: 17.6, label: "Even this film" }, { at: 23.75, label: "You still find every color" }],
      lines: [
        { id: "horizon-1", at: 0, who: "Daeun", text: "On the horizon: a Palit MCP. An assistant could read your archive and bring the colors you found into your design system. It never makes a color; it only uses the ones you kept." },
        { id: "horizon-2", at: 12.6, who: "Noah", text: "The possibilities for Palit are endless - design workflows, creative projects, integration into software, even the color grading of the footage we use in this video was done with Palit" },
        { id: "horizon-3", at: 23.75, who: "Noah", text: "Whatever comes next keeps one rule: you go out and find every color." }
      ],
      // Claude's suggestions for the horizon, each with what keeps it true to Palit; Noah picks
      suggestions: [
        { title: "A specimen book of your year", how: "Your colors and where you found them, printed like Werner's Nomenclature. The archive, made physical; nothing generated." },
        { title: "Picking from the physical world", how: "Your iPhone's camera as the loupe, keeping where you stood. You still go out and find it." },
        { title: "Testing with designers", how: "The two people in this video are still hypotheses; interviews and tests come next." },
        { title: "A palette that travels to a team", how: "Shared only once you sign off on the network (Q23), so the archive stays yours and local first." }
      ],
      research: [{ kind: "ours", label: "Q10, where AI fits: a narrow, read-only MCP over your archive" }, { kind: "ours", label: "The opinion, in Noah's words (A70): no palette generation, no AI; you go out and find it" }, { kind: "ours", label: "The palette kept in the demo, from v3's own archive: Nos. 114 to 116, from the crocoite photo" }],
      refs: [123, 193, 217]
    },
    {
      // The outro on its footage (round two, entry 242): the graded cut with its voice take lined up (the take started 1.30 s before
      // the camera), whole, ending a beat after the thank you; each line's said is when it's said in the shot, from the voice
      // take's pauses and who's moving their lips
      // The closing's block, round three: the house track starts again from its top with the outro, so the cut to the splash lands
      // on its kick at 11.55 s (measured from the track: kicks at 11.05, 11.55 and 12.05 s), 0.98 s after the thank you, and the
      // credits come in on the kick at 15.55 s (the cut on the beat, rule 6)
      id: "outro", motion: "kit", part: "filmed", title: "What's next", start: 465, seconds: 25,
      footage: { src: "footage/rough/outro.mp4" }, clock: 11.55,
      scene: { status: "filmed", label: "Filmed with the intro, October 19" },
      screen: "Back on the sofa in the archive room, graded like the intro: the last three lines, ending together on the thank you.",
      text: ["Palit"],
      note: "Noah, October 19: “Our outro is going to be way less: 12 seconds, 15 seconds.” It ends on Palit's mark becoming the last color you kept, then the hopeful line, then the last one: go find a color. Then the splash plays once more, and the credits.",
      lines: [
        { id: "outro-1", said: [0.76, 2.6], who: "Daeun", text: "Palit's mark becomes the last color you kept." },
        { id: "outro-2", said: [3.2, 7.4], who: "Noah", text: "And we'll keep exploring how a palette travels to a team, and into the tools you already use." },
        { id: "outro-3", said: [7.8, 10.57], who: "Daeun", text: "Until then, go find a color. Thank you." }
      ],
      refs: [163, 108]
    },
    {
      // The opening's splash scene, as round three left it (the hub's; entries 226 and 235): the same splash at both ends of the film
      id: "splash-end", motion: "kit", viz: "splash", part: "motion", title: "Palit, once more", seconds: 4,
      scene: { status: "ready", href: "viz.html?scene=splash&play", label: "The splash again, to close" },
      screen: "The splash once more, cut in on the house track's kick after the thank you: the two cards, Noah's red and Daeun's turquoise, snap together and drain to the logo's black, and the name rises in beside the mark; the lockup leaves on a quick slide up.",
      text: ["Palit"],
      note: "Noah, October 19: “I also think we could just play the splash one more time at the very end to really drill the message home.”",
      lines: [],
      refs: [203]
    },
    {
      // Noah, October 19: “after they appear for about 2 seconds, we can fade them out just as quickly and then fade out the music.
      // Screen goes to black”
      id: "credits", motion: "kit", viz: "credits", part: "motion", title: "Credits", seconds: 4,
      // The closing's block, round three: the kit's entrance and exit, then the white drains to black as the music fades out
      scene: { status: "ready", href: "viz.html?scene=credits&play", label: "The credits on one screen, for two seconds, then black" },
      screen: "One screen on white, on the kick: Noah's thanks at the top, then four columns on the one left edge (who made it and thanks, the music, the pictures, the research we quote), rising in one after another. About two seconds; anyone curious can pause. Then they rise out, the white drains to black and the music fades with it.",
      text: ["Thanks to supporters and the people involved in the planning and build of this project.", "Made by Noah Oh and Daeun Chung", "Music", "Pictures, with their licenses", "The research we quote", "Thanks: Naheel and SVSD, Kaya Sasaki, Ricky Yurewitch, Carmelle Safdie, Mike Essl and The Cooper Union"],
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
// An edit saved with a line's old text gives way once Claude redrafts that line (entry 225): a line's was lists the texts it
// replaced (Noah's edits were folded into the script on October 19, entry 221, so his saved copy of a line matches the old
// text). Anything Noah writes that differs is still his, and wins.
window.palitFresh = function (S, e) {
  if (!S || !e || !e.text) return e;
  S.sections.forEach(function (x) { (x.lines || []).forEach(function (l) { if (l.was && e.text[l.id] !== undefined && l.was.indexOf(e.text[l.id]) >= 0) delete e.text[l.id]; }); });
  return e;
};
window.palitEdits = function () { var e; try { e = JSON.parse(localStorage.getItem("palit-video-script") || "null") || {}; } catch (er) { e = {}; } return window.palitFresh(window.PALIT_SCRIPT, e); };
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
    var A = window.palitSpans(x), all = x.lines || [], floor = x.floor !== undefined ? x.floor : x.part in P.floor ? P.floor[x.part] : 0.5, skip = Math.min(floor || 1, P.skip);
    // clock: a filmed section is as long as its footage says, and each line is up while it's said in the shot (entry 225)
    if (x.clock) {
      all.forEach(function (l) { var text = txt[l.id] !== undefined ? txt[l.id] : l.text, on = !!text.trim() && !!l.said; l.beat = 0; l.sec0 = 0; l.start = on ? l.said[0] : undefined; l.end = on ? l.said[1] : undefined; });
      x.cut = false; x.seconds = x.clock; x.warp = [[0, 0], [x.clock, x.clock]];
      if (x.statement) { x.statementAt = t; t = Math.round((t + x.statement.seconds) * 10) / 10; }
      x.start = t; t = Math.round((t + x.seconds) * 100) / 100;
      return;
    }
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
