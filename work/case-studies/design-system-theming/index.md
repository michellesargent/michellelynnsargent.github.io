## Contributing to Atmosphere and CDSI at scale

Shipped OCDL theming, designer-facing Figma plugins, and CDSI onboarding content—and spotlighted how two designers used AI to deliver necessary engineering work on Atmosphere v4.

## Role

- **Title on project:** Design Engineer
- **Scope:** design + production code + systems

## Context

- **Organization:** Cisco (IT Design / Atmosphere, CDSI, UX Enablement)
- **Timeline:** Nov 2025 – Apr 2026
- **Team:** Atmosphere team

## Problem

Design system consumers needed consistent OCDL theming, accurate component metadata for AI-assisted workflows, and lower-friction onboarding as design-to-code pipelines accelerated. Designers were increasingly expected to contribute production PRs and validate CDSI integrations—but most lacked the IDE, GitHub, and Copilot foundations that make AI-assisted development safe at enterprise scale.

## Approach

### OCDL theming in Atmosphere

- Contributed token overrides and component theme updates across Forms and Tables branches—10 first-time contributions in Atmosphere v4.0.0-beta.1
- Shipped production PRs for OCDL component updates (Accordion, Button, Divider, Drawer, Dropdown, Footer, Header, Link, Loader, Modal, and related tickets)
- Participated in OCDL theme development discovery: exploring how AI can accelerate Harbor component theming while keeping human review on token contracts and visual QA

### Figma plugins for AI-readable design systems

- Built Figma plugins via Cursor to keep component descriptions readable by Figma MCP
- Prototyped theming UI experiments and PR automation from Figma branches—closing the loop between design exploration and reviewable GitHub output

### CDSI onboarding and cross-org enablement

- Updated CDSI onboarding content for the OAuth proxy path, reducing integration friction for teams adopting the design system
- Supported cross-org CDSI design workflow demos referenced in UXEP and AI-native developer pack work

<!-- photo-gallery -->

### UXE Spotlight: OCDL AI Learning

Presented **UXE Spotlight: OCDL AI Learning** to the UX Enablement community—a spotlight on work **Jarod and I**, both designers, did when necessary engineering work on OCDL could not wait on a traditional handoff.

The deck walks through real delivery, not a curriculum:

1. **Why designers shipped code:** Atmosphere v4 OCDL release pressure required token overrides, component theme updates, and MCP-ready metadata—work that sat on the critical path alongside engineering capacity.
2. **How we used AI:** Cursor and Copilot accelerated theming iteration, Figma plugin experiments, and PR preparation while keeping human review on token contracts, visual QA, and merge discipline.
3. **What we learned:** Designers contributing production PRs on `cisco-it-design/atmosphere` is viable when AI handles boilerplate and translation—but specs, review, and design-system contracts still anchor every merge.
4. **What went well:** Engineers on the Atmosphere squad met designers in GitHub with empathy—not gatekeeping. Review threads offered technical coaching, encouragement through tricky components, and space to ask questions without shame. That culture improved collaboration, accelerated skill growth, and made production PRs feel like a team sport instead of a solo risk.

The spotlight is evidence that designers can own necessary engineering slices on design-system surfaces when AI tooling meets version-controlled workflow—not a separate enablement program.

### GitHub PR velocity

**My personal GitHub activity** on production repos—not squad totals:

| Workstream | Repository | PRs I authored | PRs I reviewed |
| --- | --- | ---: | ---: |
| **UXEP** | `cisco-it-design/uxep-site` | 29 | 30 |
| **OCDL / Atmosphere** | `cisco-it-design/atmosphere` | 12 | 30 |

Prior platform work on Insights Center Rhodonite v7 (`cisco-it-design/insights-center-aem`: 30 authored, 19 reviewed by me) established the PR cadence that carried into OCDL theming; see `drafts/insights-center/` for NDA context.

## Ways to continue exploring

Design-system engineering at scale benefits from the same spec-driven and enablement loops as product work—the baseline above is production delivery; these agent skills extend it at specific decision points.

### Stress-test theming plans before you code

- **[grill-with-docs](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)** (Matt Pocock) — Relentless interview that sharpens a plan or design while generating ADRs and a glossary as you go. Run it after OCDL discovery or before opening theming PRs to resolve token contracts, edge cases, and naming dependencies with engineering.

### Teach designers durable development skills

- **[teach](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md)** (Matt Pocock) — Stateful teaching workspace (`MISSION.md`, lessons, reference docs, learning records) for multi-session curriculum. Capture OCDL onboarding and design-to-PR patterns as retrievable modules after spotlight-style shareouts.

### Spec-driven design-system changes

- **OpenSpec** — Proposal → specs → design → tasks before implementation, shared with engineering on UXEP and ATM work. Use it when OCDL theming, CDSI onboarding, or plugin behavior needs an auditable contract before code ships.

### Autonomous iteration on well-scoped tasks

- **Ralph Loops** — OpenSpec + autonomous agent loops for moving from interactive AI assistance to bounded, spec-driven execution on repeatable design-system tasks (token migrations, metadata updates, onboarding doc lifts) while keeping human review at PR merge.

## Outcome

- Atmosphere v4 release included first-time OCDL theming contributions (Apr 2026)
- CDSI onboarding updated for OAuth proxy; reduced integration friction for adopting teams
- Figma plugins validated an AI-readable component documentation pattern for MCP workflows
- Tagging onboarding merged for atmosphere.cisco.com (Adobe Analytics)
- UXE Spotlight presentation documented designer-led OCDL engineering delivery—Jarod and Michelle on AI-assisted theming, plugins, and production PRs
- Informed UXEP build process and cross-org CDSI demos; cross-reference `uxep-platform` and `ai-design-workflow` for platform and methodology slices
