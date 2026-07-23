## ADDED Requirements

### Requirement: Six-page primary navigation

The site SHALL expose six primary routes in the persistent header navigation: Home (`/`), About (`/about`), Work (`/work`), Teaching (`/teaching`), Resume (`/resume`), and Contact (`/contact`).

#### Scenario: Desktop navigation links

- **WHEN** a visitor views any page on a viewport ≥768px
- **THEN** the header displays all six navigation links with the current page indicated as active

#### Scenario: Mobile navigation

- **WHEN** a visitor views any page on a viewport &lt;768px
- **THEN** the header provides a hamburger menu containing all six navigation links

### Requirement: Footer social links

The footer on every page SHALL include links to Michelle's LinkedIn profile and GitHub profile. The footer SHALL NOT include email links or contact forms.

#### Scenario: Footer renders on all pages

- **WHEN** a visitor scrolls to the footer on any page
- **THEN** LinkedIn and GitHub links are visible and open in a new tab with `rel="noopener noreferrer"`

### Requirement: Writing route redirect

The site SHALL redirect legacy `/writing` and `/writing/[slug]` URLs to `/teaching` and `/teaching/[slug]` respectively.

#### Scenario: Writing index redirect

- **WHEN** a visitor navigates to `/writing`
- **THEN** the browser is redirected to `/teaching` with HTTP 301 or Astro equivalent permanent redirect

#### Scenario: Writing article redirect

- **WHEN** a visitor navigates to `/writing/session-zero-ai-development-foundation`
- **THEN** the browser is redirected to `/teaching/session-zero-ai-development-foundation`

### Requirement: Internal link consistency

All internal links within the site SHALL use `/teaching` paths. No rendered link SHALL point to `/writing`.

#### Scenario: Homepage teaching links

- **WHEN** a visitor views teaching article cards on the homepage
- **THEN** each card links to `/teaching/[slug]` not `/writing/[slug]`
