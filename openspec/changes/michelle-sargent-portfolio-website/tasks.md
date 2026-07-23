## 1. Project scaffold

- [x] 1.1 Initialize Astro 5 + TypeScript project at repo root (`npm create astro@latest` with minimal template)
- [x] 1.2 Configure `astro.config.mjs` for static output, `base: '/'`, `site` URL for chosen `<username>.github.io`, and image optimization
- [x] 1.3 Add `package.json` scripts: `dev`, `build`, `preview`, `check` (astro check + tsc)
- [x] 1.4 Create `src/styles/tokens.css` with typography, color, spacing, and motion CSS custom properties
- [x] 1.5 Create `src/styles/global.css` importing tokens and base reset/prose styles
- [x] 1.6 Add `public/` assets: favicon, default OG image (for authenticated sharing only)
- [x] 1.7 Update `openspec/config.yaml` with project context (Astro, TypeScript, GitHub Pages, password gate, Design Engineer positioning)

## 2. Access control

- [x] 2.1 Create `src/components/AuthGate.astro` (or client island) — password form, session check, content wrapper
- [x] 2.2 Implement password verification via SHA-256 hash injected at build time from `SITE_PASSWORD` env var
- [x] 2.3 Fail build with clear error when `SITE_PASSWORD` is not set in production builds
- [x] 2.4 Store authenticated state in `sessionStorage`; clear on browser session end
- [x] 2.5 Wrap all page content in `AuthGate` via `BaseLayout`
- [x] 2.6 Add `noindex, nofollow` meta tag to all pages
- [x] 2.7 Add `public/robots.txt` with `Disallow: /` for all crawlers

## 3. Content pipeline

- [x] 3.1 Add `js-yaml` (or equivalent) dependency for parsing `work/index.yaml`
- [x] 3.2 Define TypeScript types in `src/lib/content/types.ts` mirroring catalog schema (CaseStudy, Article, Proof, Metadata)
- [x] 3.3 Implement `src/lib/content/catalog.ts` — parse `work/index.yaml` and export typed collections
- [x] 3.4 Implement `src/lib/content/loader.ts` — load `index.md` + `metadata.yaml` per slug from `work/case-studies/` and `work/articles/`
- [x] 3.5 Include entries with `visibility: public` or `visibility: internal`; exclude unpublished drafts
- [x] 3.6 Implement `getFeatured()` — return featured case studies (by priority) and articles (by date)
- [x] 3.7 Implement cross-reference resolver — map `related_*` and `feeds_from` slugs to `{ slug, title, href }`
- [x] 3.8 Implement thumbnail resolver with graceful null fallback when asset missing
- [x] 3.9 Add build-time validation — fail build if a catalog entry references a missing folder or file

## 4. Cisco link handling

- [x] 4.1 Create `src/lib/content/cisco-links.ts` — classify URLs as `public` or `cisco-sso-vpn` using configurable host patterns
- [x] 4.2 Create `src/components/CiscoLink.astro` — renders link with "Requires Cisco SSO & VPN" badge and tooltip
- [x] 4.3 Create `src/components/InternalRef.astro` — non-clickable text for internal-only references with access label
- [x] 4.4 Integrate Cisco link classification into markdown renderer (remark/rehype plugin or post-process)
- [x] 4.5 Apply Cisco link component in case study proof sections and article related-link areas

## 5. Layout and components

- [x] 5.1 Create `src/layouts/BaseLayout.astro` with AuthGate, `<head>` meta slots, skip link, header, footer, and main landmark
- [x] 5.2 Create `src/components/Nav.astro` — desktop links + mobile hamburger menu with active state
- [x] 5.3 Create `src/components/Footer.astro` — copyright, LinkedIn link, and GitHub profile link (no email)
- [x] 5.4 Create `src/components/Card.astro` — reusable card for work and writing grids (title, excerpt, tags, thumbnail, link)
- [x] 5.5 Create `src/components/Tag.astro` — theme/tag pill component
- [x] 5.6 Create `src/components/Prose.astro` — styled markdown content wrapper (~720px max-width) with Cisco link integration
- [x] 5.7 Create `src/layouts/CaseStudyLayout.astro` — header (role, org, timeline), proof section, angles, prose body
- [x] 5.8 Create `src/layouts/ArticleLayout.astro` — header (date, audience, role), related links, prose body
- [x] 5.9 Create `src/pages/404.astro` — branded not-found page with nav links

## 6. Home page

- [x] 6.1 Create `src/pages/index.astro` with hero (name, "Design Engineer", positioning statement)
- [x] 6.2 Add "Selected Work" section — up to 3 featured case study cards (includes internal Cisco work)
- [x] 6.3 Add "Teaching & Writing" section — up to 3 featured article cards
- [x] 6.4 Add secondary expertise line (enterprise systems + enablement framing)
- [x] 6.5 Add CTAs linking to `/work`, `/writing`, `/about`, and LinkedIn

## 7. Work pages

- [x] 7.1 Create `src/pages/work/index.astro` — grid of all case study cards sorted by priority
- [x] 7.2 Add theme filter on work index (activate when 2+ case studies exist)
- [x] 7.3 Create `src/pages/work/[slug].astro` — dynamic route for all cataloged case study slugs
- [x] 7.4 Render case study markdown body, proof items (with Cisco badges), portfolio angles, and cross-references
- [x] 7.5 Return 404 for invalid slugs only
- [x] 7.6 Verify all 4 case studies render correctly behind password gate

## 8. Writing pages

- [x] 8.1 Create `src/pages/writing/index.astro` — grid of all article cards sorted by date descending
- [x] 8.2 Add teaching positioning header on writing index
- [x] 8.3 Create `src/pages/writing/[slug].astro` — dynamic route for all cataloged article slugs
- [x] 8.4 Render article markdown body, related links (with Cisco badges), and LinkedIn external links
- [x] 8.5 Display teaching/enablement tags prominently on cards and detail headers
- [x] 8.6 Verify all 5 articles render correctly with prose styling

## 9. About page

- [x] 9.1 Create `src/pages/about.astro` with bio (hybrid design–engineering, Cisco role, AI-native workflows)
- [x] 9.2 Add career timeline section (5+ entries from positioning research)
- [x] 9.3 Add expertise framing section (Design Engineer primary, UX Engineer, Design Technologist)
- [x] 9.4 Add skills section grouped by design, engineering, and AI-native workflow
- [x] 9.5 Add LinkedIn as primary contact on About with `rel="noopener noreferrer"` (no email, no contact form)
- [x] 9.6 Add portfolio-site-as-artifact reference (conditional on catalog entry)

## 10. Accessibility and performance

- [x] 10.1 Add per-page `<title>` and meta description via BaseLayout props
- [x] 10.2 Verify skip link, focus states, semantic landmarks, and color contrast WCAG AA
- [x] 10.3 Implement `prefers-reduced-motion` CSS overrides for animations
- [x] 10.4 Run Lighthouse on production build — target Performance ≥90, Accessibility ≥95
- [x] 10.5 Optimize article thumbnails via Astro `<Image>` where assets exist

## 11. GitHub Pages deployment

- [x] 11.1 Create `.github/workflows/deploy.yml` — build Astro, inject `SITE_PASSWORD` from secrets, deploy to GitHub Pages
- [x] 11.2 Create repo as `<username>.github.io` (`michellesargent` or `michellelynnsargent`); confirm `base: '/'` and matching `site` URL
- [x] 11.3 Document setup steps: create user Pages repo, add `SITE_PASSWORD` secret, enable Pages (GitHub Actions source), migrate from michellelynnpenney.github.io
- [x] 11.4 Deploy and verify password gate, case studies, articles, and about page on live GitHub Pages URL
- [x] 11.5 Share URL + password workflow documented in repo README (for Michelle's reference, not committed password)

## 12. Meta case study and content readiness

- [x] 12.1 Promote `work/drafts/portfolio-site/` to `work/case-studies/portfolio-site/` with `visibility: internal`
- [x] 12.2 Write case study `index.md` documenting site design decisions, stack, password gate, and live URL
- [x] 12.3 Register `portfolio-site` in `work/index.yaml` under `case_studies` with `featured: true`
- [x] 12.4 Confirm all 5 teaching articles have final copy in `work/articles/*/index.md`
- [x] 12.5 Add or verify thumbnail images in `work/articles/*/assets/thumbnail.png`
