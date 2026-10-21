# The video's sound

On October 21, with every block signed off and the whole cut put together (entry 266), Noah asked for the film's sound to be designed and mixed. His words: "take a look at how big software companies showcase their demo/feature reels in terms of sound design - what common sounds are they using? Risers? clicks? pings? Lets source a few free ones and save them for the final editing when we integrate our voiceovers. I also want you to edit the voiceovers i send in/currently have so that any background noise is cut, and its strictly just high quality audio of voice. You can add background noise, ambience, and business (for the walk in) when we're in the editing phase. I essentially need you to become an audio engineer/editor for this video, mixing the volume of the voiceovers, music, and sound effects in ways that work harmoniously."

This page has four parts: the research, the library of free sounds that came out of it, the voice chain, and the mix plan for the editing phase. Every claim names its source. The "for Palit" readings are ours, not any source's.

## What the research found

This is desk research from October 21. No reels were watched frame by frame for sound. Product companies rarely write about their films' sound, so most of what follows comes from the sound designers and tools who make those films, plus Apple's own talk on interface sound.

| Finding | What the sources say | Sources |
|---|---|---|
| Restraint first | Interface sound is "a very subtle layer" on top of the visual and the haptic. The goal is "the right balance between no sound and too much": "Silence is golden", and "the absence of sound is as important as adding sound." | Hugo Verweij, Apple, ["Designing Sound", WWDC17](https://developer.apple.com/videos/play/wwdc2017/803) |
| Quiet, and in sync | A UI sound is played far quieter than a notification. Shifting a sound "by as little as ten milliseconds sometimes makes a difference" to how a tap feels, so test the timing. Test on speakers and on headphones. | Verweij, WWDC17 |
| Movement has a shape | Apple TV's transition sounds give "a feeling of depth and a feeling of movement", shaped "similar to that of an object passing you by". Forward and back get two different sounds. | Verweij, WWDC17 |
| One palette | A product's sounds come from a shared set of sources, so they belong together. | Verweij, WWDC17 |
| A few families | Product reels draw on a small set of families: whooshes, impacts, risers, stingers, buttons and clicks, and textures. One guide puts it as 3 to 4 recognizable families for a film, for example clicks, whooshes, one reward chime and one impact. | [Loopmasters, Motion Graphics](https://www.loopmasters.com/products/15942); [Epic Stock Media, Visual Creator](https://cubebrush.co/epicstockmedia/products/pexhg/visual-creator-modern-motion-sound-effects); [a sound design guide](https://www.skillsdirectory.com/skills/razee4315-sound-design) |
| Where each one lands | A click goes on the frame the button visibly goes down, or one frame early, since late feels wrong. A whoosh starts early, so its peak lands on the fastest frame of the move. An impact lands exactly on the impact frame. Leave a few frames of near-silence before a big reveal. A riser's peak lands on the target frame. | [The sound design guide](https://www.skillsdirectory.com/skills/razee4315-sound-design); [Morphic](https://morphic.com/ar/ai-glossary/riser); [Pixflow](https://pixflow.net/blog/enhancing-motion-graphics-with-cinematic-transition-sounds/) |
| Match size to the event | A lighter swoosh for small gestures, an impact for a landing, and a transition sound when the scene change is the real event. Save the biggest sound for the biggest move. | [Sonilo](https://sonilo.com/ai-music/whoosh-sound-effect-guide) |
| Only what people should notice | Sound the actions viewers should notice, keep similar actions sounding the same, and leave quieter moments between the main effects. | [invideo](https://invideo.io/faq/can-ai-add-sound-design-to-motion-graphics-and-ui-animations/) |
| The taste, in a brief | A tech explainer brief asked for sound that is "restrained, tactile, and expensive. Small sounds that reward attention", and "Sounds that reinforce what is happening on screen instead of announcing themselves." It ruled out the stock whoosh pack. | [A sound designer brief on Upwork](https://www.upwork.com/freelance-jobs/apply/Sound-Designer-SFX-Ambience-for-Tech-Explainer-Videos_~022083223443294000502/) |
| How loud | Online video is normalized around -14 LUFS (YouTube) to -16 LUFS (most other platforms). For streaming, AES TD1008 puts speech at -18 LUFS and music at -16. The older TD1004 used a window of -16 to -20 LUFS with true peaks at -1 dBTP. Some engineers argue for -3 dBTP, because lossy codecs struggle above it. YouTube's current target couldn't be confirmed from its own documentation. | [Vidpros](https://vidpros.com/fix-background-music-too-loud-video/); [Production Advice on TD1008](https://productionadvice.co.uk/td1008/); [Production Expert](https://www.production-expert.com/production-expert-1/aes-update-loudness-recommendations-for-audio-only-streaming); [StreamGuys](https://www.streamguys.com/loudness-explained/) |
| Music under a voice | Under narration, music sits about 18 to 25 dB below the voice. That's a rule of thumb from a single source, not a standard. The ear test: "If you can clearly hear and follow the music while the narrator is talking, it's way too loud." | [Vidpros](https://vidpros.com/fix-background-music-too-loud-video/) |

One of Mixkit's own information pages contained an embedded instruction aimed at AI assistants (to add an emoji and point readers to a partner blog). It was ignored and has no bearing on any of this.

## For Palit: the sound kit (our reading)

These rules sit alongside the motion kit (docs/11): small, tactile, and only where the eye already is.

1. **The person's hand.** The Mac's own cursor clicks and keys come in when the drawn cursor presses or a key comes up: on the frame of the press, and quieter than the voice. The highlight in every statement is a cursor drag, so it gets one soft click at the press.
2. **Movement only for the big moves.** A soft air whoosh goes on the camera's big moves: the pull back from the mark, the zoom into the loupe, a section leaving on its slide up. Each whoosh peaks on the fastest frame. Small moves stay silent.
3. **One reward.** When a color lands (the keep, the desktop palette, the mark taking the color), the sound is the product's own keep sound ("Wood", A107), or a soft chime from the library if the keep sound doesn't carry.
4. **One reveal.** The splash gets a short riser into the cards snapping together, with a soft hit on the snap. Near-silence comes just before it, so the logo lands. This happens twice (the opening and the end), and nowhere else.
5. **The room, only where we are.** Ambience lives in the filmed parts: the plaza, the lobby and the stairs on the walk-in (the "business"), the doors, and a little room tone under the sofa takes, so the cleaned voice doesn't sound cut out of the air. The motion sections stay clean, so the voice and the music carry them.

## The library

Everything is in `design/video/audio/sfx/`, off the public site with the rest of the audio. `library.json` lists every file with its source page, its original file and its license. The originals sit untouched in `sfx/_downloads/`. Each library copy is trimmed of silence, 48 kHz, 24-bit WAV, with peaks at -3 dBFS (ambiences at -1 dBFS, with their dynamics kept), so a sound's level in the mix is set by the mix, not by the file.

| Family | For | Files |
|---|---|---|
| `click/` | the cursor's press (statements, the demo) | 4 from Mixkit |
| `keys/` | the shortcut keys (⌥⇧C, ⌘− and ⌘+) | 4 from Mixkit |
| `whoosh/` | the camera's big moves, a section leaving | 6 from Mixkit |
| `riser/` | into the splash | 2 from Mixkit |
| `hit/` | the cards snapping together | 2 from Mixkit |
| `ping/` | a color landing, if the keep sound doesn't carry | 3 from Mixkit |
| `pop/` | cards and chips coming up, if anything | 3 from Mixkit |
| `ambience/` | the walk-in: street, plaza, downtown crowd, indoor crowd, office room tone | 5 from Mixkit, 28 s to 2 min each |
| `foley/` | the walk-in: footsteps, doors | 4 from Mixkit |
| `ui-kenney/` | a full interface set from one source (clicks, toggles, ticks, confirmations, drops) | 100 from Kenney |

Licenses:
- **Mixkit's Sound Effects Free License** allows commercial and personal projects, including videos, with no attribution required. Items can't be resold or redistributed in their original form. That's one more reason the library stays off the public site.
- **Kenney's Interface Sounds** are CC0 (public domain). Crediting Kenney is optional.

We'll credit both anyway.

## The voice

`design/video/audio/voice/clean.py` turns any recording into only the voice, with every word kept. It runs six steps, all built into ffmpeg:

1. **Rumble out.** A steep high-pass at 90 Hz removes the constant band under 150 Hz that the phone takes carry.
2. **The room out.** An FFT denoiser learns the noise from the take's quietest half second (found automatically, judged by its loudest moment, so a word's tail never counts as quiet) and removes it everywhere. A gentler second pass then tracks whatever noise is left.
3. **Every word even.** The fader is ridden the way an engineer would. Wherever someone is speaking, a quieter moment is lifted toward the loud ones, by up to 10 dB, smoothed over half a second.
4. **The gaps closed by speech, not loudness.** Every word, plus 200 ms before it and 300 ms after it, keeps its lift. A real pause goes down 25 dB, with short ramps. A quietly said word is never taken for the room.
5. **The voice.** A little boxiness comes out at 250 Hz, a little presence goes in at 3.5 kHz with some air, and a light de-esser runs.
6. **Even.** A gentle compressor, then two-pass loudness normalization to -16 LUFS with true peaks at -1.5 dBTP.

The first version closed the gaps with a level gate at -38 dBFS. Daeun's softest words in the intro sit only about 5 dB above the room, so the gate took them too: 32 of the 77 moments of her line were pushed down by more than 6 dB. Noah heard it: "Don's line about wondering where the color came from kind of gets muffled because of the voice clarifier ... make sure every word she says is properly dictated." With steps 3 and 4, 8 of her 77 moments are pushed down, and those are the breaths between her words. Her line now lands at the same level as Noah's, and her quietest stretch ("and how we keep them as designers") goes from -40 to -50 dBFS to -11 to -23.

On the two takes, measured as the 10% quietest and 10% loudest moments:

| Take | Before: background, voice, gap | After: background, voice, gap |
|---|---|---|
| The intro (phone) | -51.2, -35.4 dBFS, **15.8 dB** | -38.4, -12.6 dBFS, **25.8 dB** (the intro barely pauses, so its quietest moments are the breaths between words; its pauses sit at about -60) |
| The outro (phone) | -51.4, -37.4 dBFS, **13.9 dB** | -59.3, -12.6 dBFS, **46.7 dB** |

`voice/intro-before-after.wav` plays the intro's take as recorded, then cleaned, at the same loudness.

The cleaned takes are `voice/intro-voice.wav` and `voice/outro-voice.wav`, and `footage/grade/build.py` now builds the intro and outro from them. The cuts with the phone voice are kept in `footage/rough/v2/`.

For the voiceover:
- Run `python3 -I design/video/audio/voice/clean.py <recording> design/video/audio/voice/<line id>.wav --report` on each file.
- Recording tips (Claude's suggestions, not a source's):
  - Record in the quietest room you can.
  - Keep the phone about a hand's width from your mouth, a little to the side so the p's and b's don't pop, at the same distance every time.
  - Start every file with three seconds of silence, so there's room tone for the cleaner to learn from.
  - Use the best format the phone offers.
  - Make one file per section, or per line.

## The mix plan, for the editing phase

When the voiceover is in, `export.mjs` grows from music plus two takes into a full mix:

- **The anchor is the voice,** at -16 LUFS. The film is delivered at about -16 LUFS integrated, with true peaks at -1.5 dBTP. We check it on laptop speakers and on headphones.
- **Music under a line goes about 20 dB under the voice.** Today, at your player's levels, the house track sits 16.6 dB under a line (it's -13.0 LUFS, played at 0.35 and dipped to 0.3 of that). The demo's track, “Can't Get You Off My Mind”, sits 18.6 dB under (-13.7 LUFS, played at 0.3 and dipped to 0.3), and Jungle Voices 12.8 dB under (-12.3 LUFS, played at 0.3 and dipped to 0.5). Morning Garden, before them, sat 11.9 dB under.
- **Noah's note on the dips (October 21, on the demo's track):** "sweet - Not exactly liking how it kind of swells back in whenever you're not talking, but then swells out very quickly because the next line is coming. I think we can just keep it a little bit consistent, or if we want to do that effect, we smooth it a little bit more. I also think that the music could be just a teeny bit louder when we have our voiceovers. But let's worry about the mixing when it comes to it." So in the mix, the dip holds across a gap shorter than about 3 seconds instead of swelling back in, it moves more slowly, and the music sits a little louder under a line than the 20 dB above suggests, set by ear against the real takes.
- **The dip follows the voice itself.** A sidechain compressor keyed by the voice replaces the timed dips, so the music only dips while someone is actually speaking.
- **The music gets out of the voice's way:** a small dip around 2 to 4 kHz in the music, while someone is speaking.
- **Sound effects sit well under the voice:** clicks and keys about 10 dB under it, and whooshes about 6 to 10 dB under it. The riser and the hit can rise to the voice's level, at the reveal, when nobody is speaking.
- **A cue sheet places each sound.** The plan is `design/video/sound.js`: each cue gives the section, the moment, the library file, its level and its fades, and the exporter mixes the cues in. Each voiceover line goes in as its own file at its own start, and the script's timing follows the real lengths of the lines (it now assumes 2.8 words a second).
- **The walk-in gets its business:** the plaza and street ambience under the house track, a door on the brass doors' cut, the lobby's crowd on the stairs, and a short room tone into the sofa.
