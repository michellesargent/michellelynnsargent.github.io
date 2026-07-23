## Context

The Astro portfolio scaffold is live with password gate, content pipeline, and four routes (`/`, `/work`, `/writing`, `/about`). The homepage renders a hero plus two uniform card grids. Navigation labels "Writing" instead of "Teaching." Contact lives only on the About page. There is no resume route.

Design mockups (July 2026) define an editorial two-column About section and a bordered 3×2 core-capabilities grid. Positioning research (`docs/role-positioning-research.md`) establishes **Design Engineer** as the primary identity with six proof dimensions: AI innovation, design systems, UX strategy, code-confident design, digital transformation, and teaching.

Content sources remain unchanged: `work/index.yaml` for catalog, `work/case-studies/` and `work/articles/` for narratives, `work/supporting/testimonials/` for peer quotes.

## Goals / Non-Goals

**Goals:**

- Six-page IA: home, about, work, teaching, resume, contact
- Homepage as a single-scroll showcase: hero → capabilities → masonry work → teaching → resume callout → quotes → contact → footer
- About page matching mockup: narrative left, stat cards right
- `/teaching` route replacing `/writing` with redirect for bookmarks
- Reusable section components shared across pages
- Copy and stats grounded in role-positioning research and work catalog
- Preserve existing auth gate, Cisco link handling, and GitHub Pages deploy

**Non-Goals:**

- New content authoring in `work/` bodies (read-only consumption)
- Resume PDF generation or download hosting (structured HTML page for v1)
- Contact forms or email
- Client-side filtering on work index (theme tags remain visual only for v1)
- Dark mode
- CMS or runtime content APIs

## Decisions

### 1. Information architecture

**Decision:**

| Route | Page | Primary content |
|-------|------|-----------------|
| `/` | Home | All eight sections in scroll order |
| `/about` | About | Narrative, stat cards, expertise framing, timeline |
| `/work` | Work | Masonry gallery of case studies + link to detail |
| `/work/[slug]` | Case study | Existing detail layout (unchanged) |
| `/teaching` | Teaching | Article index (replaces `/writing`) |
| `/teaching/[slug]` | Article | Existing article layout (unchanged) |
| `/resume` | Resume | Structured experience, skills, education |
| `/contact` | Contact | LinkedIn CTA, GitHub link, availability note |

**Navigation:** Home · About · Work · Teaching · Resume · Contact

**Redirect:** `/writing` and `/writing/[slug]` → `/teaching` and `/teaching/[slug]` via Astro redirects in `astro.config.mjs`.

**Rationale:** "Teaching" matches enablement positioning per research doc. Dedicated resume and contact pages give hiring managers direct URLs. Homepage contact section previews the full contact page.

### 2. Homepage section order and data sources

**Decision:** Fixed scroll order on `/`:

1. **Hero** — `SITE` config + positioning research headline
2. **Core capabilities** — static copy array in `src/lib/content/capabilities.ts` (six items from mockup, aligned to research themes)
3. **High-impact work** — masonry gallery from `getCaseStudies()` filtered `featured: true`, fallback to all published case studies
4. **Teaching articles** — thumbnail cards from `getArticles()` sorted by date, up to 4 featured
5. **Resume callout** — CTA block linking to `/resume` with one-line value prop
6. **Peer quotes** — parsed from `work/supporting/testimonials/README.md` or a typed `src/lib/content/testimonials.ts` module
7. **Contact preview** — LinkedIn button + link to `/contact`
8. **Footer** — existing `Footer.astro` (LinkedIn + GitHub)

**Rationale:** Matches user spec and mockup hierarchy. Capabilities copy is stable marketing text — not duplicated in `work/` markdown. Testimonials are few enough to maintain in a typed module sourced from supporting folder content.

### 3. Component architecture

**Decision:** New Astro components under `src/components/sections/`:

| Component | Used on |
|-----------|---------|
| `SectionHeader.astro` | All sectioned pages — eyebrow label, title, optional subtitle |
| `CapabilityGrid.astro` | Home |
| `MasonryGallery.astro` | Home, Work index |
| `TeachingThumbnails.astro` | Home, Teaching index |
| `StatCards.astro` | About, optionally Home |
| `TestimonialQuotes.astro` | Home |
| `ResumeCallout.astro` | Home |
| `ContactCTA.astro` | Home, Contact |

**Rationale:** Section components encapsulate mockup layout (bordered grids, stat cards, masonry) without bloating page files. Existing `Card.astro` remains for simple list cards; masonry uses variable-height items with CSS columns.

### 4. Visual design — editorial minimalism (mockup-aligned)

**Decision:**

- **Background:** `--color-bg: #f5f1ed` (warm beige, mockup match)
- **Display type:** Fraunces serif (already in tokens) for headings and stat numbers
- **Body:** Source Sans 3 (existing)
- **Section labels:** Small caps eyebrow with em-dash prefix (`— ABOUT`, `— EXPERTISE`), muted purple-grey (`#8a8494`)
- **Capability grid:** CSS Grid 3×2 with `border-right` / `border-bottom` on cells — no card shadows, no border-radius on grid
- **Stat cards:** Bordered boxes, large serif stat, bold label, muted description
- **Masonry:** CSS `columns` with `break-inside: avoid` on items; varied thumbnail aspect ratios from case study assets

**Rationale:** Mockups show restrained editorial layout distinct from generic card-ui portfolios. Aligns with Design Engineer craft signal (taste + systems).

### 5. Core capabilities content

**Decision:** Six static capabilities in `capabilities.ts`, indexed 01–06:

1. AI Innovation
2. Design Systems
3. UX Strategy
4. Code-Confident Design
5. Digital Transformation
6. Teaching & Curriculum Design

Copy from mockup; descriptions reference enterprise scale per positioning research.

**Rationale:** Capabilities are positioning statements, not project entries. Keeping them in code avoids polluting `work/` catalog.

### 6. About page layout

**Decision:** Two-column layout at `min-width: 768px`:

- **Left (60%):** Section label, headline ("Where design thinking meets engineering precision."), two narrative paragraphs from positioning research executive summary
- **Right (40%):** Three `StatCards` — 10+ Years, 90K+ Users, F500 Scale

Below fold: expertise framing (DE / UXE / Design Technologist), career timeline, skills grid — retained from current about page, restyled to match editorial system.

**Rationale:** Direct mockup implementation. Stats sourced from research doc (13 years → "10+", UXEP user scale, Fortune 500 clients).

### 7. Resume page content model

**Decision:** `src/lib/content/resume.ts` exports structured sections:

- Summary (Design Engineer positioning)
- Experience (roles from about timeline + case study metadata)
- Skills (design, engineering, AI-native — from about page)
- Education (BFA, UConn — from research doc)

No PDF for v1. Page styled for print via `@media print` rules.

**Rationale:** Hiring managers need a scannable resume URL. Structured TS module keeps resume in sync with about content without a separate markdown file.

### 8. Testimonials loading

**Decision:** `src/lib/content/testimonials.ts` exports typed `Testimonial[]` with `quote`, `author`, `context`. Initial data from `work/supporting/testimonials/README.md` (Qiwen quote + placeholders for future recognition items).

**Rationale:** Testimonials README is not machine-parseable markdown tables reliably. Typed module with source comment is maintainable for 3–5 quotes.

### 9. Masonry gallery behavior

**Decision:** CSS multi-column masonry (`column-count: 3` desktop, `2` tablet, `1` mobile). Each item: thumbnail, title, organization, one-liner, link to `/work/[slug]`. Items with `featured: true` appear first.

**Alternatives considered:**
- **JS masonry library** — rejected; unnecessary client JS for static portfolio
- **Uniform card grid** — rejected; user explicitly requested masonry for high-impact work

## Risks / Trade-offs

- **[Risk] `/writing` URL breakage** → Mitigation: Astro redirects for `/writing` and `/writing/*` to `/teaching` equivalents
- **[Risk] Masonry layout inconsistent across browsers** → Mitigation: CSS columns with `break-inside: avoid`; test Safari/Firefox; accept minor column balance variance
- **[Risk] Capabilities copy drifts from research doc** → Mitigation: Reference `docs/role-positioning-research.md` in `capabilities.ts` header comment; review on positioning updates
- **[Risk] Testimonials content sparse at launch** → Mitigation: Render section only when ≥1 quote exists; graceful hide on home
- **[Risk] Resume duplicates About content** → Mitigation: Single `resume.ts` source; About links to resume for full detail
- **[Risk] Stat numbers need verification** → Mitigation: Flag 90K+ users as UXEP platform metric in spec; Michelle confirms before publish

## Migration Plan

1. Add section components and content modules (`capabilities.ts`, `testimonials.ts`, `resume.ts`)
2. Update tokens and global styles for mockup-aligned design
3. Rebuild homepage with eight sections
4. Rebuild about page with two-column layout
5. Add masonry layout to work index
6. Create `/teaching` routes (copy from `/writing`), add redirects, remove `/writing` pages
7. Create `/resume` and `/contact` pages
8. Update `Nav.astro` and internal links across site
9. Verify all pages behind auth gate; run build in CI

**Rollback:** Revert to prior commit. Redirects and new routes are static — no data migration.

## Open Questions

1. **90K+ users stat** — Confirm exact metric and wording with Michelle (UXEP platform users vs. broader scope).
2. **Additional testimonials** — Challenge coin and leadership board recognition: include as quotes or omit until full text is available?
3. **Resume print/PDF** — Add "Print resume" button for v1 or defer to v1.1?
4. **Homepage contact section** — Duplicate full contact page content or keep as minimal preview with CTA?
