## ADDED Requirements

### Requirement: Parse work index catalog

The content pipeline SHALL read `work/index.yaml` at build time and expose typed collections for case studies, articles, and drafts.

#### Scenario: Catalog loads at build

- **WHEN** the Astro build runs
- **THEN** the system parses `work/index.yaml` without errors and returns structured data matching the catalog schema

#### Scenario: Build fails on invalid catalog

- **WHEN** `work/index.yaml` contains a syntax error or a public entry references a missing slug folder
- **THEN** the build fails with a descriptive error message

### Requirement: Filter by visibility

The content pipeline SHALL include case studies and articles where `visibility` is `public` or `internal`. Entries in `drafts/` or with unpublished status SHALL be excluded unless explicitly promoted in `work/index.yaml`.

#### Scenario: Internal case study included behind password gate

- **WHEN** a case study has `visibility: internal` in `work/index.yaml`
- **THEN** the case study appears on `/work` and is available at `/work/[slug]` for authenticated visitors

#### Scenario: Public article included

- **WHEN** an article has `visibility: public` in `work/index.yaml`
- **THEN** the article appears on `/writing` and is available at `/writing/[slug]`

#### Scenario: Draft entry excluded

- **WHEN** a work entry exists only under `drafts/` and is not registered in the published catalog
- **THEN** the entry is not included in page generation

### Requirement: Load markdown and metadata per entry

For each public slug, the pipeline SHALL load `index.md` as the page body and `metadata.yaml` as structured front matter from the corresponding `work/case-studies/<slug>/` or `work/articles/<slug>/` folder.

#### Scenario: Case study content resolved

- **WHEN** a public case study slug `uxep-platform` is requested
- **THEN** the system returns the parsed markdown from `work/case-studies/uxep-platform/index.md` and metadata from `metadata.yaml`

#### Scenario: Article content resolved

- **WHEN** a public article slug `ai-journey-map-pipeline` is requested
- **THEN** the system returns the parsed markdown from `work/articles/ai-journey-map-pipeline/index.md` and metadata from `metadata.yaml`

### Requirement: Featured and sorted collections

The pipeline SHALL sort case studies by `priority` ascending and articles by `date` descending. Entries with `featured: true` SHALL be available via a dedicated `getFeatured()` function for the home page.

#### Scenario: Featured articles for home

- **WHEN** the home page requests featured content
- **THEN** the system returns all public entries where `featured: true`, limited to a configurable maximum (default 3 per content type)

### Requirement: Cross-reference resolution

The pipeline SHALL resolve `used_by`, `related_case_studies`, `related_articles`, and `feeds_from` references to slugs, producing link-ready objects with title and URL for rendering.

#### Scenario: Related article links

- **WHEN** an article metadata includes `related_articles: [researchers-meet-github-copilot]`
- **THEN** the system resolves the slug to `{ slug, title, href: '/writing/researchers-meet-github-copilot' }`

### Requirement: Thumbnail asset resolution

The pipeline SHALL resolve thumbnail paths from metadata (e.g. `articles/<slug>/assets/thumbnail.png`) to public URLs, with a fallback when the file is missing.

#### Scenario: Thumbnail present

- **WHEN** `metadata.yaml` specifies `assets.thumbnail` and the file exists
- **THEN** the system returns an optimized image URL for card and hero display

#### Scenario: Thumbnail missing

- **WHEN** the thumbnail file does not exist
- **THEN** the system returns null and consuming components render a text-only card without error
