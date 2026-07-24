import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

export function getThumbnailUrl(absolutePath: string | null): string | null {
  if (!absolutePath) return null;

  // Prefer a relative path from the repository root; this avoids embedding
  // CI/workspace-specific prefixes (e.g. /home/runner/work/repo/repo/...).
  try {
    const rel = path.relative(repoRoot, absolutePath).replace(/\\/g, '/');

    // If the asset is inside the repo and under the 'work/' directory,
    // drop the leading 'work/' segment so the public URL is
    // /content-assets/<type>/<slug>/assets/...
    if (!rel.startsWith('..') && rel.includes('work/')) {
      const afterWork = rel.split('work/').pop();
      if (afterWork) return `/content-assets/${afterWork}`;
    }
  } catch (e) {
    // fall through to fallback behavior below
  }

  // Fallback: robust extraction of the path after '/work/<type>/'.
  // This handles CI/workspace paths with duplicated segments.
  const normalized = absolutePath.replace(/\\/g, '/');
  // Match '.../work/<type>/<slug>/...'
  const m = normalized.match(/\/work\/(case-studies|articles)\/(.*)$/);
  if (m && m[1] && m[2]) {
    return `/content-assets/${m[1]}/${m[2]}`;
  }

  return null;
}
