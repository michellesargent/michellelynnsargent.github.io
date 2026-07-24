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
        const src = path.join(assetsDir, file);
        const dst = path.join(targetDir, file);
        fs.copyFileSync(src, dst);
        // NEW: log what was copied so CI shows evidence in build logs
        console.log(`work-assets-plugin: copied ${src} -> ${dst}`);
      }
    }
  }
}

export function workAssetsPlugin() {
  return {
    name: 'work-assets',
    buildStart() {
      console.log('work-assets-plugin: buildStart - copying work assets to public/content-assets');
      copyWorkAssets();
    },
    configureServer(server) {
      copyWorkAssets();
      server.watcher.add(path.join(repoRoot, 'work'));
      server.watcher.on('change', () => copyWorkAssets());
    },
  };
}