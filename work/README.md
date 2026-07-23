# Work Showcase

Reference folder for portfolio case studies, assets, and project materials. Agents and collaborators should read **`index.yaml`** and this file before building portfolio pages.

## Structure

```
work/
├── README.md                 # This file
├── index.yaml                # Master catalog, slugs, status, visibility, cross-references
│
├── case-studies/             # Portfolio-ready narratives (4–5 max)
│   ├── _template/
│   ├── uxep-platform/        ★ featured
│   ├── ai-native-developer-pack/
│   ├── ai-design-workflow/
│   └── design-system-theming/
│
├── articles/                 # Teaching & thought-leadership blog posts
│   ├── session-zero-ai-development-foundation/
│   ├── session-zero-ai-development-foundation/
│   ├── ai-journey-map-pipeline/
│   ├── beyond-figma-make-version-control/
│   ├── researchers-meet-github-copilot/
│   └── beyond-the-vibes-design-portfolio/
│
├── supporting/               # Evidence that feeds cases and articles
│   ├── enablement-workshops/
│   ├── metrics-and-analytics/
│   └── testimonials/
│
├── drafts/                   # WIP, internal-only, or not yet promoted to case-studies/
│   ├── uxep-v2/
│   ├── insights-center/
│   ├── project-snowblower/
│   └── portfolio-site/
│
└── assets/                   # Shared images, logos, media (when not case-specific)
```

## Layers (how work is organized)

| Layer | Location | Purpose |
|-------|----------|---------|
| **Shipped products** | `case-studies/` | Headline stories, platform launches, POCs, design system contributions |
| **Teaching & writing** | `articles/` | Standalone blog posts, workshop narratives that highlight enablement expertise |
| **Methods & workflows** | `case-studies/ai-design-workflow/` + `supporting/` | Differentiator: OpenSpec, Figma→code, MCP pipelines |
| **Enablement artifacts** | `supporting/enablement-workshops/` | Decks, repos, recordings, feed articles and case studies |
| **In progress / NDA** | `drafts/` | Promote to `case-studies/` when ready and cleared |

## Adding a case study

Create a folder under `case-studies/` named with a short slug. Register it in `index.yaml`.

Each case study folder should include:

| File | Purpose |
|------|---------|
| `index.md` | Primary case study content (problem, role, process, outcome, links) |
| `metadata.yaml` | Title, date, role, tags, visibility, featured |
| `assets/` | Screenshots, videos, diagrams for that project |

Copy `case-studies/_template/` when starting a new entry.

### Cross-referencing

Work often spans multiple threads. Assign a **primary home** in `case-studies/`, reference elsewhere:

- OpenSpec on UXEP → primary: `ai-design-workflow`, mention in `uxep-platform`
- ATM OCDL theming → primary: `design-system-theming`, mention in `uxep-platform`
- WARP metrics → `supporting/metrics-and-analytics`, outcome in `uxep-platform`
- UXR workshops → `articles/` (published posts) + `supporting/enablement-workshops` (artifacts), methodology in `ai-design-workflow`

## Supporting folders

Put artifacts here when they **support multiple case studies** or **don't carry a full narrative alone**:

- **enablement-workshops/**: decks, repos, workshop recordings
- **metrics-and-analytics/**: WARP exports, tagging docs, data viz
- **testimonials/**: peer quotes, recognition

Add a short `README.md` or artifact file per item; link from case study `index.md` proof sections.

## Articles

Use `articles/` for teaching and thought-leadership blog posts, workshop narratives published as standalone portfolio content.

Each article folder includes `index.md` and `metadata.yaml`. Register in `index.yaml` under `articles:`. See [articles/README.md](articles/README.md).

Raw workshop decks and repos stay in `supporting/enablement-workshops/`; the article is the readable narrative.

## Drafts

Use `drafts/` for work that is:

- Still in progress (`uxep-v2`)
- Pre-era or NDA-heavy (`insights-center`)
- Needs anonymization (`project-snowblower`)
- Meta / self-referential (`portfolio-site`)

Set `promote_to` in `index.yaml` when a draft should graduate into a case study.

## Public vs. internal

Mark NDA or internal-only work in `metadata.yaml` (`visibility: internal`). Portfolio implementation should respect `index.yaml` visibility flags and use anonymized content from `drafts/` when needed.

## Related docs

- [Role positioning research](../docs/role-positioning-research.md): Design Engineer / UX Engineer / Design Technologist findings and Michelle alignment
