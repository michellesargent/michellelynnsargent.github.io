// @ts-check
import { createHash } from 'node:crypto';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { getArticleCatalog } from './src/lib/content/catalog.ts';
import { workAssetsPlugin } from './src/lib/vite/work-assets-plugin.js';

const isBuild = process.argv.includes('build');
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const placeholderPasswords = new Set(['', 'your-password-here']);
const rawPassword = process.env.SITE_PASSWORD ?? env.SITE_PASSWORD ?? '';
const sitePassword = placeholderPasswords.has(rawPassword) ? '' : rawPassword;

if (isBuild && !sitePassword) {
  throw new Error(
    'SITE_PASSWORD must be set for production builds. Add it as a GitHub Actions secret or export it locally before running npm run build.',
  );
}

const passwordHash = sitePassword
  ? createHash('sha256').update(sitePassword).digest('hex')
  : createHash('sha256').update('dev').digest('hex');

/** @type {Record<string, string>} */
const writingRedirects = {
  '/writing': '/teaching',
};

for (const entry of getArticleCatalog()) {
  writingRedirects[`/writing/${entry.slug}`] = `/teaching/${entry.slug}`;
}

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://michellesargent.github.io',
  base: '/',
  redirects: writingRedirects,
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    plugins: [workAssetsPlugin()],
    define: {
      'import.meta.env.PUBLIC_PASSWORD_HASH': JSON.stringify(passwordHash),
    },
  },
});
