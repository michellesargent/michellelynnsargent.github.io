## ADDED Requirements

### Requirement: Work index with masonry gallery

The work index page (`/work`) SHALL display case studies in a masonry-layout gallery with thumbnails, titles, organization, role, themes, and links to detail pages.

#### Scenario: Masonry gallery on work index

- **WHEN** a visitor navigates to `/work`
- **THEN** all published case studies from the catalog are displayed in a masonry layout

#### Scenario: Case study detail unchanged

- **WHEN** a visitor navigates to `/work/[slug]`
- **THEN** the existing case study detail layout renders the full `index.md` content with metadata

### Requirement: Work section header

The work index SHALL display a section header with eyebrow label, title, and brief description of shipped platforms and design system contributions.

#### Scenario: Work page header

- **WHEN** a visitor views `/work`
- **THEN** a descriptive header appears above the masonry gallery

### Requirement: Featured work prioritization

The work index SHALL display case studies with `featured: true` before non-featured entries.

#### Scenario: Featured sort order

- **WHEN** both featured and non-featured case studies exist
- **THEN** featured case studies appear first in the gallery order

### Requirement: Thumbnail fallback

Case study cards in the masonry gallery SHALL render without a thumbnail image when no asset is available, using a typographic fallback.

#### Scenario: Missing thumbnail graceful degradation

- **WHEN** a case study has no thumbnail asset
- **THEN** the gallery item renders with title and excerpt only, without broken image placeholders
