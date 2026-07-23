## ADDED Requirements

### Requirement: Four teaching articles exist

The portfolio work folder SHALL contain exactly four article drafts in `work/articles/`, derived from Michelle's workshops and presentations:

| Slug | Source workshop |
|------|-----------------|
| `ai-journey-map-pipeline` | AI Journey Mapping Workshop (Jun 2026) |
| `beyond-figma-make-version-control` | Shop Talk: Going Beyond Figma Make (Feb 2026) |
| `researchers-meet-github-copilot` | Researchers, Meet GitHub Copilot (Mar 2026) |
| `beyond-the-vibes-design-portfolio` | dzone NYC: Beyond the Vibes — Owning Your Design Portfolio (2025) |

#### Scenario: All workshops represented
- **WHEN** the teaching expertise change is fully implemented
- **THEN** each of the four listed workshops has a corresponding `work/articles/<slug>/index.md` article draft

### Requirement: Article content structure

Each article `index.md` MUST include these sections:

1. **Hook / lede** — why this topic matters to the target audience
2. **The problem** — pain point the workshop addressed
3. **Workshop design** — how the session was structured for non-technical learners
4. **Methodology** — core techniques taught (with enough detail to demonstrate expertise)
5. **Human-in-the-loop / guardrails** — where applicable, how bias and hallucination risks were addressed
6. **Outcomes and feedback** — peer quotes or observable results where available
7. **What you can take away** — actionable lessons for readers

#### Scenario: Article readability for hiring managers
- **WHEN** a reader opens any teaching article
- **THEN** they can understand Michelle's teaching approach and technical judgment without attending the workshop

### Requirement: AI Journey Map Pipeline article content

The `ai-journey-map-pipeline` article SHALL cover:

- Reusable linear pipeline from qualitative transcripts to Miro persona and journey map stickies
- Folder architecture: `research/`, `examples/`, `prompts/`, `docs/`, `output/`
- Human gate before Miro sync; output as collaborative stickies, not polished final maps
- Miro MCP server integration (context explore, layout get DSL, layout create)
- Co-facilitation with Victoria Tam and Qiwen Zhao; dry-run feedback from Caitlin

#### Scenario: Journey map article demonstrates systems thinking
- **WHEN** a reader finishes the AI Journey Map Pipeline article
- **THEN** they understand both the pipeline architecture and the human-in-the-loop design rationale

### Requirement: Beyond Figma Make article content

The `beyond-figma-make-version-control` article SHALL cover:

- Prompt-to-app (vibe coding) vs. AI-assisted coding in an IDE — when to use each
- Figma Make publish/share vs. GitHub repository comparison
- End-to-end workflow: Figma Make → Figma annotations → VS Code + Copilot + MCP → GitHub → deployment
- Practical setup: Node.js, npm, GitHub Desktop, `.gitignore`, branches vs. main
- GitHub Pages and collaboration patterns for design prototypes

#### Scenario: Figma Make article bridges designer and engineer audiences
- **WHEN** a designer reads the Beyond Figma Make article
- **THEN** they understand a clear path from one-click Figma Make sharing to version-controlled collaboration without requiring prior Git expertise

### Requirement: Researchers Meet GitHub Copilot article content

The `researchers-meet-github-copilot` article SHALL cover:

- Session 0 onboarding for researchers with no code editor experience
- Spec-Driven Development adapted for research: `README.md`, `project.md`, `copilot.md`
- Guardrails against hallucinated personas — grounding Copilot in actual interview transcripts
- Forest Delivery Service practice scenario with real `.vtt` transcripts
- Artifacts produced: Personas, As-Is Journey Maps, To-Be Scenario Maps
- Co-design with Qiwen Zhao and Victoria Tam in Miro

#### Scenario: Copilot article proves non-technical teaching ability
- **WHEN** a UX research leader reads the GitHub Copilot article
- **THEN** they see evidence that researchers without coding backgrounds can work effectively with AI given proper structure and guardrails

### Requirement: Beyond the Vibes Design Portfolio article content

The `beyond-the-vibes-design-portfolio` article SHALL cover:

- Moving from vibe coding to a thoughtfully curated design portfolio
- Setting up a local development environment as a design engineer skill
- Portfolio as proof of hybrid design–engineering practice
- dzone 2025 NYC conference context — community, upskilling, and workshop facilitation
- Connection to ongoing portfolio site work (`work/drafts/portfolio-site/`)

#### Scenario: Portfolio article connects teaching to personal practice
- **WHEN** a reader finishes the Beyond the Vibes Design Portfolio article
- **THEN** they understand how Michelle teaches portfolio ownership by practicing it — local dev, curation, and moving beyond AI-generated demos

### Requirement: Article length and voice

Each article MUST be 800–1,500 words, written in first person, with an accessible teaching voice suitable for designers and researchers. Articles MUST NOT read as raw transcript dumps or bullet-only slide recaps.

#### Scenario: Article quality bar
- **WHEN** an article draft is complete
- **THEN** it reads as a polished thought-leadership post, not meeting notes
