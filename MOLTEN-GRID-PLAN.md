# "Molten Grid" Rebuild Plan — Webnique Digital Solutions

## Overview

Complete rebuild of the Webnique website from the current "Glass Lab" violet/indigo theme to the "Molten Grid" charcoal + coral design system. Single-page scrolling site with all 7 sections, new typography, new animation choreography, and React Bits component integration.

---

## Phase 0: Foundation

### 0A. New Dependencies

Install:
- `split-type` — text splitting for headline reveals
- `@gsap/react` — official GSAP React hook (if needed, otherwise use useRef)

Already installed (keep):
- `gsap` (with ScrollTrigger plugin, registered manually)
- `framer-motion` (v12, using `motion/react` imports)
- `lenis` (smooth scroll)
- `tailwindcss` v4

Remove from imports (not from package.json, just stop using):
- `lucide-react` icons in favor of hand-drawn SVGs or minimal custom icons
- Default AOS fade patterns

### 0B. Design Token System — `globals.css` Complete Rewrite

Replace the entire current `globals.css` with the Molten Grid token system:

```css
@import "tailwindcss";

@theme {
  /* Charcoal depth layers */
  --color-charcoal-950: #14181C;
  --color-charcoal-900: #1B2126;
  --color-charcoal-800: #262D35;
  --color-charcoal-700: #333B44;
  --color-charcoal-600: #4A535D;

  /* Coral / ember accents */
  --color-coral-500: #F67963;
  --color-coral-600: #E36A55;
  --color-coral-glow: rgba(246, 121, 99, 0.35);

  /* Ruby pop */
  --color-ruby-pop: #FF2E55;

  /* Neutrals */
  --color-bone-100: #F5F1EA;
  --color-bone-200: #E9E4DA;
  --color-ash-400: #9BA3AA;

  /* Glass */
  --color-glass-fill: rgba(245, 241, 234, 0.06);
  --color-glass-fill-strong: rgba(245, 241, 234, 0.10);
  --color-glass-border: rgba(245, 241, 234, 0.14);
  --color-glass-coral-edge: rgba(246, 121, 99, 0.25);

  /* Typography */
  --font-display: "Fraunces", serif;
  --font-body: "General Sans", "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Fluid type scale */
  --fs-hero: clamp(2.75rem, 7vw, 7.5rem);
  --fs-h1: clamp(2.25rem, 5vw, 4.5rem);
  --fs-h2: clamp(1.75rem, 3.2vw, 3rem);
  --fs-h3: clamp(1.25rem, 1.8vw, 1.75rem);
  --fs-body: clamp(1rem, 1.1vw, 1.125rem);
  --fs-label: 0.8125rem;

  /* Surface */
  --radius-card: 20px;
  --radius-pill: 999px;
  --glass-blur: 18px;
}
```

Also update `_document.js` to load:
- Fraunces from Google Fonts (variable, with optical size + italic axes)
- JetBrains Mono from Google Fonts
- General Sans from Fontshare (or fallback to Inter)

### 0C. Reusable `<GlassPanel>` Component — NEW FILE: `components/GlassPanel.jsx`

Shared glass card used across the entire site:
- Props: `children`, `className`, `glowIntensity` (default "normal"), `hoverable` (default true)
- Base styles: `background: var(--color-glass-fill)`, `border: 1px solid var(--color-glass-border)`, `backdrop-filter: blur(var(--glass-blur))`, `border-radius: var(--radius-card)`
- Noise overlay at 3% opacity (CSS pseudo-element or inner div with SVG noise)
- Hover: border shifts to `--color-glass-coral-edge`, lifts 6px, shadow deepens, slight tilt toward cursor (Framer Motion useMotionValue)
- Coral inner glow: `box-shadow: inset 0 0 0 1px var(--color-glass-coral-edge)` that intensifies on hover

### 0D. Register GSAP Plugins

In `_app.js` or a dedicated `lib/gsap.js`:
```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### 0E. Update `_app.js`

- Replace purple background orbs with charcoal warmth gradients
- Replace purple selection highlight with coral selection
- Keep Lenis initialization (update easing to match brief)
- Add noise texture overlay in charcoal tones
- Add ambient coral glow bleed from one corner (animated drift)

---

## Phase 1: Preloader + Navbar

### 1A. Preloader — NEW FILE: `components/Preloader.jsx`

- Full-screen charcoal-950 overlay
- "WEBNIQUE" wordmark builds letter-by-letter in Fraunces, mono-tracked, bone-100 color
- Coral scan-line sweeps across horizontally
- Iris-wipe open: clip-path circle expands from center, revealing the page
- Total duration: ~2.5s
- Uses GSAP timeline for sequencing
- After animation completes, unmounts and triggers hero entrance

### 1B. Navbar — REWRITE `components/Navbar.jsx`

Current state: simple fixed nav with purple accents, basic scroll detection
Target state per brief §6:

- Fixed, transparent over hero with `--glass-fill-strong` + blur
- Solidifies to `--charcoal-900` when scrolled past hero
- Logo left (Webnique wordmark, not the "W" box)
- Nav items center in mono label style (uppercase, letter-spaced, JetBrains Mono)
- "Let's Talk" CTA right as coral pill button with magnetic hover (React Bits magnetic-button)
- Active route: small coral dot indicator (not underline)
- Mobile: hamburger → full-bleed charcoal drawer, nav items in oversized Fraunces type, staggered word-reveal on open
- Nav items from `extracted.md`: Home, About, Services, Products (→ QUIP dropdown on homepage), Our Works, Testimonial (scroll to #testi), Contact

---

## Phase 2: Hero + Marquee

### 2A. Hero — REWRITE `components/Hero.jsx`

Current state: 2-col grid with purple gradient text, floating dashboard mockups
Target state per brief §8.1.2:

- Full viewport height
- Headline treatment per §3.2: "Your" and "Starts Here" smaller in `--ash-400`, "Digital Transformation" oversized in `--bone-100`, "Digital" in coral italic (shiny gradient sweep on 3-4s loop)
- SplitType for word/char reveal: y + opacity + slight rotateX, staggered ~28ms per word
- Subheadline + body copy from `extracted.md` §4 in body face
- "Get Started" CTA as magnetic coral pill (React Bits magnetic-button)
- Background: layered charcoal gradients with soft coral glow bleeding from one corner, animated drift
- Hero graphic: glass-framed floating panel with parallax on mouse-move (replaces the dashboard mockups)
- Mouse-tracking parallax on the glass panel (Framer Motion useMotionValue)

### 2B. Marquee — REWRITE `components/Marquee.jsx`

Current state: basic scrolling text
Target state per brief §8.1.3:

- Infinite horizontal scroll of 6 services with star separators
- Star restyled as small coral glyph (custom SVG)
- Row pauses on hover + hovered item brightens
- Text in mono label style (JetBrains Mono, uppercase, letter-spaced)
- GSAP or CSS animation for infinite scroll
- Lenis-aware (doesn't fight smooth scroll)

---

## Phase 3: Content Sections

### 3A. About Section — REWRITE `components/About.jsx`

Current state: glass cards with mission/vision
Target state per brief §8.1.4:

- Section intro with big/small headline mixing style
- Mission/Vision as two `<GlassPanel>` cards side by side
- "Read More" expands longer copy block with smooth height animation (Framer Motion AnimatePresence + animate height)
- Content from `extracted.md` §4 (homepage about section)
- Scroll-triggered reveals (GSAP ScrollTrigger, opacity + y)

### 3B. QUIP Section — REWRITE `components/QuipSection.jsx`

Current state: basic glass cards
Target state per brief §8.1.5:

- Distinct "product" moment: darker charcoal-950 panel
- 3 feature cards as `<GlassPanel>` with icon strokes in coral (hand-drawn SVG icons)
- "Explore QUIP" CTA linking to `https://quip.wb-roots.com/`
- Content from `extracted.md` §4 (QUIP section)
- Subtle entrance animation on scroll

### 3C. Services Section — REWRITE `components/Services.jsx`

Current state: numbered list with basic animations
Target state per brief §8.3 (condensed homepage version):

- 6 services in rows, alternating direction
- Odd rows: coral SVG icon slides from left, text from right
- Even rows: icon from right, text from left
- Scroll-scrubbed so they "meet" in center as row enters viewport
- Each icon has slow floating breathe loop (translateY ±4px, 3.5s, staggered)
- Custom hand-drawn SVG icons (coral stroke, 2px weight):
  1. Browser window with code brackets (Web Design)
  2. Layered app window with gear (Custom Software)
  3. Megaphone with upward graph (Digital Marketing)
  4. Interlinked nodes with heart (Social Media)
  5. Play button in film frame (Content Creation)
  6. Pen nib with swatch dot (Branding)
- Numbered eyebrow (01-06) in mono ghost-outline behind each row
- Content from `extracted.md` §4

### 3D. "Need a Project?" CTA — REWRITE `components/CTA.jsx`

Current state: basic CTA card
Target state per brief §8.1.7:

- Full-bleed coral-tinted charcoal section
- Address/contact block in mono label style
- Magnetic "Fix a meeting" CTA button
- `project-need.png` as a glass-framed element
- Content from `extracted.md` §4 (Need a Project section)

### 3E. Process Section — REWRITE `components/Process.jsx`

Current state: 4-step grid
Target state per brief §8.1.8:

- Horizontal line (desktop) / vertical (mobile) that fills in coral on scroll (ScrollTrigger scrub on SVG stroke-dashoffset)
- Each step's number in oversized ghost-outline Fraunces behind the glass card
- 4 steps from `extracted.md` §4
- Scroll-linked: line fills as user scrolls through section

### 3F. Client Logos — REWRITE `components/ClientLogos.jsx`

Current state: basic marquee
Target state per brief §8.1.9:

- Infinite scroll marquee
- Logos in grayscale, color on hover
- 16 logos from `extracted.md` §12
- "View More" button linking to #work section

---

## Phase 4: Signature Moments

### 4A. Our Work / Portfolio — REWRITE `components/Portfolio.jsx`

Current state: bento grid with filter tabs
Target state per brief §8.4 (adapted for single-page):

Since this is a single-page site, the "monitor zoom" intro is adapted as a scroll-triggered sequence within the section:

1. **Intro phase**: A glass-framed "monitor" panel with CSS 3D perspective/rotateX/Y, idle drift, showing a crossfade loop of 3-4 client screenshots. Accompanied by a short "who we are" line in mono label.
2. **Dolly-zoom on scroll**: As user scrolls, monitor scales up, background blurs past edges (ScrollTrigger scrub). Clip-path expands past viewport bounds, dissolving into the grid.
3. **Grid reveal**: 14 projects in alternating left/right layout from `extracted.md` §8. Each slides in from its side on scroll with thin coral connector line linking image to text. Image in `<GlassPanel>` frame. Live-site arrow button appears on hover (omit for projects with no URL).
4. First project image visible "inside" the monitor screen at transition completion.

### 4B. Testimonials — REWRITE `components/Testimonials.jsx`

Current state: horizontal drag carousel with 5 testimonials
Target state per brief §8.5:

All 7 testimonials from `extracted.md` §11 (full text, not truncated).

**Phase 1 — Entry**: Cards drop from above, staggered ~100ms, spring bounce into loosely stacked "hand of cards" at center. Random rotation offsets ±6°.

**Phase 2 — Scatter**: Section pins (ScrollTrigger pin: true). Stacked cards animate outward to fixed art-directed positions around viewport perimeter. Shrink slightly, dim to 60%. Center: large "Happy Words From Happy Customer" headline + current testimonial quote in oversized Fraunces + author in mono label.

**Phase 3 — Interaction**: Hover/click a scattered card → its quote crossfades into center, that card brightens to full opacity + glow, others dim further. Auto-advance on slow timer if no interaction, pause on hover.

---

## Phase 5: Supporting Sections

### 5A. Contact Section — REWRITE `components/Contact.jsx`

Current state: basic form + info
Target state per brief §8.6:

- Two-column: `<GlassPanel>` form (Name, Email, Message, "Send Message" CTA) | contact info + India/NZ address tabs
- Tab switch: crossfade + underline slide (not full transition)
- Calm section — conversion-focused, minimal motion
- Real success/error states
- Content from `extracted.md` §7

### 5B. Footer — REWRITE `components/Footer.jsx`

Current state: basic footer
Target state per brief §8.7:

- "Get In Touch" band with founder's circular photo, bio line, email
- Social icons (Facebook/Instagram/LinkedIn/YouTube) with coral fill-wipe on hover
- Bottom bar: copyright + Privacy/Terms links in mono label style
- Content from `extracted.md` §13

---

## Phase 6: Polish & Guardrails

### 6A. Responsive Design
- Every scroll-scrubbed animation simplified for mobile (shorter travel, no pinned sections)
- Portal warp-pull / deck-slide simplified to plain crossfade under 480px (not applicable since we're single-page, but scroll animations simplify)
- Mobile nav drawer (already in Phase 1B)

### 6B. Reduced Motion
- Respect `prefers-reduced-motion: reduce`
- Swap all scroll-scrub and entrance choreography for simple opacity fades
- Disable parallax, tilt, magnetic effects

### 6C. Performance
- Lazy-load Our Work project images below fold
- Scope GSAP timelines, clean up on unmount
- Limit backdrop-filter blur stacks (max 1-2 per viewport)
- Preloader blocks paint until complete, then reveals

### 6D. Keyboard/Focus
- Visible focus states on nav, buttons, form fields, testimonial cards
- Testimonial cards reachable via keyboard (tabindex, arrow key navigation)

---

## React Bits Components (Selected)

| Component | Use In | Purpose |
|-----------|--------|---------|
| **magnetic-button** | Navbar CTA, Hero CTA, CTA section button | Magnetic pull hover effect on coral pill buttons |
| **glare-card** | Testimonial cards, Portfolio cards | Glare/hover tilt effect on GlassPanel cards |
| **shiny-text** | Hero headline accent word ("Digital") | Shiny gradient sweep on coral accent word |
| **marquee** | Services marquee, Client logos | Infinite scroll with pause-on-hover |

These will be pulled via the React Bits MCP server (`get_component` tool), restyled to match the Molten Grid token system.

---

## File Changes Summary

| Action | File | Description |
|--------|------|-------------|
| **REWRITE** | `styles/globals.css` | Complete new token system (Molten Grid) |
| **REWRITE** | `pages/_app.js` | New background, selection color, GSAP registration |
| **REWRITE** | `pages/_document.js` | New fonts (Fraunces, JetBrains Mono, General Sans) |
| **REWRITE** | `pages/index.js` | New section order, import Preloader |
| **NEW** | `components/Preloader.jsx` | Letter-by-letter build + iris wipe |
| **NEW** | `components/GlassPanel.jsx` | Reusable glass card component |
| **NEW** | `lib/gsap.js` | GSAP plugin registration |
| **REWRITE** | `components/Navbar.jsx` | Mono labels, coral CTA, mobile drawer |
| **REWRITE** | `components/Hero.jsx` | SplitType headline, parallax glass panel |
| **REWRITE** | `components/Marquee.jsx` | Pause-on-hover, coral star glyph |
| **REWRITE** | `components/About.jsx` | GlassPanel cards, Read More expand |
| **REWRITE** | `components/QuipSection.jsx` | Darker panel, coral icon strokes |
| **REWRITE** | `components/Services.jsx` | SVG convergence animation, hand-drawn icons |
| **REWRITE** | `components/CTA.jsx` | Full-bleed coral-tinted section |
| **REWRITE** | `components/Process.jsx` | SVG line fill on scroll |
| **REWRITE** | `components/ClientLogos.jsx` | Grayscale-to-color hover |
| **REWRITE** | `components/Portfolio.jsx` | Monitor intro + dolly-zoom + grid |
| **REWRITE** | `components/Testimonials.jsx` | Drop/stack/scatter with pin |
| **REWRITE** | `components/Contact.jsx` | GlassPanel form, address tabs |
| **REWRITE** | `components/Footer.jsx` | Coral fill-wipe social icons |
| **DELETE** | `components/Navigation.jsx` | Replaced by Navbar.jsx |
| **DELETE** | `components/ScrollProgress.jsx` | Replaced by Process section line |
| **DELETE** | `components/Stats.jsx` | Not in brief (no invented stats) |
| **DELETE** | `components/CursorGlow.jsx` | Replaced by ambient coral glow |
| **DELETE** | `styles/Home.module.css` | Unused boilerplate |

---

## Build Order (Recommended)

1. **Foundation** (Phase 0): tokens, fonts, GlassPanel, GSAP setup
2. **Preloader + Navbar** (Phase 1): first visual impression
3. **Hero + Marquee** (Phase 2): above-the-fold experience
4. **About + QUIP + Services** (Phase 3A-3C): core content
5. **CTA + Process + ClientLogos** (Phase 3D-3F): supporting sections
6. **Portfolio** (Phase 4A): signature moment
7. **Testimonials** (Phase 4B): most complex animation
8. **Contact + Footer** (Phase 5): conversion + close
9. **Polish** (Phase 6): responsive, reduced motion, performance

Ship section by section for design-direction checks rather than generating everything blind.
