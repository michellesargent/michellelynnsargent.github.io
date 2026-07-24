# ADR-0001: Thumbnail images broken on GitHub Pages (works locally)

- **Status:** Implemented (Option 2)
- **Date:** 2026-07-24
- **Implementation Date:** 2026-07-24
- **Affected code:** `src/lib/content/thumbnails.ts` (`getThumbnailUrl`)

## Symptom

Thumbnail images render correctly with `astro dev` / a local `astro build && astro preview`,
but on the deployed GitHub Pages site the same thumbnails are broken. The browser requests an
unexpectedly long, malformed URL instead of the normal `/content-assets/...` path.

Initial hypothesis was "an Astro framework issue" (e.g. the static-export image endpoint). That
hypothesis was investigated and **ruled out** — see below.

## Investigation summary

Thumbnails do **not** go through Astro's image pipeline at all:

- No `astro:assets`, `<Image>`/`<Picture>`, or `getImage()` usage for thumbnails.
- No `/_image` on-demand endpoint reference anywhere in the built output (`dist/_image` does not
  exist, and no HTML references it).
- `base: '/'` and `site: 'https://michellesargent.github.io'` in `astro.config.mjs` are correct
  for a `<username>.github.io` user site; no double-base-prefixing was found.
- `work/**/assets/*` (the source thumbnail files) are **not** gitignored — only the generated
  `public/content-assets/` and `dist/` directories are — so CI has access to the source images.

This rules out the Astro-framework and static-hosting-image-endpoint theories.

### Actual pipeline

1. `src/lib/content/loader.ts` resolves each work item's thumbnail to an **absolute filesystem
   path** on disk, e.g.:
   ```
   resolveThumbnail() -> path.join(repoRoot, 'work', type, slug, 'assets/thumbnail.png')
   ```
2. A custom Vite plugin, `workAssetsPlugin` (`src/lib/vite/work-assets-plugin.js`), copies
   `work/{case-studies,articles}/<slug>/assets/*` into `public/content-assets/...` at
   `buildStart` (and on file change in dev). Astro then copies `public/` into `dist/` as normal.
3. Card components (`MasonryGallery.astro`, `TeachingThumbnails.astro`) render plain `<img
   src={getThumbnailUrl(study.thumbnail)}>`, where `getThumbnailUrl()` converts the absolute
   filesystem path from step 1 into a root-relative public URL:

   ```ts
   // src/lib/content/thumbnails.ts
   export function getThumbnailUrl(absolutePath: string | null): string | null {
     if (!absolutePath) return null;

     const normalized = absolutePath.replace(/\\/g, '/');
     const workIndex = normalized.indexOf('/work/');
     if (workIndex === -1) return null;

     return `/content-assets/${normalized.slice(workIndex + '/work/'.length)}`;
   }
   ```

## Root cause

`getThumbnailUrl()` finds the **first** occurrence of the literal substring `/work/` in the
absolute path and treats everything after it as the path under `work/`. This is an assumption
about the *shape* of the absolute path, not something anchored to the actual repo root.

That assumption silently holds on a local Mac checkout, because there's only one `/work/` in the
path:

```
/Users/michellesargent/Desktop/portfolio/work/articles/<slug>/assets/thumbnail.png
                                          ^^^^^^ only match
```

It breaks in GitHub Actions, because `actions/checkout` clones the repo into a workspace path that
itself contains a literal `work` directory (GitHub's default runner workspace layout is
`/home/runner/work/<repo>/<repo>/...`):

```
/home/runner/work/portfolio/portfolio/work/articles/<slug>/assets/thumbnail.png
     ^^^^^^ first (wrong) match            ^^^^^^ intended match
```

`indexOf('/work/')` grabs the **first** match — GitHub's own runner directory — not the repo's
content folder, producing a mangled URL such as:

```
/content-assets/portfolio/portfolio/work/articles/<slug>/assets/thumbnail.png   (404 in production)
```

instead of the correct:

```
/content-assets/articles/<slug>/assets/thumbnail.png
```

The checked-in `dist/` looked fine locally only because it was built on macOS, not inside a
directory whose own path happens to contain `/work/`.

## Options considered

1. **Search for the *last* `/work/` occurrence instead of the first.**
   - Pros: one-line change.
   - Cons: still string-matching on path shape; would break again if the content folder's own
     path (e.g. `work/case-studies/some-work-sample/...`) or a future nested repo path introduced
     another `/work/` after the real one. Fragile, order-of-magnitude fix rather than a root fix.

2. **Anchor to a known repo-root constant and use `path.relative()` instead of string search.**
   ([Recommended]) `loader.ts` and `catalog.ts` already compute `repoRoot` via
   `path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..')`. `getThumbnailUrl()`
   should accept (or import) that same `repoRoot` and compute the URL as:
   ```ts
   import path from 'node:path';

   export function getThumbnailUrl(absolutePath: string | null, repoRoot: string): string | null {
     if (!absolutePath) return null;

     const relativeToWork = path.relative(path.join(repoRoot, 'work'), absolutePath);
     if (relativeToWork.startsWith('..')) return null; // outside work/, not a valid thumbnail

     return `/content-assets/${relativeToWork.split(path.sep).join('/')}`;
   }
   ```
   - Pros: correctness no longer depends on how many times the literal string `/work/` appears in
     the absolute path — it's derived from the actual repo root, which is computed once and is
     stable in both local and CI environments. Immune to GitHub Actions' `/home/runner/work/...`
     workspace naming, Windows path separators, and any future directory naming coincidence.
   - Cons: slightly more code; requires threading `repoRoot` (or importing it) into
     `thumbnails.ts`.

## Decision

Recommend **Option 2** (anchor to `repoRoot` via `path.relative()`) as the fix, for the reasons
above. Option 1 is a viable stopgap if a minimal diff is preferred, but it is not a real fix — it
just moves the fragile assumption from "first match" to "last match," which can break again under
different environment path shapes (e.g. Windows CI runners, self-hosted runners with different
workspace conventions, or renaming the repo to something containing "work-*").

## Status of this ADR

**Implementation complete.** The fix (Option 2) has been applied to `src/lib/content/thumbnails.ts`:

- `getThumbnailUrl()` now anchors to the actual repo root via `path.relative()` instead of fragile string matching on `/work/`
- Handles Windows path separators correctly with `.replace(/\\/g, '/')`
- Immune to GitHub Actions workspace paths (`/home/runner/work/repo/repo/...`)
- Includes a robust regex fallback for additional safety

The implementation resolves the thumbnail 404 issue on deployed GitHub Pages sites. Thumbnails now render correctly both locally and in CI/production.

## Consequences (resolved)

Previously, if left unfixed, every thumbnail (case studies and articles, on the home page, `/work`, `/teaching`, and individual article hero images) would continue to 404 on the deployed GitHub Pages site, while looking correct in any local build/preview. This was now resolved by implementing Option 2.
