export function getThumbnailUrl(absolutePath: string | null): string | null {
  if (!absolutePath) return null;

  const normalized = absolutePath.replace(/\\/g, '/');
  // Use the last occurrence of '/work/' so CI/workspace paths like
  // '/home/runner/work/repo/repo/work/...' don't cause duplicate segments.
  const workIndex = normalized.lastIndexOf('/work/');
  if (workIndex === -1) return null;

  return `/content-assets/${normalized.slice(workIndex + '/work/'.length)}`;
}
