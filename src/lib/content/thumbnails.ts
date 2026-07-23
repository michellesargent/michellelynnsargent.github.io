export function getThumbnailUrl(absolutePath: string | null): string | null {
  if (!absolutePath) return null;

  const normalized = absolutePath.replace(/\\/g, '/');
  const workIndex = normalized.indexOf('/work/');
  if (workIndex === -1) return null;

  return `/content-assets/${normalized.slice(workIndex + '/work/'.length)}`;
}
