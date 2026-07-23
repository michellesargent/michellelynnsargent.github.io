/**
 * Structured resume content, keep in sync with about page narrative.
 * Aligned with docs/role-positioning-research.md
 */
import type { IconName } from '../icons';
export interface ResumeExperienceLogo {
  srcLight: string;
  srcDark: string;
  alt: string;
  width?: number;
  height?: number;
}

const EMPLOYER_LOGOS = {
  cisco: {
    srcLight: '/logos/cisco-black.png',
    srcDark: '/logos/cisco-white.png',
    alt: 'Cisco',
    width: 120,
    height: 40,
  },
  ibm: {
    srcLight: '/logos/ibm-black.png',
    srcDark: '/logos/ibm-white.png',
    alt: 'IBM',
    width: 120,
    height: 40,
  },
  hartford: {
    srcLight: '/logos/hartford-black.png',
    srcDark: '/logos/hartford-white.png',
    alt: 'The Hartford',
    width: 120,
    height: 40,
  },
} as const satisfies Record<string, ResumeExperienceLogo>;

export interface ResumeExperience {
  title: string;
  organization: string;
  period: string;
  scope?: string;
  logo?: ResumeExperienceLogo;
  highlights: string[];
}

export interface ResumeSkillGroup {
  category: string;
  icon: IconName;
  items: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  period?: string;
  detail?: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
}

export const RESUME = {
  summary:
    'Design Engineer crafting enterprise UX at the intersection of design systems, AI, and production code. Hybrid design–engineering practitioner with Fortune 100 systems depth, AI-native workflow building, and hands-on teaching expertise.',
  experience: [
    {
      title: 'Design Engineer',
      organization: 'Cisco',
      period: '2024 – Present',
      logo: EMPLOYER_LOGOS.cisco,
      highlights: [
        'UX Enablement Platform: contributed design and production code through v1 release (May 2026); synthesized v2 IA, supported documentation migration, and advanced mid-fi exploration with design-to-code prototyping.',
        'Scrum lead, AI-Native Developer Pack POC: facilitated five-day build, merged 8 production PRs, and documented MVP scope with explicit CDSI/Atmosphere onboarding demo flows.',
        'Design system delivery: contributed 10 components to Atmosphere v4 (OCDL theming); built Figma plugins for MCP-ready metadata and design-to-PR automation; enabled Adobe Analytics on atmosphere.cisco.com.',
        'Applied AI craft leadership: GitHub Copilot workshops for UX researchers, XRI journey-map pipeline (GitHub + Miro), Craft Lead facilitation, and cross-org CDSI design workflow enablement.',
      ],
    },
    {
      title: 'Program Designer',
      organization: 'IBM',
      period: '2022',
      scope: 'Learning from Incidents (LFI) Resilience Engineering Program',
      logo: EMPLOYER_LOGOS.ibm,
      highlights: [
        'Program Architecture: Architected an enterprise-grade resilience engineering curriculum impacting 10,000+ employees, managing the full lifecycle from user research to full-stack implementation.',
        'Inclusive Design: Conducted rigorous user research with 100+ global participants, ensuring strict adherence to WCAG 2.1 AA standards across all digital touchpoints.',
        'Full-Stack Delivery: Deployed an integrated learning ecosystem comprising a responsive web platform, multimedia content, and interactive training modules.',
      ],
    },
    {
      title: 'Chief of Staff',
      organization: 'IBM CIO Design',
      period: '2022',
      scope: 'Strategic Advisor to VP of CIO Design',
      logo: EMPLOYER_LOGOS.ibm,
      highlights: [
        'Strategic Operations: Facilitated OKR alignment across 10+ design squads, translating high-level business strategy into actionable, measurable design initiatives.',
        'Design Governance: Established robust DesignOps frameworks that optimized team efficiency; mentored junior staff in modern design methodologies and professional growth.',
        'Executive Liaison: Served as the primary strategic interface between the design organization and C-suite leadership, articulating design ROI and business impact.',
      ],
    },
    {
      title: 'Information Designer',
      organization: 'IBM',
      period: '2016 – 2022',
      scope: 'Specialized in creating design deliverables for diverse client portfolio.',
      logo: EMPLOYER_LOGOS.ibm,
      highlights: [
        'Created storyboards and videos for client presentations.',
        'Collaborated with cross-functional teams to deliver high-quality design solutions.',
        'Developed interactive prototypes for user testing and feedback.',
      ],
    },
    {
      title: 'Digital Marketing Specialist',
      organization: 'The Hartford',
      period: '2014 – 2016',
      scope: 'Specialized in coding, creating, and testing email campaigns.',
      logo: EMPLOYER_LOGOS.hartford,
      highlights: [
        'Deployed 100+ email campaigns with 98% deliverability.',
        'Conducted A/B testing to optimize open rates by 20%.',
        'Coded with dynamic content for personalized user experiences.',
      ],
    },
  ] satisfies ResumeExperience[],
  skills: [
    {
      category: 'Design',
      icon: 'art',
      items: [
        'Information architecture & enterprise UX',
        'Design systems (Atmosphere, CDSI)',
        'Workshop design & facilitation',
        'Figma, prototyping, visual craft',
      ],
    },
    {
      category: 'Engineering',
      icon: 'code-bracket',
      items: [
        'TypeScript, Astro, React patterns',
        'Git, GitHub, CI/CD documentation',
        'Component implementation & theming',
        'Analytics instrumentation',
      ],
    },
    {
      category: 'AI-native workflow',
      icon: 'sparkles',
      items: [
        'OpenSpec & spec-driven development',
        'GitHub Copilot enablement',
        'Figma → code pipelines & MCP',
        'Human-in-the-loop AI tooling',
      ],
    },
  ] satisfies ResumeSkillGroup[],
  education: [
    {
      degree: 'BFA',
      institution: 'University of Connecticut',
      period: '2010 – 2014',
      detail: 'Minor in Digital Media',
    },
  ] satisfies ResumeEducation[],
  certifications: [
    {
      title: 'Designing and Building AI Products and Services',
      issuer: 'MIT xPRO',
    },
    {
      title: 'Computer Science',
      issuer: 'HarvardX CS50',
    },
    {
      title: 'Design Thinking Practitioner',
      issuer: 'IBM',
    },
    {
      title: 'UX Design Immersive',
      issuer: 'General Assembly',
    },
    {
      title: 'Conversational AI',
      issuer: 'Google Cloud',
    },
    {
      title: 'OKR Expert',
      issuer: 'WorkBoard',
    },
    {
      title: 'Agile Iteration Management',
      issuer: 'IBM',
    },
  ] satisfies ResumeCertification[],
} as const;

export const ABOUT_STATS = [
  {
    value: '10+',
    label: 'Years',
    description: 'Design practice with increasing technical depth, enterprise systems to production code.',
  },
  {
    value: '90K+',
    label: 'Users',
    description: 'UX Enablement Platform scale, enterprise tooling adopted across Cisco design and research teams.',
  },
  {
    value: 'F100',
    label: 'Scale',
    description: 'Fortune 100 design-system depth: Atmosphere, resilience engineering, and multi-team platform UX.',
  },
] as const;
