## ADDED Requirements

### Requirement: Article index page

The site SHALL provide a `/writing` page listing all teaching articles (`visibility: public` or `internal`) as a responsive grid of cards, each showing title, date, audience, theme tags, thumbnail (when available), and featured badge when applicable.

#### Scenario: Writing index lists articles

- **WHEN** an authenticated visitor navigates to `/writing`
- **THEN** the page displays all articles from the catalog, sorted by date descending

#### Scenario: Teaching positioning header

- **WHEN** a visitor views `/writing`
- **THEN** the page includes a header explaining that these articles document workshop design and enablement expertise

### Requirement: Article detail page

The site SHALL provide a `/writing/[slug]` page for each article, rendering the full `index.md` body with a header showing title, date, role, organization, audience, and theme tags.

#### Scenario: Detail page renders article markdown

- **WHEN** an authenticated visitor navigates to `/writing/[slug]` for a cataloged article
- **THEN** the page renders the markdown content with proper prose styling, heading hierarchy, and blockquotes

#### Scenario: Invalid article slug returns 404

- **WHEN** a visitor navigates to `/writing/nonexistent-slug`
- **THEN** the site returns a 404 page

### Requirement: Related content on article pages

Article detail pages SHALL display links to related case studies (`related_case_studies`), related articles (`related_articles`), and external links (`links.linkedin`, `links.article`) when present in metadata.

#### Scenario: Related case study link

- **WHEN** an article metadata includes `related_case_studies: [ai-design-workflow]`
- **THEN** the detail page displays a link to `/work/ai-design-workflow`

#### Scenario: Cisco external link with access badge

- **WHEN** article content or metadata includes a link to a Cisco property
- **THEN** the link displays with the "Requires Cisco SSO & VPN" access indicator

#### Scenario: Public LinkedIn link

- **WHEN** an article metadata includes `links.linkedin`
- **THEN** the detail page displays an external link with `rel="noopener noreferrer"` and `target="_blank"`

### Requirement: Teaching expertise signals

Article cards and detail headers SHALL prominently display teaching-related theme tags (`teaching`, `enablement`, `onboarding`) to reinforce Michelle's enablement positioning.

#### Scenario: Teaching tags visible on cards

- **WHEN** an article has `teaching` in its theme or tag list
- **THEN** the article card on `/writing` displays a "Teaching" label or icon

### Requirement: Article reading experience

Article detail pages SHALL use a prose-optimized layout with max-width ~720px, comfortable line height, and styled blockquotes and code blocks suitable for 800–1,500 word essays.

#### Scenario: Long-form readability

- **WHEN** a visitor reads an article detail page
- **THEN** body text line length does not exceed 75 characters at the prose container's max width
