## 1. Dependencies and font setup

- [x] 1.1 Add `geist` package to `package.json` and install
- [x] 1.2 Create `src/styles/fonts.css` importing Geist Sans and Geist Mono
- [x] 1.3 Update `BaseLayout.astro`: import `fonts.css`, remove Google Fonts links for Fraunces and Source Sans 3

## 2. Geist design tokens

- [x] 2.1 Rewrite `src/styles/tokens.css` with Geist color scales (`--ds-background-*`, `--ds-gray-*`, `--ds-blue-*`) and material radii/shadows
- [x] 2.2 Add legacy alias tokens (`--color-bg`, `--color-text`, `--color-accent`, etc.) mapping to Geist values for incremental migration
- [x] 2.3 Add optional `@media (prefers-color-scheme: dark)` token overrides if Geist dark values are documented
- [x] 2.4 Document Geist doc source URLs in a header comment on `tokens.css`

## 3. Global typography and utilities

- [x] 3.1 Update `src/styles/global.css` base styles (`body`, `a`, `:focus-visible`) to use Geist tokens
- [x] 3.2 Add Geist typography utility classes (`text-heading-*`, `text-label-*`, `text-copy-*`, `text-button-*`)
- [x] 3.3 Restyle global primitives: `.button`, `.button-primary`, `.button-secondary`, `.filter-button`, `.skip-link`
- [x] 3.4 Remove all `font-family: var(--font-display)` / Fraunces references from `global.css`
- [x] 3.5 Verify `prefers-reduced-motion` token overrides still apply

## 4. Shared components

- [x] 4.1 Migrate `Nav.astro` to Geist label typography and border/hover tokens
- [x] 4.2 Migrate `Footer.astro` to Geist secondary text and link hover states
- [x] 4.3 Migrate `Card.astro`, `Tag.astro`, and `Prose.astro` to Geist surfaces and type scale
- [x] 4.4 Migrate `AuthGate.astro` auth card and form controls to Geist material styling
- [x] 4.5 Update `CiscoLink.astro` and `InternalRef.astro` badge/label styles if needed

## 5. Section components

- [x] 5.1 Migrate `SectionHeader.astro` eyebrows and titles to Geist label/heading utilities
- [x] 5.2 Migrate `CapabilityGrid.astro` borders and cell typography to Geist grid aesthetic
- [x] 5.3 Migrate `MasonryGallery.astro` and `TeachingThumbnails.astro` card surfaces
- [x] 5.4 Migrate `StatCards.astro`, `TestimonialQuotes.astro`, `ResumeCallout.astro`, `ContactCTA.astro`

## 6. Pages and layouts

- [x] 6.1 Update homepage hero and section wrappers in `index.astro`
- [x] 6.2 Update `about.astro`, `contact.astro`, `resume.astro` typography and surfaces
- [x] 6.3 Update `work/index.astro` and `teaching/index.astro` listing layouts
- [x] 6.4 Update `CaseStudyLayout.astro` and `ArticleLayout.astro` detail headers and prose
- [x] 6.5 Revalidate resume `@media print` styles after token migration

## 7. Verification

- [x] 7.1 Run `npm run build` and fix any font import or CSS errors
- [x] 7.2 Visual spot-check all six primary routes plus one case study, one article, and auth gate
- [x] 7.3 Confirm no remaining references to Fraunces, Source Sans 3, or teal `#0d5c63` accent in `src/`
- [x] 7.4 Confirm keyboard focus ring and skip link still work on migrated pages

## 8. Icons, grid, theme, and typography polish

- [x] 8.1 Add `vercel-geist-icons` and `react-icons` with Astro React integration for SSR icons
- [x] 8.2 Create `Icon.tsx`, `IconWrap.astro`, and `ThemeSwitcher.astro` (Light / System / Dark)
- [x] 8.3 Create `GeistGrid.astro` with corner crosses for hero and capability sections
- [x] 8.4 Add dotted grid hero background on homepage
- [x] 8.5 Wire icons through nav-adjacent chrome, CTAs, contact, footer, and capability grid
- [x] 8.6 Extend theme tokens for explicit `data-theme` light/dark/system preference
- [x] 8.7 Apply Geist Sans + Mono pairing on eyebrows, indices, and stat values
