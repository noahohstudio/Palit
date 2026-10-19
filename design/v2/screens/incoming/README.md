# Screenshots for the Pinterest and Cosmos desks

Drop two screenshots here, taken in Safari while you're signed in:

- `pinterest.png`: a Pinterest board you'd really pull color from, or your home feed
- `cosmos.png`: a Cosmos collection, your palit ideation one or any other

How: open the page in Safari, press ⌘⇧4 and drag over the page itself, leaving out Safari's toolbar. Any Retina screenshot is big enough, and PNG or JPEG both work.

Then a Claude session runs `node design/v2/screens/compose/compose.mjs build` from the project folder. It draws both desks and adds them to screens.js, after the others. Give it the board's or collection's name and address, so a pick there names them.

Whatever is in this folder goes public with `publish.sh` unless the folder is left out of it.
