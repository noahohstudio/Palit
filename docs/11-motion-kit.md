# The video's motion kit

On October 20, Noah reviewed the video moment by moment in the block-by-block workshop (entry 223) and asked for research before anything changed. His words: "do some research on how creative agencies, as well as bigger tech companies use motion within their reels and demos to really accentuate the product - thats exactly what I'm going for. This all feels a little too serious right now. Creative expression is absolutely welcome in this presentation, and the way we present is part of the proposal - lets really keep that in mind. Lets be bold, but not reckless. Lets be fun, but elegant. Super polished, and industry ready."

This page is that research and the kit built from it (entries 225 to 231). Every claim names its source. The "for Palit" readings are ours, inferred rather than stated by any source, and marked as such.

## What the research found

Desk research, October 20. The films themselves weren't watched; descriptions come from the sources named. "Search summary" means the source was seen only through a search digest.

| Technique | What the sources say | Sources |
|---|---|---|
| A camera on the UI | Move slowly and predictably, avoid fast turns, hide a sudden change of direction under a cut. Screen Studio zooms where you click, smooths the cursor and adds motion blur. | Apple, WWDC23 "Design considerations for vision and motion" (developer.apple.com/videos/play/wwdc2023/10078); screen.studio; UX in Motion manifesto (uxmag.com) |
| Two kinds of type motion | Config 2025: expressive type animates on more slowly with more personality; functional type is quicker and direct. | Figma, "How we shaped the visual identity for Config 2025" (figma.com/blog) |
| Reading time | Subtitles at most 20 characters a second, never on screen less than 20 frames (0.8 s), gaps of 2 frames or at least half a second. | Netflix Timed Text Style Guide (partnerhelp.netflixstudios.com) |
| Match cuts | Link two shots through the same movement and cut at its fastest point, so several use cases feel like one continuous experience. | Figma, "Principles in motion" (figma.com/blog/principles-in-motion); 9to5Mac on Apple's keynote transitions (9to5mac.com, June 21, 2023) |
| A kit from the product's own shapes | Config 2024 built all its motion from Figma's toolbar primitives with four moves (Shift, Transform, Amplify, Activate), as a library of parts, not one-offs. | Figma, "Config 2024 branding" (figma.com/blog/config-2024-branding); Relay and Jordan Scott |
| Rhythm | Tie timing to sound the way beats are structured; build to an arc and a crescendo. Editor Walter Murch ranks emotion, then story, then rhythm. | Figma, "Principles in motion"; No Film School on Murch's rule of six (search summary) |
| Holds and speed ramps | Slow into the moment that matters so it lands; a hold lets the viewer register a change. | Film Editing Pro (search summary); Figma's motion glossary |
| Springs | Start with no bounce; add bounce only when a gesture carries momentum. About 0.15 is brisk, above 0.4 calls for caution. | Apple, WWDC18 "Designing fluid interfaces" and WWDC23 "Animate with springs" (developer.apple.com) |
| Choreography | Stagger entrances so the eye follows one path, keep one focal point, and don't let many things cross at once. | Material Design, "Choreography" (m1.material.io/motion/choreography) |
| Cursor choreography | A smoothed path, one ripple per click, an idle cursor that hides, the pressed keys on screen. | screen.studio |
| Restraint | Motion that doesn't say anything is just a filter on a design. Google's 46 studies with 18,000+ people found expressive layouts helped people find things up to four times faster, but "No amount of expressive design will beat basic functionality." | Figma, "Principles in motion" (Chad Colby, Ben Hill); Google Design, "Expressive Material Design" research (design.google) |
| Where the fun comes from | In these sources, mostly from people and wit, not effects: Sandwich Video frames technology through people; The Browser Company runs its channel like a vlog. | TechCrunch on Sandwich (search summary); Tella on The Browser Company |

Pitfalls the sources name: motion with nothing to say, bounce everywhere, a camera that never rests, several things moving at once, text gone before it's read, and a brand's shapes overused until they're decoration (Config 2025's designers used their glyphs sparingly for that reason).

Films worth studying: Figma's "Introducing Figma Motion" (2026), Raycast's "New Raycast. Coming 2026" (2025), Linear's "Introducing Linear Initiatives" (2024), ManvsMachine's reMarkable Paper Pro film (2024), and Hornet's Spotify Wrapped 2022 identity, which tells a person's own archive as a bold story led by color.

## The kit (our reading of the research)

One small set of moves, drawn from Palit itself, used everywhere Noah has reviewed so far: the walk-in, the intro, the splash, the brief, the problem, the people and the demo. The sections from How we worked on keep their old motion until Noah reviews them, and each new move is switched on per section (`motion: "kit"` in `design/video/script.js`).

1. **A color lands.** The product's own gesture: a kept color lands at the edge of your screen. In the video, the highlighted word of every statement gets its color the same way. A square of the color drops onto the word, lands with a small bump, and spreads into the box behind it. This is the signature move, and it's the one place with a little bounce (about 0.15, per Apple's guidance).
2. **Lines rise from their baseline.** Words and lines come up from behind their own baseline, quickly and one after another, instead of fading in (Noah, m009: "something with slightly more movement and speed"). Outs are quicker than ins.
3. **The push.** When the next line arrives, it pushes the last one up, and the last one shrinks and grays (Noah's own idea, m016). It's used for the brief giving way to our answer and Pantone giving way to Palit.
4. **A person's hand.** Where the video highlights someone else's words (the brief), a cursor drags a selection across them, the same cursor the demo uses, on an arc and with a beat before the press.
5. **The camera on intent.** In the demo, v3 names where to look and how close, and the player eases there on a no-bounce spring. It holds before and after each change and moves only when the focus moves (Apple's guidance; the protocol is `data-cam` on v3's body).
6. **Cut on the beat.** The walk-in's cuts and titles land on the house track's hits (measured: 120 BPM, hits at 0.05, 1.31, 2.42 and 3.05 seconds).
7. **Color as the event.** Full-frame color is saved for a few moments: the walk-in titles, the splash's two cards, and the screen of color that opens the research.

Each person keeps one color through the film: Noah's chip red and Daeun's chip turquoise title the walk-in, and they're the two cards the splash brings together, since the logo was theirs together (entry 222).

## Noah's reference: heyclicky's reel

On October 20 Noah shared heyclicky's reel, “the world's cutest ai interface” (43 seconds, https://www.youtube.com/watch?v=46t-mCH-AQw): "although this style is far too rapid and techy for what our product is, take inspiration for how the camera moves, follows the mouse, how each feature is morphed and and smoothly  presented. Keep this as a reference for future notes - something be be inspired by" (entry 233). It builds on D32, where heyclicky was already a reference for energy, not look.

What the reel does, from Claude's frame-by-frame read, for the next rounds of notes:

- **The hotkey, for real.** The moment someone presses the shortcut, it cuts to a live close-up of fingers on a keyboard, then straight back to the screen. Palit's ⌥⇧C could get the same filmed insert.
- **Wide to one thing.** The camera pushes from the whole desktop into a single element (a window, then the character inside it) in under a second, holds, then pulls back to show where it sits.
- **The cursor is the subject.** Tight follows on the cursor, with a small live indicator beside it (a listening wave). A drawn trail shows its path, and dashed boxes with a label mark where it's about to click.
- **Things grow into place.** Windows come in from the center, scaling up as they fade in. One state turns into the next in place (“3 things” becomes “7 things”, one character swaps for another) rather than cutting.
- **Depth, now and then.** A window tilts in 3D, close-ups soften the background, and interface pills float beside the speaker in the live action.
- **What not to take:** the pace (a cut every second or so) and the dark, techy look. Palit stays calmer, on white, with the kit above.

## Round two: the direction, and the taste it builds

Noah's second round of notes (October 20, the walk-in to deep dive 1's statement) asked for one direction to stick to: "try to find a direction and stick to it, so we don't backtrack", read "not just specific to the section its written for, but holistically, so that we can build a visual language/taste regarding how the video feels." The kit now reads as ten rules. Each comes from his notes in both rounds, cited by moment. The splash's grounding is from desk research on logo motion ([moonb.io's logo animation examples](https://www.moonb.io/blog/logo-animation-examples); Google's 2015 identity, as covered by [Fast Company](https://www.fastcompany.com/3050613/googles-new-logo-is-its-biggest-update-in-16-years)).

1. **One entrance, everywhere.** Each piece rises a little and fades in together, on one soft ease, one after another; it leaves the same way, upward and quicker. No bare fades, no bare slides, nothing shrinking into place. (m009, m010, m018: "a consistent way they appear with a mix of both, being elegant and pro looking".)
2. **One highlight.** The Mac's cursor, the same one the demo uses, comes in on an arc, waits a beat, and quickly drags a box over the whole word in its color, and the word turns as the box passes. It's used for every statement, the brief's "storytelling", "ownership" and "earn". (m009: "feels more on-theme and professional"; m010: the box covers the whole word.)
3. **Cards float up and settle.** Cards rise from below with a soft recoil, left then right. (m011.)
4. **The push.** When the next line arrives, the last one moves up, shrinks and grays, staying close. (m016, round one and two.)
5. **Color always means something.** Color shows a real kept color with its story, a person (Noah red, Daeun turquoise), or a category in a chart; it's never decoration. (m011: "make sure they actually do something meaningful, without taking too much of the focus".)
6. **The camera is calm.** Every move is a tween that starts and stops softly (smootherstep), zooms in log space, anchored on what you're looking at, with a hold before and after. Quick pans are still eased. (m022: "Buffer it just slightly"; m030: "lets be smooth/elegant when we can".)
7. **The desktop is a window on the page.** At its widest the demo's desktop is rounded and sits on white with room around it; zoomed in, it fills the frame. (m024.)
8. **The demo behaves like the app.** Hover states answer the cursor, views fade and rise into place, scrolls have momentum, and typing is human, with the odd typo and correction. (m026, m028, m029.)
9. **The brand resolves to black.** Two color cards snap together, their overlap cut white; as the name comes out, dealt from the mark letter by letter, they drain to the logo's own black. (m007: "the colors could turn black as the word comes out".)
10. **The film is warm and a little filmic.** A subtle, friendly, warmer grade, light grain and halation, and a slight fisheye on the walk-in only, in the spirit of heyclicky's reel. (m001, m002.)

## Round three: what it adds

Noah's third round (October 21, the walk-in to the end of the demo) was small fixes, and five of them are rules for the whole film. Then he asked to work one block at a time: “Let's work in blocks now. Like, let's just tackle one thing at a time, make it look good, and then we kind of publish after we're done with everything.” Each deep dive and the closing sections now get their own workshop, and their own session, so he can review them side by side.

11. **Everything leaves with motion.** Whatever leads into something else ends on a quick, subtle move: it slides up a little faster than it came in and fades on the way. Never a bare fade, never a still frame that just cuts. (m008: “things that kind of lead to other things, should always end with some sort of fleeting motion, even if it's subtle and it fades out quickly, it should lead with motion.”)
12. **The highlight stays new.** The cursor comes to each highlighted word from a new direction, in turn: bottom right, top left, bottom left, top right. The box leaves with its word, sliding up as the text fades. This refines rule 2. (m009: “just different directions so we keep it new every single time”; m010, m017, m021.)
13. **Headers come in one way.** The splash's name rises and fades in whole, like every other header, instead of being dealt letter by letter. This revises rule 9; the cards and the drain to black stay. (m007: “I think we should just stick to the fade/slide in of the other headers”.)
14. **Nothing swells into place.** The problem's grid no longer grows before the camera pulls back. Like rule 1, things rise and fade; they don't scale up. (m013.)
15. **Clean frames.** No flash of the next section, no jitter in the menu bar. Footage plays at the rate it was shot (60 frames a second for the walk-in, 30 on the sofa), and the review loops are recorded frame by frame at 60, so what Noah sees is what the film will be. (m001: “I want the highest frame rate possible”; m003, m021, m024.)

In the demo, the menu bar's mark starts black (m022: “I think we could keep the icon black”), and the keys leave one after another on a soft fade whenever the keys change (m027).

