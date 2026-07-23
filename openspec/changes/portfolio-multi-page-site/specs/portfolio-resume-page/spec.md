## ADDED Requirements

### Requirement: Dedicated resume page

The site SHALL provide a resume page at `/resume` with structured sections for summary, experience, skills, and education.

#### Scenario: Resume page renders

- **WHEN** a visitor navigates to `/resume`
- **THEN** the page displays a professional summary, work experience entries, skills grouped by category, and education

### Requirement: Resume summary positioning

The resume summary SHALL lead with Design Engineer identity and reference enterprise systems, AI-native workflows, and teaching expertise per `docs/role-positioning-research.md`.

#### Scenario: Summary content

- **WHEN** a visitor reads the resume summary
- **THEN** it states Design Engineer as primary title with enterprise UX and production code positioning

### Requirement: Resume experience section

The resume experience section SHALL list key roles including Senior Product Designer at Cisco, UXEP lead, AI-Native Developer Pack, and teaching/enablement work with date ranges.

#### Scenario: Experience entries

- **WHEN** a visitor views the experience section
- **THEN** at least four role entries are displayed with organization, title, dates, and brief description

### Requirement: Resume skills section

The resume skills section SHALL group skills into Design, Engineering, and AI-native workflow categories consistent with the about page.

#### Scenario: Skills categories

- **WHEN** a visitor views the skills section
- **THEN** three skill categories are displayed with relevant items in each

### Requirement: Resume print styling

The resume page SHALL include print-friendly CSS so visitors can print or save as PDF from the browser.

#### Scenario: Print layout

- **WHEN** a visitor prints the resume page
- **THEN** content renders in a clean single-column layout without navigation chrome

### Requirement: Homepage resume callout links to resume

The homepage resume callout section SHALL link to `/resume`.

#### Scenario: Callout CTA

- **WHEN** a visitor clicks the resume callout on the homepage
- **THEN** the browser navigates to `/resume`
