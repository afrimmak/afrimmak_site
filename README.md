# AFRIMMAK Website

Marketing site for AFRIMMAK — a youth-empowerment project of the Mendez Impact
Foundation, The Gambia. Built with Astro + TypeScript, styled entirely from the
official AFRIMMAK design system.

## Run it
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview the production build
```

## Where things live
- `src/pages/` — the 5 pages: Home, Programmes, About, Partners, Contact
- `src/layouts/BaseLayout.astro` — shared shell (Nav, Footer, fonts, icons)
- `src/components/` — Nav, Footer, Hero
- `src/styles/tokens.css` — design tokens (colours, type, spacing, radii)
- `src/styles/site.css` — component classes (buttons, cards, badges…)
- `design-system/` — the full official design system handoff (read this first)
- `CLAUDE.md` — working rules for building with Claude Code

## Status
Pre-launch. Pages ship with honest placeholders (photo slots, `—` stats,
placeholder testimonials) that double as a content brief. Forms are UI-only
until wired to a backend.

## Working with Claude Code
Open this folder in Claude Code — it reads `CLAUDE.md` automatically. Ask it to
refine pages, add sections, or (later) wire up the forms. It will follow the
design system in `design-system/`.
