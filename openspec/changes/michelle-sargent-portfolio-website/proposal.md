## Why

Michelle's positioning research defines her as a **Design Engineer** with enterprise systems depth, AI-native workflows, and teaching as a core differentiator — but there is no live portfolio to prove it. Case studies, teaching articles, and supporting evidence already exist in `work/`, yet they are markdown files in a repo, not a deployed product a hiring manager can visit in 30 seconds. The portfolio site itself must become the flagship artifact: designed, built, and shipped with craft, reading from `work/index.yaml` as the single content source.

This change is timely because the `work/` content layer is now populated (four case studies, five teaching articles, supporting evidence) and the `teaching-expertise-blog-articles` change prepared the writing layer. The next step is the site that surfaces it all.

## What Changes

- Scaffold a production-ready portfolio website for Michelle Sargent at the repository root
- Implement site information architecture: home, work (case studies), writing (teaching articles), about, and optional contact
- Build a content pipeline that reads `work/index.yaml`, case study folders, and article folders to generate pages
- Lead with Design Engineer positioning per `docs/role-positioning-research.md` — headline, craft signals, and enterprise credibility in tone balance
- Feature flagship case studies (`uxep-platform`, `ai-native-developer-pack`) and teaching articles as first-class routes
- Protect the entire site with a password gate — all Cisco portfolio content is confidential
- Include `visibility: internal` case studies in the build (accessible only after authentication)
- Classify Cisco property links with SSO/VPN access indicators; render internal URLs as non-clickable labels
- Deploy to GitHub user Pages at root (`michellesargent.github.io` or `michellesargent.github.io`), replacing current [michellelynnpenney.github.io](https://michellelynnpenney.github.io/)
- Contact via LinkedIn (About); footer includes LinkedIn and GitHub profile links (no email or contact form)
- Promote `drafts/portfolio-site` to a published case study documenting the site as meta-proof
- Add project context to `openspec/config.yaml` (stack, conventions, positioning)

## Capabilities

### New Capabilities

- `portfolio-site-foundation`: App scaffold, routing, layout shell, design tokens, and deployment pipeline for the portfolio site
- `portfolio-content-pipeline`: Parser and page generator that reads `work/index.yaml`, `index.md`, and `metadata.yaml` for case studies and articles
- `portfolio-home-page`: Hero, positioning statement, featured work grid, teaching highlights, and craft signals on the landing page
- `portfolio-work-pages`: Case study listing and detail pages with proof sections, themes, and cross-references
- `portfolio-writing-pages`: Teaching article listing and detail pages highlighting enablement expertise
- `portfolio-about-page`: Bio, career timeline, skills framing (Design Engineer / UX Engineer / Design Technologist), and LinkedIn contact
- `portfolio-access-control`: Site-wide password gate, session auth, noindex for confidential content
- `portfolio-cisco-links`: Cisco property link classification and SSO/VPN access indicators

### Modified Capabilities

<!-- No existing openspec/specs/ requirements to modify -->

## Impact

- **New application code** at repository root (Astro app — decided in design.md)
- **GitHub Actions** workflow for build and GitHub Pages deploy; `SITE_PASSWORD` as GitHub Actions secret
- `work/index.yaml` — may add `portfolio-site` case study entry when promoted from drafts
- `work/drafts/portfolio-site/` — graduate to `case-studies/portfolio-site/` when site ships
- `openspec/config.yaml` — project context and stack conventions
- `package.json`, build config, CI/deploy config — new dependencies and scripts
- No changes to existing case study or article content bodies (read-only consumption)
