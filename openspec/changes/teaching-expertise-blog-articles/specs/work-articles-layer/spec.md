## ADDED Requirements

### Requirement: Articles directory exists as a first-class work layer

The `work/` folder SHALL include an `articles/` directory for teaching and thought-leadership blog content, documented in `work/README.md` alongside `case-studies/`, `supporting/`, and `drafts/`.

#### Scenario: Agent reads work structure
- **WHEN** an agent or collaborator reads `work/README.md`
- **THEN** the `articles/` layer is documented with purpose, file conventions, and distinction from `supporting/enablement-workshops/`

### Requirement: Article folder structure

Each article SHALL live in `work/articles/<slug>/` and MUST include:

- `index.md` — full article body in Markdown
- `metadata.yaml` — title, slug, date, audience, tags, visibility, featured, related_case_studies, source_material

#### Scenario: New article created
- **WHEN** a teaching blog post is added to the portfolio work folder
- **THEN** it follows the `index.md` + `metadata.yaml` convention under `work/articles/<slug>/`

### Requirement: Articles catalog in index.yaml

`work/index.yaml` SHALL include an `articles:` section listing all article slugs with title, date, status, visibility, themes, and `used_by` case study references.

#### Scenario: Portfolio build reads catalog
- **WHEN** an agent reads `work/index.yaml` before building portfolio pages
- **THEN** all teaching articles are discoverable with metadata sufficient to render a writing/teaching section

### Requirement: Cross-references from related work

Articles MUST be cross-referenced from:

- `work/supporting/enablement-workshops/README.md` — link from artifact table to published article
- `work/case-studies/ai-design-workflow/index.md` — cite articles in proof or enablement sections

#### Scenario: Case study links to teaching proof
- **WHEN** a reader opens the AI Design Workflow case study
- **THEN** they find links to relevant teaching articles as evidence of enablement expertise

### Requirement: Visibility and enterprise context handling

Article metadata SHALL include a `visibility` field (`public` or `internal`). Public articles MUST NOT include credentials, internal-only URLs requiring VPN, or identifiable participant data from research transcripts.

#### Scenario: Public article reviewed for publication safety
- **WHEN** an article has `visibility: public`
- **THEN** its content uses generic enterprise framing and contains no secrets or PII from workshop source material
