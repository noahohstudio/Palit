// Palit testing: quick tests with friends. Add results as they come in;
// never overwrite a result, add a new one.

window.PALIT = window.PALIT || {};
window.PALIT.testing = {
  updated: "2026-10-18",

  protocol: [
    "Five people is enough to see a pattern.",
    "Show, don't explain. Let people react before you say anything about the design.",
    "Swap the order of A and B between people, so the first one shown doesn't always win.",
    "Write down their exact words. The reason matters more than the vote.",
    "Ask permission before recording anyone or quoting them in the video."
  ],

  tests: [
    {
      id: "T1",
      title: "Archive look: Pantone chips or an Are.na-style grid",
      question: "Which visual language makes the archive feel like your own collection?",
      hypothesis: "Visual designers will feel more ownership with one of the two, and their reasons will tell us about them. Noah leans toward the raw, Are.na side (A26); this checks the lean.",
      variants: [
        { name: "A", text: "Pantone-style chip cards: the color fills the card, with the values set on the color." },
        { name: "B", text: "An Are.na-style grid: plain type, hard edges, each color one block in the grid." }
      ],
      method: "Show the same archive screen in both looks to 5 people from the audience. Ask which one they'd open again, and why. Then a 5-second test: what do they remember?",
      decide: "Pick the one most people choose for reasons that match the audience's values. If it splits evenly, the split may be the opinion.",
      needs: "Two mockups of the same screen, from the teammate's branding work.",
      feeds: "The look supports the flow",
      status: "planned",
      results: []
    },
    {
      id: "T2",
      title: "Capture: how little is enough?",
      question: "What's the least the capture moment can show and still feel like the color was kept?",
      hypothesis: "Noah chose a small loupe ring plus a chip under the menu bar (A34). This checks that it's noticed without interrupting, and tunes how long the chip stays.",
      variants: [
        { name: "A", text: "A tiny chip at the menu bar" },
        { name: "B", text: "A flash at the cursor, then nothing" },
        { name: "C", text: "Sound only" },
        { name: "D", text: "Nothing; the archive shows it later" }
      ],
      method: "Give people a short scripted task with a capture in the middle. Afterwards ask: was the color kept? Did anything interrupt you?",
      decide: "The least visible version that everyone still notices.",
      needs: "Four short animations of the same capture.",
      feeds: "Big rock A",
      status: "planned",
      results: []
    },
    {
      id: "T3",
      title: "Can you trace a color?",
      question: "Can someone tell where a color came from just by looking at the archive?",
      hypothesis: "A story page for one color answers it faster than a timeline.",
      variants: [
        { name: "A", text: "A timeline grouped by day" },
        { name: "B", text: "A story page for one color: source, neighbors, when it was kept" }
      ],
      method: "Point at a color and ask “where did this come from?” Time the answer, and note where people get stuck.",
      decide: "The view where people answer correctly fastest and want to keep exploring.",
      needs: "Two archive mockups with the same sample captures.",
      feeds: "Big rock B",
      status: "planned",
      results: []
    },
    {
      id: "T4",
      title: "Who names the color?",
      question: "Which kind of name makes a color feel like yours, and helps you remember it and where it came from?",
      hypothesis: "A name you write yourself is remembered best. A factual title from the source is a fair default. An AI name is forgotten fastest, and feels least like yours.",
      variants: [
        { name: "A", text: "An empty name field: “Unnamed. Name it so you remember it.”" },
        { name: "B", text: "A factual title from the source, which you can rename: “Blue from stripe.com”" },
        { name: "C", text: "An AI-generated name: “Midnight Harbor”" }
      ],
      method: "Show each person a few captured colors with one kind of name. The next day, ask what they remember about each color and where it came from.",
      decide: "The option people remember best, and call their own. It settles Q14.",
      needs: "Three versions of the same capture card.",
      feeds: "The opinion; big rock D",
      status: "dropped",
      results: [
        { date: "2026-10-16", text: "Not run. Noah chose human-first naming with placeholders from the source (entry 44). Could still check whether the placeholder helps people remember where a color came from." }
      ]
    },
    {
      id: "T5",
      title: "Rediscover: you start it, or Palit brings it",
      question: "Does looking back at older colors work better when you ask for it, or when Palit offers it?",
      hypothesis: "Noah leans toward you deciding (A42): “if they're a heavy user of palit, things may be cluttered quickly”. He wants to test it in the prototype, and decide then.",
      variants: [
        { name: "A", text: "A Rediscover button in the archive that you press" },
        { name: "B", text: "Palit brings one older color back on its own, for example when you open the archive" }
      ],
      method: "Give 5 people a few minutes in the prototype's archive with each version, in swapped order. Ask which one they'd keep on, and why, and whether either felt like clutter.",
      decide: "Keep the version people would leave on, for reasons that fit “train your eye”. If it's a split, Noah's lean wins.",
      needs: "Variant B in the prototype.",
      feeds: "Demo: the core journey",
      status: "planned",
      results: []
    }
  ]
};
