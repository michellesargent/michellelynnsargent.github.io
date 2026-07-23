## ADDED Requirements

### Requirement: Two-column about layout

The about page (`/about`) SHALL use a two-column layout on viewports ≥768px with narrative content on the left (~60%) and stat cards on the right (~40%).

#### Scenario: Desktop two-column layout

- **WHEN** a visitor views `/about` on a viewport ≥768px
- **THEN** narrative copy and stat cards appear side by side

#### Scenario: Mobile stacked layout

- **WHEN** a visitor views `/about` on a viewport &lt;768px
- **THEN** narrative content stacks above stat cards

### Requirement: About narrative copy

The about page SHALL display an "ABOUT" eyebrow label, the headline "Where design thinking meets engineering precision.", and two paragraphs describing Michelle as a strategic Hybrid Design-Engineering Practitioner grounded in `docs/role-positioning-research.md`.

#### Scenario: Positioning narrative renders

- **WHEN** a visitor views the about page hero
- **THEN** the headline and body copy reference enterprise digital transformation, UX strategy, production-ready code, and Fortune 500 technology infrastructure

### Requirement: Stat cards

The about page SHALL display three bordered stat cards: "10+" Years Experience, "90K+" Users Served, and "F500" Fortune 500 Scale, each with a label and short description.

#### Scenario: Stat card content

- **WHEN** a visitor views the stat cards column
- **THEN** each card displays a large serif stat number, bold label, and muted description text

### Requirement: Expertise framing section

The about page SHALL include a section describing Design Engineer, UX Engineer, and Design Technologist as contextual expertise frames per positioning research.

#### Scenario: Three expertise frames visible

- **WHEN** a visitor scrolls below the hero on `/about`
- **THEN** all three expertise frames are displayed with title and description

### Requirement: Career timeline

The about page SHALL include a career timeline with key roles from Michelle's professional history.

#### Scenario: Timeline entries render

- **WHEN** a visitor views the career timeline section
- **THEN** at least five timeline entries are displayed including Cisco, UXEP, AI-Native Developer Pack, and teaching/enablement roles

### Requirement: About contact link

The about page SHALL link to the dedicated contact page at `/contact` in addition to displaying LinkedIn as primary contact.

#### Scenario: Contact page link

- **WHEN** a visitor views the contact area on `/about`
- **THEN** a link to `/contact` is available alongside the LinkedIn link
