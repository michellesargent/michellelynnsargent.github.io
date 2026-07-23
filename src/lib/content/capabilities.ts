/**
 * Core capability positioning statements.
 * Aligned with docs/role-positioning-research.md, review when positioning updates.
 */
import type { IconName } from './icons';

export type { IconName };

export interface Capability {
  index: string;
  title: string;
  description: string;
  icon: IconName;
}

export const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'AI Innovation',
    icon: 'ai',
    description:
      'Spec-driven workflows, agent skills, and human-in-the-loop pipelines that help teams adopt AI-native tooling without losing design judgment.',
  },
  {
    index: '02',
    title: 'Design Systems',
    icon: 'design-system',
    description:
      'Enterprise-scale component libraries, theming, and Figma-to-code fidelity: Atmosphere, CDSI, and production-ready tokens at Fortune 100 complexity.',
  },
  {
    index: '03',
    title: 'UX Strategy',
    icon: 'briefcase',
    description:
      'Information architecture, stakeholder alignment, and platform thinking for resilience engineering and multi-team product surfaces.',
  },
  {
    index: '04',
    title: 'Code-Confident Design',
    icon: 'github',
    description:
      'Ship from design through production: TypeScript, Astro, React patterns, and visual reconciliation that eliminates traditional handoff.',
  },
  {
    index: '05',
    title: 'Digital Transformation',
    icon: 'arrow-right',
    description:
      'Bridge creative and technical stakeholders; translate between design intent and engineering constraints at enterprise scale.',
  },
  {
    index: '06',
    title: 'Teaching & Curriculum Design',
    icon: 'book',
    description:
      'Workshop programs, onboarding pipelines, and enablement resources that meet practitioners where they are, from first IDE session to spec-driven delivery.',
  },
];
