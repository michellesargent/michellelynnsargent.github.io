import type { LinkAccess } from './types';

const CISCO_HOST_PATTERNS = [
  /\.cisco\.com$/i,
  /^github\.emu\.cisco\.com$/i,
];

const CISCO_PATH_PATTERNS = [
  /^https?:\/\/github\.com\/cisco-it-design\//i,
  /^https?:\/\/github\.com\/Cisco\//i,
];

const INTERNAL_REF_PATTERNS = [
  /^cisco-it-design\//,
  /^supporting\//,
  /^drafts\//,
  /^case-studies\//,
  /^articles\//,
];

export function classifyUrl(rawHref: string | null | undefined): LinkAccess {
  if (!rawHref) {
    return 'public';
  }

  const href = rawHref.trim();

  if (!href || href.startsWith('#')) {
    return 'public';
  }

  if (!/^https?:\/\//i.test(href)) {
    if (INTERNAL_REF_PATTERNS.some((pattern) => pattern.test(href))) {
      return 'internal-ref';
    }
    return 'public';
  }

  try {
    const url = new URL(href);
    if (CISCO_HOST_PATTERNS.some((pattern) => pattern.test(url.hostname))) {
      return 'cisco-sso-vpn';
    }
    if (CISCO_PATH_PATTERNS.some((pattern) => pattern.test(href))) {
      return 'cisco-sso-vpn';
    }
  } catch {
    return 'public';
  }

  return 'public';
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
