// Palit screens: every screen and flow in one place, in the order we made them.
// `entries` are decision numbers (Entry 28 is #e28). Research isn't copied here: each
// `find` picks an item out of research.js (evidence, precedent) or inspiration.js (Sip),
// so the wording stays the source's. Previews load the real pages, live; `img` is a screenshot of
// an archived page (taken October 18 with headless Chrome), shown instead of loading it live. `focus` is the
// part of the 1440 by 810 stage a step's preview zooms into: x, y and width.

window.PALIT = window.PALIT || {};
window.PALIT.screens = {
  updated: "2026-10-18",

  journey: {
    title: "The journey now",
    href: "../journey/index.html",
    note: "The prototype, built on October 18 from the design system. Press P in it to play the whole journey for recording, or use it yourself: ⌥⇧C, click any color, then Return to name it. Hold ⇧ as you click to keep a palette. Every line of copy in it is a draft for Noah.",
    entry: 58,
    steps: [
      {
        scene: "desktop",
        title: "Out of sight",
        does: "Palit is a small icon in the menu bar, and a thin strip of your latest colors docked at the screen's edge. Nothing else until you call it.",
        entries: [28, 30, 81, 82],
        research: [
          { from: "precedent", find: "Wispr Flow's presence" },
          { from: "sip", find: "Quiet in practice" }
        ]
      },
      {
        scene: "picking",
        focus: [144, 372, 560],
        title: "One keystroke",
        does: "⌥⇧C turns the pointer into a small loupe. Its ring shows the color under it; the hole in the middle shows the pixels.",
        entries: [2, 28, 56],
        research: [
          { from: "evidence", find: "freely chose what to photograph" },
          { from: "precedent", find: "Microsoft Recall" }
        ]
      },
      {
        scene: "captured",
        focus: [800, 200, 640],
        title: "It lands in the desktop palette",
        does: "A click keeps the color: a small ring, a soft sound, and it lands at the top of the desktop palette. No chip, and picking copies nothing.",
        entries: [84, 68, 81, 56],
        drafts: ["The sound is the soft capture sound from the foundations workshop (W10). How the landing and the sound feel is for test T2."],
        research: [
          { from: "evidence", find: "Photographing whole objects" },
          { from: "sip", find: "Quiet in practice" }
        ]
      },
      {
        scene: "naming",
        focus: [240, 380, 640],
        title: "Name it beside the cursor",
        does: "Right-click instead, and a small field opens next to the pointer. Return names it; Esc leaves it for later, in the archive.",
        entries: [84, 44, 49],
        drafts: ["Your idea, to try in the prototype (A52). “Return names it. Esc leaves it for later.” is draft copy.", "Playback types “Childhood home”, your own example from entry 44."],
        research: [
          { from: "evidence", find: "named a product" },
          { from: "evidence", find: "Putting a visual memory into words" },
          { from: "sip", find: "Names. Sip names colors" }
        ]
      },
      {
        scene: "palette",
        title: "Or a palette",
        does: "Hold ⇧ and keep clicking: each ⇧-click keeps one more color while the loupe stays open, and each lands in the desktop palette. A plain click keeps the last one and ends it.",
        entries: [67, 81],
        drafts: ["Approved: hold ⇧ (A45). Its copying went with A46: picking copies nothing."],
        research: [
          { from: "evidence", find: "freely chose what to photograph" },
          { from: "precedent", find: "The spectrum" },
          { from: "sip", find: "Keeping repeats" }
        ]
      },
      {
        scene: "copy",
        focus: [800, 200, 640],
        title: "Copy it when you need it",
        does: "Point at the desktop palette and it opens. Click a color to copy its hex, ⌥-click for RGB, ⌘-click for OKLCH.",
        entries: [83, 68],
        research: [
          { from: "sip", find: "Ideation, not handoff" }
        ]
      },
      {
        scene: "floating",
        focus: [700, 40, 740],
        title: "Move it, or keep it docked",
        does: "Drag it off the edge to sit anywhere on the desktop. Bring it back and it snaps to the edge.",
        entries: [82],
        research: [
          { from: "precedent", find: "Wispr Flow's presence" }
        ]
      },
      {
        scene: "pinned",
        focus: [800, 200, 640],
        title: "Pin a palette",
        does: "Pin a palette from the archive, and the desktop palette holds it, fixed, so you can carry the same colors from app to app. New picks still go to the archive.",
        entries: [81],
        drafts: ["Your workshop note adds the MCP idea: pulling straight from your archive (Q10)."]
      },
      {
        scene: "popover",
        focus: [800, 0, 640],
        title: "The menu bar",
        does: "Click the icon for the last few colors, a way to steal another, and the archive. The native shell: system material and rounded corners, with raw chips inside.",
        entries: [48, 56],
        drafts: ["The footer, “Stored on this Mac”, is still the v0 proposal (P14). The iris icon is still a proposal too (P3)."],
        research: [
          { from: "sip", find: "Judging color honestly" }
        ]
      },
      {
        scene: "archive",
        title: "The archive keeps the story",
        does: "Everything you've kept, newest first, on the 1 px ink grid. The story reads top to bottom: your name, a note of your own, the identity, where it came from with its link and time, the 8 neighbors, how it reads, and the similar colors you've kept.",
        entries: [29, 48, 49, 56, 86],
        research: [
          { from: "evidence", find: "Of the 8 references on Noah's own" },
          { from: "evidence", find: "Mature pickers already keep a history" },
          { from: "sip", find: "Where a color came from" }
        ]
      },
      {
        scene: "note",
        focus: [800, 40, 640],
        title: "A note on every color",
        does: "A quiet scratchpad on each color's card: write anything and it stays. You decide how to classify and remember it.",
        entries: [86],
        drafts: ["Draft copy: “Anything you want to remember about it”. Playback types “Teal all the way into the shadow.”, also a draft."]
      },
      {
        scene: "trace",
        focus: [640, 40, 800],
        title: "Trace it back",
        does: "Similar leads to Pool tile, kept in June from a photo at McCarren pool. Each row says where and when, not how close.",
        entries: [85, 69, 70, 64],
        drafts: ["Rediscover (A42) is test T5."],
        research: [
          { from: "sip", find: "Keeping repeats" },
          { from: "evidence", find: "No study shows that resurfacing" },
          { from: "precedent", find: "Readwise" }
        ]
      },
      {
        scene: "spectrum",
        title: "Re-explore by hue",
        does: "Spectrum sorts the archive from red around to violet, then the neutrals. The filters run on the technical identity, not on names.",
        entries: [49, 2],
        research: [
          { from: "evidence", find: "Color discrimination improved with practice" },
          { from: "evidence", find: "Albers taught color" }
        ]
      },
      {
        scene: "source",
        focus: [144, 372, 560],
        title: "Back to where it came from",
        does: "The link in the story closes the archive and rings the spot on the page where you found the color.",
        entries: [42, 1, 65],
        drafts: ["Approved: going back to the exact spot on the page (A43)."],
        research: [
          { from: "evidence", find: "The Dress (2015)" },
          { from: "evidence", find: "changed by a factor of up to 8" }
        ]
      }
    ]
  },

  rounds: [
    {
      id: "v0",
      why: 2,
      date: "2026-10-04",
      title: "v0 prototype",
      by: "Claude, on the design canvas",
      tried: "Three artboards: the capture moment, the capture card and the archive, with the 28 sample captures.",
      entries: [1, 2],
      kept: "Still in the prototype: ⌥⇧C, the 8 neighbors, Reads as, Kept before, Timeline and Spectrum, and “Stored on this Mac”.",
      changed: "Changed since: numbers instead of names became human-first naming (entry 44); the ring pulse and toast became a small loupe ring and a chip (entry 56); SF Mono became SF Pro with tabular figures (entry 56). Undo isn't in the new prototype yet.",
      screens: [
        { title: "The live canvas", href: "https://claude.ai/artifact/B6hBpSpGPZenBxRx6iYZYY", note: "It needs the canvas runtime, so there's no preview here." }
      ]
    },
    {
      id: "archive-window",
      why: 6,
      date: "2026-10-15",
      title: "Archive window sketches",
      by: "Claude, in Rivet",
      tried: "Four layouts for the archive window, each leading with something different.",
      entries: [6],
      kept: "Shares with the prototype: a Spectrum view, and a panel beside the grid with everything kept about the color you pick.",
      screens: [
        { title: "Inspector-forward", href: "../explorations/archive-window/.rivet/explore-divergent-layout-and-interaction-f5c8/.rivet-preview-22cdb57e-587d-4e30-854b-8187cb7937bc/index.html", img: "shots/archive-window-01.jpg" },
        { title: "Spectrum-forward", href: "../explorations/archive-window/.rivet/explore-divergent-layout-and-interaction-f5c8/.rivet-preview-5d29357a-8046-4e43-913a-f03ea3677b73/index.html", img: "shots/archive-window-02.jpg", note: "Its script stops on a bug, a variable named top, so the wheel stays empty. Kept as it was made." },
        { title: "Source-forward", href: "../explorations/archive-window/.rivet/explore-divergent-layout-and-interaction-f5c8/.rivet-preview-73a288a2-a23d-41c3-94e4-42ccad0ac7c6/index.html", img: "shots/archive-window-03.jpg" },
        { title: "Ribbon-forward", href: "../explorations/archive-window/.rivet/explore-divergent-layout-and-interaction-f5c8/.rivet-preview-aadf0def-388f-43c0-8fa8-3cccea217e77/index.html", img: "shots/archive-window-04.jpg" }
      ]
    },
    {
      id: "foundations",
      why: 9,
      date: "2026-10-16",
      title: "Foundations workshop",
      by: "Claude; picks by Noah",
      tried: "The visual foundations, one choice at a time: canvas, ink, accent, type, numbers, radii, swatches, material and sound.",
      entries: [8, 9, 10],
      kept: "Still in the prototype: the neutral canvas and ink, no accent color, SF Pro, lowercase hex and “No. 028”.",
      changed: "Changed since: rounded swatches (W8) became square in the heart, and the radii now belong only to the native shell (entry 56).",
      screens: [
        { title: "Foundations workshop", href: "../workshop/index.html", img: "shots/foundations-01.jpg" }
      ]
    },
    {
      id: "lofi",
      why: 11,
      date: "2026-10-16",
      title: "Lofi round 2",
      by: "Claude, in Rivet",
      tried: "12 sheets of very lofi wireframes in four directions, minimal, editorial, structural remix and expressive, plus three that stay close to the references.",
      entries: [11, 12, 13],
      screens: [
        { title: "Close to the references", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-22cff729-d88c-49a6-895d-e8d7d6cbb28f/index.html", img: "shots/lofi-01.jpg" },
        { title: "Close to the references", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-c3bbd71a-882d-480c-8d74-8991155fd979/index.html", img: "shots/lofi-02.jpg" },
        { title: "Close to the references", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-e6f1c93e-954a-4775-87be-c3985d50c14d/index.html", img: "shots/lofi-03.jpg" },
        { title: "Minimal", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-5e5441b5-f9fd-4c77-8baf-3300a0ded6cc/index.html", img: "shots/lofi-04.jpg" },
        { title: "Minimal", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-6bd1627a-37d3-40d5-a3d0-c4ba605392c1/index.html", img: "shots/lofi-05.jpg" },
        { title: "Editorial", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-67d30b80-4039-43f2-91b2-091c18cbe510/index.html", img: "shots/lofi-06.jpg" },
        { title: "Editorial", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-e8b9e345-b093-4ad1-8dee-1f03a96a0137/index.html", img: "shots/lofi-07.jpg" },
        { title: "Structural remix", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-2678554f-9a8d-484f-a643-a97c36a64a36/index.html", img: "shots/lofi-08.jpg" },
        { title: "Structural remix", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-33a29ea5-e258-4887-8247-0a530539a5f3/index.html", img: "shots/lofi-09.jpg" },
        { title: "Expressive", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-5a3d23c4-b247-488a-a734-0e57dc695a37/index.html", img: "shots/lofi-10.jpg" },
        { title: "Expressive", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-8a0d3485-6a57-43ab-9472-c83de1bc8ed4/index.html", img: "shots/lofi-11.jpg" },
        { title: "Expressive", href: "../explorations/lofi-round-2/.rivet/make-12-very-lofi-mockups-for-palette-a--548b/.rivet-preview-9b76a61e-f36d-46ae-b723-3d08f87c54f7/index.html", img: "shots/lofi-12.jpg" }
      ]
    },
    {
      id: "flows",
      why: 15,
      date: "2026-10-16",
      title: "Flow explorations",
      by: "Claude, in Rivet",
      tried: "The product split into four flows, three clickable prototypes each: capture, the card, the archive, and collecting.",
      entries: [15],
      kept: "Shares with the prototype: a chip after a capture. Entry 28 kept the chips and dropped the drop-down cards.",
      screens: [
        { title: "Capture: barely there", href: "../explorations/flows/01-capture/.rivet/this-prototype-flow-1-of-4-capturing-a-c-94b1/.rivet-preview-23ef950c-17a3-4d92-994d-327d80d3346a/index.html", img: "shots/flows-01.jpg" },
        { title: "Capture: chip print", href: "../explorations/flows/01-capture/.rivet/this-prototype-flow-1-of-4-capturing-a-c-94b1/.rivet-preview-353a54dd-5487-4c7c-9f7a-40011b1ad797/index.html", img: "shots/flows-02.jpg" },
        { title: "Capture: label toast", href: "../explorations/flows/01-capture/.rivet/this-prototype-flow-1-of-4-capturing-a-c-94b1/.rivet-preview-f3079248-0ceb-40bc-a449-136f778f6548/index.html", img: "shots/flows-03.jpg" },
        { title: "Card: swatch book", href: "../explorations/flows/02-card/.rivet/this-prototype-flow-2-of-4-the-capture-c-271d/.rivet-preview-58becb41-e97c-42e3-836f-6992f49b573c/index.html", img: "shots/flows-04.jpg" },
        { title: "Card: specimen card", href: "../explorations/flows/02-card/.rivet/this-prototype-flow-2-of-4-the-capture-c-271d/.rivet-preview-739053ea-079b-4fc8-bd33-5cff0fe2bcd4/index.html", img: "shots/flows-05.jpg" },
        { title: "Card: paint chip", href: "../explorations/flows/02-card/.rivet/this-prototype-flow-2-of-4-the-capture-c-271d/.rivet-preview-85975b8d-b222-4306-995a-b355da41d22a/index.html", img: "shots/flows-06.jpg" },
        { title: "Archive: fan deck", href: "../explorations/flows/03-archive/.rivet/this-prototype-flow-3-of-4-the-archive-w-210f/.rivet-preview-8e8a2705-de55-460d-bf57-6527b27de943/index.html", img: "shots/flows-07.jpg" },
        { title: "Archive: chip wall", href: "../explorations/flows/03-archive/.rivet/this-prototype-flow-3-of-4-the-archive-w-210f/.rivet-preview-b5048b8d-d5cb-4051-bc23-a7d9c6bece22/index.html", img: "shots/flows-08.jpg" },
        { title: "Archive: ledger and stage", href: "../explorations/flows/03-archive/.rivet/this-prototype-flow-3-of-4-the-archive-w-210f/.rivet-preview-fbd1fcc5-b045-420d-85fd-fd446182fe81/index.html", img: "shots/flows-09.jpg" },
        { title: "Collect: structural remix", href: "../explorations/flows/04-collect/.rivet/this-prototype-flow-4-of-4-collecting-na-de1c/.rivet-preview-c15b9812-fa2a-4643-9f3e-2a988d857010/index.html", img: "shots/flows-10.jpg" },
        { title: "Collect: expressive", href: "../explorations/flows/04-collect/.rivet/this-prototype-flow-4-of-4-collecting-na-de1c/.rivet-preview-dd5e7cdc-a976-48df-aa62-95c23302f1e0/index.html", img: "shots/flows-11.jpg" },
        { title: "Collect: naming stack", href: "../explorations/flows/04-collect/.rivet/this-prototype-flow-4-of-4-collecting-na-de1c/.rivet-preview-f68576e9-06ff-4af6-bab6-790bfe583a68/index.html", img: "shots/flows-12.jpg" }
      ]
    },
    {
      id: "ideations",
      why: 16,
      date: "2026-10-16",
      title: "Cosmos and Are.na ideations",
      by: "Antigravity, while Noah was away",
      tried: "12 more prototypes across the same four flows, each drawn from one reference on the palit ideation boards.",
      entries: [16, 18, 19, 20],
      changed: "Replaced since: the collectible, analog card direction gave way to a native shell with a raw, archival heart (entry 48).",
      screens: [
        { title: "Capture: Ravex ticket", href: "../explorations/flows-arena-cosmos/01-capture/ravex-ticket.html", img: "shots/ideations-01.jpg" },
        { title: "Capture: specimen crosshair", href: "../explorations/flows-arena-cosmos/01-capture/specimen-crosshair.html", img: "shots/ideations-02.jpg" },
        { title: "Capture: Aesop receipt", href: "../explorations/flows-arena-cosmos/01-capture/aesop-receipt.html", img: "shots/ideations-03.jpg" },
        { title: "Card: industrial specimen", href: "../explorations/flows-arena-cosmos/02-card/industrial-specimen.html", img: "shots/ideations-04.jpg" },
        { title: "Card: Pantone context", href: "../explorations/flows-arena-cosmos/02-card/pantone-context.html", img: "shots/ideations-05.jpg" },
        { title: "Card: field catalogue", href: "../explorations/flows-arena-cosmos/02-card/field-catalogue.html", img: "shots/ideations-06.jpg" },
        { title: "Archive: radial fan deck", href: "../explorations/flows-arena-cosmos/03-archive/radial-fan-deck.html", img: "shots/ideations-07.jpg" },
        { title: "Archive: specimen cabinet", href: "../explorations/flows-arena-cosmos/03-archive/specimen-cabinet.html", img: "shots/ideations-08.jpg" },
        { title: "Archive: paint shelf", href: "../explorations/flows-arena-cosmos/03-archive/paint-shelf.html", img: "shots/ideations-09.jpg" },
        { title: "Collect: swatch ring", href: "../explorations/flows-arena-cosmos/04-collect/swatch-ring.html", img: "shots/ideations-10.jpg" },
        { title: "Collect: Albers workbench", href: "../explorations/flows-arena-cosmos/04-collect/albers-workbench.html", img: "shots/ideations-11.jpg" },
        { title: "Collect: triage stack", href: "../explorations/flows-arena-cosmos/04-collect/triage-stack.html", img: "shots/ideations-12.jpg" }
      ]
    },
    {
      id: "flow-workshop",
      why: 28,
      date: "2026-10-16",
      title: "Flow workshop",
      by: "Antigravity, while Noah was away",
      tried: "The flows combined into four proposals, ED1 to ED4, starting with a ticket chip that drops from the menu bar.",
      entries: [17, 28],
      changed: "Changed since: on a dropper prototype, Noah found the circle too noticeable and the drop-down cards too big. The chips stayed (entry 28).",
      screens: [
        { title: "Flow workshop", href: "../workshop/flow-workshop.html", img: "shots/flow-workshop-01.jpg" }
      ]
    },
    {
      id: "reset",
      why: 27,
      date: "2026-10-16",
      title: "Start from the ground up",
      by: "Noah",
      tried: "After the SVSD brief, everything made so far became reference, not a constraint: who it's for and why first, then the concept.",
      entries: [26, 27],
      screens: []
    },
    {
      id: "system",
      why: 55,
      date: "2026-10-17",
      title: "Design system",
      by: "Claude; calls by Noah",
      tried: "Atoms, molecules, organisms and templates, built from the sample captures, with the decision and research behind each piece.",
      entries: [51, 53, 55, 56],
      screens: [
        { title: "Design system", href: "../system/index.html" },
        { title: "Its templates", href: "../system/index.html#templates", img: "shots/system-02.jpg" }
      ]
    },
    {
      id: "prototype",
      why: 58,
      date: "2026-10-18",
      title: "The prototype: the core journey",
      by: "Claude, from the design system",
      tried: "The journey from Noah's notes on a Mac desktop: out of sight, one keystroke, the chip, naming, the archive's story, and back to the source. It plays on its own for recording.",
      entries: [58, 59, 60, 61, 62, 63, 64, 65, 66, 67],
      screens: [
        { title: "Out of sight", href: "../journey/index.html?clean&keys=0#/desktop" },
        { title: "The chip", href: "../journey/index.html?clean&keys=0#/captured" },
        { title: "A palette", href: "../journey/index.html?clean&keys=0#/palette" },
        { title: "The archive", href: "../journey/index.html?clean&keys=0#/archive" }
      ]
    },
    {
      id: "feature-workshop",
      why: 81,
      date: "2026-10-18",
      title: "Feature workshop",
      by: "Claude; picks by Noah",
      tried: "Seven questions after Noah's answers on the prototype: the desktop palette, the chip, Similar, the surface and the capture card, with a live desk to try them.",
      entries: [73, 81, 82, 83, 84, 85, 86, 87, 88],
      screens: [
        { title: "Feature workshop", href: "../workshop/features.html" }
      ]
    },
    {
      id: "prototype-2",
      why: 84,
      date: "2026-10-18",
      title: "The prototype, rebuilt from the workshop",
      by: "Claude, from the design system",
      tried: "No chip: a new color lands in the desktop palette with a sound. Naming beside the cursor, copying with a key per format, a palette you can drag and pin, Similar that says where and when, and a note on every color.",
      entries: [81, 82, 83, 84, 85, 86, 90],
      screens: [
        { title: "It lands in the palette", href: "../journey/index.html?clean&keys=0#/captured" },
        { title: "Name it beside the cursor", href: "../journey/index.html?clean&keys=0#/naming" },
        { title: "Copy it", href: "../journey/index.html?clean&keys=0#/copy" },
        { title: "A note on every color", href: "../journey/index.html?clean&keys=0#/note" }
      ]
    },
    {"id": "look-workshop", "why": 93, "date": "2026-10-18", "title": "Look and flow workshop", "by": "Claude; picks by Noah", "tried": "Eight questions after Noah found v1 stagnant: what makes it stagnant, three directions for the archive (the fan, the drawer, the wall), what it opens on, how a color opens, type, motion, the moment you keep a color, and the desktop palette. All 21 options were live, built from the same colors.", "kept": "Noah picked the wall, today first, the specimen card, his name as the hero, motion that answers you, the ring with a duller sound, and slim strips (entries 94 to 102).", "entries": [93, 94, 95, 96, 97, 98, 99, 100, 101, 102], "screens": [{"title": "The archive's direction, A: The fan", "img": "shots/look-archive-a.jpg", "href": "../workshop/look.html"}, {"title": "The archive's direction, B: The drawer", "img": "shots/look-archive-b.jpg", "href": "../workshop/look.html"}, {"title": "The archive's direction, C: The wall", "img": "shots/look-archive-c.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "What it opens on, A: Everything, newest first", "img": "shots/look-home-a.jpg", "href": "../workshop/look.html"}, {"title": "What it opens on, B: Today first", "img": "shots/look-home-b.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "What it opens on, C: The last color, open", "img": "shots/look-home-c.jpg", "href": "../workshop/look.html"}, {"title": "How a color opens, A: Flip the card", "img": "shots/look-open-a.jpg", "href": "../workshop/look.html"}, {"title": "How a color opens, B: A specimen card", "img": "shots/look-open-b.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "How a color opens, C: The color takes the window", "img": "shots/look-open-c.jpg", "href": "../workshop/look.html"}, {"title": "Type, A: Quiet, as now", "img": "shots/look-type-a.jpg", "href": "../workshop/look.html"}, {"title": "Type, B: Your name is the big thing", "img": "shots/look-type-b.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "Type, C: The number is the big thing", "img": "shots/look-type-c.jpg", "href": "../workshop/look.html"}, {"title": "Motion, A: Still, as now", "img": "shots/look-motion-a.jpg", "href": "../workshop/look.html"}, {"title": "Motion, B: Motion that answers you", "img": "shots/look-motion-b.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "Motion, C: Always a little alive", "img": "shots/look-motion-c.jpg", "href": "../workshop/look.html"}, {"title": "Keeping a color, A: Ring and chime, as now", "img": "shots/look-capture-a.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "Keeping a color, B: A numbered ticket", "img": "shots/look-capture-b.jpg", "href": "../workshop/look.html"}, {"title": "Keeping a color, C: A bloom", "img": "shots/look-capture-c.jpg", "href": "../workshop/look.html"}, {"title": "The desktop palette, A: Slim strips, as now", "img": "shots/look-palette-a.jpg", "href": "../workshop/look.html", "note": "Noah's pick"}, {"title": "The desktop palette, B: Little chips", "img": "shots/look-palette-b.jpg", "href": "../workshop/look.html"}, {"title": "The desktop palette, C: A fan at the edge", "img": "shots/look-palette-c.jpg", "href": "../workshop/look.html"}]},
    {"id": "prototype-v2", "why": 105, "date": "2026-10-18", "title": "Prototype v2, on real pages", "by": "Claude, from Noah's picks", "tried": "The new look on real Wikipedia pages and Commons photos over the Mac's iMac Silver wallpaper: Days, Collections and Spectrum, the ROYGBIV letters, the specimen card over a real crop, pins grouped into palettes, share cards, and three duller sounds to try.", "entries": [95, 96, 98, 99, 100, 101, 102, 103, 105, 107, 108, 109], "screens": [{"title": "Days, today first", "href": "../v2/index.html?clean&scene=days"}, {"title": "The specimen card", "href": "../v2/index.html?clean&scene=card"}, {"title": "Spectrum", "href": "../v2/index.html?clean&scene=spectrum"}, {"title": "Palettes", "href": "../v2/index.html?clean&scene=palettes"}]}
  ],

  // Prototype v2 (entries 94 to 109): its steps, as live frames on the Work page
  v2: {
    "title": "Prototype v2",
    "href": "../v2/index.html",
    "entry": 105,
    "before": [
      "Not loving it right now - feels very stagnant and boring",
      "Noah, on v1"
    ],
    "after": [
      "Feeling so good about this tool - it is really oozing the professional specimen and collection vibe i wanted to achieve, and it feels so elevated",
      "Noah, on v2"
    ],
    "changes": [
      [
        "Three ways in: Days, Collections and Spectrum.",
        [
          96
        ]
      ],
      [
        "Nothing on first view but color: names on the colors, no numbers, details on hover, and seven ROYGBIV letters to filter.",
        [
          95
        ]
      ],
      [
        "A color opens as a specimen card over where you found it, your name as the hero, with a scratch pad.",
        [
          98,
          99
        ]
      ],
      [
        "Clean, functional and considered, not Are.na-brutalist.",
        [
          103
        ]
      ],
      [
        "Real pages and a real Mac wallpaper instead of the drawn desk; no logo yet, the menu bar says Palit.",
        [
          105,
          107
        ]
      ],
      [
        "Right-click any color to add it to a palette, ⇧-click to gather several, the letters on Pinned too, and a zoom of − and + with seven stops.",
        [
          116,
          117,
          118
        ]
      ]
    ],
    "steps": [
      {
        "group": "Keeping a color",
        "scene": "picking",
        "focus": [
          560,
          196,
          760
        ],
        "title": "The loupe on a real photo",
        "does": "⌥⇧C, and the loupe reads the real pixels of whatever is under it: here, a crocoite crystal open in Preview.",
        "entries": [
          101,
          105
        ],
        "research": [
          {
            "from": "evidence",
            "find": "freely chose what to photograph"
          },
          {
            "from": "evidence",
            "find": "Photographing whole objects"
          }
        ]
      },
      {
        "group": "Keeping a color",
        "scene": "landed",
        "focus": [
          760,
          196,
          680
        ],
        "title": "A ring, and it lands",
        "does": "A click keeps it: a small ring, one of three duller sounds, and the color lands at the top of the slim strips on the right edge.",
        "entries": [
          101,
          102
        ],
        "research": [
          {
            "from": "sip",
            "find": "Ideation, not handoff"
          }
        ]
      },
      {
        "group": "Keeping a color",
        "scene": "desk",
        "focus": [
          760,
          196,
          680
        ],
        "title": "A palette on the desktop",
        "does": "Pin a palette to the desktop and the strips hold it, with a thin mark on top so you know it's pinned.",
        "entries": [
          102,
          96
        ],
        "research": []
      },
      {
        "group": "Days",
        "scene": "days",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Days, today first",
        "does": "A wall with nothing on it but color: today's colors large, earlier days below, names set on the colors, no numbers. A palette's colors sit together with no gap.",
        "entries": [
          95,
          97,
          94
        ],
        "research": [
          {
            "from": "precedent",
            "find": "The spectrum"
          }
        ]
      },
      {
        "group": "Days",
        "scene": "zoom-out",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Zoomed out: only color",
        "does": "Seven stops, with − and + at the top, or ⌘− and ⌘+. At the two smallest there's no text at all; point at a color for the rest.",
        "entries": [
          100,
          117
        ],
        "research": []
      },
      {
        "group": "Days",
        "scene": "zoom-in",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Zoomed in: full names",
        "does": "At the largest size each color carries its full name, and nothing else. ⌘0 goes back to the middle.",
        "entries": [
          100,
          99,
          117
        ],
        "research": [
          {
            "from": "evidence",
            "find": "Putting a visual memory into words"
          }
        ]
      },
      {
        "group": "Spectrum",
        "scene": "spectrum",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Spectrum: every color, fanned",
        "does": "Every color you've ever found, fanned by hue in one long scroll, with the top card's name large. The seven ROYGBIV letters narrow it; a small count sits at the bottom right.",
        "entries": [
          96,
          104
        ],
        "research": [
          {
            "from": "precedent",
            "find": "The spectrum"
          }
        ]
      },
      {
        "group": "Collections",
        "scene": "pins",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Pinned",
        "does": "What matters most is what you pin, narrowed by the same seven letters.",
        "entries": [
          96,
          118
        ],
        "research": []
      },
      {
        "group": "Collections",
        "scene": "menu",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Add to palette",
        "does": "⇧-click gathers colors anywhere in the window, and a bar says how many. Right-click for Add to palette, like Spotify's Add to playlist, as a Mac menu: New palette, then each palette with its colors, a check where it's already in, and Pin in the same menu. The card has Add to palette too.",
        "entries": [
          116
        ],
        "research": []
      },
      {
        "group": "Collections",
        "scene": "palettes",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Palettes",
        "does": "Palettes kept with ⇧ while picking, or made with Add to palette, each with Share and Pin to the desktop. Click a palette's name to give it yours.",
        "entries": [
          96,
          109,
          116
        ],
        "research": []
      },
      {
        "group": "Collections",
        "scene": "shared",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "Shared with you",
        "does": "Palettes other people send you, kept as a copy if you want them. Sample senders; real sharing needs Noah's sign-off on the network (Q23).",
        "entries": [
          108,
          110
        ],
        "research": []
      },
      {
        "group": "Collections",
        "scene": "share",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "A share card",
        "does": "The colors large, each name and hex under it, and a button that copies the codes, for teams that keep separate color codes.",
        "entries": [
          109,
          110
        ],
        "research": []
      },
      {
        "group": "A color, opened",
        "scene": "card",
        "focus": [
          150,
          62,
          1120
        ],
        "title": "The specimen card",
        "does": "The color as a chip over a real crop of where you found it, your name as the hero, where it came from with a way back, Similar with places and days, every palette it's in, Pin, Add to palette and Share, and the scratch pad.",
        "entries": [
          98,
          99,
          103,
          116
        ],
        "research": [
          {
            "from": "evidence",
            "find": "Putting a visual memory into words"
          },
          {
            "from": "evidence",
            "find": "pushes a color's hue away"
          },
          {
            "from": "sip",
            "find": "Names. Sip names colors"
          }
        ]
      }
    ]
  }
};
