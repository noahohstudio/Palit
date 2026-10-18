// Palit video plan: the blocks of the submission video, in order.
// Durations are in seconds. `part` is "product" (problem, product and demo)
// or "process" (the deep dive). `tags` pull in decisions entries whose
// `video` field matches. A big rock block gets `rock` once one is chosen.

window.PALIT = window.PALIT || {};
window.PALIT.video = {
  updated: "2026-10-18",
  target: 420,
  max: 600,

  // Noah's framing for the video, word for word (October 18).
  focus: {
    date: "2026-10-18", by: "Noah",
    text: "Most of our focus will be re-exploring our initial research, prototyping, redesigns, then how they led up to our final product. This also entails a very brief exploration of how competitors function with their products, and how ours differ. The storytelling is very important here."
  },
  show: {
    date: "2026-10-18", by: "Noah",
    text: "I also want to be able to show our workshop and dashboard - which is why I want to really clean it up for show and tell. If possible, I think it'd be fun to use our basic design system for the dashboard"
  },
  speakers: {
    date: "2026-10-18", people: ["Noah", "Daeun"],
    note: "there will be many moments where our screen recordings/motion animations for our features will take the entire screen, yet we will be speaking and narrating whats happening, the process, and reasoning. To symbolize who is who, i have this idea for small chips in the corners that shows who is speaking - Me, Noah, or my teammate, Daeun."
  },

  // Deep dives: Noah wants 2–3, co-decided once the final prototype works. Claude keeps
  // pointing out candidates as the work turns them up. Each arc is a run of decision entries;
  // `pick` marks one Noah has chosen, and `beats` are Claude's draft story for it.
  deepDives: {
    note: { date: "2026-10-18", by: "Noah", text: "I'm also finding that noticing and pointing out features and details we can \"deep dive\" on in this project is crucial for a successful project - lets aim for 2-3 deep dives, which we can co-decide when we have a final prototype working" },
    candidates: [
      {
        id: "system", pick: "Noah's pick for deep dive 1, October 18",
        title: "A palette for a tool that collects color",
        q: "How do we build a color palette and design system for a tool that collects color?",
        crux: { text: "This is truly the crux of our deepdive 1: how do colors sit on a surface that shows them as they are? How do they change when you have a different background color or lightness? How does that inform our design decisions?", where: "Noah's note on the surface question, feature workshop" },
        noah: { text: "how do we build a color palette/design system for a tool that collects color?", why: "I think this ties in nicely with the process we're following - competitor research, UXR, what this tool means to users, our baseline, foundational reasoning. This ties into our design system, which we can then use to introduce features and problem solving" },
        also: [{ text: "I'm loving this minimal direction we're following, with extreme detail to what we keep and cut. The ROYGBIV nav is so stunning to me - totally something we need to integrate into deep dive #1 - how we choose elements that don't distract our eyes from the color itself", where: "October 18, after the look workshop (entry 104)" }],
        arc: [[47, "Sip, documented as a whole"], [40, "For visual designers, in the ideation phase"], [8, "The foundations workshop"], [9, "A neutral canvas"], [10, "No accent color"], [48, "A native shell, a raw heart"], [53, "The design system, from atoms up"], [56, "Six calls"], [80, "Research: the most neutral surface"], [87, "Pure white stays"], [58, "The prototype, built from it"], [74, "The dashboard, built from it too"], [93, "v1 felt stagnant"], [103, "Clean, functional, considered"], [95, "Nothing on it but color"], [104, "What stays out of the color's way"]],
        beats: [
          "A tool for color can't bring a color of its own. Sip puts its blue and violet right next to the colors you're judging.",
          "Who it's for, and what it means to them: visual designers in the ideation phase, keeping colors with their names and their sources.",
          "The baseline: v0 and the foundations workshop. A neutral canvas, no accent, one typeface.",
          "The crux: how colors sit on a surface that shows them as they are, and how they change on another color or lightness. Pure white, and why, with the research (up to 8 times different on one gray than another).",
          "The reasons that follow: a native shell around a raw, archival heart, square and ruled, captured colors as the only color.",
          "The system: atoms to organisms, each piece with the decision behind it.",
          "Solving problems with it: the chip, Similar, the desktop palette, and this dashboard, all built from the same system.",
          "What we keep and what we cut: every element earns its place by not pulling the eye off the color. Numbers off the tiles, two rows of filter chips down to seven ROYGBIV letters, a ring for a capture, a strip for a palette."
        ],
        show: "Sip's own colors around your colors, the v0 canvas and the lofi rounds, the foundations workshop, the design system page from atoms up, then the prototype and this dashboard.",
        research: [{ from: "sip", find: "Judging color honestly" }, { from: "evidence", find: "changed by a factor of up to 8" }, { from: "evidence", find: "The CIE's reference conditions" }, { from: "evidence", find: "For judging prints, ISO 3664" }, { from: "evidence", find: "Albers taught color" }, { from: "sip", find: "One visual language" }],
        open: "Pure white stays (A36), so the surface is the question to tell, not a feature to build. No interviews yet, so “what this tool means to users” rests on desk research and your own words so far."
      },
      {
        id: "capture", title: "How little the capture moment can be",
        q: "What's the least Palit can show when you keep a color, and still have it feel kept?",
        arc: [[2, "v0: a ring pulse and a toast"], [17, "A ticket chip, proposed"], [28, "Too loud"], [56, "A loupe ring and a chip"], [68, "Picking copies nothing"], [72, "Do we even need the chip?"], [84, "No chip: it lands in the palette, with a sound"]],
        show: "The v0 canvas, the three capture flows, the Ravex ticket and the specimen crosshair, then the prototype's chip and the desktop palette.",
        research: [{ from: "evidence", find: "freely chose what to photograph" }, { from: "evidence", find: "Photographing whole objects" }, { from: "precedent", find: "Microsoft Recall" }],
        open: "How the sound and the landing feel; test T2"
      },
      {
        id: "naming", title: "Who names a color",
        q: "Should a color carry a name you gave it, or one a tool gave it?",
        arc: [[2, "v0: numbers, no names"], [43, "You, or the tool?"], [44, "Human-first, with a placeholder from the place"], [49, "Your name comes first"], [59, "Name it in the chip"]],
        show: "Sip's automatic names next to Palit's placeholder becoming “Childhood home”.",
        research: [{ from: "evidence", find: "named a product" }, { from: "evidence", find: "Cues people write themselves" }, { from: "evidence", find: "Putting a visual memory into words" }, { from: "sip", find: "Names. Sip names colors" }],
        open: "Try naming beside the cursor (A52) in the prototype"
      },
      {
        id: "similar", title: "Similar, not duplicates",
        q: "When you keep a color close to one you kept before, what should Palit say?",
        arc: [[2, "v0: Kept before, with ΔE"], [61, "An echo in the chip"], [69, "Reversed: it dictates"], [70, "“Similar”, without the count"], [85, "Each row says where it came from"]],
        show: "Sip offering to delete duplicates, then Palit's Similar list leading back to Pool tile at McCarren pool.",
        research: [{ from: "sip", find: "Keeping repeats" }, { from: "precedent", find: "Timehop" }, { from: "evidence", find: "No study shows that resurfacing" }],
        open: "Settled for now (A53)"
      },
      {
        id: "context", title: "Context is part of the color",
        q: "How much of where a color came from should Palit keep and show?",
        arc: [[2, "v0: 8 neighbors and the source"], [42, "Color on screen, with its link, time and title"], [65, "Back to the source"]],
        show: "The neighbor grid, the trip back to the door on the page, and the same teal on white and on black.",
        research: [{ from: "evidence", find: "changed by a factor of up to 8" }, { from: "evidence", find: "pushes a color's hue away" }, { from: "evidence", find: "The Dress (2015)" }],
        open: "Q20: the surface. The research is in; the pick is in the feature workshop."
      },
      {
        id: "palette", title: "An archive that's also a tool",
        q: "Where do you copy a color when you need it, without the archive getting in the way?",
        arc: [[60, "The hex copied on every pick"], [68, "Reversed: nothing copies on a pick"], [71, "A palette on the desktop"], [81, "Latest picks, or a pinned palette"], [83, "One key per format"]],
        show: "The desktop palette from the feature workshop: click to copy, with a key per format.",
        research: [{ from: "sip", find: "Ideation, not handoff" }],
        open: "Settled in the workshop (A49–A51); pinning is new, and may grow with the MCP idea"
      },
      {
        id: "eye", title: "Your eye picks the palette",
        q: "How do you keep a palette: pick each color yourself, or let Palit pull them from an area?",
        noah: { text: "Its because its more precise to use your visual eye to pinpoint different colors that you want, instead of having a whole rectangle on the screen to synthesize the colors you otherwise would've noticed. Especially, if you only want a couple colors instead of the entire system", why: "Intentional friction is a big part of this project, which is meant to train you visual eye for color and harmony" },
        arc: [[67, "Hold ⇧ and keep clicking, picked from three ways"], [81, "The palette lands in the desktop palette"]],
        show: "Naheel's format in one decision: three ways side by side (hold ⇧ and click; drag a rectangle, the way ColorZilla, Pastel, Coolors and Adobe Capture build palettes; a second shortcut, ⌥⇧P), the one we landed on, and Noah's reason. Then the ⇧ run in the prototype.",
        research: [{ from: "evidence", find: "freely chose what to photograph" }, { from: "evidence", find: "Photographing whole objects" }],
        open: "Quote “train you visual eye” as the project's intent, not a finding: the research hasn't shown that capturing colors trains your eye."
      }
    ]
  },

  // From Naheel's advanced workshop (October 18): how past winning teams shaped their videos.
  // Close to Noah's notes (docs/07-naheel-workshop.md); the blocks follow it since A56 (entry 92).
  naheel: [
    "Max 7 minutes, or 10 if it's entertaining.",
    "State the problem in about 10%, so the audience agrees it's real. Demo the solution end to end in 20–25%. Spend 60–70% on 2–3 deep dives.",
    "Naheel's preference: start with the solution, then backfill with the thinking and tradeoffs.",
    "In each deep dive, show 2–3 approaches you explored, land on the final one and explain why. Explorations that didn't make the cut belong here too.",
    "Pick the 2–3 questions that had the most important design decisions. Isolating the key levers is the mark of seniority.",
    "Stress-test the design through one specific persona. A team stuck between two use cases risks solving neither."
  ],

  rules: [
    "Up to 10 minutes. Aim for 7 unless the extra time earns its place.",
    "About 40% problem, product and demo; 60% process deep dive.",
    "2–3 big rocks are the body paragraphs: what we tried, what didn't work, how we got to the final.",
    "Curate: 2 interesting directions per rock, not all 7.",
    "The prototype link only gets opened if the video earns it.",
    "Finalists are picked partly on crit potential: the opinion should be worth arguing about."
  ],

  // Rebalanced to Naheel's split on October 18 (A56, entry 92): the problem in about 11%, the demo
  // in about 23%, and the way into the process, the deep dives and the close in about 66%.
  // A block with a `storyboard` is drawn shot by shot on the Video page. Shot times are seconds
  // from the block's start; `frame` is a prototype scene, an image, a set of four images, or a
  // title card. Every `says` is Claude's draft for Noah, and who speaks each shot is still to pick.
  blocks: [
    {
      id: "open",
      part: "product",
      title: "Cold open",
      seconds: 15,
      purpose: "The hook: the moment a color you noticed goes missing.",
      line: "A color you noticed, and lost.",
      ideas: [
        "Open on Noah's own boards: of 8 saved references, only 2 still point to where the work came from. The problem, in our own collection.",
        "Or open on The Dress (2015): the same pixels seen as two different colors, depending on what people assumed about the light. Context is part of the color."
      ],
      needs: ["A short scene, filmed or animated: a screenshot pile, a hex with no source"],
      tags: ["open"],
      status: "idea"
    },
    {
      id: "audience",
      part: "product",
      title: "Who it's for",
      seconds: 15,
      purpose: "Introduce the audience and their unmet need, in their own words: visual designers, in the ideation phase.",
      line: "",
      ideas: [
        "Show the ideation phase: a Figma file filling up with colors from everywhere, and half of them can't be traced.",
        "Show what Noah hears from designers: screenshots and Chrome extensions that forget where a color came from."
      ],
      needs: ["2–3 interview quotes from visual designers, with permission", "One frame per persona"],
      tags: ["audience"],
      status: "idea"
    },
    {
      id: "opinion",
      part: "product",
      title: "The opinion",
      seconds: 15,
      purpose: "The one deliberate choice, and who it leaves out: Palit pushes back on letting AI explore and decide color for you.",
      line: "",
      ideas: [
        "A contrast from the research: Khroma trains a model on your taste. Palit trains you.",
        "Draft: pickers are for production. Palit is for ideation.",
        "Noah's angle: Pantone sells consistency, not just color. An eye for color is something you practice.",
        "Evidence, safe to say: with AI ideas, individual stories scored higher, but everyone's stories became more alike (Science Advances, 2024). Students who leaned on unrestricted GPT-4 scored 17% lower once it was taken away (PNAS, 2025).",
        "Noah's words on the intent (entry 67): “Intentional friction is a big part of this project, which is meant to train you visual eye for color and harmony”. Say it as what Palit is for, not as a finding: the research hasn't shown that capturing colors trains your eye."
      ],
      needs: ["The opinion as one line", "An answer to Q14: who names a color"],
      tags: ["opinion"],
      status: "idea"
    },
    {
      id: "demo",
      part: "product",
      title: "Demo: the core journey",
      seconds: 95,
      purpose: "Show the product working end to end, on a real desktop: invisible until a keystroke, then a collection that tells each color's story.",
      line: "",
      ideas: [
        "Record prototype v2 by hand with ?clean, following the storyboard's click path, or ask for a playback (P) to record it hands-free.",
        "The naming moment: the placeholder “Orange from Crocoite photo” becomes the name you give it. Your name shows first; the hex sits underneath.",
        "Evidence for the naming moment, safe to say: in three experiments, people who named a product rated it higher and wanted more money to give it up (Journal of Consumer Psychology, 2018).",
        "Prototype v1 on the drawn desk is the before: a few seconds of it, side by side with v2, could open deep dive 1."
      ],
      needs: ["Your sound pick (Q22)", "Screen recordings of v2", "The real screens' credits on screen or in the description"],
      links: [{ label: "Prototype v2", href: "../v2/index.html" }, { label: "Clean, for recording", href: "../v2/index.html?clean" }, { label: "Its steps", href: "#work/v2" }, { label: "Storyboard", href: "#video/storyboards" }],
      tags: ["demo"],
      status: "storyboarded",
      storyboard: {
        note: "On prototype v2, real pages and a real Mac wallpaper. The shots follow one click path through v2, so it can be recorded in one take with ?clean. It replaces the storyboard on the first prototype (entry 111); that version stays in the site's Git history.",
        shots: [
          { at: 0, to: 6, title: "A real desktop", frame: { page: "../v2/index.html?clean", focus: [72, 0, 1296] }, shows: "A Mac with a Wikipedia article in Safari and a crocoite specimen open in Preview. Palit is a word in the menu bar and a few slim strips at the right edge.", says: "This is Palit: a word in the menu bar, and a few strips of color.", refs: [105, 107] },
          { at: 6, to: 13, title: "One keystroke, real pixels", frame: { page: "../v2/index.html?clean&scene=picking", focus: [576, 176, 684] }, keys: "⌥⇧C", shows: "⌥⇧C, and the loupe reads the real pixels under it: the crystal's orange, with its hex beneath.", framing: "Push in on the loupe as it crosses the crystals.", says: "One keystroke, and the loupe reads the color under it, from anything on screen.", refs: [101, 105] },
          { at: 13, to: 20, title: "It lands", frame: { page: "../v2/index.html?clean&scene=landed", focus: [756, 176, 612] }, keys: "Click", shows: "A click keeps it: a small ring, one of the duller sounds, and the color lands at the top of the strips, which open as you point at them.", says: "Click to keep it. A small ring, a soft sound, and it's in the strips.", refs: [101, 102] },
          { at: 20, to: 28, title: "Name it, or keep a palette", frame: { page: "../v2/index.html?clean&scene=naming", focus: [612, 270, 630] }, keys: "Right-click, or ⇧-click", shows: "Right-click keeps it and opens a name field beside the cursor, with “Crocoite” typed in. Holding ⇧ keeps several colors as one palette.", says: "Right-click to name it as you keep it, or hold Shift to keep a whole palette.", refs: [84, 67] },
          { at: 28, to: 38, title: "Days, today first", frame: { page: "../v2/index.html?clean&scene=days", focus: [207, 56, 1008] }, shows: "A click on Palit in the menu bar opens Days on today: today's colors large with their names set on them, earlier days below, nothing else on the first view.", framing: "Hold on the wall for a beat before anything moves.", says: "Click Palit, and Days opens on today: the colors you just kept, large, with their names set on them.", refs: [95, 97] },
          { at: 38, to: 46, title: "Zoom out, zoom in", frame: { page: "../v2/index.html?clean&scene=zoom-out", focus: [207, 56, 1008] }, keys: "− and +", shows: "Zooming out until there's no text, only color; then in until each color carries its full name.", says: "Zoom out to see only color. Zoom in for the full names.", refs: [100] },
          { at: 46, to: 52, title: "Seven letters", frame: { page: "../v2/index.html?clean&scene=days&band=O", focus: [207, 56, 1008] }, shows: "O picked in the ROYGBIV letters: only the oranges stay, and the count in the corner says how many.", says: "Seven letters, R O Y G B I V, narrow it to a hue.", refs: [95, 96] },
          { at: 52, to: 61, title: "Spectrum", frame: { page: "../v2/index.html?clean&scene=spectrum", focus: [207, 56, 1008] }, keys: "Scroll", shows: "Spectrum: every color fanned by hue; scrolling turns the fan, and the top card's name sits large above it.", says: "Spectrum fans out every color you've ever found, by hue, in one long scroll.", refs: [96] },
          { at: 61, to: 76, title: "The specimen card", frame: { page: "../v2/index.html?clean&scene=card", focus: [207, 56, 1008] }, shows: "Hyacinth red opens as a specimen card: the color as a chip over a real crop of the crystals, the name large, where it came from with a way back, Similar, its palette, Pin and Share, and the scratch pad.", framing: "Push in on the chip over the crop, then pull back to the whole card.", says: "Open one, and it becomes a specimen card: the color over the place you found it, your name for it, where it came from, and a scratch pad for what you saw.", refs: [98, 99] },
          { at: 76, to: 84, title: "Pins into palettes", frame: { page: "../v2/index.html?clean&scene=palettes", focus: [207, 56, 1008] }, shows: "Collections: pinned colors grouped into a palette, each palette with Share and Pin to the desktop.", says: "Pin the colors that matter most, and group them into a palette.", refs: [96] },
          { at: 84, to: 95, title: "A share card", frame: { page: "../v2/index.html?clean&scene=share", focus: [207, 56, 1008] }, shows: "A palette as a share card: the colors large, each name and hex code under it, and a button that copies the codes.", says: "And when your team needs the same colors, send a card with the codes on it.", source: "The team angle comes from Noah's interview with a civil engineer (entry 110): one interview, so a possibility, not a finding.", refs: [109, 110] }
        ]
      }
    },
    {
      id: "process",
      part: "process",
      title: "How we worked",
      seconds: 15,
      purpose: "The way into the deep dives: research behind every step, the workshops, and this dashboard.",
      line: "",
      ideas: [
        "Evidence, safe to say: expert designers spent significantly more time scoping the problem and gathering information than students (Atman et al., 2007), and they develop the problem and the solution together (Cross, 2004). That's why we worked holistically.",
        "Noah wants to show the feature workshop and this dashboard, for show and tell (October 18)."
      ],
      needs: ["A screen recording of this page", "The reference boards"],
      tags: ["process"],
      status: "idea"
    },
    {
      id: "rock1",
      part: "process",
      title: "Deep dive 1: a palette for a tool that collects color",
      rock: null,
      dive: "system",
      seconds: 95,
      purpose: "Noah's pick (October 18): how do we build a color palette and design system for a tool that collects color? Told through the process: competitor research, UXR, what the tool means to users, the baseline and the reasons, then the design system, which then brings in the features and the problem solving. The competitors and the look live here now (A56).",
      line: "",
      ideas: [
        "Sip head-on, as the main competitor. Draft line: Sip asks which format you need. Palit asks where you found it.",
        "Noah's framing: Palit is the rapid, creative counterpart to Sip. Sip's look is the baseline; Palit interjects what it stands for.",
        "Show the same color kept in both: Sip gives it a dictionary name from a fixed list; Palit names it after where you found it, until you name it yourself.",
        "Sip's palettes refuse the same color twice. Palit tells you you've kept it before.",
        "Film a hands-on Sip trial: the free 15-day version answers the open questions and gives honest footage.",
        "Screen-record the Chrome color extensions failing, the way Noah described.",
        "Credit Pick openly: on Linux, it kept a screenshot with each color years ago. Then show what Palit adds.",
        "Answer “Sip, Pika and Figma already do this” before a judge asks it.",
        "Show the split: a quiet, native menu bar, then the archive opens raw and archival, Are.na rather than Cosmos (A26)."
      ],
      needs: ["Noah's reason for pure white over the grays, in his words", "A competitor grid graphic, from Research", "Design system frames (teammate)", "Something from users: a few quick interviews or test T1"],
      links: [{ label: "Storyboard", href: "#video/storyboards" }, { label: "The candidate", href: "#video/dives" }],
      tags: ["visual", "landscape"],
      status: "storyboarded",
      storyboard: {
        note: "In Naheel's format: the question, the ways we tried, where we landed and why, and what didn't make the cut. The shot where it lands still needs your reason for pure white, in your words.",
        shots: [
          { at: 0, to: 8, title: "The question", frame: { page: "../v2/index.html?clean&scene=zoom-out", focus: [207, 56, 1008], label: "Prototype v2, Days zoomed out" },
            shows: "Days zoomed all the way out: a wall of colors kept from everywhere, nothing but color, with the question over it.",
            says: "How do we build a color palette and a design system for a tool that collects color?", source: "Noah's own question (entry 79)", refs: [79] },
          { at: 8, to: 20, title: "The closest competitor", frame: { img: "../references/competitors/sip/01-docs-color-formats.webp", href: "#inspiration/sip", label: "Sip" },
            shows: "Sip, the main competitor: a dark window, palettes as strips, named colors and a long menu of developer formats.",
            says: "Sip, the closest tool, is built for handoff: it asks which format you need. And its interface brings its own blue and violet to the colors you're judging.", refs: [47] },
          { at: 20, to: 28, title: "The gap", frame: { card: "11 color pickers studied. One is known to keep any trace of where a color came from: a screenshot." },
            shows: "One frame for the landscape: the pickers we studied, and the gap in them.",
            says: "Of eleven color pickers we studied, only one is known to keep any trace of where a color came from." },
          { at: 28, to: 41, title: "The baseline", frame: { img: "shots/foundations-01.jpg", href: "../workshop/index.html", label: "Foundations workshop" },
            shows: "The foundations workshop. Two ways for the canvas: warm chrome around neutral wells for the colors, which was the recommendation, or neutral everywhere.",
            says: "The recommendation was warm chrome around neutral wells. We went neutral everywhere, because a neutral canvas lets you judge color honestly. No accent color either: the colors you keep are the only color.", source: "“A neutral canvas lets you judge color honestly” is Noah's reason (entry 9)", refs: [8, 9, 10] },
          { at: 41, to: 51, title: "The crux: which surface", frame: { img: "shots/dive1-surface.jpg", href: "../workshop/features.html", label: "Feature workshop" },
            shows: "The feature workshop's three surfaces: pure white, a fixed mid gray (L* 50, the CIE's gray for judging color differences), or a few named grays, with the same colors on each.",
            says: "Then the hardest question: what surface shows a color as it is?", refs: [80] },
          { at: 51, to: 63, title: "No surface is neutral", frame: { img: "shots/dive1-twin.jpg", href: "../workshop/features.html", label: "Feature workshop" },
            shows: "The same Pool tile teal on white and on black, and the research underneath.",
            says: "No surface is neutral for every color. With only the gray behind them changed, the visible difference between the same two colors changed by up to eight times (Xin, Lam and Luo, 2004).", refs: [80] },
          { at: 63, to: 73, title: "Where we landed, and why", frame: { page: "../v2/index.html?clean&scene=spectrum", focus: [207, 56, 1008], label: "Prototype v2, Spectrum" },
            shows: "Spectrum on pure white paper: every color fanned by hue, the only color on screen.",
            says: "We kept pure white.", needs: "Your reason for white over the grays, in your words. The standard for judging prints rules out surrounds this light (ISO 3664), so your reason carries this shot.", refs: [87] },
          { at: 73, to: 84, title: "What we cut", frame: { img: "../workshop/shots/archive-now.jpg", href: "../journey/index.html#/archive", label: "The v1 archive" },
            shows: "The v1 archive: the same tile for every color, the label under each, two rows of filter chips, an inspector full of small gray text.",
            says: "Then we cut. Numbers off the tiles, two rows of filters down to seven letters, and the names onto the colors.", source: "Noah called v1 “very stagnant and boring” (entry 93); the cuts are from his look workshop picks (entries 94 and 95)", refs: [93, 94, 95] },
          { at: 84, to: 95, title: "Nothing distracts from the color", frame: { page: "../v2/index.html?clean&scene=days", focus: [207, 56, 684], label: "Prototype v2, Days" },
            shows: "Prototype v2: the seven ROYGBIV letters above a wall of today's colors, names set on the colors, nothing else on the first view.", framing: "Push in on the letters, then pull back to the wall.",
            says: "Seven letters for a nav. A ring for a capture. A strip for a palette. The colors themselves tell the stories, not how we present them.", source: "The last line is Noah's (entry 102); what stays out of the color's way is his direction for this deep dive (entry 104)", refs: [104, 95, 102, 103] }
        ]
      }
    },
    {
      id: "rock2",
      part: "process",
      title: "Deep dive 2",
      rock: null,
      seconds: 85,
      purpose: "What we tried, what didn't work, and where we landed: 2–3 approaches, the one we chose, and why.",
      line: "",
      needs: ["2 curated directions", "The reason for the choice", "A test result"],
      tags: [],
      status: "blocked",
      blockedBy: "Co-decided with Noah once the final prototype works"
    },
    {
      id: "rock3",
      part: "process",
      title: "Deep dive 3",
      rock: null,
      optional: true,
      seconds: 70,
      purpose: "Optional. If it's cut, its time goes to deep dives 1 and 2.",
      line: "",
      needs: ["2 curated directions", "The reason for the choice"],
      tags: [],
      status: "blocked",
      blockedBy: "Co-decided with Noah once the final prototype works"
    },
    {
      id: "next",
      part: "process",
      title: "What's next",
      seconds: 15,
      purpose: "The vision: colors moving into the tools you use, and the real build.",
      line: "",
      ideas: ["From Noah's interview with a civil engineer (entry 110): teams that build slide decks, presentations and projects keep separate color codes. Palit is built for visual designers, but engineers, general creatives and team leads could use it too.", "Sharing, with Shared with you and share cards (entries 108 and 109), if Noah signs off on the network."],
      needs: ["One forward-looking visual"],
      tags: ["next"],
      status: "idea"
    }
  ]
};
