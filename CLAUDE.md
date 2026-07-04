# AFRIMMAK Website

Marketing site for **AFRIMMAK** — "Building Africa Through Young Minds" — a
youth-empowerment project of the **Mendez Impact Foundation**, based in **The
Gambia**. **The organisation is brand new** — the first competition cycle is
just getting under way.

## The programme (one competition, not three)
AFRIMMAK is a platform that empowers young Africans through entrepreneurship
and innovation competitions. We give students and young entrepreneurs the
opportunity to showcase their ideas, receive mentorship, connect with industry
leaders, and compete for funding and support. Our goal is to uncover Africa's
next generation of innovators and help them transform their ideas into
sustainable ventures — and in the process, provide solutions to Africa's
problems.

This is **one** programme/platform — a single entrepreneurship and innovation
**competition** — not a set of three separate programmes. When describing it:
- **What it is:** an entrepreneurship and innovation competition for students
  and young entrepreneurs.
- **What participants get:** mentorship, connections with industry leaders, a
  platform to showcase their ideas, and a chance to compete for funding and
  support.
- **The goal:** uncover Africa's next generation of innovators and help them
  turn ideas into sustainable ventures that solve real African problems.

Visitors do **not** apply through the website. There is no application flow —
site CTAs point people to the Competition page ("Learn more") or the Contact
page ("Get in touch"). Never add an "Apply" / "Register interest" button.

This project is already scaffolded and runs. Your job is to extend and refine
it, staying faithful to the design system in `design-system/`.

## Stack
- **Astro** (v4), static output — `npm run dev`, `npm run build`, `npm run preview`
- **TypeScript**
- **Plain CSS** with the design-system tokens (CSS custom properties). No Tailwind,
  no CSS-in-JS.
- **Lucide** icons via the `lucide` npm package (imported in `BaseLayout.astro`)
- Git + deployment are handled separately — **do not** init git or add hosting config.

## Source of truth: the design system
Everything visual comes from **`design-system/`** (the official AFRIMMAK design
system handoff). Before building or changing any UI:
1. Read `design-system/README.md` — brand, voice, visual foundations. Read it in full.
2. Read `design-system/SKILL.md` — the quick-reference rules.
3. Use tokens from `design-system/colors_and_type.css` (mirrored into
   `src/styles/tokens.css`). **Never hardcode colours, fonts, spacing, or radii** —
   always reference `var(--token)`.
4. `design-system/ui_kits/website/` holds the original reference pages
   (`index.html`, `programmes.html`, etc.) and JSX components. Note the site
   has since moved from three programmes to a single competition (see above);
   the reference pages predate that change. These are the
   canonical layouts — match them. The JSX is a cosmetic reference, not production code.
5. `design-system/preview/` has isolated component/token reference cards.

## Structure (already built)
- `src/styles/tokens.css` — design tokens (copy of the design-system file; the
  Ethnocentric @font-face path points at `/fonts/`)
- `src/styles/site.css` — page-level classes (`.btn`, `.card`, `.eyebrow`, `.badge`,
  `.photo`, etc.) ported from the design system
- `src/layouts/BaseLayout.astro` — the shell: `<head>`, Nav, Footer, Lucide init
- `src/components/Nav.astro`, `Footer.astro`, `Hero.astro`
- `src/pages/` — `index` (Home), `competition`, `about`, `partners`, `contact`
- `public/fonts/Ethnocentric-Regular.otf` — logo font (logo lockup only)
- `public/assets/` — logo + wordmark PNGs

## Brand rules (non-negotiable)
- **Colours:** Blue `--afr-blue #0048A8` (primary), Green `--afr-green #6FC52E`
  (secondary), Red `--afr-red #EE2A30` (**accent only** — Donate, small sparks).
  Ink `--ink-900 #0A1A33` for text. Colour is loud but purposeful.
- **Type:** **Montserrat** (display, 700–900) for all headings, eyebrows, buttons,
  stat numbers, programme titles — `var(--font-display)`. **Inter** for body
  (`var(--font-body)`). **Ethnocentric is the logo font ONLY** — never headings/body.
  Nunito (`--font-friendly`) for warm marketing moments only.
- **Logo:** use the wordmark/logo PNG in `public/assets/`. **Never recreate the
  AFRIMMAK wordmark as CSS text** (except a tiny inline lockup with `--font-logo`).
- **Radii:** generous — cards 16–24px, buttons pill (999px). Use `--radius-*`.
- **Shadows:** soft, navy-tinted `rgba(10,26,51,x)` — never grey/black. Use `--shadow-*`.
- **Icons:** Lucide, 1.75px stroke. **No emoji** in the UI.
- **Imagery:** warm daylight, saturated, real African contexts. Photo slots are
  labelled placeholders that double as a content brief — keep them until real
  photography arrives.
- **Voice:** optimistic, direct, verb-led, plain (empower, equip, prepare, build).
  British/Commonwealth spelling. Title Case headings, sentence case body. Avoid
  corporate jargon and startup-bro language.

## Honesty (critical — the org is pre-launch)
- **Do NOT invent statistics.** Impact numbers render as `—` with a note. The
  design deliberately ships honest placeholders. Never fabricate cohort counts,
  graduate numbers, or partner logos.
- Testimonials are clearly-labelled placeholders until real quotes exist.
- Forms are **UI-only** for now. The Contact form shows a note on submit. Wiring
  to a backend (Supabase/Formspree) is a later, separate task.

## Adding icons
`BaseLayout.astro` imports only the Lucide icons currently used (keeps the bundle
tiny — ~9KB). When you use a new `<i data-lucide="icon-name">`, add its PascalCase
export to the import list and the `icons` object in `BaseLayout.astro`.

## Workflow
- Build/verify one page at a time; run `npm run build` after changes.
- Test at **375px** (mobile-first — most users are on phones) and **1280px**.
- Keep Nav/Footer in `BaseLayout` only — never duplicate them into pages.
