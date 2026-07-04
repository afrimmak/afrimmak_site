# Afrimmak Website UI Kit

A 5-page marketing site for **AFRIMMAK** — a project of the **Mendez Impact
Foundation**, based in **The Gambia**. Built directly from the official
content checklist (`research/website-content-checklist.txt`).

This kit is designed for an **early-stage organisation**: pages ship with
explicit content placeholders that double as a briefing document for whoever
is gathering content. As real content arrives, the `<Placeholder>` slots are
replaced one-by-one.

## Pages (all click-linked)

| File | What |
|---|---|
| `index.html`      | **Home** — hero + early-stage stats + 3 programmes + testimonial slots + partner strip + apply CTA. |
| `programmes.html` | **Programmes** — 3 detailed programme cards (with photo slot, fact rows, status pill), application steps, FAQ. |
| `about.html`     | **About** — mission, vision, story, problem, values, founder, team, MIF parent-org note. |
| `partners.html`  | **Partners** — partner types, partner logo grid, endorsement quote slot, partnership-enquiry card. |
| `contact.html`   | **Contact** — form with enquiry-type filter, WhatsApp big card, addresses by enquiry type, social. |

## Components

| File | What |
|---|---|
| `Placeholder.jsx` | `<Placeholder kind="Photo \| Video \| Logo \| Quote \| Content \| Form">` — dashed-border slot with a "Needs: X" pill. Plus `<DraftTag>` for tagging draft numbers. |
| `Nav.jsx`         | Sticky top nav with the 5-page IA; highlights current page; Donate CTA in red. |
| `Hero.jsx`        | Home hero — headline, sub, Apply/Learn-More CTAs, and a "Needs: Video" slot on the right. |
| `Progress.jsx`    | Early-stage stat strip — "—" dashes with "Pending" badges and an honest disclaimer. |
| `Programs.jsx`    | Featured 3 programmes (homepage). |
| `Testimonials.jsx`| Voices section + partner strip with empty-state behaviour. |
| `ApplyCTA.jsx`    | Bottom-of-home blue pop card with Apply / Learn More. |
| `Footer.jsx`      | Footer with MIF parent-org callout + WhatsApp/Facebook/Instagram social. |
| `PageShell.jsx`   | `<PageShell current="…">` wraps Nav + page body + Footer + donate overlay. `<PageBanner>` is the inner-page hero. |
| `ApplyOverlay.jsx`| Multi-step application modal. |
| `DonateOverlay.jsx`| Donation modal with recurring/one-time toggle. |
| `site.css`        | Page-level utility classes (`.btn`, `.card`, `.afr-container`, `.eyebrow`, etc.). |

## What's intentionally placeholder

Every block tagged with the **dashed border + "Needs: X"** pill is a content
slot the AFRIMMAK / MIF team should fill. Replacing a placeholder is just
swapping the `<Placeholder kind="…">` JSX for the real content. Examples:
- All photos site-wide (hero, programmes, founder, team, group)
- The 2–4 minute explainer video
- Real mission / vision / values copy
- Founder + team bios
- Partner logos and partner endorsement quote
- Real impact numbers (currently dashes with "Pending" badges)
- WhatsApp number, physical address, MIF logo

The dashed slots are designed to look intentional, not broken — they communicate
"this page is alive, this content is coming" rather than "this site is half-built".

## Interactions in the live prototype

- **Donate** (top-right nav, footer) → opens the donation modal.
- **Apply now** (hero, Programmes page, bottom CTA) → opens the multi-step
  application modal.
- **Programmes page** → click an FAQ to expand; status pills make programme
  state clear.
- **Contact page** → enquiry-type chips filter; form switches to a success state.
- **Partners page** → CTA to email `partners@afrimmak.org`.
