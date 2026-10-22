# Palit: the case study material

Everything we made for Palit, and where it is, so the case study can be written from it after the competition and the mentors' critique (Noah, October 21: "just keep everything filed well in a good place, all the research, all of our steps"). Nothing has been moved or deleted to make this index: every path below is where the work already lives. The history is append-only, so the steps are in the order they happened.

## The project, in brief

Palit is Noah Oh and Daeun Chung's entry to the SVSD design competition, from the Cooper Union School of Art. The brief came on October 16, 2026, and asked for a product a specific group would love, centered on storytelling. The video was submitted on October 21.

The product is a quiet macOS menu bar tool. A hotkey picks a color from anything on screen and keeps it in an archive, with where it came from. It's for visual designers in the ideation phase. Its opinion: every color is found, never made, with no palette generation and no AI.

The deliverable was the film: 9:18, at 1080p and 60 fps, with Noah's and Daeun's voices.

## Where everything is

| What | Where |
|---|---|
| The SVSD brief, word for word, with Noah's notes | `docs/06-svsd-brief.md` |
| Naheel's workshop: how winning teams shaped their videos | `docs/07-naheel-workshop.md` |
| The product brief, spec and roadmap | `docs/01-brief.md`, `docs/03-spec.md`, `docs/04-roadmap.md` |
| Every decision Noah approved, with his reason | `docs/02-design-decisions.md` |
| Every step, in order: 290 entries, each with what changed and Noah's reason in his words | `design/history/data/decisions.js` (the dashboard's Plan page) |
| Noah's notes word for word, the north stars, the brief's questions, the to-do | `design/history/data/compass.js` |
| The research: 23 competitors, 67 pieces of evidence, 26 precedents, 3 audiences, 14 assumptions, the gaps and risks, and the interview kit | `design/history/data/research.js` (the Work page's research) |
| Tests and crit sessions | `design/history/data/testing.js`, `sessions.js` |
| Inspiration and references (the Are.na and Cosmos boards, the competitors) | `design/history/data/inspiration.js`, `design/references/` |
| Every screen and flow, oldest first, with the stills | `design/history/data/screens.js`, `design/history/shots/` |
| The design system | `design/system/` (open `index.html`), `docs/05-visual-foundations.md` |
| The explorations before the brief | `design/explorations/` (the archive window, flows, lo-fi round 2) |
| The workshops Noah ran, each with his picks | `design/workshop/`: `features.html`, `flow-workshop.html`, `look.html`, `story.html`, `v3.html`, `video.html`, `blocks.html` (with `blocks/rounds/`), `music.html`, `splash.html` |
| The film's script, timing and lines | `design/video/script.js`, read on the script page `design/video/index.html` |
| The film itself: the player, the charts and the reels | `design/video/player.html`, `viz.html`, `reels.js` |
| How the film moves | `docs/11-motion-kit.md` (rules 1 to 15, rounds one to three) |
| How it sounds: the research, the sound kit, the voice, the mix | `docs/12-sound-design.md`, `design/video/sound.js` |
| The audit of the charts against our design language | `docs/10-viz-audit.md` |
| The music shortlists | `docs/09-music-shortlist.md`, `design/workshop/music.html` |
| The voiceover: the script to record from, the guide, the takes | `design/video/voiceover.html`, `design/video/audio/voice/` (takes, cleaned lines, transcripts) |
| The logo and the brand | `design/brand/` (`palit-logo.svg`, `mark.svg`, `brand.js`) |
| The final cut | `design/video/footage/exports/palit-cut-20261021-1712.mp4` |
| The earlier cuts, for the before and after | `design/video/footage/exports/palit-cut-20261021-*.mp4` (0231 through 1626, the same day) |
| The filmed footage and how it was graded | `design/video/footage/` (its `README.md` lists every clip) |
| Figma, for Daeun: v1, v2 and v3, each with a "what changed" overview | https://www.figma.com/design/z2QGOPbNn4LZo7ieT0Gw3b/Palette-Ideation |
| The meeting notes with Daeun (private) | `docs/08-daeun-meeting.md` |
| The public dashboard | https://noahohstudio.github.io/Palit/ (repository noahohstudio/Palit) |

## The steps, in order

The entry numbers point into `decisions.js`, and each one opens on the dashboard's timeline (`#e<number>`). The dates are 2026.

1. **Before the brief (October 4 to 15).** A v0 prototype (`design/prototype/`), three rounds of Rivet explorations, and the foundations and flow workshops. All of it became reference once the brief arrived.
2. **The brief, from the ground up (October 16).**
   - The audience: visual designers in the ideation phase (A23).
   - The opinion: against letting AI explore and decide color (D6).
   - Naming: human-first (A24).
   - Sip is the main competitor (A25).
   - The look: a Mac-native shell with a raw, archival heart (A26).
3. **The design system and the first prototype (October 17 and 18).**
   - The system's six calls (A31 to A36).
   - The journey prototype (`design/journey/`, entry 58).
   - The feature workshop (A49 to A55): the desktop palette, no chip, Similar with place and day, a note on every color.
   - Deep dive 1 picked (entry 79).
   - Naheel's workshop notes shaped the video's split (entries 91 and 92).
4. **"Stagnant and boring" (October 18, entry 93).** Color filled 43% of the archive window, boxed into identical tiles. The look workshop chose the wall, today first, the specimen card and your name as the hero (entries 94 to 102), and prototype v2 was built from it (entry 105).
5. **The story workshop (entries 119 to 135).** v2's first view showed 2 of the 9 parts of a color's story, and Pinned was 11% color. The picks:
   - found, never made (A71);
   - days, each with its places (A72);
   - the zoom as the storytelling dial (A73);
   - search (A76).

   The opinion went into Noah's words (A70, entry 123), and a preview put the picks together (`design/next/`).
6. **"Too much is going on" (entry 156) and v3 (entries 157 to 171).** Days had grown to 29 controls and 61 words (the afternoon's v2 had 15 and 23). The v3 workshop took pieces away, and v3 came out at 16 controls and 23 words, with the bar in Palit's own look (A92 to A98). `design/v3/` is the final prototype.
7. **The film (October 19 to 21, entries 172 to 290).**
   - **Making it:** the script and the player, statements and data visualizations, the music, the reels of our real screens, the footage, and the logo Noah and Daeun made together (entry 222).
   - **Reviewing it:** three rounds of motion notes (the motion kit), and block-by-block workshops with a session per block.
   - **Finishing it:**
     - the voiceover, with its guide, cleaned and timed to the takes (entries 273 to 283, 289);
     - the subtitles in our hues (entry 284);
     - the mix and the sound effects (entry 285);
     - the splash as the wall (entries 286 to 288).
   - **Submitted:** entry 290.

## Numbers we measured, and where they come from

| Number | Where it comes from |
|---|---|
| Color filled 43% of the archive window before the look rework | Measured for the look workshop (entry 93) |
| v2's first view showed 2 of the 9 parts of a color's story; Pinned was 11% color | The story workshop's audit (entry 120) |
| Days: 15 controls and 23 words in the afternoon, 29 and 61 merged, 16 and 23 in v3 | Measured for the v3 workshop (entries 156 to 159) |
| 33 of 51 designers saved inspiration, yet distrusted poorly documented sources | Koch et al., DRS 2018 (`research.js`; the film's problem-1) |
| Only 2 of the 8 references on our own boards still credit where they came from | Traced on our boards (the film's problem-2) |
| Of the 11 color pickers among the 23 tools we reviewed, one keeps any trace of where a color came from | Our competitor review (`research.js`; the film's dive1-3) |
| Changing only the gray behind two colors changes how different they look by up to 8 times | Xin, Lam & Luo, Color Research & Application, 2004, across 38 gray pairs (`research.js`; the film's dive1-5) |
| 290 history entries: 185 decisions, 28 pivots, 18 explorations, 40 process steps, 10 questions, 8 rounds of feedback | `decisions.js`; 283 of them between the brief and the submission |
| The film: 9:18, 49 voiceover lines and 8 filmed ones, -16.5 LUFS | `script.js`, the final cut |

## The film's three deep dives

1. **A palette for a tool that collects color** (entry 79). The look from the ground up, Sip beside Palit's card, the surface question, v1 to v3, and what we cut.
2. **From day one to year four** (entry 176). Three personas, what we tried first for each, and v3 on each archive.
3. **Where the story lives** (entry 176). Memory drift, a designer friend's critique, the story workshop, and the zoom as the dial.

## What stays private, and why

`publish.sh` keeps these off the public site:
- `docs/08-daeun-meeting.md`: the meeting notes, Noah's call.
- `design/video/audio/`: the music, which we may use but not host, and the voices.
- `design/video/footage/`: the filmed footage, the grades and the exports.
- The full-size original photos: `design/v2/screens/sources/*-original.jpg`.
- The loops and stills that show the footage.
- The agent instructions.

Those files exist only on this Mac. **Keep a copy of the whole folder somewhere else** (an external drive or your own cloud), so the footage, the voices and the final cut survive. The public repository has everything else.

## How to make things again

- **The film:** `node design/video/export.mjs http://localhost:8790 --subs` (about 10 minutes; `--guide` makes the silent voiceover guide).
- **The voice:** `python3 -I design/video/audio/voice/lines.py`, then `sentences.py <transcribe binary>` (see `transcribe.swift`).
- **The voiceover PDFs:** `node design/video/voiceover-pdf.mjs http://localhost:8790`.
- **The workshop loops:** `node design/workshop/blocks/record.mjs http://localhost:8790 [block]`.
- **The dashboard's stills:** `python3 design/history/shots/video/capture.py http://localhost:8790`, then `node design/history/shots/video/previews.mjs http://localhost:8790`.
- **Publishing:** `sh publish.sh "What changed"`.

## When the critique comes

- **Keep it word for word.** Put each mentor's words, and who said them, in a new `docs/14-critique.md`. If it's long, put it in the dashboard's feedback too (`design/history/data/sessions.js`).
- **Link it.** Point each piece of critique at the entry it's about, so the case study can show what we'd change and why.

## A draft outline for the case study

This outline is Claude's draft, for Noah to rework after the critique. Each part points at the material above.

1. **The brief and the constraint.** Storytelling, a group who'd love it. See `docs/06`.
2. **Who it's for, and the opinion.** Visual designers in ideation; found, never made. See A23, D6, A70 and A71, and the research's audiences and evidence.
3. **The research.** The competitors, the evidence and precedents like Werner's Nomenclature and Pantone, and what we didn't say. See `research.js`.
4. **The design system.** A native shell and a raw, archival heart; pure white. See A26, A31 to A36, `design/system/`.
5. **Three rewrites.** Each starts with what we measured and where we landed:
   - stagnant, to the wall (entry 93);
   - the story, to the zoom as the dial (entry 120);
   - too much, to v3 (entry 156).
6. **The film as the product's story.** The split from Naheel's workshop, the three deep dives, the motion kit, and the voice and sound.
7. **How we worked.** A workshop for every big call, every reason in Noah's words, and parallel sessions per block. See the 290 entries.
8. **What the critique taught us.** After the competition, from `docs/14-critique.md`.
