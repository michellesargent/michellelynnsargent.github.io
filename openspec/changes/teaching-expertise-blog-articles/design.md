## Context

The portfolio `work/` folder currently organizes content in three layers: `case-studies/` (shipped product narratives), `supporting/` (evidence that feeds cases), and `drafts/` (WIP). Enablement workshops are documented in `supporting/enablement-workshops/README.md` as a table of artifacts to add — decks, repos, recordings — with an explicit note that they are **not standalone portfolio pages**.

Michelle has four mature teaching artifacts with rich source material:

| Workshop | Date | Audience | Source |
|----------|------|----------|--------|
| AI Journey Mapping Workshop | Jun 2026 | UX research team (Matt's team) | VTT transcript, GitHub pipeline repo |
| Going Beyond Figma Make (Shop Talk) | Feb 2026 | Cisco IT Design | VTT transcript, presentation deck |
| Researchers, Meet GitHub Copilot | Mar 2026 | UX Researchers (XRI) | [LinkedIn article](https://www.linkedin.com/pulse/researchers-meet-github-copilot-building-workshop-scale-sargent-t1qbc/), workshop repo |
| Beyond the Vibes: Owning Your Design Portfolio | 2025 (dzone NYC) | Cisco UX community | [LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7384241189971025920/) |

Role positioning research recommends leading with Design Engineer energy while proving enterprise credibility. Teaching articles serve both: they show judgment and systems thinking (not just tool demos) and demonstrate cross-functional enablement at scale.

## Goals / Non-Goals

**Goals:**

- Introduce `work/articles/` as a first-class content layer for teaching and thought leadership
- Publish four complete blog article drafts ready for portfolio site implementation
- Each article tells a teaching story: problem → workshop design → methodology → outcome → what readers can take away
- Cross-link articles to `ai-design-workflow` case study and `enablement-workshops` supporting folder
- Maintain Cisco-internal context where needed (`visibility: internal`) with public-safe framing for external portfolio use

**Non-Goals:**

- Building the portfolio site UI or routing for articles (future change)
- Publishing to LinkedIn or external platforms
- Creating new workshop materials or repos
- Replacing case studies — articles complement, not compete with, shipped-work narratives

## Decisions

### 1. New `work/articles/` layer vs. expanding `supporting/`

**Decision:** Create `work/articles/` as a sibling to `case-studies/`, not nested under `supporting/`.

**Rationale:** The user explicitly wants to *highlight* teaching expertise on the portfolio. Supporting content is defined as evidence woven into cases. Blog articles are standalone readable narratives — closer to case studies in portfolio weight than to deck/recording storage.

**Alternative considered:** Put articles in `supporting/enablement-workshops/`. Rejected because README explicitly says supporting items are not standalone pages, and the user's intent is portfolio-visible teaching content.

### 2. Article folder structure mirrors case studies

**Decision:** Each article gets a folder with `index.md` (article body) and `metadata.yaml` (title, date, tags, visibility, audience).

**Rationale:** Consistent with existing `work/` conventions; agents and future site generators can reuse the same parsing patterns as case studies.

### 3. Article tone and length

**Decision:** 800–1,500 words per article; first-person teaching narrative; include a "What you'll learn" section, workshop context, methodology highlights, and a takeaway for practitioners.

**Rationale:** Long enough to prove depth; short enough for hiring-manager scan. Matches LinkedIn article style Michelle already uses successfully.

### 4. Slug naming

| Slug | Title |
|------|-------|
| `ai-journey-map-pipeline` | From Transcripts to Miro: A Human-in-the-Loop AI Journey Map Pipeline |
| `beyond-figma-make-version-control` | Going Beyond Figma Make: Version Control and Sharing for AI Prototypes |
| `researchers-meet-github-copilot` | Researchers, Meet GitHub Copilot: Scaling Research Synthesis with Grounded AI |
| `beyond-the-vibes-design-portfolio` | Beyond the Vibes: Owning Your Design Portfolio |

**Rationale:** Kebab-case slugs match case study convention; titles differentiate the two "Beyond the Vibes" themes (Figma Make vs. portfolio ownership).

### 5. Visibility and anonymization

**Decision:** Default `visibility: public` for article metadata with Cisco-specific paths (GitHub EMU, internal URLs) called out as contextual examples, not hard dependencies. Internal repo links noted as `[internal]` placeholders.

**Rationale:** Portfolio targets external hiring; articles should read without Cisco VPN. Enterprise context adds credibility without blocking publication.

### 6. Catalog and cross-references

**Decision:** Add `articles:` section to `work/index.yaml`; update `ai-design-workflow/index.md` proof section; add article links to `enablement-workshops/README.md`.

## Risks / Trade-offs

- **[Risk] Content overlap with case study `ai-design-workflow`** → Mitigation: Case study tells the workflow systems story; articles tell individual teaching moments. Cross-reference, don't duplicate full methodology.
- **[Risk] Cisco-internal details in transcripts** → Mitigation: Strip participant names, internal tool URLs, and org-specific paths from public drafts; keep enterprise framing generic.
- **[Risk] Two workshops with "vibe" framing may confuse readers** → Mitigation: Distinct slugs and titles; dzone article focuses on portfolio ownership; Shop Talk article focuses on version control after Figma Make.
- **[Risk] Articles without visuals feel thin** → Mitigation: Note `assets/` placeholders in metadata; reference workshop deck screenshots as future additions.

## Migration Plan

1. Create `work/articles/` directory and README
2. Write four article `index.md` + `metadata.yaml` files from source material
3. Update `work/index.yaml`, `work/README.md`, and cross-reference files
4. No rollback needed — additive content only

## Open Questions

1. Should articles eventually get their own portfolio site route (`/writing` vs. `/articles` vs. woven into `/work`)?
2. Are any workshop screenshots or deck exports available to add to `work/articles/*/assets/` now, or defer to `/opsx:apply`?
3. Should the dzone portfolio workshop article link to this portfolio repo as meta-proof once the site ships?
