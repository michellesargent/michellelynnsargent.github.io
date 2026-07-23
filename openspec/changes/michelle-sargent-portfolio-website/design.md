## Context

Michelle Sargent is a Senior Product Designer at Cisco operating as a hybrid Design Engineer. Positioning research (`docs/role-positioning-research.md`) recommends leading with **Design Engineer** identity while proving enterprise systems depth and teaching expertise.

The `work/` folder is the single source of truth for portfolio content:

| Layer | Count | Status |
|-------|-------|--------|
| Case studies | 4 | Draft content, some `visibility: internal` |
| Teaching articles | 5 | Draft content, `visibility: public` |
| Supporting evidence | 3 folders | Artifact references |
| Drafts | 4 | Including `portfolio-site` (meta case study) |

There is no application code in the repo today — only content, OpenSpec changes, and docs. The portfolio site must be built from scratch and become the primary proof artifact: designed, built, and shipped with craft.

**Deployment constraints (resolved):** Michelle will replace her current portfolio at [michellelynnpenney.github.io](https://michellelynnpenney.github.io/) with a user GitHub Pages site at **`michellesargent.github.io`** or **`michellelynnsargent.github.io`** (repo root, `base: '/'`). All Cisco content is confidential, so the entire site requires **password protection**. Cisco property URLs require SSO and VPN — links must be labeled accordingly. Contact: **LinkedIn** (primary on About); **LinkedIn + GitHub** in the footer.

## Goals / Non-Goals

**Goals:**

- Ship a password-protected portfolio on GitHub user Pages at repo root (`michellesargent.github.io` or `michellelynnsargent.github.io`)
- Read all portfolio content from `work/` at build time — no duplicate content in the app
- Include confidential Cisco case studies (`visibility: internal`) behind the site-wide password gate
- Information architecture that surfaces case studies, teaching articles, and positioning clearly
- Design Engineer craft signals: performance, accessibility, thoughtful typography and motion
- Label all Cisco property links with SSO/VPN access requirements
- Meta case study: document the site itself as shipped work
- LinkedIn as primary contact on About; LinkedIn and GitHub profile links in footer

**Non-Goals:**

- CMS or admin UI for content editing (markdown in `work/` remains the workflow)
- Custom domain or Vercel deployment for v1
- Email contact or contact forms
- Server-side authentication (GitHub Pages is static-only)
- Public SEO indexing (confidential content — `noindex` everywhere)
- Blog comments, newsletter, or job board integrations
- Rebuilding or editing existing `work/` article/case study bodies (content is read-only input)

## Decisions

### 1. Tech stack: Astro + TypeScript

**Decision:** Astro 5 with TypeScript, static site generation (SSG), deployed to **GitHub Pages** via GitHub Actions.

**Rationale:**
- Content-heavy site with minimal client JS — Astro ships near-zero JS by default (performance signal for DE hiring)
- First-class markdown/MDX support for rendering `work/*/index.md`
- TypeScript matches Michelle's UXEP/AI-native stack and Cursor design-engineer job descriptions
- GitHub Pages aligns with Michelle's plan to create a GitHub repo; no custom domain needed for v1
- Static output works with Astro's official GitHub Pages deploy pattern

**Alternatives considered:**
- **Vercel** — simpler password story with middleware, but user chose GitHub Pages
- **Next.js App Router** — stronger if the site needs heavy interactivity; overkill for a content portfolio
- **Private GitHub repo only** — limits sharing with hiring managers who don't have repo access; password-gated Pages is more shareable

### 2. Content pipeline: build-time YAML + markdown loader

**Decision:** A `src/lib/content/` module reads `work/index.yaml` at build time, loads `index.md` and `metadata.yaml` per slug, and includes entries where `visibility` is `public` **or** `internal` (entire site is password-gated).

**Rationale:**
- Single source of truth stays in `work/` — agents and Michelle edit markdown, not React components
- Build-time parsing catches broken slugs and missing files in CI
- Cisco case studies are confidential but should be viewable by authenticated visitors — no need to exclude `internal` entries
- Same pattern as case study conventions already documented in `work/README.md`

**Pipeline shape:**

```
work/index.yaml
    ↓ parse & filter (visibility: public | internal)
src/lib/content/
    ├── getCaseStudies()  → CaseStudy[]
    ├── getArticles()     → Article[]
    ├── getFeatured()     → { caseStudies, articles }
    └── classifyLink()    → { href, access: 'public' | 'cisco-sso-vpn' }
    ↓
src/pages/
    ├── index.astro       (home)
    ├── work/[slug].astro (case study detail)
    ├── work/index.astro  (case study list)
    ├── writing/[slug].astro
    ├── writing/index.astro
    └── about.astro
```

### 3. Information architecture

**Decision:**

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, positioning, featured work + writing |
| `/work` | Case study index (grid, filterable by theme tag) |
| `/work/[slug]` | Case study detail (rendered from `work/case-studies/<slug>/index.md`) |
| `/writing` | Teaching article index |
| `/writing/[slug]` | Article detail (rendered from `work/articles/<slug>/index.md`) |
| `/about` | Bio, timeline, skills, contact links |

**Rationale:**
- `/writing` over `/articles` — warmer, teaching-forward label that matches enablement positioning
- `/work` for shipped product narratives; teaching gets its own lane without competing for attention
- Flat URLs for SEO and shareability

**Navigation:** Home · Work · Writing · About — persistent header, mobile hamburger.

### 4. Visual design direction

**Decision:** Editorial minimalism with enterprise credibility.

- **Typography:** Distinctive serif or humanist sans for headings (not Inter/Roboto); readable sans for body
- **Color:** Restrained palette — near-black text, warm off-white background, one accent (deep teal or copper) for links and CTAs
- **Layout:** Generous whitespace, max-width ~720px for article/case study prose, wider grid for index pages
- **Motion:** Subtle page transitions and hover states only; respect `prefers-reduced-motion`
- **Dark mode:** Optional v1.1 — not required for launch

**Rationale:** Path A energy (fast, polished, artifact-forward) with Path B depth in case study pages. Avoid generic "AI slop" aesthetics — the site itself proves taste.

### 5. Visibility and confidential content

**Decision:** The site-wide password gate replaces per-entry public filtering. The build includes all case studies and articles with `visibility: public` or `visibility: internal`. Entries in `drafts/` or with unpublished `status` remain excluded until promoted.

**Rationale:** Michelle confirmed all Cisco content is confidential. Password protection is the access control layer — internal case studies (UXEP, AI-native pack) should be visible to authenticated reviewers, not stripped from the build.

### 6. Password protection (client-side gate)

**Decision:** Implement a client-side password gate using a build-time-injected credential hash. On first visit, visitors see a login screen; successful entry stores auth in `sessionStorage` for the browser session.

**Rationale:** GitHub Pages serves static files only — no server-side auth, no `.htaccess`, no middleware. A client-side gate is the standard pattern for password-protected static portfolios shared with select audiences (hiring managers, collaborators).

**Implementation notes:**
- Password supplied via `SITE_PASSWORD` env var at build time (GitHub Actions secret)
- Store a SHA-256 hash in the client bundle, not plaintext
- Wrap all page content in an `AuthGate` component that checks `sessionStorage`
- Document clearly: this is **casual access control**, not cryptographic security — sufficient to keep confidential work out of casual discovery, not a substitute for true auth

**Alternatives considered:**
- **Private GitHub repo** — hiring managers need repo access; less convenient than a shared password
- **Cloudflare Access** — requires Cloudflare in front of Pages; added complexity for v1
- **No protection, anonymize everything** — rejected; user wants real case study depth behind auth

### 7. Cisco property links

**Decision:** Classify outbound links at render time. Cisco domains and internal GitHub orgs get an inline **"Requires Cisco SSO & VPN"** badge. Internal-only references (EMU repos, Confluence paths) render as non-clickable labeled text.

**Cisco property patterns (configurable list):**
- `*.cisco.com` (e.g. `atmosphere.cisco.com`)
- `github.com/cisco-it-design/*`
- `github.com/Cisco/*`
- `github.emu.cisco.com/*` (if referenced)

**Public links unchanged:** LinkedIn, personal GitHub (non-Cisco), external articles.

### 8. Contact and footer links

**Decision:**
- **About page (primary contact):** LinkedIn — `https://www.linkedin.com/in/michellelynnsargent`
- **Footer (all pages):** LinkedIn + GitHub profile
- **No email**, no contact form, no mailto links

**GitHub profile URL:** Set in site config to match the chosen username (`https://github.com/michellelynnsargent` or `https://github.com/michellesargent`) when the repo is created.

### 9. Project structure

```
portfolio/                    # repo root
├── work/                     # content (unchanged)
├── docs/                     # positioning research (unchanged)
├── openspec/                 # workflow (unchanged)
├── src/
│   ├── components/           # Layout, Card, Prose, Nav, Footer
│   ├── layouts/              # BaseLayout, ArticleLayout, CaseStudyLayout
│   ├── lib/content/          # YAML + markdown loaders
│   ├── pages/                # Astro routes
│   └── styles/               # Global CSS, tokens
├── public/                   # favicon, og-image, static assets
├── astro.config.mjs
├── package.json
└── .github/workflows/deploy.yml   # GitHub Pages CI
```

### 10. SEO, accessibility, performance

**Decision:** Baseline requirements for launch:

- Semantic HTML, skip link, focus states, color contrast WCAG AA
- Per-page `<title>` and meta description (for authenticated viewers; not for public discovery)
- **`noindex, nofollow` on all pages** — confidential content must not appear in search results
- `robots.txt` with `Disallow: /`
- Lighthouse targets: Performance ≥90, Accessibility ≥95 (SEO target N/A — intentionally noindexed)
- Image optimization via Astro `<Image>` for thumbnails in `work/articles/*/assets/`

### 11. Deployment (GitHub Pages — user site at root)

**Decision:** GitHub Actions workflow builds Astro and deploys `dist/` to GitHub Pages on push to `main`. This replaces the existing site at [michellelynnpenney.github.io](https://michellelynnpenney.github.io/).

**Configuration:**
- Repo name: `<username>.github.io` where `<username>` is `michellesargent` or `michellelynnsargent`
- Astro `base: '/'` (user Pages serves at domain root — no `/portfolio/` prefix)
- Astro `site`: `https://michellelynnsargent.github.io` or `https://michellesargent.github.io` (match chosen username)
- `SITE_PASSWORD` stored as GitHub Actions **repository secret** — injected at build, never committed
- Enable Pages with source: GitHub Actions
- No custom domain for v1

**Sharing workflow:** Michelle shares the GitHub Pages URL + password with hiring managers and collaborators individually.

## Risks / Trade-offs

- **[Risk] Client-side password is not true security** → Mitigation: Document limitation; use `noindex`; share password only with trusted reviewers; rotate password via rebuild if leaked.
- **[Risk] Password hash extractable from static bundle** → Mitigation: Acceptable for casual confidentiality; not for highly sensitive IP. Michelle can rotate password and redeploy.
- **[Risk] Username migration** → Mitigation: Use `<username>.github.io` repo naming; set `site` in config when username is finalized; `base` stays `/`.
- **[Risk] Cisco links frustrate external visitors** → Mitigation: Clear SSO/VPN labels set expectations; case study narratives remain readable without clicking links.
- **[Risk] Markdown rendering inconsistencies** → Mitigation: Standardize on a single MDX/remark plugin set; test all articles and case studies in CI.
- **[Risk] Generic portfolio aesthetic** → Mitigation: Custom typography and restrained palette; avoid shadcn/Tailwind defaults without customization.
- **[Risk] Thumbnail assets missing** → Mitigation: Graceful fallback to typographic card without image.

## Migration Plan

1. Scaffold Astro app at repo root (coexists with `work/`, `docs/`, `openspec/`)
2. Implement content pipeline, password gate, and Cisco link handling
3. Verify all case studies and articles render correctly behind auth
4. Create GitHub repo; add `SITE_PASSWORD` secret; enable GitHub Pages
5. Deploy via GitHub Actions
6. Promote `drafts/portfolio-site` → `case-studies/portfolio-site` with live URL
7. Update `openspec/config.yaml` with stack and conventions

**Rollback:** Revert to prior GitHub Actions deploy commit. No database or state.

## Resolved decisions

| Question | Decision |
|----------|----------|
| Custom domain | No — GitHub user Pages for v1 |
| Pages URL | Root deploy: `michellesargent.github.io` or `michellelynnsargent.github.io` (replaces [michellelynnpenney.github.io](https://michellelynnpenney.github.io/)) |
| Astro `base` | `/` (user Pages, not project subpath) |
| Public case studies | Include all Cisco case studies behind password gate |
| Contact (About) | LinkedIn primary |
| Footer links | LinkedIn + GitHub profile |
| Deployment | GitHub Pages via GitHub Actions |
| Access control | Site-wide password; `SITE_PASSWORD` as Actions secret |

## Open Questions

1. **GitHub username** — `michellesargent` vs `michellelynnsargent` (affects repo name, `site` URL, and footer GitHub link only; `base` stays `/`).
2. **Analytics** — Skip for v1 (confidential site), or privacy-respecting analytics behind password?
