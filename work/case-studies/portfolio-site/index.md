# Portfolio Site

> Slug: `case-studies/portfolio-site/` · Status: shipped · Visibility: internal

## One-liner

Designed and built a password-protected portfolio site that reads from a single `work/` content layer, proving Design Engineer craft through the site itself.

## Role

- **Title on project:** Design Engineer
- **Scope:** information architecture, visual design, Astro implementation, content pipeline, deployment

## Context

- **Organization:** Personal / career positioning
- **Timeline:** July 2026
- **Stack:** Astro 5, TypeScript, GitHub Pages, GitHub Actions

## Problem

Case studies, teaching articles, and supporting evidence lived as markdown in a repo, valuable for agents and collaborators, invisible to hiring managers who need a 30-second proof point. Michelle's positioning research defined a **Design Engineer** identity with teaching as a differentiator, but there was no deployed product to demonstrate it.

## Approach

- **Content-first architecture:** `work/index.yaml` remains the single catalog; the site parses YAML + markdown at build time with validation for broken references
- **Password gate:** Client-side SHA-256 verification with `SITE_PASSWORD` injected at build via GitHub Actions secret, sufficient for confidential Cisco work shared with select reviewers
- **Cisco link classification:** Outbound links to Cisco properties render with SSO/VPN badges; internal repo references render as labeled non-clickable text
- **Editorial minimalism:** Fraunces + Source Sans 3, restrained teal accent, ~720px prose width, craft signals without generic template aesthetics
- **OpenSpec workflow:** Built using spec-driven change management (`michelle-sargent-portfolio-website`) with tasks, design decisions, and capability specs

## Outcome

- **Shipped:** Static site deployable to `michellelynnsargent.github.io` via GitHub Actions
- **Content:** 5 case studies (including this meta case study), 6 teaching articles, about page with career timeline
- **Access control:** Site-wide password gate, `noindex` meta, `robots.txt` disallow
- **Teaching surfaced:** Session Zero onboarding article featured on home and writing index

## Proof

- **Live URL:** https://michellelynnsargent.github.io (password-protected)
- **Repo:** This repository
- **Articles:** Session Zero, Researchers Meet GitHub Copilot, AI Journey Map Pipeline, and more in `/writing`

## Portfolio angles

- [x] Design Engineer: shipped end-to-end with craft
- [x] UX Engineer: content pipeline bridges markdown authoring and rendered pages
- [ ] Design Technologist: 0→1 proof, innovation, functional demos
- [x] Enterprise systems at scale: Cisco case studies behind auth with SSO link labeling
- [x] AI-native workflow / design engineering tooling: OpenSpec + Cursor build process

## Notes for portfolio build

This case study is self-referential, update the live URL when the GitHub username is finalized. Password is never committed; rotate via GitHub Actions secret and redeploy.
