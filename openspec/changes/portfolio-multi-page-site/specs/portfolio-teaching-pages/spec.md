## ADDED Requirements

### Requirement: Teaching index page

The site SHALL provide a teaching article index at `/teaching` listing all published articles with thumbnail cards, title, date, excerpt, audience tags, and links to detail pages.

#### Scenario: Teaching index renders articles

- **WHEN** a visitor navigates to `/teaching`
- **THEN** all published articles from the catalog are displayed sorted by date descending

#### Scenario: Teaching section header

- **WHEN** a visitor views `/teaching`
- **THEN** a section header with teaching/enablement positioning copy is displayed above the article grid

### Requirement: Teaching article detail page

The site SHALL provide article detail pages at `/teaching/[slug]` rendering the article `index.md` content with metadata, using the existing article layout.

#### Scenario: Article detail renders

- **WHEN** a visitor navigates to `/teaching/[slug]` for a valid article slug
- **THEN** the full article content, title, date, and tags are displayed

#### Scenario: Invalid article slug

- **WHEN** a visitor navigates to `/teaching/nonexistent-slug`
- **THEN** the site returns a 404 page

### Requirement: No writing routes in navigation

The site navigation and internal links SHALL reference "Teaching" and route to `/teaching`, not "Writing" or `/writing`.

#### Scenario: Nav label is Teaching

- **WHEN** a visitor views the site header
- **THEN** the navigation label reads "Teaching" and links to `/teaching`
