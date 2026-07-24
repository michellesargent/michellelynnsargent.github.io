## ADDED Requirements

### Requirement: Astro application scaffold

The portfolio SHALL be an Astro 5 + TypeScript static site at the repository root, coexisting with the existing `work/`, `docs/`, and `openspec/` directories without modifying their structure.

#### Scenario: Project builds successfully

- **WHEN** a developer runs `npm run build` from the repository root
- **THEN** the system produces a static output in `dist/` with no build errors

#### Scenario: Development server starts

- **WHEN** a developer runs `npm run dev`
- **THEN** the system serves the site locally with hot reload on file changes

### Requirement: Base layout and navigation

The site SHALL provide a shared layout with persistent header navigation linking to Home (`/`), Work (`/work`), Writing (`/writing`), and About (`/about`), plus a footer with copyright, a LinkedIn link, and a GitHub profile link.

#### Scenario: Navigation on all pages

- **WHEN** a visitor views any page on the site
- **THEN** the header displays all four navigation links and the current page is visually indicated

#### Scenario: Mobile navigation

- **WHEN** a visitor views the site on a viewport narrower than 768px
- **THEN** navigation collapses into an accessible menu control that expands on activation

### Requirement: Design token system

The site SHALL define CSS custom properties for typography, color, spacing, and motion in a central stylesheet, applied consistently across all pages.

#### Scenario: Consistent typography

- **WHEN** a visitor views any page
- **THEN** headings and body text use the defined font families and scale from the design token system

### Requirement: GitHub Pages deployment

The site SHALL deploy to GitHub Pages via a GitHub Actions workflow that builds the Astro site and publishes static output on push to the default branch.

#### Scenario: Production deploy on merge

- **WHEN** changes merge to the default branch
- **THEN** GitHub Actions builds the site and deploys to the repository's GitHub Pages URL over HTTPS

#### Scenario: User Pages at root

- **WHEN** the repository is named `<username>.github.io` (e.g. `michellesargent.github.io`)
- **THEN** `astro.config.mjs` sets `base` to `'/'` and `site` to `https://<username>.github.io` so assets and internal links resolve at the domain root

#### Scenario: Footer social links

- **WHEN** a visitor views any page footer
- **THEN** LinkedIn and GitHub profile links are displayed with `rel="noopener noreferrer"`

### Requirement: Performance and accessibility baselines

The site SHALL achieve Lighthouse scores of at least 90 for Performance and 95 for Accessibility on the home page in a production build.

#### Scenario: Reduced motion respected

- **WHEN** a visitor has `prefers-reduced-motion: reduce` enabled
- **THEN** the site disables non-essential animations and transitions

#### Scenario: Skip link present

- **WHEN** a visitor tabs into the page
- **THEN** a skip-to-main-content link is the first focusable element

### Requirement: Search engine exclusion

The site SHALL NOT be indexed by search engines. All pages SHALL include `noindex, nofollow` meta tags and `robots.txt` SHALL disallow all crawlers.

#### Scenario: Robots.txt blocks indexing

- **WHEN** the build completes
- **THEN** `robots.txt` contains `Disallow: /` for all user agents

#### Scenario: Noindex on every page

- **WHEN** any page is rendered
- **THEN** the page `<head>` includes `<meta name="robots" content="noindex, nofollow">`
