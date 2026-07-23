## Context

The portfolio is an Astro 5 static site with six pages, reusable section components, and a custom token layer (`tokens.css` + `global.css`). Typography uses Google Fonts (Fraunces display, Source Sans 3 body). Colors follow a warm editorial palette with teal accent (`#0d5c63`). Components are pure Astro with scoped/global CSS — no React, Tailwind, or component library today.

[Geist](https://vercel.com/geist/introduction) is Vercel's design system: Geist Sans/Mono typefaces, 10-step color scales (`--ds-gray-*`, `--ds-background-*`), typography utilities (`text-heading-*`, `text-label-*`, `text-copy-*`), and material presets (radii 6–16px, layered shadows). React components ship as `@vercel/geistcn`; foundations are documented as Markdown at `/geist/*.md`.

## Goals / Non-Goals

**Goals:**

- Adopt Geist foundations (fonts, colors, typography scale, materials) as the single source of visual truth
- Migrate all existing UI to Geist styling while preserving current page structure, content, and behavior
- Maintain WCAG contrast, keyboard focus, skip link, and reduced-motion support
- Keep the build lightweight: static Astro, no React runtime added solely for Geist components
- Use Geist's grid/border aesthetic for capability grids and card surfaces where it improves clarity

**Non-Goals:**

- Installing `@vercel/geistcn` React components or adding `@astrojs/react` for this change
- Full Tailwind CSS adoption (optional utility classes may mirror Geist scale in plain CSS)
- Geist Pixel fonts or marketing-only hero sizes unless a page clearly benefits
- Redesigning information architecture, copy, or content pipeline
- Icon library migration to `@vercel/geistcn-assets` (defer unless a component needs icons)
- Dark mode as a user toggle (system preference only, if implemented)

## Decisions

### 1. Integration strategy: foundations-first, Astro-native

**Decision:** Map Geist design tokens to CSS custom properties in `tokens.css` and apply via existing global/ component CSS. Load fonts from the `geist` npm package.

**Alternatives considered:**

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| `@vercel/geistcn` + React islands | Pixel-perfect parity with Vercel docs | Adds React, bundle size, hydration complexity | Rejected |
| Tailwind + Geist preset | Fast utility iteration | New build pipeline, large refactor | Rejected for v1 |
| CSS tokens + Astro components | Minimal deps, matches current architecture | Manual mapping from docs | **Selected** |

**Rationale:** Astro site is static HTML-first. Geist docs expose token semantics (`--ds-gray-100` through `--ds-gray-1000`, background scales, material radii) sufficient for a portfolio without React.

### 2. Font loading

**Decision:** Add `geist` package; import `GeistSans` and `GeistMono` CSS in `BaseLayout.astro` (or a dedicated `src/styles/fonts.css`). Remove Google Fonts links for Fraunces and Source Sans 3.

**Token mapping:**

```css
--font-sans: 'Geist Sans', system-ui, sans-serif;
--font-mono: 'Geist Mono', ui-monospace, monospace;
```

**Rationale:** Official `geist` package includes full glyph set and `font-feature-settings` support per [vercel.com/font](https://vercel.com/font). Self-hosted fonts avoid Google Fonts dependency and match Geist docs.

### 3. Color and material tokens

**Decision:** Replace editorial palette with Geist scales documented at [vercel.com/geist/colors](https://vercel.com/geist/colors.md) and [materials](https://vercel.com/geist/materials.md):

- Page background: `--ds-background-100`
- Elevated surfaces / cards: `--ds-background-200` or `--ds-gray-100`
- Primary text: `--ds-gray-1000`; secondary: `--ds-gray-900`
- Borders: `--ds-gray-400` (default), `--ds-gray-500` (hover)
- Accent: Geist blue scale (`--ds-blue-700` background, `--ds-blue-1000` text on light) replacing teal
- Radii: 6px base (`material-base`), 12px menus/cards (`material-medium`)
- Shadows: subtle layered shadows per material presets

Legacy token names (`--color-bg`, `--color-accent`, etc.) MAY remain as aliases pointing to Geist tokens during migration to limit diff churn in components.

### 4. Typography scale

**Decision:** Define CSS utility classes mirroring Geist typography names from [vercel.com/geist/typography](https://vercel.com/geist/typography.md):

| Use | Geist class equivalent | Application |
|-----|------------------------|-------------|
| Page hero | `text-heading-48` or `text-heading-56` | Home hero `h1` |
| Section titles | `text-heading-32` | Section headers |
| Eyebrow labels | `text-label-12` uppercase | EXPERTISE, WORK, etc. |
| Body | `text-copy-16` | Prose, descriptions |
| Meta / captions | `text-copy-13` or `text-label-13` | Dates, org names |
| Code | `text-label-13-mono` | Inline code in articles |

Remove Fraunces from all `font-family: var(--font-display)` usages — Geist uses a single sans family with weight/size for hierarchy.

### 5. Component migration order

**Decision:** Migrate in layers to reduce visual breakage:

1. **Foundations** — `tokens.css`, `fonts.css`, base `body`/`a`/focus styles
2. **Primitives** — `.button`, `.card`, `.tag`, auth form, skip link
3. **Chrome** — `Nav.astro`, `Footer.astro`
4. **Sections** — capability grid, masonry, stat cards, testimonials, callouts
5. **Pages & layouts** — hero blocks, resume print styles, prose in case studies

**Rationale:** Bottom-up ensures shared primitives stabilize before page-specific tweaks.

### 6. Grid and layout

**Decision:** Keep CSS Grid/Flexbox layouts; apply Geist grid *aesthetic* (1px borders, high-contrast guides) without importing `@vercel/geistcn` Grid components. Capability grid retains bordered cells with Geist border tokens.

**Rationale:** Geist Grid React component targets marketing pages with visible guide lines; portfolio grids are simpler and work well with CSS border utilities.

### 7. Dark mode

**Decision:** Optional v1: `@media (prefers-color-scheme: dark)` overrides for core tokens if Geist dark values are available in docs. No manual theme switcher.

**Rationale:** Geist is designed for light-first developer tools; system dark support is nice-to-have without scope creep.

## Risks / Trade-offs

- **[Risk] Token values may drift from live Geist docs** → Mitigation: Reference official `/geist/*.md` URLs during implementation; document source URLs in `tokens.css` header comment
- **[Risk] Loss of editorial warmth may feel less "personal portfolio"** → Mitigation: Retain strong typography hierarchy and masonry layout; Geist clarity can reinforce Design Engineer credibility
- **[Risk] No React Geist components means manual parity for Button, Badge, etc.** → Mitigation: Implement minimal Astro primitives matching Geist button/label specs; defer complex components
- **[Risk] Print styles for resume may need re-validation** → Mitigation: Test `@media print` after token swap; force light colors for print
- **[Risk] `geist` package CSS path may differ from Next.js docs** → Mitigation: Verify import paths in Astro build; fallback to `@fontsource-variable/geist` if needed

## Migration Plan

1. Add `geist` dependency; create `fonts.css`; wire into `BaseLayout.astro`
2. Rewrite `tokens.css` with Geist scales; add legacy aliases
3. Update `global.css` base styles and utility classes
4. Migrate components and pages in order (see §5)
5. Run `astro build` and visual spot-check all six routes + case study + article + auth gate
6. Rollback: revert token/component commits; no data migration required

## Open Questions

- Whether to add Tailwind in a follow-up for faster Geist utility parity (out of scope for this change)
- Whether homepage hero should use `text-heading-72` marketing scale or a restrained `text-heading-48` for portfolio context (default: `48` unless mockups specify otherwise)
- Whether to import Geist icons for external links and nav chevrons (defer unless needed during apply)
