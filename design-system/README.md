# Afrimmak Design System

> **Building Africa Through Young Minds**

This is the design system for **AFRIMMAK** — a youth-empowerment project of
the **Mendez Impact Foundation**, based in **The Gambia**. AFRIMMAK gives young
Gambians practical skills, mentorship, and a real shot at the futures they want,
through short hands-on programmes delivered with local partners.

This system was built alongside the AFRIMMAK Website Content Checklist (see
`research/website-content-checklist.txt`). The site is **brand new** — pages
deliberately ship with marked content placeholders that double as a briefing
document for whoever is gathering content (photos, bios, partner logos, etc).

## Sources provided

| Source | Notes |
|---|---|
| `uploads/Afrimmak logo.jpeg` | Primary brand mark — wordmark + tagline + lightbulb/figure icon. |
| `fonts/Ethnocentric-Regular.otf` | Brand display font (logo only). |
| `uploads/AFRIMMAK_Website_Content_Checklist.pdf` | **Official content checklist** from the AFRIMMAK Project / Mendez Impact Foundation. Drives the site IA (5 pages: Home, Programme, Partners, About, Contact) and the placeholder slots in every page. See `research/website-content-checklist.txt`. |
| `https://ja-africa.org/` | Structural & tonal reference site, user-supplied. See `research/ja-africa-reference.md`. |

**No Afrimmak codebase, Figma file, or website was attached.** The system
below is therefore synthesised from the logo + tagline + Ethnocentric font +
the JA Africa reference site. Treat it as **v1** — see the **Asks for the
user** at the bottom.

---

## Brand at a glance

- **Name:** AFRIMMAK (stylised in logo as **AFRi**·**MMAK** with a bicolor split)
- **Parent organisation:** **Mendez Impact Foundation (MIF)** — Afrimmak is a project of MIF.
- **Where:** **The Gambia** (Greater Banjul to start; West Africa).
- **Tagline:** "Building Africa Through Young Minds"
- **Stage:** **Brand new.** First cohort is just enrolling. The site is being built
  alongside content gathering; most pages contain explicit placeholders that
  double as a content briefing for the MIF team.
- **What it does:** Equips young Gambians (16–28) with practical skills,
  mentorship, and the confidence to build their own futures — through short,
  hands-on programmes run with local partners.
- **Three programmes (working names):**
  1. **Youth Skills Training** — 8-week in-person, Greater Banjul.
  2. **Entrepreneurship Bootcamp** — 6-week blended, for first-time founders.
  3. **Mentorship Network** — ongoing, monthly 1:1 + small-group mentorship.
- **Personality:** Bold, optimistic, mission-grade, partnership-focused.
  Honest about being early-stage. Not pretending to be a continental institution.
- **Audience:** Young Gambians (primary), Gambian families, local partners,
  funders & diaspora, media, MIF's own board.
- **Reference brand for tone & site structure:** [JA Africa](https://ja-africa.org/)
  (continental version of similar mission — used for structural inspiration only).

The visual identity is **loud and primary-coloured** — royal blue + grass green
+ a single flash of red. The mark itself (a lightbulb with a person bursting
out of it, doubling as the "i") is the brand's central metaphor: ideas + people.

---

## Index — what's in this folder

| Path | What |
|---|---|
| `README.md` | This file. Read first. |
| `SKILL.md` | Skill descriptor (for Claude Code / Agent Skills). |
| `colors_and_type.css` | All design tokens — colours, type, spacing, radii, shadows, motion. |
| `styles.css` | Entry stylesheet — `@import`s `colors_and_type.css`. Link this one. |
| `fonts/Ethnocentric-Regular.otf` | Logo font (Ethnocentric — wordmark only). |
| `assets/` | Logos and brand marks (jpg + transparent PNG versions). |
| `preview/` | Small HTML cards that populate the Design System tab. |
| `components/` | Exported React components. **Components:** `Button` (`components/Button/`) — pill button, six variants (primary/secondary/accent/ghost/soft/dark), three sizes. |
| `research/website-content-checklist.txt` | Official content checklist from MIF — what content is needed for launch. |
| `research/ja-africa-reference.md` | Notes on the JA Africa reference site. |
| `ui_kits/website/` | 5-page marketing site: `index.html` (Home), `programmes.html`, `about.html`, `partners.html`, `contact.html`. |

---

## Content fundamentals

### Voice & tone

Afrimmak speaks in a **mission-driven, partnership-focused** voice — confident
but not corporate, warm but not cute. The tone is closest to **JA Africa**
(`ja-africa.org`): formal-ish, plain-spoken, and grounded in impact and
partnership rather than startup hustle.

- **POV:** "**We**" for the organisation; "**young people**", "**Africa's youth**", or "**the next generation**" for the subject. Use "**you**" sparingly — mostly in CTAs and forms ("Your gift funds…").
- **Verbs to lead with:** *empower, equip, prepare, inspire, deliver, train, back, partner, build*. (Not: *ship, hustle, disrupt, leverage*.)
- **Phrasing patterns:**
  - "the next generation of leaders, entrepreneurs, and change-makers"
  - "the skillset and mindset to shape their futures"
  - "bridge the gap between school learning and real-world workplace skills"
- **Casing:** Title Case for section labels and program names. Hero headlines are **UPPERCASE in Ethnocentric**. Body is sentence case.
- **Numbers:** Always exact and large. "1,296,854 Learning Experiences", not "over 1 million". Trust is built through specificity.
- **Spelling:** Commonwealth / British English ("organisation", "honours", "programme" only for formal program titles, otherwise "program").
- **Punctuation:** Em-dashes for emphasis. Avoid exclamation points except in donation/CTA copy ("Donate today").

### Vibe

Hopeful, sun-lit, partnership-focused, continental-scale. Mission-grade. Avoid
corporate jargon ("synergy", "leverage", "stakeholders"). Avoid startup-bro
language ("ship", "hustle", "crush it"). Prefer plain, formal-but-warm words:
**empower, equip, prepare, inspire, deliver, train, partner, back, build**.

### Emoji & symbols

- **Emoji:** Used sparingly in social copy only — never in product UI, slides,
  or formal materials. The lightbulb 💡 and 🌍 may appear in tweets / Instagram.
- **Unicode glyphs:** Avoid arrows like `→` in body copy unless functional
  (e.g. "Apply → Interview → Onboard"). Use real chevrons / SVG in UI.

### Example copy

> **Hero:** Empowering Africa's Next Generation.
> **Sub:** We equip Africa's youth with the skillset and mindset to shape
> their futures and transform their communities.
> **CTA:** Learn more / Donate today

> **Section subhead:** Bridge the gap between school learning and real-world workplace skills.

> **Stats voice:** 1,296,854 Learning Experiences · 2,204 Institutions · 2,684 Teachers · 3,547 Volunteers.

> **Program names:** Work Readiness · Entrepreneurship Education · Financial Health.

### Do / Don't

| Do | Don't |
|---|---|
| "We equip Africa's youth." | "We provide capacity-building solutions to youth stakeholders." |
| "Donate today." | "Click here to begin your donation journey." |
| "Through innovative programs and partnerships…" | "We help kids do startups." |
| "Entrepreneurship Education" | "Builder Bootcamp™" |

---

## Visual foundations

### Color

Three brand colors, used **boldly and confidently**:

- **Afrimmak Blue `#0048A8`** — primary; trust, depth, leadership. Used for
  primary buttons, links, headers, the "AFRi" half of the wordmark.
- **Afrimmak Green `#6FC52E`** — secondary; growth, youth, energy. Used for
  success states, secondary actions, highlights, the "MMAK" half of the wordmark.
- **Afrimmak Red `#EE2A30`** — accent only; the bulb. Used sparingly for
  alerts, "new" badges, the spark, important callouts. **Never** as a large
  background area.
- **Ink `#0A1A33`** — text. Almost‑black with a navy undertone.
- **Paper `#FFFFFF`** — primary canvas. A warm off‑white `#FBFAF6` is the
  long‑form / editorial alternate.

Full scales (50–900) are in `colors_and_type.css`. The system is **light‑first**;
a dark theme is not part of v0.

### Type

- **Display — Montserrat** (700 / 800 / 900). Heavy geometric sans. Used for
  **everything visual in the UI**: H1–H4, eyebrows, button labels, stat
  numbers, program titles, footer headlines. Sentence/Title case (not all-caps);
  letterspacing slightly tight (`-0.02em`).
- **Body — Inter** (400 / 500 / 600 / 700). Neutral UI sans; reads cleanly
  at small sizes; pairs with Montserrat without competing.
- **Friendly — Nunito** (600 / 700 / 800). Optional, for marketing surfaces
  that want extra warmth (testimonials, stat cards).
- **Mono — JetBrains Mono.** Code blocks, data, tabular figures.
- **Logo font — Ethnocentric Regular** (`fonts/Ethnocentric-Regular.otf`).
  **Used ONLY for the inline AFRiMMAK wordmark** when an image isn't possible
  (e.g. tiny inline lockup in print, an email subject line, a code-rendered
  social card). Never for headings, body, or UI — Ethnocentric is too wide
  and too distinctive to wear elsewhere. The canonical rendering of the
  Afrimmak mark is the image at `assets/afrimmak-logo.png`; use that whenever
  possible.

The CSS variable layout reflects this split:
```css
--font-display: 'Montserrat', system-ui, ...;
--font-body:    'Inter', system-ui, ...;
--font-friendly:'Nunito', system-ui, ...;
--font-logo:    'Ethnocentric', 'Montserrat', system-ui, ...;
```

### Spacing & rhythm

8‑pt grid with a 4‑pt half‑step. Use `--space-1` through `--space-24`. Cards
breathe — never crowd content to the edge. Recommended internal padding for a
card is `--space-6` (24px) minimum; `--space-8` (32px) for hero/feature cards.

### Radii

The wordmark's letterforms are **bold and softly rounded**, so the system
favors **generous corners**. Cards and panels use `--radius-lg` (16px) or
`--radius-xl` (24px); buttons are `--radius-pill` (999px) by default. Sharp
corners are reserved for utility/data surfaces only.

### Shadows / elevation

Soft, low‑opacity, navy‑tinted shadows (`rgba(10, 26, 51, x)`) — never grey or
black. Brand shadows (`--shadow-brand`, `--shadow-accent`) carry the blue or
red glow under hero buttons and feature cards.

### Borders

1px borders default to `--border-1` (`#E5E7EC`). Stronger surfaces use 2px
`--border-2`. Brand‑colored borders (`--border-brand`) are used on selected
states and feature CTAs.

### Backgrounds

- **Default surface:** flat paper white. No gradients.
- **Hero/feature surface:** solid blue (`--blue-500`) or solid green
  (`--green-500`) — full‑bleed, with the wordmark or photography overlaid.
- **Photographic backgrounds:** warm‑lit, daylight, real people, real African
  contexts — classrooms, workshops, markets, cohort groups, founders at
  whiteboards. **Avoid:** stock "diversity" tropes, generic shutterstock,
  hands‑on‑globes imagery, b&w photography (Afrimmak is color‑forward).
- **Pattern:** an optional **dot grid** in `--ink-100` at 8% opacity can sit
  behind feature sections; otherwise keep backgrounds clean.
- **Gradients:** **avoid** purple/blue gradients. If a gradient is needed,
  use a tight blue→deeper‑blue tonal shift only.

### Animation & easing

- **Default easing:** `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`) — quick
  out, gentle landing.
- **Durations:** 120 / 220 / 420 ms. Avoid anything slower; the brand is kinetic.
- **Bounce:** reserved for the lightbulb mark and "win" moments
  (`--ease-bounce`).
- **No parallax**, no auto‑playing video on hero, no fade‑in‑on‑scroll fests.
  Motion should feel snappy and confident, not show‑offy.

### Interaction states

- **Hover (buttons):** background darkens one step (e.g. `--blue-500 → --blue-600`)
  and shadow lifts (`--shadow-md → --shadow-brand`). 120ms.
- **Hover (links):** color shifts to `--blue-700` and underline appears.
- **Press / active:** `transform: scale(0.97)` + shadow flattens. No color flash.
- **Focus:** 3px outline in `--blue-500` at 40% opacity, offset 2px.
- **Disabled:** 40% opacity, `cursor: not-allowed`, no shadow.

### Transparency, blur, scrim

- **Glassy navigation:** a top nav over imagery uses
  `backdrop-filter: blur(12px)` + `background: rgba(255,255,255,0.85)`.
- **Image overlays:** when text sits on a photo, use a **solid blue scrim**
  at 70% opacity (`rgba(0,72,168,0.7)`) — not a black gradient. This is a
  signature.
- **Capsules > protection gradients:** prefer wrapping copy in a solid
  capsule/card when it overlaps imagery, instead of relying on a fading
  gradient to make it legible.

### Imagery tone

Warm, daylight, color‑saturated photography of real people in real African
contexts. Skin tones rendered warm and true (avoid teal/orange grading). Slight
grain is okay; heavy filters are not. Group shots > solo portraits.

### Layout rules

- **Containers:** `--container-base` (1080px) is the default. Editorial uses
  `--container-narrow` (720px). Marketing heroes go to `--container-wide`
  (1280px).
- **Fixed elements:** top nav is sticky (transparent on hero, solid on scroll).
  No fixed side rails on marketing. Floating "Apply" CTA appears bottom‑right
  on long pages.
- **Asymmetry:** Afrimmak layouts are bold but not chaotic. Prefer 2/3–1/3
  splits over symmetric 1/2–1/2.

### Cards

Default card: white background, 1px `--border-1` border, `--radius-lg`
(16px) corners, `--shadow-sm` elevation, `--space-6` (24px) internal padding.
On hover, shadow lifts to `--shadow-md` and the card translates `-2px` up.

Feature card: 2px solid `--blue-500` border, no shadow, `--radius-xl` (24px).
"Pop" card (used for hero CTAs): solid `--blue-500` background, white text,
`--shadow-brand`, `--radius-2xl` (32px).

---

## Iconography

The Afrimmak brand mark itself contains the only **fully custom** illustration
in the system: a **red lightbulb with a stylised figure (arms raised, head as
the bulb's filament)** — this is the "spark" symbol and should only be used
as part of the official lockup. Do not redraw or remix it as a standalone icon
without sign‑off.

For UI iconography, **no proprietary icon set was provided**. The system
substitutes **[Lucide](https://lucide.dev)** — a clean, friendly, 1.75px‑stroke
open‑source set whose softly rounded line caps match the wordmark's
letterforms well. Lucide is loaded from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Or per‑icon SVG from `https://unpkg.com/lucide-static/icons/<name>.svg`.

**Stroke width:** 1.75–2px.
**Size scale:** 16 / 20 / 24 / 32 / 48 px.
**Color:** inherit (`currentColor`). Brand‑color icons are used only for
status / category (success → green, alert → red, info → blue).

**Emoji** is not used in UI or formal materials. It may appear in social copy.
**Unicode glyphs** (→, ✓, ★) are avoided in favor of real Lucide SVGs.

> **Substitution flag:** if Afrimmak has an in‑house icon set (Figma library,
> SVG sprite, icon font), please attach it and we'll swap Lucide out.

---

## How to use this system

1. Link `colors_and_type.css` into any HTML you produce.
2. Use **only** the tokens / semantic variables — never hardcode hex codes.
3. Use the logo from `assets/afrimmak-logo.png` (transparent) or
   `assets/afrimmak-wordmark.png` (without the tagline) — never the JPG with
   the white square unless the surface is also pure white.
4. For new components, look in `ui_kits/website/` first for an existing
   pattern.

---

## Caveats & open questions

- **No codebase, Figma, or live website was provided.** All visual decisions
  are inferred from the logo + tagline.
- **Fonts — partial.** Ethnocentric Regular is installed and reserved
  exclusively for the inline AFRiMMAK wordmark (`fonts/Ethnocentric-Regular.otf`).
  Montserrat (display), Inter (body), and Nunito (friendly) are loaded from
  Google Fonts. The real Afrimmak UI typeface, if different from Montserrat,
  is not yet confirmed.
- **No real product copy** was provided, so all sample copy in this system is
  written by us in the inferred Afrimmak voice and should be reviewed.
- **No icon set** was provided; we substituted Lucide.
- **Photography library** is not bundled; we recommend Afrimmak source a
  shoot under the imagery tone described above.
- **Programs / sub‑brands:** if Afrimmak has named programs (e.g. fellowships,
  bootcamps, scholarships), please share so we can model them.

---

## Asks for the user

To get this from **v0** to **v1**, we'd love:

1. **The live website URL** (or attach the codebase / Figma) so we can
   verify the real palette, type, and component patterns.
2. **The font file(s)** used in the wordmark and any UI guidelines.
3. **A list of programs / products** Afrimmak offers (we built a generic
   marketing‑site UI kit; we'd like to model the real surfaces).
4. **Brand photography** — even 4–6 real photos would massively sharpen the
   imagery direction.
5. Confirmation of **tone** examples (an "About us" paragraph, a recent
   email, a tweet) so we can tighten the voice guide.
