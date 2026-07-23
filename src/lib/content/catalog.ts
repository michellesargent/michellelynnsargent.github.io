import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as yaml from 'js-yaml';
import type { CatalogArticle, CatalogCaseStudy, WorkCatalog } from './types';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const catalogPath = path.join(repoRoot, 'work/index.yaml');

function readCatalogFile(): WorkCatalog {
  const raw = fs.readFileSync(catalogPath, 'utf8');
  const parsed = yaml.load(raw) as {
    case_studies?: CatalogCaseStudy[];
    articles?: CatalogArticle[];
  };

  return {
    caseStudies: parsed.case_studies ?? [],
    articles: parsed.articles ?? [],
  };
}

export function getCatalog(): WorkCatalog {
  return readCatalogFile();
}

export function getCaseStudyCatalog(): CatalogCaseStudy[] {
  return getCatalog().caseStudies.filter(
    (entry) =>
      (entry.visibility === 'public' || entry.visibility === 'internal') &&
      entry.listed !== false,
  );
}

export function getArticleCatalog(): CatalogArticle[] {
  return getCatalog().articles.filter(
    (entry) => entry.visibility === 'public' || entry.visibility === 'internal',
  );
}

export function getFeatured(): { caseStudies: CatalogCaseStudy[]; articles: CatalogArticle[] } {
  const caseStudies = getCaseStudyCatalog()
    .filter((entry) => entry.featured)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  const articles = getArticleCatalog()
    .filter((entry) => entry.featured)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return { caseStudies, articles };
}

export function validateCatalog(): void {
  const catalog = getCatalog();
  const errors: string[] = [];

  for (const entry of catalog.caseStudies) {
    const folder = path.join(repoRoot, 'work/case-studies', entry.slug);
    if (!fs.existsSync(folder)) {
      errors.push(`Case study folder missing: work/case-studies/${entry.slug}`);
    } else {
      if (!fs.existsSync(path.join(folder, 'index.md'))) {
        errors.push(`Case study index.md missing: work/case-studies/${entry.slug}/index.md`);
      }
      if (!fs.existsSync(path.join(folder, 'metadata.yaml'))) {
        errors.push(`Case study metadata.yaml missing: work/case-studies/${entry.slug}/metadata.yaml`);
      }
    }
  }

  for (const entry of catalog.articles) {
    const folder = path.join(repoRoot, 'work/articles', entry.slug);
    if (!fs.existsSync(folder)) {
      errors.push(`Article folder missing: work/articles/${entry.slug}`);
    } else {
      if (!fs.existsSync(path.join(folder, 'index.md'))) {
        errors.push(`Article index.md missing: work/articles/${entry.slug}/index.md`);
      }
      if (!fs.existsSync(path.join(folder, 'metadata.yaml'))) {
        errors.push(`Article metadata.yaml missing: work/articles/${entry.slug}/metadata.yaml`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Catalog validation failed:\n${errors.map((e) => `- ${e}`).join('\n')}`);
  }
}
