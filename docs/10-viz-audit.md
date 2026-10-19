# The video's charts against Palit's design language: an audit

For Noah's review (October 19). Noah, word for word: "I want to revisit some of the data viz to make it more within our design language."

This is an agent's read-only audit of `design/video/viz.html` against v3 and the design system (CLAUDE.md, `design/system/`, A31–A36, A65, A78, A92, A97, A98, A108). Every proposal is a draft. Nothing in the look has changed because of it. The factual errors it found are fixed, and they're listed at the end.

The line numbers are from viz.html as saved at 10:31 on October 19. They move as the file changes.

## How it was checked

- Every scene was rendered at 0.1-second steps to find anything below y 880 or outside the 160 to 1760 margins.
- The crocoite desk was sampled to check the hyacinth red (#d14808 is the seed: the desk's pixels at 819, 452).
- decisions.js was counted by `whyStatus`.
- v3's numbering was recomputed.

The player shows v3 at 1.2 times, not 1.333: its 1440 by 900 becomes 1728 by 1080, starting at x 96. So v3's 11, 13, 17, 26 and 50 appear on screen as 13, 16, 20, 31 and 60.

## The biggest gaps

1. **The motion is springy, not v3's.**
   - Every entrance overshoots by about 10%, takes 0.45 to 0.6 seconds, and grows from 60% scale or rises 16 to 40 pixels.
   - Exits are a linear 0.35 seconds, and the numbers count up.
   - v3 uses 240 ms on one ease, cubic-bezier(.2, .8, .2, 1), with fades instead of movement (A62, A97). Noah said in entry 198 that the fade-ins feel "a little bit too fluid, almost."
2. **Nine type sizes, not one scale.**
   - The sizes are 17, 20, 22, 28, 44, 60, 72, 104 and 176, with five letter-spacings.
   - The "Then we cut" chart says v3 went from 8 type sizes to 4, while the film's own charts use 9.
3. **Captured colors are used as interface codes.** Examples: a category legend in How we worked, status colors on bars, checkbox fills, a colored needle and a colored underline. v3 keeps color for the colors and ink for everything else; a statement may put one word in one of our colors (A108).
4. **Dashboard containers and template charts.** Floating cards with drop shadows, gray tiles, a speedometer dial, a waffle chart with a legend, a column of big counting numbers, round dots. The heart is square, ruled and without shadows (A31, A32, A65).
5. **Things that would look wrong next to v3's window.** The drawn windows have a title in the bar, which v3's bar doesn't.

## A type scale to map onto (the factor is Noah's call)

| v3 step | Tracking and leading | Times 2.56 | Times 2 | Where the charts are now |
|---|---|---|---|---|
| 50 | −0.045em, 1 | 128 | 100 | 104, and the splash's 176 |
| 26 | −0.02em, 1.1 | 67 | 52 | 72, and the brief's 60 |
| 17 | −0.02em, 1.2 | 44 | 34 | 44 |
| 13 | −0.01em, 1.3 | 33 | 26 | 28 |
| 11 | 0, 1.35, gray | 28 | 22 | 22, 20 and 17 |

The agent leans to 2.56: the statements' 128 and the charts' 44 are already on it, so the statements, the splash and the charts would share one scale. With 2, the statements come down to 100.

## Proposals, scene by scene

Each is marked small (a value change) or bigger (a redraw).

### Everywhere

- **Colors:** hard-coded colors become the system's tokens: ink, gray, paper and the soft rule. Gray text at #c7c7cc (1.7:1) and #8e8e93 (3.2:1) becomes the one gray (5.3:1). Small.
- **Cards:** text cards lose their drop shadow and get a 1px soft rule, like the design system's own blocks. v3 keeps shadows for windows and for things you pick up. Small.
- **Drawn windows:** they get v3's bar (56px, no title, Days, Palettes and Spectrum centered), or the real v3 shows instead. Small, or bigger for v3 itself.
- **Motion:** pop and fade become a 240 ms opacity fade on v3's ease, with no scale and no rise. Longer durations stay only where the motion is the data (bars, the color drift), on the same ease. The player's statements change with them. `?motion=snap` is the closest today and could be tuned to exactly v3's motion. Small.
- **The left edge:** sources nudged to 162, 1002 and 1242 go back to 160, 1000 and 1240. The other second-column edges vary; open. Small.
- **Emphasis:** three treatments are used: an ink underline, a colored underline and a colored word. "ownership" becomes a colored word (A108); A83 dropped colored underlines. Whether "storytelling" keeps its ink underline is Noah's call. Small.

### By scene

- **Splash:** the name moves onto the scale. The mark and the name fade in instead of popping. The mark's seven hard color cuts become a few cross-fades, like v3's menu bar (how many is open). Small.
- **The brief:** the lines move onto the scale, and the answer cards lose their shadows. Keep the word-by-word reveal, which is Noah's ask. Small.
- **The problem:**
  - The 51 round dots become squares.
  - The references' swatches are no longer dimmed with a filter; the labels carry linked and unlinked.
  - The colored underline becomes a colored word.
  - All small.
- **Who it's for:**
  - The cards lose their shadows.
  - Found colors land the way v3 lands one: a 240 ms fade and the ring.
  - "You have to earn it" takes the statement's form.
  - The "Generate" pill and the generated palette are foils; keep them (Noah's call).
  - All small.
- **How we worked:**
  - The squares are ink with no legend, or one kind in one color (open).
  - "Oct 16" is written "October 16", as v3 writes dates.
  - The counts show at their value with a fade, as a column or one quiet line like v3's count (open).
  - The numbers come from research.js instead of being typed in.
  - All small.
- **Deep dive 1:**
  - "HEX" is written "Hex".
  - The drawn card uses v3's rows, or becomes a still of v3's card.
  - The pickers' gray tiles become a ruled grid, with v3's selection ring.
  - The draining blue, if it stands for Sip's, is sampled from a real Sip screen (open).
  - The "Then we cut" bars are ink; the numbers carry the change.
  - Small.
- **Longtime:** the columns grow on v3's ease instead of overshooting their value. Small.
- **Deep dive 3:**
  - The smooth gradient of made-up greens becomes discrete squares on rules. Bigger.
  - The audit's checkbox fills are ink.
  - The zoom is drawn as a speedometer. It becomes v3's own − and +, with the stop's name, or the four stops as words with the current one underlined in ink. Bigger.
  - The redrawn Days becomes v3's real Days at its four stops. Bigger.
  - The trail becomes v3's trail, the steps in gray and the current color in ink. Small.
- **On the horizon:**
  - The ideas fade in instead of rising.
  - "reads, never makes" is capitalized.
  - The Palit strip becomes v3's slim strips.
  - "You go out and find every color" takes the statement's form (centering is open).
  - Small.
- **Credits:** at times 2.56 the research column won't fit above 880; at times 2 it does. Open.

## What already fits, and should stay

- Pure white, ink and the one gray, almost everywhere.
- SF Pro at weight 400, with no bold, serif or mono (A30, A11, A78), and tabular figures on counted numbers (A35).
- Sentence case and plain copy.
- Square swatches; only windows are rounded (A31).
- Every color in the heart is a found color.
- The longtime chart is the most Palit-native: the colors are the bars.
- The trios match v3's study (A74), and the grounds use the research's real grays.
- The one 160 edge matches the statements, and sources sit quietly under each claim.
- Both people are labeled as hypotheses, and Noah's reason is still a placeholder.
- The foils are deliberately un-Palit.
- The horizon is one ink rule and one found square, and the zoom's stop names match v3 exactly.

## Factual errors it found, fixed on October 19

These were errors, not design calls, so Claude fixed them right away:

- "decisions, each with its reason" wasn't true: of the 197 entries since October 16, 19 have no reason and 13 have only an agent's. The label now reads "decisions, logged as we made them". Noah's own line on the script page still says "with the reasoning for each"; that's his to change.
- The brief rendered `theme of “storytelling.””` because outer quotes wrapped the brief's own. The lines now match docs/06 exactly.
- Deep dive 3 numbered colors the way sample.js does (Plum label No. 027, where v3 has No. 099), and three catalogue labels sat beside the wrong swatches.
- Five things crossed y 880: the audit note (to 899), the diary's fourth row (to 926), the trail (to 887), and "earn" and two source lines during their entrances.
