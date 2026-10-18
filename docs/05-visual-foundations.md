# Visual foundations

Status: **research done. Noah's working picks are logged as W1–W10 in `02-design-decisions.md`.** Under A9, every part of the system below is decided on its own before any screens are made. Each section has options and a recommendation, and Noah decides. Approved choices move to `02-design-decisions.md`, then to Figma variables and `design/tokens.json`.

Rules already approved: no all caps (A10), no mono fonts (A11), no unnecessary serif italics (A12).

## 1. What Wispr Flow and Granola have in common

Both are tools you hardly look at. Wispr Flow is a small bar at the bottom of the screen, and you mostly use it from a hotkey. Granola is a notepad that does its work in the background. Their product UIs are much plainer than their marketing sites, and the product UI is the part to learn from.

| Pattern | Wispr Flow | Granola | What it means for Palette |
|---|---|---|---|
| **One working sans in the product** | Figtree. EB Garamond appears only in marketing headlines. | Melange Grotesk. The Quadrant slab serif appears only in marketing display. | The product has one typeface. A serif is a marketing choice, not an interface one. |
| **Paper, not white** | Canvas "Lumen" `#FFFFEB` | Canvas `#F7F7F2`, raised tiles `#FFFFFF`, inverse ink `#FCFCF8` | Warmth makes them approachable. *For Palette this is a risk: see 2.1.* |
| **Ink is near-black, never pure black** | `#1A1A1A` | `#292929`, secondary `#72726E`, tertiary `#ACADA8` | Three steps of ink carry the hierarchy. |
| **Even the neutrals carry a tint** | Light alphas are a cream tint (`#FFFFEB` at 5–90%) | Hairlines and fills are olive-tinted alphas (`#47432A33`, `#625A220F`) | Neutrals are designed too. Whether they're truly neutral is a decision. |
| **One accent, used sparingly** | "Restrained, but bold when needed." Green on calls to action. | Olive `#5B6F00` only on calls to action. A yellow highlighter, at most once per sentence. | Color is scarce on purpose, so it means something. |
| **Hierarchy comes from ink tone, not decoration** | n/a | AI-written text is gray and your own text is black. Editing AI text turns it black. | Change the tone before changing size, weight or adding boxes. |
| **Soft geometry** | "Gentle curves, generous spacing, soft corners" | 8 px base radius, pill-shaped calls to action | Rounded, but not bubbly. |
| **A small presence** | Flow Bar: a small pill at the bottom center that stays put. Listening shows simple white level bars. | A menu bar icon. While recording, a pill floats at the screen edge when you leave the app. | The live state is one small object. |
| **No spinners. The result is the confirmation.** | A short ping on start. The pasted text is the success state. | Summaries appear quietly, with no modal. | A capture appearing in the archive is the feedback. |
| **Match complexity to attention** | "Zero UI": it lives inside other apps. | Stephenson: guard the core surface, hide advanced features instead of removing them. | The capture moment is nearly empty. The archive can carry more. |
| **Plain, calm copy** | "Flow uses this to insert spoken words into other apps." | "Something went wrong, please try again." No tours. | This already matches our copy rules. |

**Where Palette goes stricter than both:** both marketing sites use serif display type, and Granola's code ships a mono font variable. We use no mono at all, and no serif anywhere unless it earns its place.

## 2. Decisions to make

### 2.1 Canvas temperature *(the most important one for a color tool)*

A warm surround shifts how colors read: simultaneous contrast makes every swatch on cream look slightly cooler. Granola's paper warmth costs nothing in a notes app. In a tool for training your eye, it biases the very thing you're judging.

- **A. True neutral everywhere.** OKLCH chroma 0, for example a `#F6F6F6` canvas with `#FFFFFF` wells. This is the most honest for judging color. The risk is that it feels clinical.
- **B. Whisper-warm everywhere, like Granola.** For example `#F7F7F2`. Approachable, but it tints every judgment.
- **C. Warm chrome, neutral wells.** Warmth lives in the chrome (sidebar, popover, toolbar), and every surface that touches a captured color is true neutral. ← **Recommended.** It's approachable where you navigate and honest where you look.

### 2.2 Ink

- **A. Neutral near-black,** `#1D1D1F`, plus two grays. Close to macOS.
- **B. Warm near-black,** like Granola's `#292929` / `#72726E` / `#ACADA8`.

Either way: three steps (primary, secondary, tertiary). Primary and secondary are at least 4.5:1 on every surface they sit on. Tertiary is for non-text use only, unless it passes. ← **Recommended: A,** to match 2.1 C. Warmth stays in the chrome and out of the ink.

### 2.3 Accent

- **A. The last capture is the accent (P2).** The system has no fixed brand color.
- **B. A fixed brand accent,** used only for the primary action, as Granola uses olive.
- **C. No accent.** Ink is the action color, and captured colors are the only color in the interface. ← **Recommended.** This is A2 at its purest: the archive carries the identity. P2 could still sit on top as a setting.

### 2.4 Typeface

- **A. SF Pro only.** Native, accessible, optically sized, no licensing. ← **Recommended.**
- **B. SF Pro, plus SF Pro Rounded for numbers and titles.** Softer and more approachable, closer to Wispr's tone, with no licensing.
- **C. A licensed humanist grotesk** (in the spirit of Figtree or Melange). More character and distinction, but less native, and it has to be bundled and licensed.

### 2.5 Values and numbers without mono

- Tabular figures (SF Pro's `monospacedDigit()`) keep columns of values aligned without a mono face. ← **Recommended** for HEX, RGB, OKLCH and capture numbers.
- **Hex case:** `#c4552d` or `#C4552D`. Lowercase sits better with A10. Uppercase is the convention in Figma and the system picker. *Noah to pick.*
- **Number format:** keep "No. 028" (CLAUDE.md), or reconsider. *Flag only.*

### 2.6 Type scale and weights

Draft: four sizes, two weights.

| Role | Size | Weight | Replaces |
|---|---|---|---|
| Caption | 11 | Regular | number, caption |
| Body | 13 | Regular / Medium | body, bodyStrong, **section label** (now sentence case, 13 Medium, secondary ink) |
| Title | 15 | Medium | group title |
| Display | 22 | Medium | inspector title, card number |

Semibold and bold aren't used. Emphasis comes from ink tone first (1, Granola).

### 2.7 Shape

- Continuous ("squircle") corners everywhere, as macOS draws them.
- Three radii instead of six: **small 6** (chips, small swatches), **medium 10** (controls, swatches), **large 14** (panels, cards). Pill only for the capture toast. *Values are a draft.*
- Swatch shape is open: rounded rectangle (current), circle, or square.

### 2.8 Spacing

A strict 4 pt grid with fewer steps: **4, 8, 12, 16, 24, 32.** This drops 6, 10, 14, 20 and 28 from v0. Generous space around swatches, tight space within groups.

### 2.9 Material and elevation *(open question 6)*

Liquid Glass picks up whatever is behind it, which is bad wherever color is judged.

- **A. Solid everywhere,** with hairlines and almost no shadow.
- **B. System material for system-owned chrome** (the menu bar popover and the toast), solid for the archive and card. ← **Recommended.**
- **C. Liquid Glass throughout.**

### 2.10 Motion

- Restrained, in the spirit of Wispr's "slow fades." Three durations (draft): **120 ms** (hover, press), **200 ms** (appear, disappear), **360 ms** (the capture pulse). Ease-out only.
- No spinners. A new capture arriving in the archive is the confirmation.
- Respect Reduce Motion: replace movement with fades.

### 2.11 Sound *(open question 7)*

- **A. Silent.**
- **B. One soft capture sound, off by default.**
- **C. One soft capture sound, on by default,** like Wispr's start ping.

### 2.12 Iconography

SF Symbols only, at one weight that matches body text. The menu bar icon is the iris (P3), still to be reviewed.

### 2.13 Dark mode

Designed alongside light from the start, not afterward. The same rules apply, including truly neutral wells.

## 3. What this replaces in v0

- `tokens.json`: `sectionLabel` (uppercase, tracked), `type.families.mono`, the `value` and `number` styles, six radii, ten spacing steps. These stay until the Figma variables change, then get updated together.
- The v0 prototype and the four Rivet sketches in `design/explorations/archive-window/` came before A8–A12. Use them for layout only, not for look.

## Sources

- [Wispr Flow rebrand](https://wisprflow.ai/rebrand), with tokens taken from the live CSS at wisprflow.ai
- [Wispr Flow help docs](https://docs.wisprflow.ai/articles/5096240724-navigating-the-wispr-flow-app-desktop-ios-and-android)
- [Wispr Flow UX reference (third-party)](https://cdn.jsdelivr.net/npm/@agent-native/core@0.124.6/corpus/templates/clips/desktop/design-refs/wispr-ux.md)
- [Meet the new look Granola](https://granola.ai/blog/a-new-look-for-granola), with tokens taken from the live CSS at granola.ai
- [Granola design system summary](https://www.shadcn.io/design/granola)
- [Granola UX reference (third-party)](https://cdn.jsdelivr.net/npm/@agent-native/core@0.124.6/corpus/templates/clips/desktop/design-refs/granola-ux.md)
- [Calm AI for crazy days: Sam Stephenson](https://stationlm.com/analysis/caea4701-0804-42ff-8c59-e09d69ac6ed9)
- [Ragged Edge's Granola rebrand, Design Week](https://www.designweek.co.uk/ragged-edge-rejects-tech-slop-with-human-centric-granola-rebrand/)
