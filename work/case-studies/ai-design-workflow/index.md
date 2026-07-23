## Improving the design workflow with AI tools

Operationalized a spec-driven design workflow that moves from PRD to information architecture, through IDE wireframes and dual-tool prototyping, to functional HTML for research—all before development begins.

## Role

- **Title on project:** Design Engineer
- **Scope:** design / prototyping / workflow systems

## Context

- **Timeline:** Dec 2025 – present (ongoing methodology)

## Problem

Traditional handoff and tool silos broke down as AI compressed design-to-code cycles. Teams needed a repeatable pre-development process—not one-off demos—that validated information architecture, interaction patterns, and content organization with real users before engineering invested in build.

## Approach

Our process runs from PRD to shipped experience, with design validation completed before development starts.

### PRD → Specs → IA

- Start from the product requirements document and translate into OpenSpec specs that define scope, constraints, and acceptance criteria
- As a team, discuss how best to organize content—navigation, page hierarchy, and content models—before any visual design
- Deliver information architecture as the first concrete artifact: structure the team agrees on before wireframes or prototypes

### Wireframes in the IDE

- Develop mid-fidelity wireframes directly in the IDE, aligned to specs so structure and content stay traceable to requirements
- Iterate quickly with AI-assisted tooling while keeping human judgment on layout, hierarchy, and interaction decisions

<!-- photo-gallery -->

### Prototyping in Pencil and Figma

- Use **Pencil.dev** and **Figma** together: Pencil for fast, spec-aligned exploration in the design-engineering loop; Figma for higher-fidelity flows, component alignment, and stakeholder review
- Both tools serve the same goal—testable prototypes that reflect the agreed IA—not competing deliverables

### Functional HTML for research

- Bring prototypes forward into functional HTML prototypes suitable for user research and interviews
- Researchers and participants interact with real structure, navigation, and content—not static mocks—so feedback informs specs and IA before code ships
- This validation gate happens entirely before development; engineering receives tested IA, validated flows, and research-backed specs

### Version control and internal sharing

- Store specs, wireframes, and functional HTML prototypes in a **GitHub repository** so the team has version history, branching for iterations, and pull requests for review
- Publish research-ready builds to **GitHub Pages** for internal sharing—stakeholders and research participants get a stable URL without waiting on production infrastructure
- Version control and Pages publishing keep the pre-development loop auditable and shareable across design, research, and engineering

### Enablement and tooling

- **MCP Servers:** Atlassian and Playwright as well as CDSI and Content
- **Extensions:** Pencil.dev
- **Cursor Plugins:** Figma and Miro plugins package rules, skills, agents, commands, MCP servers, and hooks into distributable bundles
- **Figma ↔ code:** Figma Make → GitHub Pages for sharing prototypes


## Ways to continue exploring

The pre-development loop above is the baseline. Agent skills extend it at specific decision points—before committing to IA, before building research HTML, and before handing off to engineering.

### Stress-test plans before you build

- **[grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md)** (Matt Pocock) — Relentless, one-question-at-a-time interviewing about a plan or design until every branch of the decision tree is resolved. Run it after translating a PRD into OpenSpec specs to surface hidden assumptions, edge cases, and unresolved dependencies before wireframes or prototypes begin.

### Answer design questions with throwaway code

- **[prototype](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md)** (Matt Pocock) — Build throwaway code that answers a single design question. Pick the branch that matches the question: a tiny interactive app to validate state models and logic, or multiple UI variations on one route for visual exploration. Fits the wireframe → functional HTML gate—learn fast, surface full state after every action, then fold validated decisions back into specs.

### Critique UX decisions in AI-assisted workflows

- **[AI UX Critique](https://wwwin-github.cisco.com/pages/AI-UX-Playbook/Site/tools/ai-ux-critique)** (Cisco AI UX Playbook) — Structured critique skill for evaluating UX choices made with AI tooling—layout, interaction patterns, content hierarchy, and accessibility—before research sessions or stakeholder review. Use it as a quality gate between Pencil/Figma exploration and publishing research-ready HTML to GitHub Pages.

## Outcome

- Pre-development research loop adopted by design and research teams; IA and specs validated before engineering kickoff
- Workflows cited in peer feedback as practical path for non-technical audiences into version-controlled design
- Informed UXEP build process and cross-org CDSI demos
