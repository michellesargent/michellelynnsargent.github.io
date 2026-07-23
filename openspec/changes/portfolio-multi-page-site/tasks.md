## 1. Design tokens and shared styles

- [x] 1.1 Update `src/styles/tokens.css` with mockup-aligned beige background (`#f5f1ed`), muted purple-grey eyebrow accent, and grid border tokens
- [x] 1.2 Add global styles in `src/styles/global.css` for section eyebrows, bordered grids, stat cards, and masonry column layout
- [x] 1.3 Add `@media print` rules for resume page

## 2. Content modules

- [x] 2.1 Create `src/lib/content/capabilities.ts` with six core capability items (copy from mockup, aligned to `docs/role-positioning-research.md`)
- [x] 2.2 Create `src/lib/content/testimonials.ts` with typed testimonials sourced from `work/supporting/testimonials/README.md`
- [x] 2.3 Create `src/lib/content/resume.ts` with structured summary, experience, skills, and education sections
- [x] 2.4 Update `src/lib/site.ts` navigation config for six-page IA (Home, About, Work, Teaching, Resume, Contact)

## 3. Section components

- [x] 3.1 Create `src/components/sections/SectionHeader.astro` (eyebrow label, title, optional subtitle)
- [x] 3.2 Create `src/components/sections/CapabilityGrid.astro` (3×2 bordered grid with numbered cards)
- [x] 3.3 Create `src/components/sections/MasonryGallery.astro` (CSS columns masonry for case study cards)
- [x] 3.4 Create `src/components/sections/TeachingThumbnails.astro` (article thumbnail cards)
- [x] 3.5 Create `src/components/sections/StatCards.astro` (bordered stat boxes for About page)
- [x] 3.6 Create `src/components/sections/TestimonialQuotes.astro` (peer quote blocks)
- [x] 3.7 Create `src/components/sections/ResumeCallout.astro` (homepage CTA to `/resume`)
- [x] 3.8 Create `src/components/sections/ContactCTA.astro` (LinkedIn button + link to `/contact`)

## 4. Navigation and routing

- [x] 4.1 Update `src/components/Nav.astro` with six-page navigation and active state for all routes
- [x] 4.2 Update `src/components/Footer.astro` if needed for consistent footer across new pages
- [x] 4.3 Add Astro redirects in `astro.config.mjs` for `/writing` → `/teaching` and `/writing/:slug` → `/teaching/:slug`
- [x] 4.4 Create `src/pages/teaching/index.astro` and `src/pages/teaching/[slug].astro` (migrate from `writing/`)
- [x] 4.5 Remove `src/pages/writing/` pages after teaching routes are verified
- [x] 4.6 Audit and update all internal links from `/writing` to `/teaching` across components and pages

## 5. Homepage rebuild

- [x] 5.1 Rebuild `src/pages/index.astro` with hero section and Design Engineer positioning
- [x] 5.2 Add core capabilities section using `CapabilityGrid`
- [x] 5.3 Add masonry work gallery section using `MasonryGallery`
- [x] 5.4 Add teaching article thumbnails section using `TeachingThumbnails`
- [x] 5.5 Add resume callout section using `ResumeCallout`
- [x] 5.6 Add peer quotes section using `TestimonialQuotes`
- [x] 5.7 Add contact preview section using `ContactCTA`

## 6. About page redesign

- [x] 6.1 Rebuild `src/pages/about.astro` with two-column layout (narrative + stat cards)
- [x] 6.2 Add positioning narrative copy from `docs/role-positioning-research.md`
- [x] 6.3 Integrate `StatCards` with 10+, 90K+, and F500 stats
- [x] 6.4 Retain and restyle expertise framing, career timeline, and skills sections
- [x] 6.5 Add link to `/contact` in about contact area

## 7. Work, teaching, resume, and contact pages

- [x] 7.1 Update `src/pages/work/index.astro` to use masonry gallery layout and section header
- [x] 7.2 Build `src/pages/teaching/index.astro` with article grid and teaching positioning header
- [x] 7.3 Build `src/pages/resume.astro` rendering structured resume content with print styles
- [x] 7.4 Build `src/pages/contact.astro` with LinkedIn CTA, GitHub link, and editorial header

## 8. Verification

- [x] 8.1 Run `npm run build` and confirm all six routes plus redirects compile without errors
- [x] 8.2 Verify all pages render behind auth gate with correct section order on homepage
- [x] 8.3 Confirm no remaining `/writing` links in built output
- [x] 8.4 Spot-check responsive layout for homepage, about two-column, and masonry gallery at mobile/tablet/desktop breakpoints
