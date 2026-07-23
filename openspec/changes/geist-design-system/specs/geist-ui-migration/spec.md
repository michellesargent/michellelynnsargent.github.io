## ADDED Requirements

### Requirement: Navigation and footer use Geist styling

The site header navigation and footer SHALL use Geist typography, colors, and borders instead of the editorial Fraunces/teal theme.

#### Scenario: Nav link appearance

- **WHEN** a visitor views the primary navigation
- **THEN** links use Geist label or copy typography, gray-1000 primary text, and Geist hover/active states

#### Scenario: Footer social links

- **WHEN** the footer renders
- **THEN** LinkedIn and GitHub links use Geist secondary text color and accent hover color

### Requirement: Button and link primitives match Geist patterns

Primary and secondary buttons, filter pills, and inline CTAs SHALL use Geist high-contrast backgrounds, border radii (6px), and label typography (`text-button-14` or equivalent).

#### Scenario: Primary button styling

- **WHEN** a `.button-primary` or equivalent CTA renders
- **THEN** it displays with Geist accent background, white or high-contrast label text, and 6px border radius

#### Scenario: Secondary button styling

- **WHEN** a secondary button renders
- **THEN** it displays with transparent or gray-100 background, gray-400 border, and accent hover border

### Requirement: Card, tag, and prose components migrated

Shared components (`Card`, `Tag`, `Prose`, masonry items, teaching cards) SHALL use Geist surfaces, borders, and typography without serif display fonts.

#### Scenario: Card surface

- **WHEN** a work or teaching card renders
- **THEN** the card uses background-200 or gray-100 surface, gray-400 border, and Geist heading/body type scale

#### Scenario: Prose article typography

- **WHEN** a case study or teaching article body renders
- **THEN** headings and paragraphs use Geist Sans at copy/heading scale; blockquotes use Geist border accent

### Requirement: Section layouts use Geist grid aesthetic

Homepage and about section components (capability grid, stat cards, testimonials, masonry gallery) SHALL use Geist 1px grid borders and label typography for eyebrows and metadata.

#### Scenario: Capability grid borders

- **WHEN** the core capabilities grid renders
- **THEN** cell borders use `--ds-gray-400` (or mapped alias) and section index labels use Geist label typography

#### Scenario: Stat cards on about page

- **WHEN** stat cards render
- **THEN** values use Geist heading scale and labels use Geist copy/label muted colors (gray-900)

### Requirement: All six primary pages visually consistent

Pages at `/`, `/about`, `/work`, `/teaching`, `/resume`, and `/contact` SHALL present a cohesive Geist visual system with no remaining Fraunces, Source Sans 3, or teal editorial accent colors.

#### Scenario: Home hero Geist typography

- **WHEN** a visitor loads the homepage
- **THEN** the hero name and title use Geist heading utilities without serif fonts

#### Scenario: Resume print layout

- **WHEN** a visitor prints `/resume`
- **THEN** print styles produce readable black-on-white output using Geist typography sizes appropriate for print

### Requirement: Auth gate styled with Geist materials

The password gate (`AuthGate`) SHALL use Geist card material (elevated surface, 12px radius, subtle shadow) and form controls matching Geist input/button patterns.

#### Scenario: Auth card appearance

- **WHEN** an unauthenticated visitor loads any page
- **THEN** the auth card uses Geist background and border tokens with a Geist-styled submit button
