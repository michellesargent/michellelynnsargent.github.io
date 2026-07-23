# Teaching articles

First-class blog content for the portfolio, workshop and presentation narratives that highlight teaching expertise. Agents should read **`../index.yaml`** (`articles:` section) before building a writing or teaching page.

## Purpose

Articles are **standalone, readable portfolio content**. They tell the story behind workshops: the problem, how the session was designed, the methodology taught, and what practitioners can take away.

This is distinct from `supporting/enablement-workshops/`, which stores raw artifacts (decks, repos, recordings) that feed case studies and articles.

## Structure

```
work/articles/
├── README.md
├── session-zero-ai-development-foundation/
├── ai-journey-map-pipeline/
├── beyond-figma-make-version-control/
├── researchers-meet-github-copilot/
└── beyond-the-vibes-design-portfolio/
```

## File convention

Each article folder includes:

| File | Purpose |
|------|---------|
| `index.md` | Full article body (800–1,500 words) |
| `metadata.yaml` | Title, date, audience, tags, visibility, cross-references |
| `assets/thumbnail.png` | Hero image for portfolio cards and article header |
| `assets/` | Additional screenshots, diagrams (optional) |

## When to use articles vs. supporting

| Content type | Location |
|--------------|----------|
| Published blog narrative | `articles/<slug>/index.md` |
| Workshop deck, repo, recording | `supporting/enablement-workshops/` |
| Shipped product story | `case-studies/` |

## Cross-referencing

- Primary case study: `case-studies/ai-design-workflow/`
- Raw artifacts: `supporting/enablement-workshops/`
- Peer quotes: `supporting/testimonials/`

Register every article in `work/index.yaml` under `articles:`.
