// The preview (entry 294): the dashboard's front page for Noah's design friends. Noah, October 27: "can we convert my
// dashboard into a preview with very minimal captions? I want to use it to show some of my design friends for some
// feedback". And: "Not the entire video either - just snippets of each section we have, excluding intro/outro", "No audio
// with the snippets - just the subtitles". The rest of the dashboard sits behind Admin, at the very top.
//
// Each snippet is cut from the submitted film (from and to are seconds into it, subtitles burned in) by
// design/history/preview/cut.mjs, silent. Each opens on its section's statement and stops just after a line ends, so no
// subtitle is cut off. The filmed sections (the walk-in, the intro, the outro) and the horizon's shot of the plaza stay out:
// the footage is off the public site. The captions are Claude's drafts, for Noah.
window.PALIT = window.PALIT || {};
window.PALIT.preview = {
  film: "palit-cut-20261021-1712.mp4",
  seconds: 558.2,
  line: "A quiet Mac tool that keeps every color you find, and where you found it.",
  // The end splash, which plays once on the way in and rests on the mark
  opener: { from: 550.15, to: 553.4 },
  snippets: [
    { id: "brief", title: "The brief", line: "Who it's for, and where the story lies.", from: 20.25, to: 39.45 },
    { id: "problem", title: "The problem", line: "How designers keep color today.", from: 40.05, to: 67.25 },
    { id: "people", title: "Who it's for", line: "And who it isn't for.", from: 97.45, to: 126.15 },
    { id: "demo", title: "The demo", line: "Keeping a color, naming it, and the day it joins.", from: 126.75, to: 168.55 },
    { id: "process", title: "How we worked", line: "Every step, traced.", from: 215.85, to: 236.15, poster: 19 },
    { id: "dive1", title: "Deep dive 1", line: "A palette for a tool that collects color.", from: 236.75, to: 268.95 },
    { id: "dive2", title: "Deep dive 2", line: "From day one to year four.", from: 346.05, to: 384.75 },
    { id: "dive3", title: "Deep dive 3", line: "Where the story lives.", from: 438.65, to: 461.15 },
    { id: "horizon", title: "On the horizon", line: "What could come next.", from: 504.25, to: 518.65 }
  ]
};
