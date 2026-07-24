export function getThumbnailUrl(absolutePath: string | null): string | null {
  if (!absolutePath) return null;
  const normalized = absolutePath.replace(/\\/g, '/');

  // Find the last '/work/<type>/' segment and capture what comes after it.
  const m = normalized.match(/\/work\/(case-studies|articles)\/(.+)$/);
  if (m && m[1] && m[2]) {
    // m[1] is 'case-studies' or 'articles', m[2] is '<slug>/...'
    // public assets are copied to /content-assets/<type>/<slug>/assets/...
    return `/content-assets/${m[1]}/${m[2]}`;
  }

  // Fallback: if relative calculation works, prefer that stripped result
  try {
    const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
    const rel = path.relative(repoRoot, absolutePath).replace(/\\/g, '/');
    if (rel.includes('work/')) {
      // take everything after the final 'work/' to be safe
      const afterWork = rel.split('work/').pop();
      if (afterWork) return `/content-assets/${afterWork}`;
    }
  } catch (e) {
    // silent fallback to null
  }

  return null;
}