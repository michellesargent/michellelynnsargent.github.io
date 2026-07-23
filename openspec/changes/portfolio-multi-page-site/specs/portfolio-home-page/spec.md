## ADDED Requirements

### Requirement: Hero section with Design Engineer positioning

The homepage (`/`) SHALL display a hero section with Michelle Sargent's name, the primary title "Design Engineer", and a positioning statement derived from `docs/role-positioning-research.md`: crafting enterprise UX at the intersection of design systems, AI, and production code.

#### Scenario: Hero renders above the fold

- **WHEN** a visitor navigates to `/`
- **THEN** the hero displays name, title, positioning statement, and primary CTAs to Work, Teaching, and About

### Requirement: Core capabilities feature cards

The homepage SHALL display a "Core capabilities" section with six numbered feature cards in a bordered 3×2 grid layout matching the editorial mockup.

#### Scenario: Capabilities grid content

- **WHEN** a visitor scrolls to the capabilities section
- **THEN** the section displays six items: AI Innovation, Design Systems, UX Strategy, Code-Confident Design, Digital Transformation, and Teaching & Curriculum Design, each with a title and description

#### Scenario: Capabilities section header

- **WHEN** the capabilities section renders
- **THEN** it displays an "EXPERTISE" eyebrow label, "Core capabilities" heading, and the subtitle "A hybrid skillset built at the intersection of craft, code, and strategy."

### Requirement: Masonry gallery for high-impact work

The homepage SHALL display a masonry-layout gallery of high-impact case studies with variable-height thumbnails, titles, organization, and links to `/work/[slug]`.

#### Scenario: Featured case studies in masonry

- **WHEN** case studies with `featured: true` exist in the catalog
- **THEN** the masonry gallery displays featured case studies first, sorted by catalog priority

#### Scenario: Masonry fallback

- **WHEN** no case studies have `featured: true`
- **THEN** the masonry gallery displays all published case studies without breaking layout

### Requirement: Teaching article thumbnails

The homepage SHALL display a section of teaching article thumbnail cards showing up to four articles with title, date, excerpt, and link to `/teaching/[slug]`.

#### Scenario: Teaching thumbnails render

- **WHEN** articles exist in the catalog
- **THEN** the homepage displays up to four article thumbnail cards sorted by date descending

#### Scenario: View all teaching CTA

- **WHEN** the teaching section renders
- **THEN** a link to `/teaching` is visible to view all articles

### Requirement: Resume callout

The homepage SHALL display a resume callout section with a brief value proposition and a CTA linking to `/resume`.

#### Scenario: Resume CTA functional

- **WHEN** a visitor clicks the resume callout CTA
- **THEN** the browser navigates to `/resume`

### Requirement: Peer quotes section

The homepage SHALL display a testimonials section with peer quotes sourced from `work/supporting/testimonials/`.

#### Scenario: Quotes render when available

- **WHEN** at least one testimonial exists in the testimonials content module
- **THEN** the homepage displays quote text, author name, and context for each testimonial

#### Scenario: Quotes hidden when empty

- **WHEN** no testimonials are configured
- **THEN** the testimonials section is omitted without leaving empty space or broken layout

### Requirement: Contact preview section

The homepage SHALL display a contact preview with a LinkedIn CTA and a link to the full contact page at `/contact`.

#### Scenario: Contact preview links

- **WHEN** a visitor clicks "Get in touch" or equivalent CTA in the contact preview
- **THEN** the browser navigates to `/contact`

### Requirement: Homepage footer

The homepage SHALL render the site footer as the final section, consistent with all other pages.

#### Scenario: Footer at page end

- **WHEN** a visitor scrolls to the bottom of the homepage
- **THEN** the footer with LinkedIn and GitHub links is visible
