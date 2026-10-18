// Palit inspiration: the reference boards and what each reference gives us.
// `rivet` holds Rivet's description of the image (shortened). `origin` is where the
// saved reference points back to, according to Are.na and Cosmos.

window.PALIT = window.PALIT || {};
window.PALIT.inspiration = {
  updated: "2026-10-16",

  // The main competitor, documented as a whole (A25).
  competitor: {
    id: "sip",
    name: "Sip",
    title: "Main competitor: Sip",
    hint: "Documented as a whole (its flow, design system and visual language) so Palit can contend with it directly (A25). From Sip's own site and docs, Rivet captures and reviews, October 16.",
    images: [
      { src: "../references/competitors/sip/02-homepage-rivet-capture.png", caption: "The homepage, captured with Rivet on October 16. Poppins type, deep violet-black ink, pill buttons." },
      { src: "../references/competitors/sip/01-docs-color-formats.webp", caption: "The app, from Noah's screenshot of the docs: a dark macOS window, palettes as strips, named colors, and a long menu of developer formats." },
      { src: "../references/competitors/sip/03-docs-rivet-capture.png", caption: "The docs, captured with Rivet: Inter type, a blue accent, and macOS Sonoma, Sequoia and Tahoe badges." }
    ],
    glance: [
      ["What it is", "A Mac color picker and organizer for professionals: gather, organize and share colors, and convert them to any format."],
      ["Its promise", "The right color every time, fast, and out of the way until you need it."],
      ["Who it's for", "Designers and developers: handing colors from design into code."],
      ["Platform", "macOS only. The current version (5.1.1, October 11, 2026) needs macOS 15; the docs still say Sonoma. Also on Setapp and Homebrew."],
      ["Price", "$29.99 per device with a year of updates, and $20.99 to renew. A 15-day free trial, 50% off for education, or included in Setapp ($14.99 a month)."],
      ["History", "On sale since 2012, rebuilt from scratch in 2017. Version 5.0 shipped July 13, 2026."],
      ["Maker", "Olá Brothers: André Gonçalves and Rui Aureliano."]
    ],
    flow: [
      "Download a 15-day trial with everything unlocked, and activate it with a license key.",
      "Open the picker from the menu bar icon, the toolbar, ⌃⌥⌘P, or a sip:// link.",
      "A round magnifying loupe over a pixel grid, with a one-pixel target. Resize and zoom it with + and −, and nudge it with the arrow keys.",
      "Hold ⌘ while picking to pick one color or several, check contrast, or send the color to a supported app.",
      "The pick goes onto the clipboard in the active format (or the app's Smart Format), into Color History, and into the selected palette if one has a checkmark.",
      "No sound or on-screen confirmation is documented. The menu bar icon can fill with the last color you picked.",
      "The color gets a name automatically, from a fixed list."
    ],
    keeps: [
      "The color and an automatic name. Nothing documented about the time, source app, window, URL, surrounding colors or an image.",
      "Color History holds every pick in order. It can't be edited, and Clean History empties it in one action.",
      "Snapshots back up palettes, listed only by creation time and size."
    ],
    naming: "Automatic, from Chirag Mehta's Name That Color list (other copies of it hold about 1,500 names). You can rename a color in the Color Panel. A Setapp reviewer in July 2026 objected to being given the name “Underage Pink”.",
    organization: [
      "Palettes with names and descriptions, groups inside them, lock, merge, and one sort order across views.",
      "A palette can't contain the same color twice, and offers Delete Duplicated Colors.",
      "No search or tags documented. Sharing is by exporting a file (Sip Palette, ASE, CLR, JSON, PDF), plus cloud sync between your own Macs."
    ],
    formats: "24 built-in formats for code (Android, CGColor, CSS, Java, .NET, NSColor, OpenGL, Swift, UIColor) plus custom ones. Smart Formats choose a format for each app you paste into, and Smart Profiles a color profile for each app you pick from. No OKLCH, OKLab or Lab.",
    tools: [
      "Color Dock: palettes in a strip that stays on top and snaps to a screen edge. Drag colors out into other apps.",
      "Contrast Checker: AAA, AA or Fail, with a Fix button that changes a failing color for you.",
      "Color-blindness simulation in five modes, applied live.",
      "Send to software: Illustrator, InDesign, Nova, Photoshop, Sketch, VS Code and Xcode. Figma isn't named.",
      "URL schemes for the picker, contrast, settings, colors and palettes.",
      "No AI anywhere."
    ],
    visual: [
      "Three surfaces, three type systems. The marketing site uses Poppins at display sizes with deep violet-black ink (#160022) and pill buttons. The docs use Inter with a bright blue accent (#016ADF) on a standard docs template. The app uses the macOS system look.",
      "The app is a dark or light macOS window with the traffic lights and a standard toolbar. The sidebar shows Color History and palettes as horizontal strips, the middle lists named colors with their hex, and a long menu offers formats for developers.",
      "macOS everywhere: the docs show Sonoma, Sequoia and Tahoe badges, and the imagery uses saturated blue-violet gradients like a macOS wallpaper.",
      "The interface brings its own color: a blue brand accent, violet ink and saturated gradients sit right next to the colors you're judging.",
      "Its own names for its parts: the Menu Bar and Sip Menu, the Toolbar, the Palettes List, the Bottom Bar, the Color Panel, Color History and the Color Format control. The homepage's sections: Precise Picker, Powerful Editor, Smarter by Design."
    ],
    visualNote: "From Rivet's captures of the homepage and docs on October 16, Noah's screenshot of the docs, and the docs' own names for the UI.",
    reception: [
      "93% positive from 1,636 ratings on Setapp. Praised for reliability, accurate picking, and keeping brand colors consistent across apps.",
      "Complaints from 2025–2026: clicks not registering, still hard to use after weeks, an inaccurate pick, bugs and poor cloud sync, confusing Screen Recording settings, and a reviewer who switched to Pika over a missing shortcut.",
      "Older reviews (Macworld 2013, TidBITS 2019) were positive; the caveats were Mac-only and paid updates."
    ],
    strong: [
      "Handing colors to code: 24 formats, custom formats, a format for each app, and exports to Adobe, Apple and JSON.",
      "The right color profile for each app it picks from.",
      "A precise picker: resizable loupe, zoom, pixel nudges, multi-pick, and sending to 7 apps.",
      "Strong palette tools: groups, lock, merge, the Color Dock, backups, sync and URL schemes.",
      "Accessibility checks: contrast scoring and color-blindness simulation.",
      "A track record: about 14 years on sale, frequent releases, 93% positive on Setapp."
    ],
    contend: [
      "Where a color came from. No source app, window, URL, time, surrounding colors or crop is documented for a pick.",
      "Names. Sip names colors from a fixed list of about 1,500 names, and a reviewer objected to “Underage Pink”. Palit names a color after where you found it, until you name it yourself (A24).",
      "Keeping repeats. Sip's palettes refuse the same color twice and offer to delete duplicates. Palit treats keeping a color again as meaningful: “you've kept this before”.",
      "Permanence. Clean History erases every pick in one action, with no numbering or timeline. Palit never loses a capture.",
      "Describing instead of deciding. Sip's Fix button changes your color for you. Palit describes (warm or cool, value, chroma) and leaves the choice to you.",
      "Ideation, not handoff. Sip is built for getting colors from design into code. It offers nothing for finding colors or training the eye.",
      "Quiet in practice. Sip promises to stay out of the way, but it has many surfaces (menu, window, dock, panel, checker, ten preference tabs), and reviewers find it hard and ask for a simpler mode.",
      "Judging color honestly. Sip's interface carries its own blue, violet and gradients. Palit keeps a neutral canvas so the captured colors are the only color (W1).",
      "One visual language. Sip's site, docs and app use three type systems. Palit can be consistent end to end.",
      "Perceptual color and finding things later: no OKLCH or Lab, and no search or tags documented.",
      "Figma isn't in Sip's Send to software list. Palit can record a Figma document's title as part of where a color came from.",
      "Local and private. Sip relies on cloud sync, Sign in with Apple and license checks, and sync bugs show up in reviews."
    ],
    verify: [
      "Does history record the source app, window title, URL or time? Check a color's details and an exported JSON file.",
      "Is there any confirmation after a pick, like a sound or a message?",
      "Picking the same color twice: is it kept or merged, in history and in a palette?",
      "Can Clean History be undone, and how do you restore a snapshot?",
      "Where does the automatic name appear, and does it change after you rename a color?",
      "Do search, tags, favorites and per-color descriptions exist in version 5?",
      "Does the picker need Screen Recording permission on macOS 15, and what happens if you say no?",
      "What does the 5.0 onboarding show, and how does multi-pick work?",
      "What exactly does Fix change?"
    ],
    sources: [
      { label: "sipapp.io", url: "https://sipapp.io/" },
      { label: "About", url: "https://sipapp.io/about" },
      { label: "Pricing", url: "https://sipapp.io/pricing" },
      { label: "FAQ", url: "https://sipapp.io/faqs" },
      { label: "Updates", url: "https://sipapp.io/updates" },
      { label: "Docs: Getting Started", url: "https://docs.sipapp.io/getting-started" },
      { label: "Docs: Using Sip", url: "https://docs.sipapp.io/using-sip" },
      { label: "Docs: Picker", url: "https://docs.sipapp.io/picker" },
      { label: "Docs: Palettes", url: "https://docs.sipapp.io/palettes" },
      { label: "Docs: Color Formats", url: "https://docs.sipapp.io/color-formats" },
      { label: "Docs: Smart Formats", url: "https://docs.sipapp.io/smart-formats" },
      { label: "Docs: Contrast Checker", url: "https://docs.sipapp.io/contrast-checker" },
      { label: "Docs: Snapshots", url: "https://docs.sipapp.io/snapshots" },
      { label: "Setapp reviews", url: "https://setapp.com/apps/sip/customer-reviews" },
      { label: "TidBITS, 2019", url: "https://tidbits.com/2019/08/06/sip-smart-color-management-for-your-mac/" }
    ]
  },

  dilemma: {
    title: "The feel: Cosmos or Are.na?",
    note: "It started as Pantone chips against an Are.na-style grid (Q11). On October 17 Noah framed it as Cosmos against Are.na and leaned Are.na: elevated, raw and authentic, inside a Mac-native shell (A26). Pantone stays in the picture for its consistency. Test T1 can check the lean with friends.",
    by: "Claude's read of each, for Noah to correct",
    options: [
      {
        name: "Cosmos: approachable",
        says: "Industry standard, friendly and easy to use. A polished place to keep visual inspiration.",
        attracts: "Creatives who want inspiration tools to feel effortless and familiar.",
        risk: "Polished and friendly is also what Sip is going for. Palit would blend in.",
        refs: ["Cosmos", "Pantone collage"]
      },
      {
        name: "Are.na: raw (Noah's lean)",
        says: "Grungier and more brutalist in its structures: plain type, hard edges, the collection is the interface. The rawness is the selling point.",
        attracts: "Self-directed curators who'd rather build their own boards than scroll a feed.",
        risk: "Austere. It can feel unfinished to people outside that culture, so “elevated” has to carry it.",
        refs: ["Are.na itself", "Bureau Borsche 5PM", "SOUND card", "Strontianite and Crocoite cards"]
      }
    ]
  },

  refs: [
    {
      title: "Núria Garcia's business cards",
      board: "Are.na",
      url: "https://www.are.na/block/2232775",
      rivet: "A fan of business cards pinned by a metal rivet, the stocks running through a spectrum. Each card has a thin printed frame and a perforated tear-off square, with small geometric sans type.",
      origin: "A bare image file on a portfolio host; no page about the work.",
      image: "../references/arena-palit-ideation/01-2232775.jpg",
      shows: "Business cards fanned into a color wheel, each a different colored stock with a thin inset frame and a perforated stub.",
      take: "The color is the paper itself. A fan sorted by hue.",
      leave: ""
    },
    {
      title: "Aesop × RIMOWA Köln",
      board: "Are.na",
      url: "https://www.are.na/block/13851041",
      rivet: "A cream sleeve around a ribbed aluminum case, with black bands at the top and bottom, a small serif wordmark, a thin rule, a large bold sans “Köln”, and dense bilingual text with a lot of empty space.",
      origin: "A bare Pinterest image file; no page about the work.",
      image: "../references/arena-palit-ideation/02-13851041.jpg",
      shows: "A cream label band on an aluminum case: one bold word, a heavy rule above it and a thin one below, tiny bilingual copy.",
      take: "One big element plus small type. Two rule weights.",
      leave: ""
    },
    {
      title: "Bureau Borsche, 5PM",
      board: "Are.na",
      url: "https://www.are.na/block/4887164",
      rivet: "Left-aligned black type on warm beige: uppercase grotesque lines, a white band over ghosted text holding a stacked “5 PM” and “24/7 BB”, and a refined serif credit.",
      origin: "A bare Instagram image file; no page about the work.",
      image: "../references/arena-palit-ideation/03-4887164.jpg",
      shows: "Black type on sand, a white block knocking out ghosted text, a serif credit line, and “limited to 30 pieces”.",
      take: "Layering. Edition language that makes a number feel collectible.",
      leave: "All caps and serif (A10, A12)."
    },
    {
      title: "SOUND card",
      board: "Are.na",
      url: "https://www.are.na/block/20574356",
      rivet: "Two off-white cards on black: a mostly empty front with a large serif wordmark near the bottom, and a back in all-caps monospace with two location blocks and small serif numerals as markers.",
      origin: "francofrontera.com, the site it was saved from.",
      originUrl: "https://francofrontera.com/",
      image: "../references/arena-palit-ideation/04-20574356.jpg",
      shows: "Two cards: a blank front with one bold serif word at the bottom edge, and a dense back in aligned columns with numbered sections.",
      take: "A sparse front and a dense back.",
      leave: "All caps and mono type (A10, A11)."
    },
    {
      title: "Strontianite, catalogue no. 280.1",
      board: "Are.na",
      url: "https://www.are.na/block/51267562",
      rivet: "A textured cream postcard-style card among white minerals: a faded photo bleeding off the left, typewriter text, a handwritten catalogue number, a reflective question on ruled lines, and a dashed stamp box.",
      origin: "None; an uploaded photo.",
      image: "../references/arena-palit-ideation/05-51267562.jpg",
      shows: "A postcard-style specimen card standing behind the mineral: a photo bleeding off one side, a typed form, a hand-written catalogue number.",
      take: "A printed form with a hand-filled number. The card shown with its source.",
      leave: "Typewriter type (A11)."
    },
    {
      title: "Crocoite, catalogue no. 725.2",
      board: "Are.na",
      url: "https://www.are.na/block/51267499",
      rivet: "The same postcard system: a dark red specimen photo cut out along its outline, with a mirrored “TO” and an upside-down stamp box over it, typewriter text and a handwritten 725.2. The specimen sits in front in a small acrylic box.",
      origin: "None; an uploaded photo. Its caption says the card was made to go with the specimen.",
      image: "../references/arena-palit-ideation/06-51267499.jpg",
      shows: "The same card system for a different specimen, with a longer reflective note, and a tiny specimen in an acrylic box nearby.",
      take: "One template, many specimens. A note in your own words.",
      leave: "Typewriter type (A11)."
    },
    {
      title: "Ravex paint packaging",
      board: "Cosmos",
      url: "https://www.cosmos.so/e/33098087",
      rivet: "Three containers on white, each with a bold red top band, the wordmark and a small bird mark, over a Swiss-style white label: a product code, a large name, rule-separated spec lines and small line icons.",
      origin: "The Dieline, 2017.",
      originUrl: "http://www.thedieline.com/blog/2017/3/23/ravex",
      image: "../references/cosmos-palit-ideation/01-33098087.webp",
      shows: "A red band and a white spec label, the same system across a spray can, a gallon and a quart.",
      take: "One label system across every size: chip, card, archive tile.",
      leave: ""
    },
    {
      title: "Pantone collage",
      board: "Cosmos",
      url: "https://www.cosmos.so/e/821815376",
      rivet: "A two-column collage of Pantone-style chips with values set on the color (one in monospace), glossy olives behind an olive square, a camouflage palette card, and an open paint can labeled “Black Martini (Dark Olive)”.",
      origin: "A Pinterest pin, itself a repost.",
      originUrl: "https://www.pinterest.com/pin/137922807336040691",
      image: "../references/cosmos-palit-ideation/02-821815376.webp",
      shows: "Pantone-style chips with codes and values set on the color, an olive chip over a photo of olives, a camouflage palette card, and a can of “Black Martini”.",
      take: "Text set on the color. A swatch shown over its source.",
      leave: "All caps wordmarks and mono values (A10, A11)."
    }
  ],

  earlier: [
    {
      title: "Wispr Flow",
      url: "https://wisprflow.ai",
      note: "A small bar you mostly reach by hotkey. Noah: Palit should live on screen like this, subtly, until you call it."
    },
    {
      title: "Granola",
      url: "https://granola.ai",
      note: "Works in the background with a small presence on screen. The same quiet Noah wants for Palit."
    },
    {
      title: "Are.na",
      url: "https://www.are.na",
      note: "Its brutalist grid UI, which Noah sees as opinionated in a way that appeals to a particular audience. The model for Palit's raw, archival heart (A26)."
    },
    {
      title: "Cosmos",
      url: "https://www.cosmos.so",
      note: "The approachable, friendly industry standard: the side of the distinction Palit leans away from."
    }
  ]
};
