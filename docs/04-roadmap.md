# Roadmap

## Phase 1: Visual language in Figma (now, Noah leads)

Noah designs the look in the Palette Ideation Figma file before any app code exists. This phase decides:

- the name and the menu bar icon
- the color, type, spacing and radius tokens, replacing the placeholders
- whether to use Liquid Glass (the current macOS material) or stay solid; light and dark appearance
- how capture feels: the loupe, the confirmation and the toast, including motion and possibly sound
- the archive's visual system: swatch shapes, the ribbon, Timeline and Spectrum, the inspector and the card

**Claude Code's role in Phase 1:** only on Noah's request. That can mean:

- building or iterating frames and variants in Figma through the Figma MCP
- auditing contrast
- keeping `design/tokens.json` in sync with the Figma variables
- logging his decisions in `02-design-decisions.md`

**Phase 1 is done when** Noah signs off on the tokens and the key screens. Mark it in `02-design-decisions.md`, sync `tokens.json`, then start Phase 2.

## Phase 2: Build the macOS app

Work one milestone at a time. Each one ends with a build Noah can run, a short demo note, and his review before the next one starts.

## M0: Project setup

- Write an XcodeGen `project.yml` for the macOS 14+ app target and a test target. Generate the project and commit `project.yml`.
- Set `LSUIElement = YES` and add a `MenuBarExtra` that shows the iris icon with a placeholder dot.
- Set up a SwiftData container in Application Support.
- In DEBUG builds only, add a menu item that imports `design/fixtures/sample-archive.json`.
- Add a color math module with unit tests. Check OKLCH, descriptors and ΔE against every entry in the fixture.

**Done when:** the app runs with no Dock icon, the menu bar icon shows, and the color math tests pass against the fixture.

## M1: Capture core

- Global hotkey with KeyboardShortcuts. Default ⌥⇧C, with a recorder in Settings.
- `NSColorSampler` picking. Record the number, time, sRGB hex, Display P3 values, color space, OKLCH, and the frontmost app at the moment of capture.
- Toast with Undo and Open card. The menu bar dot updates.
- The popover: count, Steal a color, Today's swatches, Open archive, and "Stored on this Mac".

**Done when:** pressing ⌥⇧C over any app and clicking keeps the color with its app and time in under a second, and Undo works.
**Ask Noah:** how the toast moves and how long it stays; whether captures make a sound.

## M2: Context

- Screen Recording permission, asked for only the first time context is needed, with a one-line reason.
- The 8 neighbors and the optional crop, from a small ScreenCaptureKit capture around the cursor.
- The window title from the window under the cursor.
- The browser URL. **Ask Noah which browsers matter**, then add them one at a time.
- A custom loupe that replaces `NSColorSampler`, with the neighbor preview and source label from the prototype. Only start this once the basics are solid.

**Done when:** a capture from Safari or Chrome shows the page title and URL, the 3×3 neighbors and the crop, and denying permission still keeps the color.

## M3: Archive window

- Toolbar, sidebar, ribbon, Timeline, Spectrum, search and inspector, as described in `03-spec.md` section 4.
- Kept before (within ΔE 7) and the Reads as descriptors.
- It has to stay fast with 5,000 or more captures, so do the work lazily and cache the OKLab values.

**Done when:** with the fixture loaded, the archive matches the prototype's layout and behavior, and every number agrees with the fixture.

## M4: Capture card, naming and projects

- The capture card panel (`03-spec.md` section 3), naming, notes, the project picker, and creating or renaming projects.

## M5: Identity polish (Noah leads)

- Bring anything from Phase 1 that isn't in the app yet into code: the app icon, dark mode details, motion and sound.
- A final pass to match the Figma screens pixel for pixel.

## Later, unordered

- **Guess mode:** before the reveal, guess whether the color is warmer or cooler and lighter or darker than your last capture.
- **Palettes:** gather captures into a set and export it (ASE, CSS variables, JSON, Figma).
- **Year in color:** a view or export of everything you kept, by month.
- **Opt-in iCloud sync.**
- **Multi-capture:** hold a modifier to keep picking.
