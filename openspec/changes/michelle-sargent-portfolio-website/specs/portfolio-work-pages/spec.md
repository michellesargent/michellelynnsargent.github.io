## ADDED Requirements

### Requirement: Case study index page

The site SHALL provide a `/work` page listing all case studies (`visibility: public` or `internal`) as a responsive grid of cards, each showing title, organization, date range, theme tags, and featured badge when applicable.

#### Scenario: Work index lists case studies

- **WHEN** an authenticated visitor navigates to `/work`
- **THEN** the page displays all case studies from the catalog, sorted by priority

#### Scenario: Empty work index

- **WHEN** no case studies are registered in the catalog
- **THEN** the page displays an informative empty state with link to `/writing`

### Requirement: Theme filter on work index

The work index SHALL allow filtering case studies by theme tag (e.g. `design-engineer`, `enterprise-systems`) when more than one case study exists.

#### Scenario: Filter by theme

- **WHEN** a visitor selects the `design-engineer` theme filter
- **THEN** only case studies tagged with `design-engineer` are displayed

### Requirement: Case study detail page

The site SHALL provide a `/work/[slug]` page for each cataloged case study, rendering the full `index.md` body with a header showing title, role, organization, timeline, and theme tags.

#### Scenario: Detail page renders markdown

- **WHEN** an authenticated visitor navigates to `/work/[slug]` for a cataloged case study
- **THEN** the page renders the markdown content with proper heading hierarchy, lists, links, and code blocks

#### Scenario: Invalid slug returns 404

- **WHEN** a visitor navigates to `/work/nonexistent-slug`
- **THEN** the site returns a 404 page

#### Scenario: Cisco proof links show access badge

- **WHEN** a case study proof entry links to a Cisco property (e.g. `cisco-it-design` GitHub repo)
- **THEN** the proof link renders with the "Requires Cisco SSO & VPN" access indicator

### Requirement: Proof and cross-reference sections

Case study detail pages SHALL display a proof section (from metadata `proof` array) and links to related supporting content and articles when `feeds_from` or cross-references exist.

#### Scenario: Proof items displayed

- **WHEN** a case study metadata includes proof entries
- **THEN** the detail page renders each proof item with its label and type icon

### Requirement: Portfolio angles display

Case study detail pages SHALL render the portfolio angles checklist from the case study `index.md` (Design Engineer, UX Engineer, Design Technologist, etc.) as visual tags.

#### Scenario: Angles rendered

- **WHEN** a case study `index.md` includes checked portfolio angle items
- **THEN** the detail page displays those angles as labeled tags below the header
