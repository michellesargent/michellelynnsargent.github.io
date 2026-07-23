# Michelle Sargent: Portfolio

Password-protected portfolio site for Michelle Sargent (Design Engineer). Built with Astro 5 + TypeScript, deployed to GitHub Pages.

Content lives in [`work/`](work/), case studies, teaching articles, and supporting evidence. The site reads `work/index.yaml` at build time.

## Local development

```bash
npm install
cp .env.example .env   # set SITE_PASSWORD in .env (shared by dev and build)
npm run dev
```

Dev and production builds both read `SITE_PASSWORD` from `.env` (or an inline env var). If unset, dev falls back to password `dev`.

After a production build, test the output with `npm run preview`: not `npm run dev`.

## Production build

Set `SITE_PASSWORD` before building (this value is hashed into the static site at build time):

```bash
cp .env.example .env   # then edit .env with your password
npm run build
npm run preview
```

Or pass it inline:

```bash
SITE_PASSWORD='your-password' npm run build
```

Production builds **fail** if `SITE_PASSWORD` is not set (via env var or `.env`).

## GitHub Pages setup

1. Create a user Pages repo: `michellelynnsargent.github.io` (or `michellesargent.github.io`)
2. Push this repository to the repo's `main` branch
3. Add repository secret: **`SITE_PASSWORD`** (the password you share with reviewers)
4. Enable GitHub Pages with source: **GitHub Actions**
5. Push to `main`: the deploy workflow builds and publishes `dist/`

## Sharing with reviewers

Share the GitHub Pages URL and password individually with hiring managers and collaborators. The password is never committed to the repo.

**Security note:** The password gate is client-side access control for casual confidentiality, not cryptographic security. Combined with `noindex` and `robots.txt`, it keeps work out of casual discovery.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (requires `SITE_PASSWORD`) |
| `npm run preview` | Preview production build |
| `npm run check` | Astro check + TypeScript |

## Site structure

| Route | Content |
|-------|---------|
| `/` | Home, positioning, featured work + writing |
| `/work` | Case study index |
| `/work/[slug]` | Case study detail |
| `/writing` | Teaching article index |
| `/writing/[slug]` | Article detail |
| `/about` | Bio, timeline, skills, LinkedIn contact |

## Related docs

- [Role positioning research](docs/role-positioning-research.md)
- [Work content conventions](work/README.md)
