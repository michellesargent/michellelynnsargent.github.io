## ADDED Requirements

### Requirement: Hero with Design Engineer positioning

The home page (`/`) SHALL display a hero section with Michelle Sargent's name, the primary title "Design Engineer", and a positioning statement derived from `docs/role-positioning-research.md`: crafting enterprise UX at the intersection of design systems, AI, and production code.

#### Scenario: Hero renders on visit

- **WHEN** a visitor navigates to `/`
- **THEN** the hero displays the name, title, and positioning statement above the fold

### Requirement: Featured work section

The home page SHALL display a "Selected Work" section showing up to 3 featured case studies as cards with title, one-liner excerpt, themes, and link to detail page.

#### Scenario: Featured case study cards

- **WHEN** case studies with `featured: true` exist in the catalog
- **THEN** the home page renders up to 3 case study cards sorted by priority

#### Scenario: No featured case studies

- **WHEN** no case studies have `featured: true`
- **THEN** the Selected Work section displays a brief message and link to Writing, without breaking the page layout

### Requirement: Teaching highlights section

The home page SHALL display a "Teaching & Writing" section showing up to 3 featured articles as cards with title, date, audience tag, and link to `/writing/[slug]`.

#### Scenario: Featured article cards

- **WHEN** articles with `featured: true` exist in the catalog
- **THEN** the home page renders up to 3 article cards sorted by date descending

### Requirement: Secondary positioning frames

The home page SHALL include a brief section acknowledging UX Engineer and Design Technologist framing as contextual expertise, without diluting the primary Design Engineer headline.

#### Scenario: Multi-frame expertise visible

- **WHEN** a visitor scrolls past the hero
- **THEN** the page presents at least one line referencing enterprise systems and teaching/enablement as supporting expertise dimensions

### Requirement: Call to action

The home page SHALL include clear CTAs to view all work (`/work`), all writing (`/writing`), and about (`/about`), plus a LinkedIn contact link.

#### Scenario: CTA links functional

- **WHEN** a visitor clicks "View all writing"
- **THEN** the browser navigates to `/writing`
