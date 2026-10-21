// The film's sound effects (October 21, entry 285): what each moment sounds like, read by the player (to play them) and by
// export.mjs (to mix them in). The rules are docs/12-sound-design.md's sound kit: small, tactile, and only where the eye
// already is. Every file is in audio/sfx/ (off the public site), each peaking at -3 dBFS (the ambiences at -1), so a sound's
// level is set here, in dB. at is where in the file the sound lands on its moment (its peak), so a whoosh peaks on the
// camera's fastest frame and a riser on the snap.
window.PALIT_SOUND = {
  // Moments the picture reports as it plays: v3's cursor pressing (click), a key coming up (key) and a color kept (keep, v3's
  // own Wood, rebuilt in audio/sfx/keep/wood.py); viz.html's cursor pressing (click); the camera's big moves (whoosh) and a
  // section leaving on its slide up (leave), from the player
  kinds: {
    click: { file: "click/mouse-click-close-mixkit-1113.wav", db: -18, at: 0.13 },
    key: { file: "keys/single-key-press-in-a-laptop-mixkit-2541.wav", db: -18, at: 0.02 },
    keep: { file: "keep/wood.wav", db: -12, at: 0 },
    whoosh: { file: "whoosh/air-woosh-mixkit-1489.wav", db: -22, at: 0.65 },
    leave: { file: "whoosh/short-transition-sweep-mixkit-175.wav", db: -24, at: 0.31 },
    // the desktop palette (the chip) bumping as a kept color lands in it, and the menu bar's mark bumping as it takes the color
    // (Noah, October 21: "The bumps for the palette chip and the icon at the top should have a subtle sound"; entry 288)
    chip: { file: "ui-kenney/drop_001.wav", db: -22, at: 0 },
    mark: { file: "ui-kenney/pluck_001.wav", db: -23, at: 0 }
  },
  // The one reveal (rule 4): a riser into the cards snapping together, and a soft hit on the snap, at both splashes. snap is
  // the snap's time into the section. The splash is the wall now (Noah's pick, entry 287): the archive's wall rises (0 to 0.9 s),
  // Noah's red and Daeun's turquoise step out of it (1.1), travel (from 1.41) and lock into the mark at 2.0 s, on the house
  // track's beat. from skips the riser's first half second, so it builds from 0.32 s, under the wall, to the lock
  reveal: { sections: ["splash", "splash-end"], snap: 2.0,
    riser: { file: "riser/cinematic-trailer-riser-mixkit-790.wav", db: -18, at: 2.18, from: 0.5 },
    hit: { file: "hit/movie-whoosh-impact-presentation-mixkit-2903.wav", db: -14, at: 0.87 } },
  // The room, only where we are (rule 5): the walk-in's plaza, the brass doors and the stairs, and a little room tone under
  // the sofa takes, so the cleaned voice doesn't sound cut out of the air. from and to are times into the section ("end" is
  // its end); fade is each end's fade
  beds: [
    { section: "opening", from: 0, to: 1.45, file: "ambience/urban-square-atmosphere-mixkit-346.wav", db: -26, fade: 0.3 },
    { section: "opening", from: 1.3, to: 2.55, file: "ambience/street-ambience-with-walking-people-mixkit-375.wav", db: -28, fade: 0.15 },
    { section: "opening", from: 2.4, to: 4.4, file: "ambience/walking-big-crowd-indoor-mixkit-356.wav", db: -29, fade: 0.25 },
    { section: "intro", from: 0, to: "end", file: "ambience/office-ambience-mixkit-447.wav", db: -40, fade: 0.6 },
    { section: "outro", from: 0, to: "end", file: "ambience/office-ambience-mixkit-447.wav", db: -40, fade: 0.6 },
    // A steady room tone under the voiceover, from the splash to the end of the horizon, so a cleaned voice's pauses aren't dead
    // air (Noah, October 21: "Maybe kind of static noise ... could help with that. Potentially just to ease that"; entry 288).
    // ambience/room-tone.wav is a minute of soft pink noise, 70 Hz to 6.5 kHz, at -30 dBFS, going round (loop) under the span
    { span: ["splash", "horizon"], file: "ambience/room-tone.wav", db: -28, fade: 1.5, loop: true, skip: 0 }
  ],
  // One-off sounds at a moment of a section
  cues: [
    { section: "opening", at: 1.38, file: "foley/old-church-door-open-mixkit-193.wav", db: -24 }   // the brass doors
  ]
};
