## Why

The portfolio currently uses a custom editorial theme (Fraunces serif + Source Sans 3, warm cream palette, teal accent) that diverges from the [Geist Design System](https://vercel.com/geist/introduction) — Vercel's high-contrast, developer-tool aesthetic built on Geist Sans/Mono, structured color scales, and material presets. Adopting Geist aligns the site with a modern, precision-focused visual language that reinforces Design Engineer positioning: clarity, craft, and production-grade polish. The multi-page site structure is in place; this change updates the visual foundation and component styling without altering content or information architecture.

## What Changes

- Replace custom design tokens in `src/styles/tokens.css` with Geist-aligned CSS custom properties (colors, typography, materials, spacing)
- Load **Geist Sans** and **Geist Mono** via the `geist` npm package; remove Fraunces and Source Sans 3 from `BaseLayout.astro`
- Restyle global utilities in `src/styles/global.css` to use Geist typography scale (`text-heading-*`, `text-label-*`, `text-copy-*` equivalents) and material presets (`material-base`, borders, radii)
- Update shared components (`Nav`, `Footer`, `Card`, `Tag`, `Prose`, buttons, form inputs) to Geist visual patterns
- Restyle section components (`CapabilityGrid`, `MasonryGallery`, `StatCards`, etc.) with Geist grid borders, surfaces, and label typography
- Apply Geist styling across all six pages (home, about, work, teaching, resume, contact) and layouts (`BaseLayout`, `CaseStudyLayout`, `ArticleLayout`)
- Support light theme as default; respect `prefers-color-scheme: dark` with Geist dark tokens where documented
- Preserve accessibility: focus rings, skip link, contrast ratios, and `prefers-reduced-motion`

## Capabilities

### New Capabilities

- `geist-foundations`: Geist font loading, CSS design tokens (colors, typography scale, materials, spacing), and theme variables
- `geist-ui-migration`: Shared components, section layouts, and page-level styling migrated from custom editorial theme to Geist visual system

### Modified Capabilities

<!-- No existing openspec/specs/ requirements — visual refactor only; page behavior and IA unchanged -->

## Impact

- **Dependencies:** Add `geist` (fonts); optionally `@fontsource-variable/geist` as fallback — no React/`@vercel/geistcn` required for Astro static site
- **Styles:** `src/styles/tokens.css`, `src/styles/global.css` — full token rewrite
- **Layout:** `src/layouts/BaseLayout.astro` — font imports
- **Components:** `src/components/*.astro`, `src/components/sections/*.astro` — class and style updates
- **Pages:** All routes under `src/pages/` — markup/class adjustments for Geist typography and surfaces
- **Unchanged:** Content pipeline, auth gate, Cisco links, GitHub Pages deploy, page routes and IA
