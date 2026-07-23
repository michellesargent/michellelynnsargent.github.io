## ADDED Requirements

### Requirement: About page with bio and positioning

The site SHALL provide an `/about` page with Michelle Sargent's professional bio, primary Design Engineer positioning, and a summary of enterprise design systems and AI-native workflow expertise.

#### Scenario: About page accessible

- **WHEN** a visitor navigates to `/about`
- **THEN** the page displays a bio section with at least 2 paragraphs covering hybrid design–engineering practice and current role at Cisco

### Requirement: Career timeline

The about page SHALL include a visual career timeline derived from `docs/role-positioning-research.md`, covering key roles from 2014 to present.

#### Scenario: Timeline entries displayed

- **WHEN** a visitor views the career timeline section
- **THEN** at least 5 timeline entries are shown with role title, organization, and approximate dates

### Requirement: Expertise framing

The about page SHALL present the three role frames (Design Engineer, UX Engineer, Design Technologist) with a one-line description of each, indicating Design Engineer as primary.

#### Scenario: Role frames section

- **WHEN** a visitor views the expertise section
- **THEN** all three role frames are listed with Design Engineer visually emphasized as primary

### Requirement: Skills and tools

The about page SHALL list core skills grouped by category: design (Figma, design systems, information architecture), engineering (TypeScript, React, CI/CD), and AI-native workflow (OpenSpec, Cursor, MCP pipelines).

#### Scenario: Skills grouped by category

- **WHEN** a visitor views the skills section
- **THEN** skills are organized into at least three categories with 3+ items each

### Requirement: Contact via LinkedIn

The about page SHALL provide LinkedIn as the primary contact method. The site SHALL NOT display email addresses, contact forms, or mailto links.

#### Scenario: LinkedIn link on about page

- **WHEN** a visitor clicks the contact link on `/about`
- **THEN** the browser opens `https://www.linkedin.com/in/michellelynnsargent` in a new tab with `rel="noopener noreferrer"`

#### Scenario: No email on about page

- **WHEN** a visitor views `/about`
- **THEN** no email address or mailto link is displayed

#### Scenario: External links security

- **WHEN** the LinkedIn link is rendered on the about page
- **THEN** the link includes `rel="noopener noreferrer"` and `target="_blank"`

### Requirement: Meta case study reference

The about page SHALL reference the portfolio site itself as a Design Engineer proof point, linking to the portfolio-site case study when it becomes public.

#### Scenario: Site-as-artifact mention

- **WHEN** the portfolio-site case study is public in the catalog
- **THEN** the about page includes a link to `/work/portfolio-site` describing the site as designed and built by Michelle

### Requirement: Cisco link indicators in rendered content

The about page SHALL use the Cisco link classification component for any Cisco property URLs, displaying the SSO/VPN access indicator.

#### Scenario: Cisco link on about page

- **WHEN** the about page references a Cisco property URL
- **THEN** the link renders with the "Requires Cisco SSO & VPN" access indicator
