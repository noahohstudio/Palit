// Palit research: what we need to learn, what we've found, and what we're assuming.
// Every finding cites a source. Personas and assumptions stay labeled until
// interviews or tests back them up.

window.PALIT = window.PALIT || {};
window.PALIT.research = {
  updated: "2026-10-18",

  questions: [
    { q: "Who notices and keeps colors while they work, and what do they do with them today?", feeds: "Audience" },
    { q: "When a saved color loses its source, what does that cost them?", feeds: "Unmet need" },
    { q: "Would they trade speed for a color's story?", feeds: "Opinion" },
    { q: "How do they feel about AI naming or suggesting colors?", feeds: "Big rock D" },
    { q: "Does saving a crop of their screen feel useful or invasive?", feeds: "Big rock C" }
  ],

  chosen: {
    name: "Visual designers, in the ideation phase",
    status: "locked",
    date: "2026-10-16",
    entry: 40,
    who: "Visual designers, with an emphasis on people who work mostly on the desktop: product, design systems and brand designers, and creative engineers, in the ideation phase. They search for color to inform their visual design process, design systems and branding, and build an archive of colors to re-explore.",
    from: "The tool-hoppers candidate (B), defined by the moment instead of the job. It was first logged as “designers in tech” (entry 39).",
    includes: "Noah: the collectors (A) and the eye-trainers (C) are automatically included. Keeping an archive and wanting to see better become traits of the same people.",
    changes: [
      "Positioning: pickers serve production, when you already know the color. Palit serves ideation, when you're still finding it. That answers “Sip already does this”.",
      "The competition shifts: in ideation, the rivals are palette generators (Coolors, Khroma, Adobe Color) and boards (Pinterest, Are.na, Cosmos), not only pickers.",
      "The AI tension is now the opinion: this group reports heavy AI use (Figma's 2026 survey), and Palit pushes back on it."
    ],
    persona: "Hypothesis: a visual designer starting a new brand or design system, pulling colors from sites, photos and references with screenshots and a Chrome extension, and losing track of where half of them came from.",
    leavesOut: "People who rely heavily on AI to explore and decide color for them. And designers who work analogue, with color books, paper and materials: Palit is for the color you find on screen, and doesn't try to replace those."
  },

  audiences: [
    {
      id: "A",
      name: "Collectors",
      who: "People who already curate visual references on Are.na, Cosmos or Pinterest, and care where things came from.",
      kind: "Psychographic",
      need: "Their boards keep images, not the color itself with its source. Pickers keep a hex, not the story.",
      opinion: "Every color keeps its story. No feed, no algorithm, no AI deciding what's good.",
      alienates: "People who just want a quick hex value.",
      fits: "Noah's own habit (his “palit ideation” boards), the archive-first focus, and the pull toward Are.na's grid.",
      persona: "Hypothesis: a designer who keeps an Are.na channel for every project, and screenshots colors they can never trace later.",
      test: "Do they already keep references, and do they ever go back to find where one came from?"
    },
    {
      id: "B",
      name: "Tool-hoppers",
      who: "Designers who move between Figma, the browser, references and photos all day.",
      kind: "Workflow-based",
      need: "A color noticed in one app is gone by the time they reach the next.",
      opinion: "One keystroke, kept for good, available in every tool (Figma, code, Claude through an MCP).",
      alienates: "People who work inside a single app.",
      fits: "The original brief and Noah's software-to-software rabbit holes.",
      persona: "Hypothesis: a product designer with Figma, a browser and Slack open all day, pasting hex codes into a notes app.",
      test: "Where did the last color they picked end up, and could they find it again?"
    },
    {
      id: "C",
      name: "Eye-trainers",
      who: "Students and early-career designers who want to get better at seeing color.",
      kind: "Psychographic",
      need: "Tools hand them answers (generated palettes) instead of training their judgment.",
      opinion: "Friction on purpose: Palit describes what you kept and never decides for you.",
      alienates: "People who want instant palettes.",
      fits: "Josef Albers, the Pantone chips, the original “trains your eye” promise.",
      persona: "Hypothesis: a design student who saves palettes from generators but can't say why they work.",
      test: "Do they want to get better at color, or just get it done?"
    }
  ],
  lean: "Claude's lean: A, narrowed to source-minded self-curators, the people who already keep sources (Are.na, Cosmos, Eagle, a disciplined folder). It's the only candidate with evidence of real behavior and payment. It's Noah's own behavior, so the video can speak from inside the audience. And it divides people along the line Noah described: people who collect visual influences by hand, against people who'd rather a tool generate them. C's “train your eye” is the motivation inside A, and B's app-hopping is the setting Palit lives in.",

  // Filled from desk research. Each item cites its sources.
  competitorsStatus: "done",
  competitorsNote: "Desk research, October 16. Stances are paraphrased; check the live pages before quoting anything on screen. Not reviewed yet: System Color Picker, ColorSnapper, HexDrop, Kotor.",
  competitors: [
    { name: "Sip", group: "picker", platform: "macOS menu bar (macOS 15+ for the current version)", url: "https://sipapp.io/", what: "Menu bar color picker and organizer for designers and developers: gather, organize and share colors, and convert them to any format.", price: "$29.99 per device with a year of updates; or in Setapp", history: "yes", provenance: "None documented: a pick keeps the color and an automatic name. It detects the active app only to choose a format and color profile.", organization: "A color history in pick order (Clean History empties it), palettes that refuse duplicate colors, groups, export, sync between your Macs", stance: "The right color every time; fast and out of the way", ai: "none", sources: ["https://sipapp.io/", "https://docs.sipapp.io/using-sip", "https://sipapp.io/faqs"], confidence: "high", notes: "The main competitor (A25). Names colors automatically from the Name That Color list. Full deep dive on the Inspiration tab." },
    { name: "ColorSlurp", group: "picker", platform: "macOS, iOS", url: "https://colorslurp.com/", what: "Color picker and toolkit: magnifier, conversions, palettes.", price: "Free, with a paid Pro upgrade", history: "partial", provenance: "None documented", organization: "Named colors in palettes, grouped into projects; sync; export", stance: "Sold on productivity", ai: "None mentioned", sources: ["https://colorslurp.com/", "https://apps.apple.com/app/colorslurp/id1287239339"], confidence: "medium" },
    { name: "Pick", group: "picker", platform: "Linux", url: "https://kryogenix.org/code/pick/", what: "Open-source Linux picker built around remembering where each color came from.", price: "Free (MIT)", history: "yes", provenance: "Keeps a screenshot of where each color was picked. No app, window or URL.", organization: "Remembered colors, each named automatically", stance: "A picker that remembers where you picked colors from", ai: "none", sources: ["https://snapcraft.io/pick-colour-picker"], confidence: "medium", notes: "The closest precedent for Palit's idea. Credit it openly." },
    { name: "Digital Color Meter", group: "picker", platform: "macOS, built in", url: "https://support.apple.com/guide/digital-color-meter/welcome/mac", what: "Apple's utility that shows the values of the pixels under the pointer.", price: "Included with macOS", history: "no", provenance: "None. It copies to the clipboard and saves nothing.", organization: "None", stance: "", ai: "none", sources: ["https://support.apple.com/guide/digital-color-meter/welcome/mac"], confidence: "high", notes: "Its averaging aperture is the nearest built-in idea to Palit's neighbor samples." },
    { name: "Pastel", group: "picker", platform: "iPhone, iPad, Mac, Vision", url: "https://apps.apple.com/us/app/pastel/id413897608", what: "Palette manager for collecting colors, with pickers and photo analysis.", price: "Free with limits; $19.99 lifetime or a subscription", history: "unknown", provenance: "None documented", organization: "Palettes and named colors, iCloud sync, code export", stance: "", ai: "None mentioned", sources: ["https://apps.apple.com/us/app/pastel/id413897608"], confidence: "medium", notes: "Whether the Mac app samples anywhere on screen is disputed." },
    { name: "Figma eyedropper", group: "picker", platform: "Figma; samples outside Figma only in the Mac desktop app", url: "https://help.figma.com/hc/articles/27643269375767", what: "Figma's built-in sampler for applying colors to layers.", price: "All plans", history: "no", provenance: "None. A color is kept only if you make it a style or variable.", organization: "Styles and variables in Figma files", stance: "", ai: "None in the eyedropper", sources: ["https://help.figma.com/hc/articles/27643269375767"], confidence: "high", notes: "Expect “I already pick colors in Figma.”" },
    { name: "Adobe Capture", group: "picker", platform: "Mobile (iOS confirmed)", url: "https://www.adobe.com/products/capture.html", what: "Turns camera images into design assets, including color themes.", price: "Unverified", history: "unknown", provenance: "Not documented", organization: "Creative Cloud Libraries", stance: "", ai: "None described for color", sources: ["https://www.adobe.com/products/capture.html"], confidence: "medium" },
    { name: "Pantone Connect", group: "picker", platform: "Web, iOS, Android, Creative Cloud", url: "https://www.pantone.com/pantone-connect", what: "Matches colors to Pantone, measures physical colors with a card, converts between systems.", price: "Unverified", history: "unknown", provenance: "None documented for saved colors", organization: "Saved palettes", stance: "Production-ready Pantone colors in your design tools", ai: "None mentioned", sources: ["https://www.pantone.com/pantone-connect"], confidence: "medium", notes: "Built around matching to a standard, not personal observation." },
    { name: "Coolors", group: "picker", platform: "Web, Chrome, iOS, Figma, Adobe", url: "https://coolors.co/", what: "Palette generator with a color info page, an image picker and plugins.", price: "Free with ads and limits; Pro subscription", history: "unknown", provenance: "None documented", organization: "Palettes, projects, collections, saved colors", stance: "", ai: "See Coolors AI", sources: ["https://coolors.co/pricing", "https://coolors.co/color-picker"], confidence: "medium" },
    { name: "ColorZilla", group: "picker", platform: "Chrome, Firefox", url: "https://www.colorzilla.com/", what: "Browser extension: eyedropper, gradient generator, a page's palette.", price: "Unverified", history: "unknown", provenance: "None; works only inside the browser", organization: "Page palettes, gradients", stance: "Says it collects none of your data or browsing", ai: "None mentioned", sources: ["https://www.colorzilla.com/chrome/"], confidence: "medium" },
    { name: "Pika", group: "picker", platform: "macOS 14+", url: "https://superhighfives.com/pika", what: "Free, open-source Mac picker focused on speed and contrast checks.", price: "Free, open source", history: "yes", provenance: "None documented", organization: "Every pick saved, browsable with undo and redo; formats including OKLCH", stance: "Accessibility first", ai: "none", sources: ["https://superhighfives.com/pika"], confidence: "high", notes: "The strongest free alternative on Palit's own platform." },
    { name: "Are.na", group: "collection", platform: "Web, iOS, Android, extensions, API", url: "https://www.are.na/", what: "Member-funded platform for saving images, text and links into channels.", price: "Free up to 200 blocks; Premium $7 a month", history: "no", provenance: "Unconfirmed whether saves keep their source URL. A reused block shows the other channels it lives in.", organization: "Blocks, channels, connections, groups", stance: "No ads, no likes, no personalized recommendations; funded by members", ai: "None mentioned", sources: ["https://www.are.na/about", "https://www.are.na/", "https://help.are.na/docs/getting-started/connections"], confidence: "high" },
    { name: "Cosmos", group: "collection", platform: "Web, iOS, Android, extensions", url: "https://www.cosmos.so/", what: "Visual inspiration platform for creatives, positioned against Pinterest.", price: "Free; Premium $8 a month", history: "no", provenance: "AI captions research each saved image's artist, source and story.", organization: "Elements in collections: private, public or shared", stance: "No ads, no likes, no engagement metrics. Explore is a curated feed.", ai: "AI captions and attribution, AI-image detection, search by hex and visual similarity", sources: ["https://www.cosmos.so/llms.txt", "https://www.cosmos.so/", "https://www.cosmos.so/support"], confidence: "high", notes: "The closest any collection tool gets to provenance-first, but for images, and with AI." },
    { name: "Pinterest", group: "collection", platform: "Web, mobile", url: "https://www.pinterest.com/", what: "Ad-supported visual discovery: Pins saved to boards.", price: "Free, funded by ads", history: "no", provenance: "Labels Pins its systems flag as AI-generated", organization: "Boards", stance: "Calls its AI labels a step toward transparency", ai: "AI detection and labels; a see-fewer option tested in 2025; recommendations", sources: ["https://newsroom.pinterest.com/news/introducing-gen-ai-labels/", "https://help.pinterest.com/en/article/gen-ai-labels"], confidence: "medium", notes: "The default, and the contrast: a feed, ads, and enough AI content to label it." },
    { name: "mymind", group: "collection", platform: "iOS, Android, macOS, extensions, web", url: "https://mymind.com/", what: "Private library for notes, links and images that you find by searching, not filing.", price: "Free sign-up; paid tiers unverified", history: "no", provenance: "AI recognizes and summarizes each item", organization: "No folders or tags; Smart Spaces sort things automatically", stance: "No social features and no ads; remember everything, organize nothing", ai: "Organizes and summarizes; search by color, brand or date", sources: ["https://mymind.com/manifesto", "https://mymind.com/"], confidence: "high", notes: "Shares Palit's privacy stance, but takes the opposite view of friction." },
    { name: "Eagle", group: "collection", platform: "macOS, Windows, extension", url: "https://eagle.cool/", what: "Desktop library for collecting and searching images, video, audio and fonts.", price: "One-time license", history: "no", provenance: "Testimonials say it keeps the source site; the product copy doesn't confirm it.", organization: "Folders, tags, smart folders by color, notes, ratings, duplicate merging", stance: "Pay once, no subscription", ai: "AI search, AI naming and tagging rules, an MCP for agents", sources: ["https://eagle.cool/"], confidence: "high", notes: "Color search finds images by palette, but there's no archive of picked colors." },
    { name: "Savee", group: "collection", platform: "Web, mobile, extensions, Figma", url: "https://savee.com/", what: "Visual inspiration library for designers.", price: "Free; paid and team plans", history: "no", provenance: "Not documented", organization: "Boards, team boards", stance: "No ads, no algorithm", ai: "AI recommendations in discovery; search by image", sources: ["https://savee.com/"], confidence: "medium", notes: "The no-algorithm claim sits uneasily next to AI recommendations." },
    { name: "Milanote", group: "collection", platform: "Web, desktop, mobile", url: "https://milanote.com/", what: "Visual boards for organizing creative projects.", price: "Unverified", history: "no", provenance: "A web clipper; whether it keeps the source URL isn't stated", organization: "Boards with shared editing", stance: "For creative professionals", ai: "None mentioned", sources: ["https://milanote.com/"], confidence: "low" },
    { name: "Khroma", group: "ai", platform: "Web", url: "https://www.khroma.co/", what: "Learns your taste from colors you pick, then generates combinations for you.", price: "Unverified", history: "partial", provenance: "Not applicable", organization: "A library of saved combinations, with filters and previews", stance: "Built around your personal taste", ai: "A personal neural network, trained in your browser", sources: ["https://www.khroma.co/"], confidence: "medium", notes: "The sharpest contrast: Khroma trains a model on your taste; Palit trains you." },
    { name: "Colormind", group: "ai", platform: "Web, API", url: "http://colormind.io/", what: "Deep-learning palette generator: lock some colors and it fills in the rest.", price: "Unverified", history: "unknown", provenance: "Not applicable", organization: "Lockable slots, UI templates", stance: "An AI palette generator", ai: "Models trained on photos, film and art", sources: ["http://colormind.io/"], confidence: "medium" },
    { name: "Coolors AI and Color Bot", group: "ai", platform: "Web", url: "https://coolors.co/color-bot", what: "Credit-based AI palette generation and a chat assistant, in Coolors Pro.", price: "Pro only, on credits", history: "unknown", provenance: "None", organization: "Coolors palettes and projects", stance: "Warns that the AI can make mistakes", ai: "Generates palettes; suggests colors in chat", sources: ["https://coolors.co/pricing", "https://coolors.co/color-bot"], confidence: "medium" },
    { name: "Adobe Firefly Generative Recolor", group: "ai", platform: "Illustrator", url: "https://www.adobe.com/products/illustrator/generative-recolor.html", what: "Recolors vector art from a text prompt.", price: "Part of Illustrator", history: "unknown", provenance: "None", organization: "Inside Illustrator", stance: "Endless palette options", ai: "Firefly generative AI", sources: ["https://www.adobe.com/products/illustrator/generative-recolor.html"], confidence: "medium" },
    { name: "Huemint", group: "ai", platform: "Web, API", url: "https://huemint.com/", what: "Assigns colors by role (background, accent) for a specific layout.", price: "Unverified", history: "unknown", provenance: "Not applicable", organization: "Lockable colors, presets, shareable links", stance: "Colors should be generated in context, with room for chance", ai: "Transformer and diffusion models trained on design images", sources: ["https://huemint.com/about/"], confidence: "high", notes: "Its “context” is where a color sits in a layout, not where it came from." }
  ],
  gaps: [
    "Provenance with every pick. No picker records the source app, window title or URL. Closest: Pick (a screenshot, Linux only) and Cosmos (AI attribution, for images).",
    "Surrounding colors kept as part of the record. Nothing stores neighbor samples; Digital Color Meter averages an area live and saves nothing.",
    "A permanent, numbered, dated archive. Sip's history can be cleared and documents no timestamps, and no tool documents permanent numbering. Eagle even merges duplicates.",
    "Feedback that trains the eye. No tool describes a pick in perceptual terms (warm or cool, value, chroma) to teach. Closest: Pika's contrast readouts and Coolors' color pages.",
    "“You've kept this before.” No tool tells you that a new pick is close to one you already kept.",
    "Human on purpose. Every AI tool generates or recolors for you, and the collection tools are adding AI organizing. Closest in stance: Are.na.",
    "A bridge between pickers and inspiration libraries. Pickers keep the value and lose the context; libraries keep images, not the values you sampled."
  ],
  risks: [
    "“Sip already does this.” The capture moment alone won't stand out. Lead with provenance, the archive and the feedback.",
    "“The free tools are good enough.” Digital Color Meter is built in, Pika is free with a history and OKLCH, and Figma's Mac app now samples anywhere on screen.",
    "“Pick did this years ago.” Credit it openly, then show what Palit adds: the app, title and URL, neighbor samples, permanent numbering, descriptions, and a native Mac app.",
    "“Train your eye” is a claim, not evidence yet, and AI tools demo faster. Palit needs a visible mechanism, like “kept before”, and early user evidence.",
    "Permissions and sensitive data. Sampling outside an app needs the Screen Recording permission, and stored titles, URLs and crops make the archive sensitive. Keeping it local helps, but won't settle the objection.",
    "Scope. Palit is Mac-only and single-user while rivals sync and collaborate, and some judges may read “no AI” as a missing feature.",
    "For designers in the ideation phase, the real rivals are palette generators (Coolors, Khroma, Adobe Color) and boards (Pinterest, Are.na, Cosmos), not only pickers."
  ],

  evidenceStatus: "done",
  evidenceNote: "Desk research, October 16. Summaries are paraphrased; credibility is marked on each finding.",
  audienceTakeaways: [
    "The evidence favors A, narrowed to source-minded self-curators. It's the only candidate with evidence of real behavior and payment: Are.na's paying members, Cosmos's funding built on attribution.",
    "C makes the strongest case for why Palit matters (Albers, memory bias, The Dress), but there's no evidence yet that students collect colors or would seek this out. Treat it as the motivation inside A.",
    "B is the weakest as the audience. Grabbing a value and pasting it elsewhere is already covered for free. It works better as the setting Palit lives in: moving between apps.",
    "The biggest risk: losing a color's source may be a latent need. Every pain point found is about images and references, not colors. The interviews have to test this first.",
    "Against Cosmos, Palit's edge is first-hand provenance, recorded at the moment you sample instead of reconstructed afterwards."
  ],
  needStatement: "Draft from research, for Noah: source-minded collectors keep the images they love, but the colors in them get saved as a bare hex code or not at all. They lose the source and surroundings that made the color look the way it did, and memory then distorts it.",
  evidenceGaps: [
    "Reddit threads (r/graphic_design, r/UXDesign) were out of reach for the research tools. Worth a look by hand.",
    "No credible numbers on how many designers use dedicated pickers, or how often they pick colors. The screener and survey can fill this.",
    "No direct criticism of AI palette tools (Khroma, Coolors AI, Huemint) turned up.",
    "No study tests whether a surface you choose yourself improves color judgment.",
    "No study compares dark and light interfaces for color-judgment accuracy."
  ],
  evidence: [
    {
      theme: "From designers Noah talks to",
      text: "Designers in product, visual design systems and creative engineering screenshot images, or pull colors from the web with Chrome extensions. Neither tells where a color came from, and the extensions are poorly designed and don't work half the time.",
      bears: "Supports the need for the chosen audience. Interviews should capture this in people's own words, with permission, so it can be used in the video",
      cred: "medium",
      note: "Noah's own conversations and informal research, October 16. First-hand, but not yet recorded or counted.",
      sources: []
    },
    {
      theme: "From our own boards",
      text: "Of the 8 references on Noah's own “palit ideation” boards, only 2 point to a page about the work: The Dieline's article on Ravex, and francofrontera.com for the SOUND card. One points to a Pinterest pin that is itself a repost, three to bare image files on Pinterest, Instagram and a portfolio host, and two have no source at all.",
      bears: "Supports A: even a careful collector's boards lose where things came from. A true story for the video",
      cred: "high",
      note: "First-hand: checked against the Are.na and Cosmos data in Rivet, October 16. These are images, not colors, so it doesn't settle the color question.",
      sources: [
        { label: "Are.na channel", url: "https://www.are.na/channel/5873698" },
        { label: "Cosmos collection", url: "https://www.cosmos.so/noahoh/palit-ideation" }
      ]
    },
    {
      theme: "How people save references today",
      text: "In a survey of 51 professional designers, the web was a main source of ideas, but designers reported growing trouble trusting what they found and relating it to their work. The authors call for tools that build both.",
      bears: "Supports A (knowing the source builds trust) and B",
      cred: "high",
      note: "Small sample; read at abstract level.",
      sources: [{ label: "Koch et al., DRS 2018", url: "https://dl.designresearchsociety.org/drs-conference-papers/drs2018/researchpapers/75" }]
    },
    {
      theme: "How people save references today",
      text: "In an informal survey of about 100 industrial designers, most named Pinterest as their main source. Are.na appeared only among the other answers.",
      bears: "Weakens A if A means Are.na users only: they look like a niche",
      cred: "low",
      note: "Self-selected sample, seen only in search results.",
      sources: [{ label: "IDSA", url: "https://idsa.org/?p=29756" }]
    },
    {
      theme: "How people save references today",
      text: "Cosmos's founder started it because his references were scattered across Instagram and Pinterest, and the feeds felt too noisy.",
      bears: "Supports A and B",
      cred: "medium",
      sources: [{ label: "Midwest Design", url: "https://midwestdesignmag.com/industry-news/is-cosmos-new-pinterest-new-visual-tool-informed-by-designers/" }]
    },
    {
      theme: "How people save references today",
      text: "Screenshot folders stop being useful because you can't tell where each image came from, or why you saved it.",
      bears: "Supports A and B",
      cred: "low",
      note: "A rival vendor's marketing, but the clearest statement of this pain.",
      sources: [{ label: "InspoAI blog", url: "https://www.inspoai.io/blogs/screenshot-website-design-research" }]
    },
    {
      theme: "How people save references today",
      text: "Reference tools already keep sources for images: Eagle links the source URL when you save through its extension, and Cosmos attaches attribution.",
      bears: "Supports A (people value provenance), but the image-level need is partly met already",
      cred: "medium",
      sources: [{ label: "Eagle", url: "https://de.eagle.cool/blog/post/an-effortless-way-to-capture-web-inspiration" }]
    },
    {
      theme: "How people save references today",
      text: "Picking a color is already free: macOS's Digital Color Meter samples any pixel. Third-party pickers mostly add a shortcut and a menu bar item.",
      bears: "Weakens B. Supports making the archive, not the picker, the product",
      cred: "low",
      note: "Anecdotal and old.",
      sources: [
        { label: "Hacker News, 2011", url: "https://news.ycombinator.com/item?id=2324053" },
        { label: "Hacker News, 2019", url: "https://news.ycombinator.com/item?id=19455441" }
      ]
    },
    {
      theme: "How people save references today",
      text: "Mature pickers already keep a history and palettes (Sip, ColorSlurp). Nothing found mentions recording where a color came from, though that's absence of evidence, not a confirmed gap.",
      bears: "Weakens B. Supports standing apart on provenance",
      cred: "medium",
      sources: [{ label: "TidBITS, 2019", url: "https://tidbits.com/2019/08/06/sip-smart-color-management-for-your-mac/" }]
    },
    {
      theme: "Slow, self-curated communities",
      text: "Are.na is paid for by its members, takes no outside funding, and calls itself a calm place to work on projects over time. It names students, hobbyists and knowledge collectors as its users, and reports about 42,000 monthly active members, about 20,500 of them paying.",
      bears: "Strongly supports A. Supports C (students)",
      cred: "high",
      note: "The stance is first-hand; the numbers are self-reported.",
      sources: [{ label: "Are.na, About", url: "https://www.are.na/about", date: "read Oct 16, 2026" }]
    },
    {
      theme: "Slow, self-curated communities",
      text: "Are.na has no likes, favorites or shares, and reportedly no ads or personalized recommendations: you see what comes from the people you follow.",
      bears: "Supports A",
      cred: "medium",
      note: "Homepage wording seen only in search results.",
      sources: [
        { label: "Are.na", url: "https://www.are.na/" },
        { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Are.na" }
      ]
    },
    {
      theme: "Slow, self-curated communities",
      text: "Are.na's founder describes its community as researchers, artists and designers. No independent data on who uses it turned up.",
      bears: "Supports A, and C through students",
      cred: "low",
      sources: [{ label: "Public Infrastructure podcast", url: "https://publicinfrastructure.org/podcast/40-arena" }]
    },
    {
      theme: "Slow, self-curated communities",
      text: "Cosmos's manifesto sets it against an internet built for outrage, and makes attribution its core idea: captions name the creator, source and date, generated by researching each image across the web. It reports over 10 million images saved a month, and has raised a seed round and a Series A.",
      bears: "Strongly supports A: provenance is a funded, growing value. Cosmos is also a competitor that reconstructs provenance afterwards; Palit records it at the moment of capture",
      cred: "high",
      note: "The stance is first-hand; the numbers are self-reported.",
      sources: [{ label: "Cosmos, The Future of Cosmos", url: "https://www.cosmos.so/blog/the-future-of-cosmos", date: "Jan 20, 2026" }]
    },
    {
      theme: "Slow, self-curated communities",
      text: "In the press: Cosmos has no likes and no ads, launched invite-only in 2023, and uses AI-powered search. Teams at large brands use it.",
      bears: "Supports A. Even the “slow” platforms use AI behind the scenes",
      cred: "medium",
      sources: [
        { label: "Creative Bloq", url: "https://creativebloq.com/design/social-media/what-is-cosmos-the-pinterest-alternative-for-creatives" },
        { label: "Business of Home, Mar 2026", url: "https://businessofhome.com/articles/cosmos-wants-to-be-more-than-just-pinterest-for-the-cool-kids" },
        { label: "Cultured, Mar 2026", url: "https://www.culturedmag.com/article/2026/03/31/art-cosmos-odessa-azion-app/" }
      ]
    },
    {
      theme: "Slow, self-curated communities",
      text: "Pinterest added labels for AI-generated images and an option to see fewer of them, after artists and users said their feeds were overrun with AI images.",
      bears: "Supports A: authenticity is now a felt problem on the main feed",
      cred: "medium",
      sources: [
        { label: "TechCrunch, Apr 2025", url: "https://techcrunch.com/2025/04/30/pinterest-launches-new-tools-to-fight-ai-slop" },
        { label: "404 Media, 2025", url: "https://404media.co/pinterest-is-drowning-in-a-sea-of-ai-slop-and-auto-moderation" }
      ]
    },
    {
      theme: "Slow, self-curated communities",
      text: "Cara, an artist-run app that bans AI art, reportedly grew from about 40,000 to about 650,000 users in a week after Meta said it trains AI on public posts.",
      bears: "Supports A: creatives will switch platforms over AI and provenance",
      cred: "medium",
      note: "The numbers couldn't be verified.",
      sources: [{ label: "TechCrunch, Jun 2024", url: "https://techcrunch.com/?p=2790719" }]
    },
    {
      theme: "AI and taste",
      text: "Merriam-Webster named “slop” its 2025 word of the year: low-quality content mass-produced with AI.",
      bears: "Supports a no-AI stance (A, C)",
      cred: "high",
      sources: [{ label: "AP, Dec 2025", url: "https://www.hawaiinewsnow.com/2025/12/15/merriam-websters-2025-word-year-is-slop-heres-why" }]
    },
    {
      theme: "AI and taste",
      text: "Figma's 2025 AI report (2,500 product builders): 69% of designers were satisfied with AI tools, against 82% of developers. Overall, 78% said AI speeds them up, but only 32% said they can rely on its output.",
      bears: "Working designers (B, C) who use AI for speed but doubt its quality",
      cred: "medium",
      note: "Figma sells AI features.",
      sources: [{ label: "Figma, Apr 2025", url: "https://www.figma.com/blog/figma-2025-ai-report-perspectives/" }]
    },
    {
      theme: "AI and taste",
      text: "Figma's State of the Designer 2026 (906 designers): 91% said new AI tools improve their designs, and 89% said they work faster.",
      bears: "Weakens the idea that working designers (B) reject AI",
      cred: "medium",
      note: "Commissioned by a vendor; the 91% may cover heavy adopters only. Check the full report.",
      sources: [{ label: "Figma, Feb 2026", url: "https://www.figma.com/blog/state-of-the-designer-2026" }]
    },
    {
      theme: "AI and taste",
      text: "Figma's CEO argues that AI output drifts toward the average of what it has seen, so distinctive work depends on human taste and point of view.",
      bears: "Supports C: taste is worth training, even by an AI vendor's account",
      cred: "medium",
      sources: [{ label: "Creator Economy, Apr 2026", url: "https://creatoreconomy.so/p/figma-ceo-on-how-anyone-can-get-good-at-design-in-ai-dylan-field" }]
    },
    {
      theme: "AI and taste",
      text: "Designers report AI-built sites converging on the same palettes: blues, purples and greens with glows.",
      bears: "Supports A and C: a reason to collect colors from the real world",
      cred: "low",
      note: "Unverified, possibly syndicated.",
      sources: [{ label: "Northeast Times, Jul 2026", url: "https://northeasttimes.com/2026/07/31/ai-design-tools-are-making-every-website-look-the-same/" }]
    },
    {
      theme: "AI and taste",
      text: "Counterpoints to prepare for: one essay argues taste has become a comforting story designers tell themselves, and that craft is the scarcer skill. Adobe Design discusses the backlash to an AI-made ad.",
      bears: "Complicates a pure “taste” pitch (C). Expect it in a crit",
      cred: "low",
      sources: [
        { label: "UX Collective", url: "https://uxdesign.cc/the-importance-of-taste-and-other-lies-we-tell-ourselves-b5caacddbec4" },
        { label: "Adobe Design", url: "https://adobe.design/ideas/taste-over-haste" }
      ]
    },
    {
      theme: "Color perception and memory",
      text: "Albers taught color through observation and graded exercises rather than color systems, on the view that color is the most relative medium in art.",
      bears: "Strongly supports C. Supports “context is part of the color”",
      cred: "high",
      sources: [{ label: "Albers Foundation", url: "https://www.albersfoundation.org/alberses/teaching/interaction-of-color" }]
    },
    {
      theme: "Color perception and memory",
      text: "Cooper Hewitt explains that every color is seen relative to its surroundings, with a simultaneous-contrast exercise.",
      bears: "Supports keeping the 8 neighboring samples and the crop",
      cred: "high",
      sources: [{ label: "Cooper Hewitt", url: "https://cooperhewitt.org/?p=12521" }]
    },
    {
      theme: "Color perception and memory",
      text: "Colors reproduced from memory drift toward the center of their category: a yellowish green comes back greener, even with no delay.",
      bears: "Supports the archive (memory is unreliable) and C. An inference, not the paper's claim: auto-naming could push recall further toward the category, which backs “no auto-naming”",
      cred: "high",
      sources: [
        { label: "Bae et al., JEP: General, 2015", url: "https://allred.camden.rutgers.edu/files/BaeEtAl2015.pdf" },
        { label: "Johns Hopkins Hub", url: "https://hub.jhu.edu/2015/06/02/color-perception-research" }
      ]
    },
    {
      theme: "Color perception and memory",
      text: "Knowing an object changes its color: asked to make a photo of a banana look gray, people overshot into blue. Plain discs showed no effect.",
      bears: "Supports storing the crop: the object shapes the color people see",
      cred: "high",
      sources: [{ label: "Hansen et al., Nature Neuroscience, 2006", url: "https://www.mv.helsinki.fi/home/molkkone/files/Hansen-et-al-2006-MemoryModulatesColorAppearance-NN-9-1367.pdf" }]
    },
    {
      theme: "Color perception and memory",
      text: "The Dress (2015): in a survey of 1,401 people, the colors people saw depended on what they assumed about the lighting, and clear lighting cues flipped it.",
      bears: "A vivid public example of context changing color (A, C)",
      cred: "high",
      sources: [
        { label: "Lafer-Sousa et al., Current Biology, 2015", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4921196" },
        { label: "Wallisch, Journal of Vision, 2017", url: "https://doi.org/10.1167/17.4.5" }
      ]
    }
,
    {"theme": "Naming and ownership", "text": "In three studies, people who named a product rated it more favorably and asked more to give it up, because naming increased their sense of ownership. How well the name fit, and how creative it was, mattered.", "bears": "The most direct evidence for human-first naming (A24): naming makes a thing feel more yours. It's about products, not colors, and it measures liking and value, not memory", "cred": "medium", "note": "One team, three studies; no independent replication found yet.", "sources": [{"label": "Stoner, Loken & Stadler Blank, Journal of Consumer Psychology, 2018", "url": "https://carlsonschool-d8.prd.umn.edu/sites/carlsonschool.umn.edu/files/2020-03/Stoner_et_al-2018-Journal_of_Consumer_Psychology.pdf"}]},
    {"theme": "Naming and ownership", "text": "People remember what they come up with themselves better than what they're handed. A meta-analysis of 86 studies found generated material remembered about 0.4 standard deviations better, and open-ended generation, like freely naming something, helps most.", "bears": "Supports naming a color yourself instead of being handed a name. A moderate effect, mostly from word lists", "cred": "high", "note": "One of memory research's most robust effects.", "sources": [{"label": "Bertsch et al., Memory & Cognition, 2007", "url": "https://pubmed.ncbi.nlm.nih.gov/17645161/"}, {"label": "McCurdy et al., Psychonomic Bulletin & Review, 2020", "url": "https://cris.maastrichtuniversity.nl/en/publications/theories-of-the-generation-effect-and-the-impact-of-generation-co/"}, {"label": "Slamecka & Graf, 1978", "url": "https://doi.org/10.1037/0278-7393.4.6.592"}]},
    {"theme": "Naming and ownership", "text": "Cues people write themselves work far better for recalling things later than cues written by someone else.", "bears": "A name you give is a better handle for you than one written by someone, or something, else", "cred": "medium", "note": "A classic with a strong effect, from lab word lists; confirmed through a review.", "sources": [{"label": "Wheeler & Gabbert, Frontiers in Psychology, 2017 (review of Mäntylä, 1986)", "url": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.01830/full"}]},
    {"theme": "Naming and ownership", "text": "Things marked as yours are remembered better, even when ownership is arbitrary. Replicated in other labs and in young children.", "bears": "Even a minimal “this is mine” improves memory", "cred": "high", "note": "Replicated; the effects are modest and the objects trivial.", "sources": [{"label": "Cunningham et al., Consciousness and Cognition, 2008", "url": "https://research-information.bris.ac.uk/en/publications/yours-or-mine-ownership-and-memory/"}, {"label": "Grisdale et al., 2014", "url": "https://openaccess.city.ac.uk/id/eprint/3995"}]},
    {"theme": "Naming and ownership", "text": "Relating material to yourself produces better memory than other kinds of deep processing.", "bears": "A personal name, like your childhood home or a song, ties the color to you", "cred": "medium", "note": "Citation confirmed; the overall effect size wasn't re-checked.", "sources": [{"label": "Symons & Johnson, Psychological Bulletin, 1997", "url": "https://doi.org/10.1037/0033-2909.121.3.371"}]},
    {"theme": "Naming and ownership", "text": "People value things they built themselves more than identical ready-made ones, as long as they finish them. A conceptual replication points to ownership as the reason.", "bears": "Related, but weak support for naming: the effect needs effortful work, and typing a name takes little effort", "cred": "medium", "note": "If it's used, lead with Norton and the replication.", "sources": [{"label": "Norton, Mochon & Ariely, Journal of Consumer Psychology, 2012", "url": "https://dash.harvard.edu/handle/1/12136084"}, {"label": "Sarstedt, Neubert & Barth, 2017", "url": "https://nowpublishers.com/article/Details/JMB-0039"}]},
    {"theme": "Naming and ownership", "text": "Putting a visual memory into words can pull it toward the category, or even impair it: describing a face made people worse at recognizing it, confirmed by a preregistered multi-lab replication.", "bears": "A caution that shapes the design: the name helps you find a color and gives it meaning, while the swatch and hex keep it exact. That's why your name shows first and the technical identity sits underneath (A27)", "cred": "high", "note": "The replication tested faces; the original also reported the effect for a color.", "sources": [{"label": "Schooler & Engstler-Schooler, Cognitive Psychology, 1990", "url": "https://doi.org/10.1016/0010-0285(90)90003-M"}, {"label": "Alogna et al., 2014", "url": "https://wrap.warwick.ac.uk/65957"}]},
    {"theme": "Collecting and creativity", "text": "Practicing designers keep personal collections of images and materials, both to spark ideas and as reference, and browse them visually.", "bears": "Collecting is an established design habit. It describes practice; it doesn't test creative effects", "cred": "medium", "note": "Qualitative field study; the abstract wasn't re-checked.", "sources": [{"label": "Keller, Pasman & Stappers, CoDesign, 2006", "url": "https://doi.org/10.1080/15710880600571123"}]},
    {"theme": "Collecting and creativity", "text": "Designers set the context for new work, and talk about it, by pointing to their sources of inspiration. Finding a good source is often the key creative step.", "bears": "Sources carry meaning, which supports keeping where a color came from", "cred": "medium", "note": "Influential, but ethnographic and from one industry.", "sources": [{"label": "Eckert & Stacey, Design Studies, 2000", "url": "https://doi.org/10.1016/S0142-694X(00)00022-3"}]},
    {"theme": "Collecting and creativity", "text": "Designers use examples throughout the process and actively collect them, but find their tools poor for storing and re-finding them.", "bears": "Collecting matters, and the tools for it are weak: the opportunity Palit goes after", "cred": "medium", "note": "Interviews with a small sample; peer-reviewed and widely cited.", "sources": [{"label": "Herring et al., CHI 2009", "url": "https://doi.org/10.1145/1518701.1518717"}]},
    {"theme": "Collecting and creativity", "text": "Practitioners value mood boards for communicating and for lateral thinking. Assembling imagery is a thinking activity, not decoration.", "bears": "Collecting is part of thinking, not just storage", "cred": "medium", "note": "Qualitative and small-sample.", "sources": [{"label": "McDonagh & Storer, The Design Journal, 2004", "url": "https://experts.illinois.edu/en/publications/mood-boards-as-a-design-catalyst-and-resource-researching-an-unde/"}, {"label": "Cassidy, Fashion Practice, 2011", "url": "https://pure.hud.ac.uk/en/publications/the-mood-board-process-modeled-and-understood-as-a-qualitative-de/"}]},
    {"theme": "Collecting and creativity", "text": "A single example can pull designers into copying it, while a diverse set of examples leads to more diverse ideas.", "bears": "A varied archive from many sources beats a single feed. Examples can narrow thinking as well as inspire it", "cred": "high", "note": "Foundational and reproduced often, though methods vary.", "sources": [{"label": "Jansson & Smith, Design Studies, 1991", "url": "https://doi.org/10.1016/0142-694X(91)90003-F"}, {"label": "Siangliulue et al., CSCW 2015", "url": "https://www.eecs.harvard.edu/~kgajos/papers/2015/siangliulue15toward.shtml"}]},
    {"theme": "Collecting and creativity", "text": "People ideating with an AI image generator fixated more on an initial example and produced fewer, less varied and less original ideas than people without it (60 participants).", "bears": "Early evidence that AI imagery can narrow exploration. Say “early evidence suggests”", "cred": "medium", "note": "One study of 60 novices and one task; no replication found. Showing Google Images also raised fixation, so any example can fixate, including an archive.", "sources": [{"label": "Wadinambiarachchi et al., CHI 2024", "url": "https://doi.org/10.1145/3613904.3642919"}]},
    {"theme": "Collecting and creativity", "text": "AI suggestions made individual stories more creative, especially for less creative writers, but made the stories more alike.", "bears": "The honest AI framing: it can help individuals while making everyone's work more similar", "cred": "high", "note": "Verified October 17: 293 writers; stories rated 8.1% more novel and 9.0% more useful with AI ideas, and significantly more alike.", "sources": [{"label": "Doshi & Hauser, Science Advances, 2024", "url": "https://doi.org/10.1126/sciadv.adn5290"}]},
    {"theme": "Coming back to it", "text": "Across 117 studies, taking a break from a problem and coming back helped, more so for open-ended idea generation. A small-to-moderate effect.", "bears": "Supports stepping away and returning. It's about time away from a problem, not archives", "cred": "high", "note": "Meta-analysis of lab tasks; possible publication bias.", "sources": [{"label": "Sio & Ormerod, Psychological Bulletin, 2009", "url": "https://doi.org/10.1037/a0014212"}]},
    {"theme": "Coming back to it", "text": "Examples help most when they reach designers already working on a problem: distant analogies shown mid-task helped more than the same ones shown up front.", "bears": "Kept colors help most when they resurface while you're mid-project. An argument for “kept before” at the moment of capture, not just storage", "cred": "medium", "note": "From a secondary summary; check the full text.", "sources": [{"label": "Tseng et al., Design Studies, 2008", "url": "https://scholar.google.com/scholar?q=%22The+role+of+timing+and+analogical+similarity+in+the+stimulation+of+idea+generation+in+design%22"}]},
    {"theme": "Coming back to it", "text": "No study shows that resurfacing items from your own archive improves creative work, and people keep far more than they ever revisit.", "bears": "An archive only helps if people come back to it, so design for resurfacing. Don't claim breakthroughs", "cred": "high", "note": "From a systematic review of 207 serendipity studies.", "sources": [{"label": "Liu et al., Journal of Documentation, 2022", "url": "https://doi.org/10.1108/JD-02-2021-0029"}]},
    {"theme": "Attention and capture", "text": "People who freely chose what to photograph later recognized more of what they saw, even things they didn't photograph.", "bears": "Deliberate, self-chosen capture can focus visual attention. In Palit, capture is a choice made with a keystroke", "cred": "high", "note": "A series of experiments; memory for sound got worse.", "sources": [{"label": "Barasch et al., Psychological Science, 2017", "url": "https://doi.org/10.1177/0956797617694868"}]},
    {"theme": "Attention and capture", "text": "Photographing whole objects led to worse memory for them than just looking. Zooming in on a detail removed the effect.", "bears": "Capture without attention can hurt memory. Focusing on one color, and naming it, is the attention", "cred": "high", "note": "Replicated.", "sources": [{"label": "Henkel, Psychological Science, 2014", "url": "https://doi.org/10.1177/0956797613504438"}]},
    {"theme": "Attention and capture", "text": "Color discrimination improved with practice, and training people on a new boundary changed how they perceived it.", "bears": "Some lab support for “training the eye”. Palit isn't structured training, so don't claim it trains your eye", "cred": "medium", "note": "Replicated, but researchers debate whether perception itself changes.", "sources": [{"label": "Özgen & Davies, Journal of Experimental Psychology: General, 2002", "url": "https://doi.org/10.1037/0096-3445.131.4.477"}]},
    {"theme": "The surface colors sit on", "text": "For judging prints, ISO 3664 asks for a neutral, matt surround between 10% and 60% luminous reflectance, and recommends a 20% mid gray where nothing else is set. Extremely light or dark surrounds aren't allowed, because they change appearance so much.", "bears": "Palit's pure white paper (A36) sits at the extreme the standard excludes for judging color", "cred": "high", "note": "Read in the ISO 3664:2000 final-draft text that GTI hosts. Later editions came in 2009 and 2025; GTI says the 10–60% range carried into 2009.", "sources": [{"label": "ISO 3664:2000, clauses 4.2.4 and 4.3.4", "url": "https://www.gtilite.com/pdf/ISO3664%20Standard.pdf"}, {"label": "GTI, What is ISO 3664:2009?, 2011", "url": "https://www.gtilite.com/2011/01/what-is-iso-3664-2009/"}]},
    {"theme": "The surface colors sit on", "text": "The CIE's reference conditions for judging color differences use a uniform neutral gray background at L* 50, about #777777, under D65 light.", "bears": "The closest thing to a standard neutral for comparing colors", "cred": "high", "note": "Confirmed through secondary sources, not the CIE text itself.", "sources": [{"label": "CIE 116-1995", "url": "https://cie.co.at/publications/industrial-colour-difference-evaluation"}, {"label": "Moroney, IS&T PICS, 2000", "url": "https://www.imaging.org/common/uploaded%20files/pdfs/Papers/2000/PICS-0-81/1611.pdf"}]},
    {"theme": "The surface colors sit on", "text": "On monitors, the standards want dark gray or black around an image to cut flare, no brighter than 20% of display white and preferably 3%. When the screen stands in for a print, the border should be light, like unprinted paper.", "bears": "The right surface depends on the task: dark to cut flare, light to stand in for paper", "cred": "high", "sources": [{"label": "ISO 3664:2000, clause 4.5.5", "url": "https://www.gtilite.com/pdf/ISO3664%20Standard.pdf"}, {"label": "ISO 12646:2008 preview", "url": "https://cdn.standards.iteh.ai/samples/44468/03b7038f50a142bea3f2a6dcace2f72b/ISO-12646-2008.pdf"}]},
    {"theme": "The surface colors sit on", "text": "SMPTE's reference viewing standard asks for a neutral gray surround at 5.0 ± 0.5 cd/m², and says there's probably no single optimal level, so a consistent, repeatable surround is what matters.", "bears": "Whichever surface Palit uses, keeping it consistent matters as much as its level", "cred": "high", "sources": [{"label": "SMPTE ST 2080-3:2017", "url": "https://pub.smpte.org/latest/st2080-3/st2080-3-2017.pdf"}]},
    {"theme": "The surface colors sit on", "text": "Color viewing booths are painted Munsell N7 or N8 depending on the industry. X-Rite's example: a red apple looks more orange on a yellow counter than on gray.", "bears": "Industry practice isolates the sample on gray", "cred": "medium", "sources": [{"label": "X-Rite, The Science of Visual Evaluation, 2015, updated 2025", "url": "https://www.xrite.com/blog/the-science-behind-visual-evaluation"}]},
    {"theme": "The surface colors sit on", "text": "Pro tools let you change the backdrop: Photoshop offers Black, Dark Gray, Medium Gray, Light Gray or Custom, Affinity Photo 2 has a background gray slider, and Figma lets each page's canvas be any color (#F5F5F5 by default in light mode). None of their official docs justify mid gray as free of bias; they give contrast, comfort and visibility.", "bears": "Precedent for a surface control, but not evidence that it helps", "cred": "medium", "sources": [{"label": "Adobe, Fill the work canvas, 2026", "url": "https://helpx.adobe.com/photoshop/desktop/apply-painting-techniques/fill-objects-selections-layers/fill-work-canvas.html"}, {"label": "Affinity Photo 2, UI appearance", "url": "https://affinity.help/photo2/en-US.lproj/pages/Workspace/uiAppearance.html"}, {"label": "Figma, canvas background", "url": "https://help.figma.com/hc/en-us/articles/360041064814-Change-the-background-color-of-the-canvas"}]},
    {"theme": "The surface colors sit on", "text": "The crispening effect: people told brightness steps apart best at the background's own luminance. A thin outline, or a hue difference between the circles and the background, abolished the effect.", "bears": "Differences look biggest near the surface's lightness; ink rules around swatches may change this (an inference)", "cred": "high", "sources": [{"label": "Whittle, Vision Research, 1992", "url": "https://pubmed.ncbi.nlm.nih.gov/1455722/"}]},
    {"theme": "The surface colors sit on", "text": "The visual difference between the same pair of colors changed by a factor of up to 8, depending only on the neutral background behind them. The largest effect was for a dark pair.", "bears": "The headline number for “the surface changes what you see”", "cred": "high", "note": "38 neutral pairs on a CRT, differing in lightness only. Only the abstract was read.", "sources": [{"label": "Xin, Lam & Luo, Color Research & Application, 2004", "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/col.20045"}]},
    {"theme": "The surface colors sit on", "text": "Across 85 pairs on three gray backgrounds, crispening was largest for gray samples (50%) and smallest for purple (4%), and stronger for lightness differences than for differences in hue and chroma.", "bears": "How much the surface matters depends on the colors: most for near-neutrals and lightness", "cred": "high", "sources": [{"label": "Karimipour & Kandi, Color Research & Application, 2017", "url": "https://onlinelibrary.wiley.com/doi/10.1002/col.22110"}]},
    {"theme": "The surface colors sit on", "text": "Colors look more vivid against a low-contrast gray surround than against a varied, multicolored one with the same average.", "bears": "Give swatches neutral space", "cred": "high", "note": "A follow-up (Faul, Ekroll & Wendt, 2008) found surround variance plays only a limited role.", "sources": [{"label": "Brown & MacLeod, Current Biology, 1997", "url": "https://doi.org/10.1016/S0960-9822(06)00372-1"}]},
    {"theme": "The surface colors sit on", "text": "A colored surround pushes a color's hue away from the surround's hue, most strongly along the blue–yellow axis.", "bears": "Neighboring colors change what you see (A43), though there's no clean headline number", "cred": "high", "sources": [{"label": "Klauke & Wachtler, Journal of Vision, 2015", "url": "https://doi.org/10.1167/15.13.17"}]},
    {"theme": "The surface colors sit on", "text": "134 people read charts in light and dark modes. The better mode varied from person to person, and what people preferred didn't reliably match the mode that helped them.", "bears": "Letting people choose a surface may not help them", "cred": "high", "note": "Chart reading, not color judgment.", "sources": [{"label": "While & Sarvghad, IEEE VIS, 2024", "url": "https://arxiv.org/abs/2409.10841"}]},
    {"theme": "Ideation and inspiration", "text": "Designers remember examples by where they came from, and since language has few agreed color names, only a direct example pins a color down. Some firms build their own color vocabulary.", "bears": "Supports keeping each color's source, and naming colors yourself (A24)", "cred": "high", "sources": [{"label": "Eckert & Stacey, Design Studies, 2000 (authors' copy)", "url": "https://www.tech.dmu.ac.uk/~mstacey/pubs/source-lang/soi-lod.htm"}]},
    {"theme": "Ideation and inspiration", "text": "Of 51 professional designers surveyed, 33 save inspiration. Saved bookmarks pile up until they're hard to see as a whole, and designers distrust sources that are poorly documented.", "bears": "Supports keeping the source with every color, and designing for archives that grow large", "cred": "medium-high", "sources": [{"label": "Koch, László, Lucero & Oulasvirta, DRS, 2018", "url": "https://userinterfaces.aalto.fi/inspiration-in-design/resources/DRS%202018%20final.pdf"}]},
    {"theme": "Ideation and inspiration", "text": "Mood boards frame the task, align stakeholders, hold conflicting ideas, abstract and set direction, and designers expect the final design to carry the board's colors.", "bears": "Supports palettes as the thing a team aligns on: keeping palettes consistent", "cred": "high", "sources": [{"label": "Lucero, DIS, 2012", "url": "https://users.aalto.fi/~luceroa1/publications/2012/lucero12_moodboards.pdf"}]},
    {"theme": "Ideation and inspiration", "text": "Making several designs in parallel before feedback produced better and more varied work than refining one design at a time (33 novice designers).", "bears": "Supports explore wide, then keep few: keeping a color cheap, keeping a palette deliberate", "cred": "high", "sources": [{"label": "Dow et al., ACM TOCHI, 2010", "url": "https://hci.stanford.edu/publications/2010/parallel-prototyping/ParallelPrototyping2010.pdf"}, {"label": "Design Council, the Double Diamond", "url": "https://www.designcouncil.org.uk/our-resources/framework-for-innovation/"}]},
    {"theme": "From the first use to mastery", "text": "Tools for creative thinking should support exploration (easy to try things and back out) and have a low threshold, a high ceiling and wide walls; kits built around one model are compared to painting by numbers.", "bears": "Supports refusing to generate palettes, and one window that serves new and longtime users", "cred": "high", "sources": [{"label": "Resnick, Myers, Nakakoji, Shneiderman, Pausch, Selker & Eisenberg, 2005", "url": "https://www.cs.umd.edu/hcil/CST/Papers/designprinciples.pdf"}, {"label": "Shneiderman, Communications of the ACM, 2007", "url": "https://www.cs.umd.edu/~ben/papers/Shneiderman2007Creativity.pdf"}]},
    {"theme": "From the first use to mastery", "text": "New users skip the manual and start working; they read a new tool through the ones they already know, and experienced users plateau.", "bears": "Supports making the first pick the lesson, and showing advanced features in context", "cred": "high", "sources": [{"label": "Carroll & Rosson, 1987, in Nielsen's summary", "url": "https://www.nngroup.com/articles/paradox-of-the-active-user/"}]},
    {"theme": "From the first use to mastery", "text": "An empty state should show what the system does, teach in context and give a direct path to the main task, rather than a forced tutorial. Apple's guidelines also say to teach by doing and keep tutorials optional.", "bears": "Supports a first run that is the first pick, not a tour", "cred": "high", "sources": [{"label": "Kaplan, Nielsen Norman Group, 2021", "url": "https://www.nngroup.com/articles/empty-state-interface-design/"}, {"label": "Apple Human Interface Guidelines, onboarding", "url": "https://developer.apple.com/design/human-interface-guidelines/onboarding"}]},
    {"theme": "Finding things again", "text": "Elaborate folders didn't help people find email again; search and threads did, and scrolling was the most common way people looked (345 users). In another deployment, time and people were the key cues, and people sorted by date.", "bears": "Supports search and folding days into months for longtime users, and not asking anyone to file colors", "cred": "high", "sources": [{"label": "Whittaker et al., CHI, 2011", "url": "https://research.ibm.com/publications/am-i-wasting-my-time-organizing-email-a-study-of-email-refinding"}, {"label": "Dumais et al., SIGIR, 2003", "url": "https://www.cs.odu.edu/~sampath/courses/w17/cs599/papers/SISCore-SIGIR2003-Final.pdf"}]}
  ],

  headline: {
    "note": "Verified numbers for Noah's three claims, from research on October 17. Each stat has its source and a credibility rating; the caveats and the lines to avoid matter as much as the numbers.",
    "claims": [
      {
        "claim": "Your own eye, not AI's: leaning on AI to generate creative work has a cost",
        "stats": [
          {
            "text": "Writers given AI story ideas wrote stories rated 8.1% more novel and 9.0% more useful, but the AI-assisted stories were significantly more similar to one another.",
            "cite": "Doshi & Hauser, Science Advances, 2024: 293 writers, 600 evaluators",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532",
            "cred": "high"
          },
          {
            "text": "Students who used unrestricted GPT-4 for math practice scored 48% higher in practice, then 17% lower on the exam once it was taken away, compared with students who never had it. A tutor version with guardrails largely avoided the drop.",
            "cite": "Bastani et al., PNAS, 2025",
            "url": "https://doi.org/10.1073/pnas.2422633122",
            "cred": "high"
          },
          {
            "text": "In a sketching task, people shown Midjourney images fixated more on the example and produced less original ideas than people with no support. Showing Google Images also raised fixation.",
            "cite": "Wadinambiarachchi et al., CHI 2024: 60 participants",
            "url": "https://arxiv.org/html/2403.11164v1",
            "cred": "medium"
          }
        ],
        "supporting": [
          "Artists on one platform who adopted AI image tools made 25% more work and got 50% more favorites per view, while the average novelty of their work fell (Zhou & Lee, PNAS Nexus, 2024; observational).",
          "After AI was introduced in colonoscopy, doctors' detection rate without AI fell from 28.4% to 22.4% (Budzyń et al., Lancet Gastroenterology & Hepatology, 2025; observational). Deskilling evidence comes from medicine, not design.",
          "Knowledge workers more confident in AI reported less critical thinking; those more confident in their own skill reported more (Lee et al., CHI 2025; a survey of 319 people).",
          "Words shape color perception: Russian speakers, who have separate words for light and dark blue, told blues apart faster across that boundary (Winawer et al., PNAS, 2007)."
        ],
        "caveats": [
          "AI made individual stories better, especially for weaker writers. The cost was sameness across the group, and the writers weren't professionals.",
          "The GPT-4 harm came from unguarded use, in math, not design.",
          "The fixation study used 60 novices and one task, and any example can fixate, including a reference archive.",
          "None of these studies is about color. No study tests whether AI palette tools weaken color judgment.",
          "The MIT “Your Brain on ChatGPT” study is an unreviewed preprint with 18 people per group. Don't use it."
        ],
        "say": "With AI ideas, individual stories scored higher, but everyone's stories became more alike (Science Advances, 2024). Students who leaned on unrestricted GPT-4 scored 17% lower once it was taken away (PNAS, 2025).",
        "dont": [
          "“AI makes you less creative.” For individuals, the opposite was found.",
          "“MIT proved ChatGPT damages your brain.”",
          "“AI palette tools ruin your color sense.” Untested.",
          "“Designers using AI produce fewer ideas,” as a firm finding.",
          "“Artists see more colors.”"
        ]
      },
      {
        "claim": "The process matters: research, ideation and collecting are part of the work",
        "stats": [
          {
            "text": "In a design task, 19 expert engineers spent significantly more time than students in every stage, including scoping the problem, and gathered significantly more information across more categories.",
            "cite": "Atman et al., Journal of Engineering Education, 2007: 19 experts, 50 students",
            "url": "https://doi.org/10.1002/j.2168-9830.2007.tb00945.x",
            "cred": "high"
          },
          {
            "text": "Across 300 listed companies over five years, the top quarter on McKinsey's Design Index had 32 percentage points higher revenue growth and 56 points higher shareholder returns than their industry peers.",
            "cite": "McKinsey, The Business Value of Design, 2018",
            "url": "https://www.mckinsey.com/capabilities/mckinsey-design/our-insights/the-business-value-of-design",
            "cred": "medium"
          },
          {
            "text": "The Design Council's Double Diamond, the standard model of the design process, gives two of its four phases, discover and define, to understanding the problem before solving it.",
            "cite": "UK Design Council",
            "url": "https://www.designcouncil.org.uk/our-resources/the-double-diamond/",
            "cred": "high"
          }
        ],
        "supporting": [
          "Expert designers frame the problem and develop the problem and the solution together, instead of researching exhaustively first (Cross, Design Studies, 2004). That backs working holistically (A28).",
          "McKinsey's “design” is a bundle of 12 practices, including user research, prototyping and iteration, not aesthetics."
        ],
        "caveats": [
          "Atman's study is engineering, a lab task and a small sample. Experts spent more time on every stage, so it shows they don't skip scoping, not that scoping matters more than making.",
          "McKinsey's figures are correlational, compare the top quarter with peers, and come from a firm that sells design services.",
          "The “early design decisions lock in 70–80% of cost” claim is contested folklore.",
          "There's no credible data on how many designers use mood boards or how long they spend collecting."
        ],
        "say": "Experts don't rush to the answer: expert engineers spent significantly more time scoping the problem and gathering information than students did (Atman et al., 2007). The standard design process gives half its phases to understanding the problem.",
        "dont": [
          "“Early design decisions lock in 80% of costs.”",
          "“Design-led companies grow 32% faster.” The numbers are percentage points, top quarter against peers, and correlational.",
          "“Experts spend most of their time researching.”",
          "Any “X% of designers use mood boards” figure."
        ]
      },
      {
        "claim": "Naming it yourself makes it yours",
        "stats": [
          {
            "text": "Across three studies, people who named a product rated it more highly, were more likely to buy it, and asked more to give it up. Naming raised their sense of ownership, and names that fit well and were creative did the most.",
            "cite": "Stoner, Loken & Stadler Blank, “The Name Game,” Journal of Consumer Psychology, 2018",
            "url": "https://carlsonschool-d8.prd.umn.edu/sites/carlsonschool.umn.edu/files/2020-03/Stoner_et_al-2018-Journal_of_Consumer_Psychology.pdf",
            "cred": "medium"
          },
          {
            "text": "Students given a mug valued it at $7.12; students without one offered $2.87, about two and a half times less.",
            "cite": "Kahneman, Knetsch & Thaler, Journal of Political Economy, 1990: 77 students",
            "url": "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_et_al_1990_Experimental_tests.pdf",
            "cred": "high"
          },
          {
            "text": "People would pay 63% more for an IKEA box they assembled themselves than for an identical pre-built one. The effect vanished if what they made was destroyed or left unfinished.",
            "cite": "Norton, Mochon & Ariely, Journal of Consumer Psychology, 2012; replicated by Sarstedt et al., 2017",
            "url": "https://dash.harvard.edu/handle/1/12136084",
            "cred": "medium"
          }
        ],
        "supporting": [
          "About half of US car owners say they've named their car: 55% of 1,000 in one poll, 42% of 1,276 in another (commercial polls, not peer-reviewed).",
          "Farms where cows were called by name reported 258 more liters of milk per lactation (a 2009 survey of 516 farmers; correlational, and it won an Ig Nobel Prize).",
          "Psychological ownership grows through control, knowing something well, and investing yourself in it (Pierce, Kostova & Dirks, 2001; theory)."
        ],
        "caveats": [
          "No study tests naming colors, or silly names. In “The Name Game”, names that fit well and were creative did the most, so a throwaway name may do less, though a joke name can still fit.",
          "The mug and IKEA results are about owning and making, not naming. The endowment effect is debated.",
          "One of the IKEA paper's authors had a separate paper retracted; this one wasn't implicated. Cite the replication alongside it.",
          "The cow, car-naming and Share a Coke figures aren't strong enough to stand on their own."
        ],
        "say": "Naming something makes it feel more yours: in three experiments, people who named a product rated it higher and wanted more money to give it up (Journal of Consumer Psychology, 2018). Ownership alone matters too: mug owners asked about two and a half times what buyers would pay.",
        "dont": [
          "“Naming a color helps you see or remember it.” Untested.",
          "“Any name works, even a silly one,” as a research finding.",
          "“Cows with names make more milk because of their names.”",
          "“Share a Coke boosted sales 7%,” as fact.",
          "“People value what they make 63% more,” as a general rule."
        ]
      },
      {
        "claim": "The surface changes what you see",
        "stats": [
          {
            "text": "The visual difference between the same pair of colors changed by a factor of up to 8, depending only on the neutral background behind them. The largest effect was for a dark pair.",
            "cite": "Xin, Lam & Luo, Color Research & Application, 2004: 38 pairs on 5 backgrounds",
            "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/col.20045",
            "cred": "high"
          },
          {
            "text": "Crispening was largest for gray samples (50%) and smallest for purple (4%).",
            "cite": "Karimipour & Kandi, Color Research & Application, 2017: 85 pairs on 3 backgrounds",
            "url": "https://onlinelibrary.wiley.com/doi/10.1002/col.22110",
            "cred": "high"
          },
          {
            "text": "Of 1,401 people, 57% saw the dress as blue and black and 30% as white and gold, depending on what they assumed about the light.",
            "cite": "Lafer-Sousa, Hermann & Conway, Current Biology, 2015",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4921196/",
            "cred": "high"
          }
        ],
        "say": "The same two colors can look up to eight times more different on one gray than on another.",
        "supporting": [
          "The CIE judges color differences on an L* 50 gray, and ISO 3664 rules out extremely light or dark surrounds for judging prints."
        ],
        "caveats": [
          "Xin, Lam & Luo used neutral grays on a CRT, differing in lightness only, and we read only the abstract.",
          "The Dress is about lighting assumptions, not neighboring colors."
        ],
        "dont": [
          "Don't say a gray removes context effects.",
          "Don't cite Albers or Adelson as statistics; they're demonstrations."
        ]
      }
    ]
  },

  storyLines: [
    { text: "Designers have long kept personal collections, and they talk about new work through where it came from.", cites: "Keller, Pasman & Stappers 2006; Herring et al. 2009; Eckert & Stacey 2000" },
    { text: "What you look at shapes what you make: varied examples lead to more varied ideas, a single example can pull you into copying it, and early evidence suggests AI image generators can narrow exploration the same way.", cites: "Siangliulue et al. 2015; Jansson & Smith 1991; Wadinambiarachchi et al. 2024" },
    { text: "Stepping away and coming back helps open-ended creative work.", cites: "Sio & Ormerod 2009, a meta-analysis of 117 studies" },
    { text: "We remember what we come up with ourselves better than what we're handed, and our own cues work best for us.", cites: "Slamecka & Graf 1978; Bertsch et al. 2007; Mäntylä 1986" },
    { text: "Naming something makes it feel more like yours, and things marked as yours are remembered better.", cites: "Stoner, Loken & Stadler Blank 2018; Cunningham et al. 2008, replicated by Grisdale et al. 2014" },
    { text: "Choosing what to capture focuses your attention on what you see.", cites: "Barasch et al. 2017, with Henkel 2014 as the counterpoint" }
  ],
  dontSay: [
    "“Collecting inspiration is proven to make you more creative.” No study shows that keeping an archive causes better creative work.",
    "“The more references, the better.” Examples can fix you on one idea; variety and timing decide whether they help.",
    "“Naming a color helps you remember the exact color.” Names add a category trace and can bias exact visual memory. The name helps you find a color and gives it meaning; the swatch keeps it exact.",
    "“The IKEA effect proves naming makes you love your colors.” That effect needs effortful, finished work.",
    "“Science shows AI makes designers less creative.” Say instead: early evidence suggests AI can narrow exploration.",
    "“Revisiting your archive sparks breakthroughs.” There's no direct evidence for personal archives.",
    "“Capturing colors trains your eye.” Not shown; capture without attention can even hurt memory.",
    "Big multipliers like “you'll remember twice as much.” These are moderate effects.",
    "Endowment-effect claims, the “Google effect”, and drawing-effect studies as evidence for a color picker.",
    "“Middle gray is 18%.” It depends on the scale: L* 50 is 18.4% luminance (#777777), and #808080 is 21.6%. Say “L* 50 gray, about 18% luminance”.",
    "“OKLab L 0.5 is middle gray.” It's about L* 42; L* 50 is OKLab L 0.57.",
    "“ISO 3664 requires Munsell N8.” It sets 10–60% reflectance and recommends 20%; N8 is a vendor convention.",
    "“A neutral gray removes context effects.” It removes color induction from the surround; lightness contrast and crispening remain.",
    "“Dark mode is better for judging color.” No evidence either way.",
    "“ΔE tells you how different two colors will look.” Color-difference formulas assume a mid-gray background; Palit's ΔE describes the numbers, not what the eye sees on white paper.",
    "“The Dress shows colors change next to other colors.” It shows lighting assumptions changing color."
  ],
  precedentsStatus: "done",
  precedentsNote: "Desk research, October 16. Some dates and sources were noted from memory or secondhand; they're marked.",
  deepDives: [
    {
      q: "How might we keep the context that makes a color meaningful, without making Palit feel like surveillance?",
      rock: "C",
      grounded: "Microsoft Recall, Rewind, Signal's Screen Security, Limitless and Granola (bystanders), Wispr's context switch",
      directions: [
        "A capture receipt: the confirmation lists exactly what was kept, and one key drops any piece before it's saved",
        "Tiered context: the color and app by default; the title, URL and crop as separate, named switches, with the crop shown abstracted unless you ask",
        "Never-capture rules: password managers, private windows and messengers keep the color but no context, and say why"
      ]
    },
    {
      q: "How might we resurface past colors at moments that sharpen the eye, instead of interrupting or hurting?",
      rock: "B",
      grounded: "Facebook Year in Review, Google and Apple Photos, Timehop, Readwise, mymind",
      directions: [
        "An in-the-moment echo: a new pick close to an old one shows the earlier capture and its source",
        "A weekly look-back that only you start, where each color stays in rotation or is retired, never deleted",
        "Quieting on the swatch: less from this source or period, never, reset"
      ]
    },
    {
      q: "How might we let other tools use your taste, without letting AI decide it?",
      rock: "D",
      grounded: "MCP and Figma's MCP server, Figma's Make Designs pause, Adobe's terms backlash, mymind, failed auto-labels",
      directions: [
        "A read-only local MCP server whose answers cite capture numbers and sources",
        "Scoped sharing with an access log: only what you choose, with crops and URLs off by default",
        "A one-screen data contract shown when an AI client connects"
      ]
    },
    {
      q: "How might we let people choose how automatic capture is, without losing the deliberate act that trains the eye?",
      rock: "A",
      grounded: "Apple Journal, Day One, Granola, Wispr Flow, and where Recall, Rewind and Limitless ended up",
      directions: [
        "Suggest, never save: a faint suggestion that becomes a capture only when you press the hotkey (a provocation)",
        "A presence dial: hotkey only, a menu bar icon, or a small bar, each with a snooze",
        "An optional note in your own words after a capture"
      ]
    }
  ],
  precedents: [
    {
      theme: "Capture without surveillance",
      title: "Microsoft Recall (2024–2025)",
      text: "Recall took screenshots every few seconds and built a searchable timeline, on by default. Researchers found the extracted text sat in an unencrypted database that malware could copy. Microsoft made it opt-in, added encryption and filtering, and delayed it for months; testers later found the filter still missed card numbers.",
      lesson: "The backlash was about defaults and legibility more than the idea. Capture only on a deliberate keypress, protect the store, skip sensitive context instead of filtering it afterwards, and show exactly what each capture kept.",
      sources: [
        { label: "Help Net Security", url: "https://www.helpnetsecurity.com/2024/06/05/totalrecall-windows-recall-abuse", date: "Jun 2024" },
        { label: "TechRadar", url: "https://www.techradar.com/computing/windows/windows-11s-ai-recall-feature-is-blasted-by-a-security-expert-as-one-of-the-most-ridiculous-security-failings-ive-ever-seen", date: "Jun 2024" },
        { label: "Microsoft", url: "https://blogs.windows.com/windowsexperience/2024/09/27/update-on-recall-security-and-privacy-architecture/", date: "Sep 2024" },
        { label: "BetaNews", url: "https://betanews.com/2025/08/04/microsoft-recall-is-bad-at-filtering-sensitive-information/", date: "Aug 2025" }
      ]
    },
    {
      theme: "Capture without surveillance",
      title: "Signal's Screen Security (2025)",
      text: "Signal's Windows app blocks screenshots of its chat window by default, so Recall and other capture tools see a blank frame. Signal noted the cost to screen readers and magnifiers.",
      lesson: "Other apps will declare themselves off-limits. For password managers, private windows and messengers, Palit could keep the picked color but drop the crop, title and URL, and say so.",
      sources: [
        { label: "Help Net Security", url: "https://www.helpnetsecurity.com/2025/05/22/signal-blocks-microsoft-recall-from-screenshotting-conversations/", date: "May 2025" },
        { label: "Signal (noted from memory)", url: "https://signal.org/blog/signal-doesnt-recall/", date: "May 2025" }
      ]
    },
    {
      theme: "Capture without surveillance",
      title: "Rewind, then Limitless, then Meta (2022–2025)",
      text: "Rewind recorded the screen and audio continuously, and promised local storage, pausing and app exclusions. It became Limitless and launched a recording pendant whose consent mode left bystanders unresolved. Meta acquired it in December 2025 and switched off Rewind's capture.",
      lesson: "Local-first has to outlast the company: an open export of every capture with its source, and a way to check that nothing leaves the Mac.",
      sources: [
        { label: "TechCrunch", url: "https://techcrunch.com/2022/11/01/rewind-wants-to-revamp-how-you-remember-with-millions-from-a16z", date: "Nov 2022" },
        { label: "Business Insider", url: "https://www.businessinsider.in/limitless-ai-pendant-clips-clothes-hears-records-everything-2024-4", date: "Apr 2024" },
        { label: "9to5Mac", url: "https://9to5mac.com/2025/12/05/rewind-limitless-meta-acquisition/", date: "Dec 2025" }
      ]
    },
    {
      theme: "Capture without surveillance",
      title: "Granola: quiet for you, invisible to others",
      text: "Granola joins no call: it transcribes your audio and deletes the recording. It asks users to tell participants, and offers an optional notice in the meeting chat. A proposed class action filed in July 2026 alleges participants couldn't know they were being transcribed; these are allegations only.",
      lesson: "Palit's crop can hold other people's things: a face on a call, a message, a client's unreleased work. Keep the crop small, opt-in, and maybe abstracted.",
      sources: [
        { label: "Granola", url: "https://www.granola.ai/blog/ai-notetaker-participant-privacy-consent", date: "2026" },
        { label: "Barnes & Thornburg", url: "https://btlaw.com/en/insights/alerts/2026/what-the-granola-class-action-means-for-companies-building-and-deploying-conversation-capture-tools", date: "2026" }
      ]
    },
    {
      theme: "Capture without surveillance",
      title: "Wispr Flow's presence and context switches",
      text: "Wispr's Flow Bar sits just above the Dock; you can keep it visible, snooze it, or hide it and call it up with the shortcut. Reading text from the active window is its own switch, separate from the history and training settings.",
      lesson: "Presence is a setting: always there, snoozed, or called up. Palit's neighbors, window title and URL should each be named, explained and switchable on their own.",
      sources: [
        { label: "Wispr docs", url: "https://docs.wisprflow.ai/articles/5002934560-why-is-the-wispr-bar-is-not-appearing-or-disappearing" },
        { label: "Wispr data controls", url: "https://wisprflow.ai/data-controls", date: "Aug 2026" }
      ]
    },
    {
      theme: "Resurfacing at the right moment",
      title: "Facebook Year in Review (2014)",
      text: "Facebook built celebratory slideshows of each person's year and pushed them into feeds. For Eric Meyer, it opened with a photo of his daughter, who had died that year. Facebook apologized, then filtered the next year's version and let people edit it.",
      lesson: "The harm came from the framing: celebratory, pushed, unasked. A color carries its context, so resurfacing should be neutral in tone, started by the person, and never packaged into a story for them.",
      sources: [
        { label: "Eric Meyer (noted from memory)", url: "https://meyerweb.com/eric/thoughts/2014/12/24/inadvertent-algorithmic-cruelty/", date: "Dec 2014" },
        { label: "Engadget", url: "https://www.engadget.com/2014-12-27-facebooks-year-in-review-shows-tragic-side-of-software.html", date: "Dec 2014" },
        { label: "TechCrunch", url: "https://techcrunch.com/2015/12/16/no-more-tears-in-review", date: "Dec 2015" }
      ]
    },
    {
      theme: "Resurfacing at the right moment",
      title: "Google Photos Memories controls (2021)",
      text: "After hearing that resurfaced photos can be painful, Google worked with GLAAD to make it easier to hide people and time periods, right from a memory. Hiding never deletes the photos.",
      lesson: "Offer controls by range (this period, this source) as well as by item, and keep hiding separate from deleting, which fits “never lose a capture”.",
      sources: [
        { label: "Google", url: "https://blog.google/products/photos/new-memories-features-look-back/", date: "May 2021" },
        { label: "Google", url: "https://blog.google/outreach-initiatives/diversity/transgender-awareness-week-2021/", date: "Nov 2021" },
        { label: "Google Photos Help", url: "https://support.google.com/photos/answer/9454489" }
      ]
    },
    {
      theme: "Resurfacing at the right moment",
      title: "Apple Photos: feature less, or never",
      text: "Apple lets you feature a day, place or person less, or never, from the memory itself, with a reset. It documents this in its Personal Safety guide.",
      lesson: "Graduated, reversible controls at the moment of resurfacing beat a buried setting.",
      sources: [{ label: "Apple Personal Safety User Guide", url: "https://support.apple.com/guide/personal-safety/ipsa4c9edc62/web" }]
    },
    {
      theme: "Resurfacing at the right moment",
      title: "Timehop's Valentine's Day warning (2015)",
      text: "Timehop put a warning screen in front of Valentine's Day memories, so people could choose whether to look back.",
      lesson: "Resurfacing by date is arbitrary, and some dates are loaded. Resurfacing triggered by what you're doing now, like a new pick close to an old one, is relevant by design.",
      sources: [{ label: "The Next Web", url: "https://thenextweb.com/news/genius-timehops-valentines-day-warning-screen", date: "Feb 2015" }]
    },
    {
      theme: "Resurfacing at the right moment",
      title: "Readwise Daily Review",
      text: "Readwise resurfaces your own highlights in a daily review scheduled around how fast you forget, and you steer each one: soon, later, someday, never.",
      lesson: "Resurfacing feels good as a ritual you opt into and steer one item at a time. A weekly look-back fits “train your eye”.",
      sources: [{ label: "Readwise docs", url: "https://docs.readwise.io/readwise/guides/mastery" }]
    },
    {
      theme: "Resurfacing at the right moment",
      title: "mymind Serendipity",
      text: "A calm mode that brings back forgotten saves for a keep-or-forget choice, one at a time. It runs only when you open it.",
      lesson: "Pull, not push. That suits Palit's rule of no notifications.",
      sources: [{ label: "mymind help", url: "https://mymind.helpscoutdocs.com/article/44-rediscovering-things-with-serendipity" }]
    },
    {
      theme: "AI that serves your own taste",
      title: "MCP and Figma's MCP server",
      text: "Anthropic open-sourced the Model Context Protocol in November 2024, a standard way for AI apps to read the data and tools a person chooses. Figma's MCP server gives coding agents a team's own variables and components, so the output follows their design system. A known risk is prompt injection, when an assistant reads both private data and untrusted content.",
      lesson: "The closest precedent for a Palit MCP server: the person defines the system and the AI reads it. Read-only, local, limited to what you choose to share, and citing capture numbers. Whatever a client reads leaves the Mac through that client, so say so when it connects.",
      sources: [
        { label: "Anthropic (noted from memory)", url: "https://www.anthropic.com/news/model-context-protocol", date: "Nov 2024" },
        { label: "Figma Help", url: "https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server" },
        { label: "Simon Willison (unverified)", url: "https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/", date: "Apr 2025" }
      ]
    },
    {
      theme: "AI that serves your own taste",
      title: "Figma's Make Designs pause (2024)",
      text: "Figma's AI design feature produced near-copies of Apple's Weather app and was paused. Separately, Figma began training on customer content by default for some plans.",
      lesson: "Generation pulls toward the average, or toward one famous reference. Retrieval over your own archive is the safer kind of AI, and training defaults read as a statement of values.",
      sources: [
        { label: "The Register", url: "https://www.theregister.com/2024/07/03/figma_plagiarizes_apple/", date: "Jul 2024" },
        { label: "Figma Help", url: "https://help.figma.com/hc/en-us/articles/17725942479127" }
      ]
    },
    {
      theme: "AI that serves your own taste",
      title: "Adobe's custom models and the terms backlash (2024)",
      text: "Adobe lets companies train Firefly on their own brand assets. Months later, vague terms of use made creatives fear their unpublished work could feed AI, and Adobe had to clarify that it doesn't.",
      lesson: "Grounding AI in your own material appeals, but trust needs a plain data contract. Palit's AI policy should fit on one screen.",
      sources: [
        { label: "NewscastStudio", url: "https://www.newscaststudio.com/2024/03/26/adobe-firefly-services/", date: "Mar 2024" },
        { label: "RightsTech", url: "https://rightstech.com/2024/06/adobe-does-not-train-firefly-gen-ai-models-on-customer-content-company-responds-to-backlash", date: "Jun 2024" }
      ]
    },
    {
      theme: "AI that serves your own taste",
      title: "Auto-labels that failed",
      text: "In 2015, Google Photos' automatic labels misidentified Black people in a racist way; years later, the fix was still to block those labels altogether. In 2017, a neural network trained on paint names produced absurd names and drifted toward browns and grays.",
      lesson: "Automatic labels fail in ways that range from silly to harmful. Palit's refusal to auto-name holds up on grounds of both taste and harm; its descriptions should stay factual and measurable.",
      sources: [
        { label: "MIT Technology Review", url: "https://www.technologyreview.com/2018/01/11/146257/google-photos-still-has-a-problem-with-gorillas/", date: "Jan 2018" },
        { label: "Engadget", url: "https://www.engadget.com/2017/05/22/ai-sucks-at-naming-paints/", date: "May 2017" }
      ]
    },
    {
      theme: "AI that serves your own taste",
      title: "mymind: the AI does the organizing",
      text: "mymind has no folders or tags to maintain; its AI recognizes and sorts everything you save.",
      lesson: "A useful foil. Palit can compute neutral descriptions the way mymind computes tags, but naming and grouping stay a human act.",
      sources: [{ label: "mymind", url: "https://mymind.com/" }]
    },
    {
      theme: "From manual to automatic capture",
      title: "Apple Journal suggestions (2023)",
      text: "Journal suggests moments from photos, places and workouts, on the device, but the person picks what becomes an entry. A vaguely named setting still set off a viral scare, which Snopes rated false.",
      lesson: "The system can suggest; only the person commits. Labels have to say exactly what is and isn't kept.",
      sources: [
        { label: "Apple Newsroom", url: "https://www.apple.com/newsroom/2023/12/apple-launches-journal-app-a-new-app-for-reflecting-on-everyday-moments/", date: "Dec 2023" },
        { label: "Snopes", url: "https://www.snopes.com/fact-check/iphone-journaling-suggestions-discoverable/" }
      ]
    },
    {
      theme: "From manual to automatic capture",
      title: "Day One's optional AI",
      text: "Day One's AI drafts follow-up questions from what you wrote and summarizes entries. Each feature can be switched on or off.",
      lesson: "The AI asks a better question; the entry stays yours. A Palit version: an optional prompt asking what you noticed, kept in your own words.",
      sources: [
        { label: "Day One", url: "https://dayoneapp.com/guides/labs/ai-features/" },
        { label: "Day One", url: "https://dayoneapp.com/blog/go-deeper-with-apple-intelligence/", date: "2025" }
      ]
    },
    {
      theme: "From manual to automatic capture",
      title: "The spectrum",
      text: "From manual to automatic: Palit's hotkey and highlights you make yourself; Apple Journal's suggestions; Day One's prompts and Granola's notes with a transcript; Wispr's context awareness; and at the far end, Recall, Rewind and Limitless.",
      lesson: "Palit sits at the manual end on purpose. Any automation should come as a suggestion you confirm with the same hotkey, never as background capture.",
      sources: []
    },
    {
      theme: "Colors kept with their story",
      title: "Werner's Nomenclature of Colours (1814, 1821)",
      text: "Each color sits in one ruled row: a number, a name, a hand-painted chip, then where it's found in animals, vegetables and minerals. Darwin took the 1821 edition on the Beagle to name his specimens' colors before they faded.",
      lesson: "The source is part of the entry, not metadata. A model for a catalogue row, and a story for the video.",
      sources: [{ label: "Darwin Online", url: "https://darwin-online.org.uk/converted/Ancillary/BeagleLibrary/1821_Werner_A704/1821_Werner_A704.html", date: "2011" }, { label: "Linda Hall Library", url: "https://www.lindahall.org/patrick-syme/", date: "2015" }, { label: "Smithsonian Libraries scan", url: "https://archive.org/details/wernersnomencla00wern" }]
    },
    {
      theme: "Colors kept with their story",
      title: "Vanderpoel, Color Problems (1902)",
      text: "Plates titled “Color analysis from” a rug, a mummy case, a butterfly: the object is the headline, its colors shown in proportion on a grid, with a ledger of each color's share.",
      lesson: "The source as the headline; a day's captures could read as one analysis of where you were.",
      sources: [{ label: "Public Domain Review", url: "https://publicdomainreview.org/collection/colour-analysis-charts-by-emily-noyes-vanderpoel-1902/", date: "2016" }]
    },
    {
      theme: "Colors kept with their story",
      title: "Ridgway, Color Standards and Color Nomenclature (1912)",
      text: "1,115 named colors on 53 plates; a name under every chip and a short code beside it, with a mark on the names he kept from his earlier book.",
      lesson: "One short label at every size, and a label that carries provenance.",
      sources: [{ label: "Smithsonian Libraries", url: "https://library.si.edu/digital-library/book/colorstandardsco00ridg" }]
    },
    {
      theme: "Colors kept with their story",
      title: "Wada, A Dictionary of Color Combinations (1933–34)",
      text: "348 combinations, numbered: sets of two, then three, then four colors, each color named underneath.",
      lesson: "The numbered unit is the combination: a model for kept palettes.",
      sources: [{ label: "Seigensha", url: "https://www.seigensha.com/books/978-4-86152-247-5/", date: "2010" }]
    },
    {
      theme: "Colors kept with their story",
      title: "The Pantone Matching System (1963)",
      text: "Numbered ink formulas, so the same color matches anywhere: CBS cites ads that wouldn't match between Chicago and New York.",
      lesson: "The precedent for keeping palettes consistent, and Palit's foil: a number, and no story.",
      sources: [{ label: "CBS News", url: "https://www.cbsnews.com/news/taming-colors-chaos/", date: "2005" }, { label: "Encyclopedia.com", url: "https://encyclopedia.com/books/politics-and-business-magazines/pantone-inc" }]
    },
    {
      theme: "Colors kept with their story",
      title: "Cooper Hewitt's collection, by color (2013)",
      text: "Each object got up to five colors from its photo; an object shows its palette, and a color opens every object that shares it.",
      lesson: "Links run both ways, between a color and where it came from.",
      sources: [{ label: "Cooper Hewitt Labs", url: "https://labs.cooperhewitt.org/2013/giv-do/", date: "2013" }]
    },
    {
      theme: "Colors kept with their story",
      title: "Herbarium labels",
      text: "One short label under each specimen: name, collector, number, date and place. Collector and number identify it for good.",
      lesson: "A model for one label line under every color.",
      sources: [{ label: "University of Arizona Herbarium", url: "https://herbarium.arizona.edu/labels" }]
    }
  ],

  uxr: {
    screener: [
      "Are you a product, visual or brand designer, or in another creative role in tech?",
      "When did you last start a palette, a design system or a brand?",
      "In the last week, did you save or copy a color from something you saw?",
      "Where do you keep visual references, if anywhere?"
    ],
    mix: "Aim for 5 product, visual or brand designers in tech, ideally 2 or 3 in the middle of an ideation phase. Recruit through design school lists, design Slack or Discord groups, and Are.na channels.",
    guide: [
      {
        part: "Warm-up",
        minutes: 2,
        questions: ["What do you make, and what's open on your screen on a normal day?"]
      },
      {
        part: "The last palette",
        minutes: 4,
        questions: [
          "Think of the last palette, design system or brand you started. Where did the first colors come from?",
          "What happened to the colors you didn't use?",
          "Have you ever gone back to a color from an earlier project? How did you find it?"
        ]
      },
      {
        part: "The last color",
        minutes: 3,
        questions: [
          "Think of the last time you saw a color you wanted to keep. Where were you, and what did you do?",
          "Where is it now? Can you find it for me?",
          "Do you remember where it came from?",
          "Do you ever save a color on its own, or only inside an image?"
        ]
      },
      {
        part: "Collecting",
        minutes: 4,
        questions: [
          "Do you keep references anywhere? Show me.",
          "When did you last go back to them, and did you find what you wanted?",
          "Has a color or reference ever lost where it came from? What happened?",
          "Do you pay for anything to keep references today?"
        ]
      },
      {
        part: "Taste and AI",
        minutes: 3,
        questions: [
          "How do you feel about tools that name colors or suggest palettes for you?",
          "Which AI palette tools have you tried and dropped, and why?",
          "When do you trust your own eye over a tool?"
        ]
      },
      {
        part: "Context and privacy",
        minutes: 2,
        questions: [
          "Have you ever reused a saved color and found it looked wrong somewhere new?",
          "If a tool saved a small screenshot around every color you picked, would that be useful, creepy, or both?"
        ]
      },
      {
        part: "Close",
        minutes: 1,
        questions: ["What should I have asked you?", "Who else should we talk to?"]
      }
    ],
    tips: [
      "Ask what people did, not what they would do.",
      "Ask them to show you, not tell you.",
      "Let silences sit. People fill them with the good stuff.",
      "Ask permission before recording, and before quoting anyone in the video."
    ],
    survey: [
      "When you see a color you like, what do you usually do? (Screenshot · Copy the hex · Save it to a board · Nothing · Other)",
      "Could you find the last color you saved in under a minute? (Yes · No · I don't save colors)",
      "Do you remember where it came from? (Yes · Roughly · No)",
      "For a saved color, what matters more: the exact value, or where you found it? (The value · Where · Both)",
      "Would you want AI to name or suggest colors for you? (Yes · No · It depends)"
    ],
    synthesis: [
      "Within 10 minutes of each interview, write down 3 exact quotes, the behavior you saw, the need behind it, and one surprise.",
      "Tag each note with the audience candidate it fits.",
      "Score each person on three signals: they bring up losing a source without being asked, they go back to their saved references at least monthly, and they save colors on their own, not only inside images.",
      "After 5 interviews, cluster the notes. A need that comes up 3 or more times is real enough to build on, and the group that scores highest on all three signals is the audience."
    ]
  },

  interviews: [
    {"who": "A civil engineer, interviewed by Noah", "date": "2026-10-18", "notes": ["Noah's account, word for word: “I've just done a quick interview with a Civil Engineer, and she said that lots of teams who build slide decks, presentations, and projects all use separate color codes - an issue that could be solved if palit was involved. This is just an addition to the \"possibilities\" area, subjects and audiences who lay outside of our target audience, but may very well have a strong use for the product”", "Noah: “That may be a fun insight to explore - how our tool, although built for designers who are exploratory with color on the screen, can still benefit those who don't exactly fit into that box - engineers, general creatives, team leads”", "Her own words weren't written down, so this is one interview in Noah's summary: a signal to explore, not a finding.", "Outside the target audience (A23). It goes in the video's What's next, and into the possibilities: engineers, general creatives and team leads (entry 110)."]}
  ],

  personas: {
    status: "Not built yet",
    note: "Personas come from the interviews. Until then, the chosen audience and each candidate carry a persona hypothesis."
  },

  assumptions: [
    { a: "Chrome color extensions are poorly designed and often don't work.", status: "Noah's direction", check: "Try ColorZilla and two others, and screen-record the failures; that's also footage for the video" },
    { a: "Visual designers who rely on AI for color won't be won over, and that's fine: it's the opinion.", status: "Noah's direction", check: "Say it plainly in the video" },
    { a: "Designers in tech gather color from outside their tools during ideation, not only inside Figma.", status: "unverified", check: "Interviews: “the last palette”" },
    { a: "The collectors' archive habit and the eye-trainers' wish to see better show up in this audience too.", status: "unverified", check: "The three interview signals" },
    { a: "People who work visually notice colors they want to keep at least once a week.", status: "unverified", check: "Survey question 1 and the interviews" },
    { a: "Where a color came from matters to them later.", status: "unverified", check: "Interviews, first. Desk research found this pain for images and references, not yet for colors; it may be a latent need." },
    { a: "Most color pickers keep the value but not where it came from.", status: "supported", check: "Competitor research: no picker records the source app, title or URL. Pick, on Linux, keeps a screenshot." },
    { a: "The capture moment should be nearly invisible.", status: "Noah's direction", check: "Test T2" },
    { a: "With these judges, a sharp opinion that divides people beats broad appeal.", status: "supported", check: "SVSD brief: opinionated product, crit potential" },
    { a: "A non-functional prototype is fine if the video is compelling.", status: "supported", check: "SVSD brief: prototype expectations" },
    { a: "Judges will accept a product that refuses AI, even though the brief recommends AI.", status: "unverified", check: "Office hours on October 17 or 18; question Q10" },
    { a: "Teams outside design, like engineers building decks and project documents, keep separate color codes for the same work, and Palit could help them.", status: "one interview", check: "More interviews with engineers and team leads (entry 110)" },
    { a: "Mac-only is fine for this audience.", status: "unverified", time: true, check: "Interviews" },
    { a: "Friends are a fair stand-in for the audience in quick tests.", status: "unverified", time: true, check: "Say so in the video" }
  ]
};
