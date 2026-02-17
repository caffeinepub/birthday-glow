# Specification

## Summary
**Goal:** Create a 3-page, mobile-responsive interactive Happy Birthday website with a consistent soft gradient design, playful animations, and simple navigation.

**Planned changes:**
- Implement 3 distinct pages with smooth fade/slide transitions and route-based (or equivalent) navigation.
- Apply global styling: soft pink/peach/warm-golden gradients, rounded modern typography, deep black readable text, subtle sparkles; confetti only during specified celebration moments.
- Build Page 1 with timed text fade, floating balloon background, a “Reveal the Birthday Girl 👀” interaction that triggers a confetti burst + brief screen glow, then reveals the birthday message and unlocks a “Next Page” button; add optional opt-in play/pause background music control (no autoplay).
- Build Page 2 with a cute “birthday report” newspaper/board aesthetic showing the exact provided text, plus an “Accept Birthday Flowers 🌷” button that reveals an animated panda/kitten-with-flowers visual and the provided message; include “Previous Page” and “Next Page” buttons.
- Build Page 3 with warm golden-pink glow styling, looping falling flower petals, the provided wish text with preserved formatting, a gentle timed confetti fall after ~3 seconds, a final line, softly glowing “The End”, and a visible “Previous Page” button.
- Bundle and load required static image assets (panda/kitten-with-flowers and any sparkle/petal/balloon sprites) from frontend static assets only (no backend calls).

**User-visible outcome:** Users can navigate through three animated birthday pages on mobile, trigger celebratory reveal moments (confetti/glow, flowers reveal), optionally play/pause background music on Page 1, and read the full birthday messages with smooth transitions and themed visuals.
