## Why

The portfolio site scaffold exists with basic home, work, writing, and about routes, but it does not match the intended information architecture or the editorial design direction shown in mockups. Michelle's positioning research (`docs/role-positioning-research.md`) calls for a Design Engineer identity with enterprise credibility, teaching differentiation, and proof through shipped work — yet the current homepage is a minimal hero plus two card grids, with no dedicated teaching, resume, or contact pages, no core-capabilities section, no masonry project gallery, no peer quotes, and no resume callout. This change closes the gap between the live scaffold and the full multi-page portfolio experience.

## What Changes

- Expand site information architecture to six primary pages: **home**, **about**, **work**, **teaching**, **resume**, and **contact**
- Redesign the homepage with eight sections: hero, core-capabilities feature cards, masonry gallery for high-impact project work, teaching article thumbnails, resume callout, peer quotes, contact preview, and footer
- Redesign the about page to match the editorial two-column layout: narrative copy plus stat cards (10+ years, 90K+ users, F500 scale) grounded in `docs/role-positioning-research.md`
- Rename `/writing` route to `/teaching` to align with enablement positioning (**BREAKING** — add redirect from `/writing` to `/teaching`)
- Add dedicated `/resume` page with downloadable or printable resume content and a homepage callout CTA
- Add dedicated `/contact` page with LinkedIn primary contact and footer social links
- Build reusable section components: `CapabilityGrid`, `MasonryGallery`, `TestimonialQuotes`, `StatCards`, `ResumeCallout`, `SectionHeader`
- Source peer quotes from `work/supporting/testimonials/` and project content from `work/index.yaml`
- Update global navigation and footer to reflect the six-page IA
- Apply editorial visual design from mockups: serif display headings, bordered capability grid, muted accent labels

## Capabilities

### New Capabilities

- `portfolio-site-navigation`: Six-page IA, persistent nav, footer links, and `/writing` → `/teaching` redirect
- `portfolio-home-page`: Full homepage with hero, capabilities grid, masonry work gallery, teaching thumbnails, resume callout, peer quotes, contact preview, and footer
- `portfolio-about-page`: About page with positioning narrative, stat cards, expertise framing, and career timeline
- `portfolio-work-pages`: Work index with masonry layout for high-impact case studies and existing detail pages
- `portfolio-teaching-pages`: Teaching article index and detail pages (replaces `/writing` routes)
- `portfolio-resume-page`: Resume page with structured experience, skills, and homepage callout
- `portfolio-contact-page`: Contact page with LinkedIn CTA and social links

### Modified Capabilities

<!-- No existing openspec/specs/ requirements to modify — prior portfolio change specs live in michelle-sargent-portfolio-website and are superseded by this change's specs -->

## Impact

- **Pages:** `src/pages/index.astro`, `about.astro`, `work/index.astro`, new `teaching/`, `resume.astro`, `contact.astro`; remove or redirect `writing/`
- **Components:** New section components under `src/components/`; updates to `Nav.astro`, `Footer.astro`, `Card.astro`
- **Styles:** `src/styles/global.css`, `tokens.css` — grid borders, masonry layout, stat cards, section labels
- **Content pipeline:** `src/lib/content/` — may add helpers for testimonials, capabilities copy, resume data
- **Content source:** `work/index.yaml`, `work/supporting/testimonials/`, `docs/role-positioning-research.md` (read-only reference)
- **Navigation config:** `src/lib/site.ts` — route labels and CTA links
- **No changes** to password gate, Cisco link classification, or GitHub Pages deploy pipeline
