// Copy work assets to public/content-assets reliably in CI
// Usage: node ./scripts/copy-work-assets.js
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const outputRoot = path.join(repoRoot, 'public', 'content-assets');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name);
    const d = path.join(dest, name);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) {
      copyDir(s, d);
    } else if (stat.isFile()) {
      fs.copyFileSync(s, d);
      console.log(`copied: ${s} -> ${d}`);
    }
  }
}

for (const type of ['case-studies', 'articles']) {
  const typeDir = path.join(repoRoot, 'work', type);
  if (!fs.existsSync(typeDir)) continue;

  for (const slug of fs.readdirSync(typeDir)) {
    const assetsDir = path.join(typeDir, slug, 'assets');
    if (!fs.existsSync(assetsDir)) continue;

    const targetDir = path.join(outputRoot, type, slug, 'assets');
    console.log(`copy-work-assets: copying assets for ${type}/${slug}`);
    copyDir(assetsDir, targetDir);
  }
}

console.log('copy-work-assets: done');