---
name: afrimmak-design
description: Use this skill to generate well-branded interfaces and assets for Afrimmak, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Afrimmak Design Skill

Afrimmak — "Building Africa Through Young Minds" — is a youth-empowerment /
education-focused organization for African youth. The visual identity is bold,
primary-colored, optimistic, and people-first.

## Where to look

1. **`README.md`** — start here. Brand context, voice/tone, visual foundations,
   iconography, caveats. Read in full.
2. **`colors_and_type.css`** — every design token (colors, type, spacing,
   radii, shadows, motion, layout). Always import this rather than hardcoding
   values.
3. **`assets/`** — logos. Use `afrimmak-logo.png` (transparent) or
   `afrimmak-wordmark.png` (no tagline) on non-white surfaces.
4. **`preview/`** — small reference cards showing each token / component in
   isolation. Read these when you need a quick visual lookup.
5. **`ui_kits/website/`** — a full reference marketing site with React
   components (Nav, Hero, Programs, Stories, ApplyCTA, Footer, ApplyOverlay).
   Copy patterns from here when building new surfaces.

## How to use

- **Throwaway prototypes / mocks / slides:** Copy `colors_and_type.css` and any
  needed assets out of this folder into your output. Reference the tokens
  (`var(--blue-500)` etc) — never re-define them. Look at `ui_kits/website/`
  for component patterns to lift.
- **Production code:** Read `README.md` end-to-end first. The token names map
  cleanly to CSS custom properties; the JSX in `ui_kits/website/` is meant as
  a cosmetic reference, not production-ready code.

## Brand quick-reference

- **Colors:** Afrimmak Blue `#0048A8` (primary), Afrimmak Green `#6FC52E`
  (secondary), Afrimmak Red `#EE2A30` (accent only). Ink `#0A1A33` for text.
- **Type:** **Montserrat** (display: 700–900) is used for all UI text —
  H1/H2/H3, eyebrows, buttons, stat numbers, program titles. Sentence/Title
  case with `-0.02em` tracking. Inter (body), Nunito (warm marketing),
  JetBrains Mono. **Ethnocentric Regular** (`fonts/Ethnocentric-Regular.otf`)
  is the **logo font only** — used exclusively for the inline AFRiMMAK
  wordmark when an image isn't possible. Never use Ethnocentric for headings,
  body, or UI.
- **Radii:** generous. Cards 16–24px, buttons pill (999px).
- **Shadows:** soft, navy-tinted (`rgba(10, 26, 51, x)`), never grey or black.
- **Motion:** snappy (120–420ms), `ease-out` default, `bounce` for "spark" moments.
- **Imagery:** warm daylight, color-saturated, real African contexts. Signature
  treatment is a solid blue scrim (70% opacity) over photography.
- **Icons:** Lucide (1.75px stroke). No emoji in product/formal materials.
- **Voice:** optimistic, direct, verb-led, no jargon. "We" / "you". Short
  sentences. Title Case headings, sentence case body.

## If a user invokes this skill with no guidance

Ask what they want to build or design, then act as an Afrimmak-fluent expert
designer. Always offer to:
- Generate an HTML artifact (slide, mock, prototype, deck) using the tokens
  and components in this folder, or
- Produce production code (HTML/CSS/JSX) using the same tokens.

Ask follow-up questions about audience, surface (web / slide / mobile),
fidelity, and whether they want options/variations before generating.
