# Palit

A quiet macOS menu bar tool for stealing colors from anything on screen and keeping them in an archive, along with where each one came from.

*Creative direction and UX: Noah. With Daeun.*

**The dashboard, online:** https://noahohstudio.github.io/Palit/

**Now:** the SVSD design competition: start from who it's for, then make a 7-minute video that's mostly about the process (deadline October 19, 2026). **Later:** the native Mac app.

## Where things are

- `CLAUDE.md` and `KICKOFF.md`: instructions for Claude Code, kept on Noah's Mac and not in this repository
- `docs/01-brief.md`: what this is and why
- `docs/02-design-decisions.md`: what's decided, what's proposed, what's open
- `design/history/index.html`: the Palit dashboard, the main page for the SVSD entry, in three pages: Plan (deadlines, to-do, north star, the timeline of decisions), Work (prototypes, every screen and flow, feedback, research) and Video (the story, deep dives, speaker chips, blocks). Open it in a browser
- `design/v2/index.html`: prototype v2, the new look on real pages and a real Mac wallpaper: Days, Collections and Spectrum
- `design/workshop/look.html`: the look and flow workshop that led to v2
- `design/workshop/features.html`: the feature workshop, with the open questions on the desktop palette, the chip, Similar and the surface. Copy your picks into chat
- `docs/06-svsd-brief.md`: Noah's notes from the SVSD competition brief
- `design/journey/index.html`: the prototype, the core journey on a Mac desktop, built from the design system. Press P in it to play the journey for recording (open it in a browser)
- `design/system/index.html`: the design system, from atoms to templates, with working capture and archive templates (open it in a browser). The color math in `design/system/color.js` is checked against the fixture by `node design/system/color.test.js`
- `docs/03-spec.md`: how it behaves
- `docs/04-roadmap.md`: the two phases and their milestones
- `design/tokens.json`: placeholder tokens, mirrored in Figma's variables
- `design/prototype/`: v0 prototype source (reference only)
- `design/fixtures/sample-archive.json`: 28 sample captures with the expected color math

## Links

- Figma: https://www.figma.com/design/z2QGOPbNn4LZo7ieT0Gw3b/Palette-Ideation
- v0 prototype canvas: https://claude.ai/artifact/B6hBpSpGPZenBxRx6iYZYY

## What to install

- **Now, for Phase 1:** Figma, plus the SF Pro and SF Mono fonts (developer.apple.com/fonts) and Apple's macOS design kit for Figma (developer.apple.com/design/resources).
- **For Claude Code:** see `KICKOFF.md`.
- **Later, for Phase 2:** Xcode from the Mac App Store, Homebrew (brew.sh), then `brew install xcodegen`.
