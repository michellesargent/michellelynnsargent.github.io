## Why

Michelle's portfolio positioning research identifies enablement and teaching as a core differentiator — she designs workshops for non-technical audiences (UX researchers, designers) and bridges design intent to production workflows. Today, workshop evidence lives only in `supporting/enablement-workshops/` as artifact references, not as readable portfolio content. Four high-impact workshops and presentations already exist with transcripts, LinkedIn articles, and peer feedback, but none are published as blog articles a hiring manager or collaborator can read in minutes.

This change elevates teaching expertise to first-class portfolio content and fills a gap in the "what portfolio must prove" analysis: visible thought leadership beyond case study narratives.

## What Changes

- Add a new `work/articles/` layer for teaching and thought-leadership blog posts (distinct from `supporting/` artifact storage)
- Create four blog article drafts in `work/articles/`, one per workshop/presentation:
  1. **AI Journey Mapping Workshop** — human-in-the-loop pipeline from transcripts to Miro
  2. **Going Beyond Figma Make** (Shop Talk) — version control and sharing for AI-generated prototypes
  3. **Researchers, Meet GitHub Copilot** — teaching researchers to use Copilot with grounded, spec-driven context
  4. **Beyond the Vibes: Owning Your Design Portfolio** (dzone 2025) — from vibe coding to a curated, locally-built portfolio
- Register articles in `work/index.yaml` with slugs, dates, audiences, and cross-references to case studies
- Update `work/README.md` to document the `articles/` layer and when to use it vs. `supporting/`
- Add article metadata files (`metadata.yaml`) per article following case study conventions
- Link articles from `case-studies/ai-design-workflow/` and `supporting/enablement-workshops/`

## Capabilities

### New Capabilities

- `work-articles-layer`: New `work/articles/` content layer with catalog entries, metadata schema, and README conventions for teaching blog posts
- `teaching-blog-articles`: Four article content specs covering structure, tone, source material, and portfolio angles for each workshop-derived post

### Modified Capabilities

<!-- No existing openspec/specs/ requirements to modify -->

## Impact

- `work/` folder structure — new `articles/` directory with 4 article folders
- `work/index.yaml` — new `articles` catalog section
- `work/README.md` — structure and layer documentation update
- `work/supporting/enablement-workshops/README.md` — cross-links to published articles
- `work/case-studies/ai-design-workflow/index.md` — reference teaching articles as proof
- No application code changes; content-only addition preparing for future portfolio site implementation
