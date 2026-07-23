import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

function copyWorkAssets() {
  const outputRoot = path.join(repoRoot, 'public/content-assets');
  fs.mkdirSync(outputRoot, { recursive: true });

  for (const type of ['case-studies', 'articles']) {
    const typeDir = path.join(repoRoot, 'work', type);
    if (!fs.existsSync(typeDir)) continue;

    for (const slug of fs.readdirSync(typeDir)) {
      const assetsDir = path.join(typeDir, slug, 'assets');
      if (!fs.existsSync(assetsDir)) continue;

      const targetDir = path.join(outputRoot, type, slug, 'assets');
      fs.mkdirSync(targetDir, { recursive: true });

      for (const file of fs.readdirSync(assetsDir)) {
        fs.copyFileSync(path.join(assetsDir, file), path.join(targetDir, file));
      }
    }
  }
}

export function workAssetsPlugin() {
  return {
    name: 'work-assets',
    buildStart() {
      copyWorkAssets();
    },
    configureServer(server) {
      copyWorkAssets();
      server.watcher.add(path.join(repoRoot, 'work'));
      server.watcher.on('change', () => copyWorkAssets());
    },
  };
}
