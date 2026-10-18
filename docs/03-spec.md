# Spec

This describes what the app does, based on the v0 prototype in `design/prototype/`. Where the spec and the prototype disagree, ask Noah. Items marked *(P#)* are proposals still waiting for his review (see `02-design-decisions.md`).

## 1. Capture

### Flow

1. The user presses the global hotkey, ⌥⇧C by default *(P1)*, or clicks **Steal a color** in the menu bar popover.
2. A loupe appears at the cursor. Version 1 uses the system `NSColorSampler`. The later custom loupe shows the color, a 3×3 neighbor preview, the hex value and the source *(P7)*.
3. Clicking keeps the color. Esc, or the sampler's own cancel, cancels.
4. When a color is kept:
   - A ring pulse plays at the click point, in the captured color *(P5)*. This needs the custom loupe; with `NSColorSampler`, skip it.
   - A toast drops in under the menu bar icon: a 44 pt swatch, "Kept · No. 028", the hex value, the source, and **Undo** and **Open card** buttons. It hides after about 4.5 s *(P5)*.
   - The menu bar icon's inner dot changes to the new color *(P2, P3)*.
5. **Undo** removes that capture. Undo is the only time a number can come back, because the capture never really existed. After the toast closes, numbers are final.
6. One capture per activation *(P4)*.

### What gets recorded

| Field | Source | Milestone |
|-------|--------|-----------|
| `number` | next sequential integer, never reused | M1 |
| `capturedAt` | now | M1 |
| `srgbHex` | the sampled color converted to sRGB, `#RRGGBB` | M1 |
| `displayP3` | the sampled color's components in Display P3 | M1 |
| `sampledColorSpace` | the name of the color space the sampler returned | M1 |
| `oklch` | L, C, h computed from sRGB | M1 |
| `sourceApp`, `sourceBundleID` | `NSWorkspace.shared.frontmostApplication` at the moment of capture, not after (the sampler can change focus) | M1 |
| `windowTitle` | `CGWindowListCopyWindowInfo` for the window under the cursor (needs Screen Recording permission) | M2 |
| `sourceURL` | browsers only, using the Accessibility API or AppleScript per browser (Automation permission); ask Noah which browsers | M2 |
| `neighbors` | 8 sRGB hex values sampled 12 pt out from the point, in the order NW, N, NE, W, E, SW, S, SE, taken from a small ScreenCaptureKit capture around the cursor | M2 |
| `cropPath` | an optional PNG of about 400×170 pt around the point, depending on open question 4 | M2 |
| `name` | user-entered only, never auto-filled *(P6)* | M4 |
| `note` | user-entered | M4 |
| `project` | optional relationship | M4 |

If permission is denied, skip the M2 fields and still keep the capture. Missing context is shown as "Not recorded", not hidden.

## 2. Menu bar

- **Icon:** an iris — a 14 pt ring with a 6 pt dot in the middle, filled with the latest capture's color *(P3)*.
- **Popover** (296 pt wide):
  - Header: "Archive" and "{n} colors kept".
  - A **Steal a color** button with the shortcut shown as keycaps. Its background is the latest capture's color, with the text color picked for contrast *(P2)*.
  - "Today": a row of today's swatches (30 pt, 7 pt corner radius).
  - Footer: "Open archive →" and "Stored on this Mac" *(P14)*.

## 3. Capture card

A panel about 440 pt wide that opens from the toast, the inspector or the archive. From top to bottom:

1. Header: "No. 028" (mono retired by A11; treatment open) and "Kept today at 2:22 PM".
2. A full-width swatch, 190 pt tall.
3. **Name:** a text field with the placeholder "Unnamed. Name it so you remember it."
4. **Values:** HEX, RGB and OKLCH, each with **Copy**. Then "Sampled in", with the color space and display.
5. **Where it came from:** the crop with a crosshair ring at the pick point, the source name, the URL or path (mono retired by A11), and the line "{type} · {weekday, Month d} · {time}".
6. **What surrounded it:** the 3×3 grid (84 pt), with the center cell outlined in white, plus up to 3 distinct neighbor colors labeled above, right and below. Caption: "Sampled 12 px out from the point you clicked."
7. **Reads as:** chips for temperature, value and chroma *(P8)*.
8. **You've kept this before:** up to 3 earlier captures within ΔE 7, each with a swatch, "No. 011 · Clay pot", the date and source, "Nearly identical" or "Close", and the ΔE. Then a summary line (draft copy, flag it for Noah): "Third time since August you've kept a red this close."
9. **Project** picker and an **Open in archive** button.

## 4. Archive window

A standard window, about 1280×820 by default.

- **Toolbar:** "Archive" and "{n} colors kept". A Timeline/Spectrum segmented control *(P10)*. A search field ("Search name, source, or hex") that matches number, hex, name (or "unnamed"), source, source type and project.
- **Sidebar** (220 pt) *(P12)*:
  - Library: All colors, Today, Unnamed.
  - Projects: each project's name with its latest color as a 10 pt dot, plus Unsorted.
  - Captured from: source types, derived from the bundle ID (browser, Figma, Photos, PDF viewers, Other).
  - Every item shows a count. The selected item has a light ink tint and semibold text.
- **Ribbon** *(P11)*: "Every color, in the order you kept it". A 40 pt strip with one band per capture, in order. Bands outside the current filter fade to 16% opacity. A 3 pt marker under the selected capture. Month labels sized to each month's count. Clicking a band selects that capture.
- **Timeline:** grouped by day, newest first. The header is "Today" or "Thursday, October 1", followed by "{n} colors from {sources}". Cards in an adaptive grid, at least 136 pt wide: a 96 pt swatch with a 10 pt corner radius, then "No. 028 · 2:22 PM" (mono retired by A11), the name (or "Unnamed" in secondary color), and the source.
- **Spectrum:** an adaptive grid of 68 pt square chips. Chromatic colors (C ≥ 0.03) are sorted by hue, then neutrals from light to dark.
- **Inspector** (300 pt): the selected capture's swatch, number and time, name, values, source (3×3 grid, type tag, source, project), Reads as, Kept before (click to select), and Open full card.
- **Selection:** a 2 pt white ring inside a 2 pt ink ring.
- **Empty filter result:** "Nothing in the archive matches that yet." and a Clear button.

## 5. Settings (minimal)

- Hotkey recorder.
- "Borrow the last color for the interface" (on or off) *(P2)*.
- "Save a small crop with each capture," depending on open question 4.
- Permissions status (Screen Recording, Automation) with buttons that open System Settings.
- Archive location, read-only, with "Show in Finder".

## 6. Non-goals for now

Sync, accounts, sharing, AI features, palette generation, Windows, and an iOS companion.
