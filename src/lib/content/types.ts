export type Visibility = 'public' | 'internal';
export type LinkAccess = 'public' | 'cisco-sso-vpn' | 'internal-ref';

export interface ProofItem {
  type: string;
  label: string;
  href?: string;
}

export interface CatalogCaseStudy {
  slug: string;
  title: string;
  status: string;
  featured: boolean;
  listed?: boolean;
  priority: number;
  date_start?: string;
  date_end?: string | null;
  visibility: Visibility;
  organization?: string;
  role?: string;
  themes?: string[];
  proof?: ProofItem[];
  feeds_from?: string[];
}

export interface CatalogArticle {
  slug: string;
  title: string;
  status: string;
  featured: boolean;
  date: string;
  visibility: Visibility;
  organization?: string;
  role?: string;
  themes?: string[];
  used_by?: string[];
  source?: string;
  thumbnail?: string;
  links?: Record<string, string>;
}

export interface CaseStudyMetadata {
  title: string;
  slug: string;
  featured?: boolean;
  visibility?: Visibility;
  date_start?: string;
  date_end?: string | null;
  organization?: string;
  role?: string;
  tags?: string[];
  links?: Record<string, string>;
  portfolio_themes?: string[];
  portfolio_angles?: string[];
  related_case_studies?: string[];
  related_articles?: string[];
  related_supporting?: string[];
  assets?: {
    thumbnail?: string;
    alt?: string;
    gallery?: GalleryImageInput[];
  };
}

export interface ArticleMetadata {
  title: string;
  slug: string;
  featured?: boolean;
  visibility?: Visibility;
  date: string;
  organization?: string;
  role?: string;
  audience?: string;
  tags?: string[];
  portfolio_themes?: string[];
  related_case_studies?: string[];
  related_articles?: string[];
  related_supporting?: string[];
  co_presenters?: string[];
  co_facilitators?: string[];
  source_material?: string[];
  links?: Record<string, string>;
  assets?: {
    thumbnail?: string;
    alt?: string;
    gallery?: GalleryImageInput[];
  };
}

export interface GalleryImageInput {
  src: string;
  alt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContentRef {
  slug: string;
  title: string;
  href: string;
  kind: 'case-study' | 'article' | 'supporting';
}

export interface CaseStudy extends CatalogCaseStudy {
  excerpt: string;
  bodyHtml: string;
  metadata: CaseStudyMetadata;
  thumbnail: string | null;
  thumbnailAlt: string | null;
  gallery: GalleryImage[];
  related: ContentRef[];
  portfolioAngles: string[];
}

export interface Article extends Omit<CatalogArticle, 'thumbnail'> {
  excerpt: string;
  bodyHtml: string;
  metadata: ArticleMetadata;
  thumbnail: string | null;
  thumbnailAlt: string | null;
  gallery: GalleryImage[];
  related: ContentRef[];
  audience?: string;
}

export interface WorkCatalog {
  caseStudies: CatalogCaseStudy[];
  articles: CatalogArticle[];
}

export interface ClassifiedLink {
  href: string;
  label: string;
  access: LinkAccess;
}
