# v0 prototype (reference only)

These are the artboards from the Claude design canvas, copied as-is. They link to each other by these file names.

| File | Screen | What to read it for |
|------|--------|---------------------|
| `Main.dc.html` | 1 · Capture moment | The simulated desktop, menu bar icon, popover, loupe, ring pulse, toast. The JavaScript at the bottom holds the capture state machine and the 8-neighbor layout. |
| `Card.dc.html` | 2 · Capture card | Section order, copy, sizes. Static. |
| `Archive.dc.html` | 3 · Archive | Toolbar, sidebar, ribbon, Timeline and Spectrum views, inspector. The JavaScript at the bottom holds the filtering, grouping, hue sort and "Kept before" logic. |
| `canvas.json` | The canvas layout | Artboard sizes. |

The files use a small templating layer: `{{value}}` placeholders, `<sc-for>` for loops, `<sc-if>` for conditions. They need the canvas runtime and won't open in a browser on their own. To see them working, open the live canvas: https://claude.ai/artifact/B6hBpSpGPZenBxRx6iYZYY

The storefront and tea box on the capture screen are made-up scenes for the demo. The 28 archive entries are sample data, the same ones as in `../fixtures/sample-archive.json`.
