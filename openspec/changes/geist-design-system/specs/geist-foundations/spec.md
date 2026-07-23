## ADDED Requirements

### Requirement: Geist Sans and Geist Mono font loading

The site SHALL load Geist Sans as the primary typeface and Geist Mono for monospace content via a self-hosted npm font package (not Google Fonts for Fraunces or Source Sans 3).

#### Scenario: Fonts available on all pages

- **WHEN** any page renders through `BaseLayout`
- **THEN** body text uses Geist Sans and inline code uses Geist Mono without external Google Fonts requests for display or body fonts

#### Scenario: Font display performance

- **WHEN** fonts load
- **THEN** the site applies `font-display: swap` (or equivalent) to avoid invisible text during load

### Requirement: Geist color token system

The design token layer SHALL expose Geist-aligned CSS custom properties for backgrounds, gray scale steps (100–1000), and accent colors per the [Geist colors specification](https://vercel.com/geist/colors).

#### Scenario: Semantic color aliases

- **WHEN** components reference legacy tokens such as `--color-bg`, `--color-text`, or `--color-accent`
- **THEN** those aliases resolve to Geist scale values (e.g., background-100, gray-1000, blue-700)

#### Scenario: Accessible contrast for body text

- **WHEN** primary body text renders on the default page background
- **THEN** the contrast ratio meets WCAG AA (4.5:1 minimum) using Geist gray-1000 on background-100

### Requirement: Geist material presets

The token layer SHALL define border radii and surface shadows consistent with [Geist materials](https://vercel.com/geist/materials): 6px base radius, 12px for elevated cards/menus, and layered shadows for elevated surfaces.

#### Scenario: Card and panel surfaces

- **WHEN** a card or elevated panel renders
- **THEN** it uses Geist material border radius and border color tokens (`gray-400` default border)

### Requirement: Geist typography scale utilities

The global stylesheet SHALL provide CSS utility classes matching Geist typography roles: headings (`text-heading-*`), labels (`text-label-*`), and copy (`text-copy-*`) per the [Geist typography specification](https://vercel.com/geist/typography).

#### Scenario: Section heading typography

- **WHEN** a section header renders an `h2`
- **THEN** it uses a Geist heading utility (e.g., `text-heading-32`) with Geist Sans, not a serif display face

#### Scenario: Eyebrow label typography

- **WHEN** a section eyebrow label renders (e.g., "EXPERTISE")
- **THEN** it uses a Geist label utility with uppercase tracking appropriate to `text-label-12` or `text-label-13`

### Requirement: Motion and focus accessibility preserved

Geist foundation changes SHALL NOT remove focus-visible outlines, skip-link behavior, or `prefers-reduced-motion` handling.

#### Scenario: Keyboard focus visible

- **WHEN** a user tabs to an interactive element
- **THEN** a visible focus ring appears using Geist accent or high-contrast border tokens

#### Scenario: Reduced motion respected

- **WHEN** the user prefers reduced motion
- **THEN** transition durations defined in tokens are zero or minimal
