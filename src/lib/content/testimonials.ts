/**
 * Peer quotes sourced from work/supporting/testimonials/README.md
 */
export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Huge thanks for hosting the GitHub Copilot Workshop! You poured so much time and care into making sure it brought real value. The materials and pipeline you built are super actionable and reusable, and I love how you tailored the content for researchers without a technical background. Thanks for all the iterating you\'ve done to get this to a stage where it really fits into researchers\' workflows. You\'re amazing to work with!',
    author: 'Qiwen',
    context: 'GitHub Copilot workshop for UXR researchers · Jun 2026',
  },
  {
    quote:
      'GitHub Copilot can feel intimidating for researchers without a coding background, but you really opened the door for our research team to confidently explore and benefit from this powerful tool in the evolving AI landscape.',
    author: 'Qiwen Zhao',
    context: 'GitHub Copilot workshop co-facilitator · Jun 2026',
  },
  {
    quote:
      'UX Enablement Platform ranked #2 on the AI-Native leadership board, recognized for enterprise design-to-production delivery and an OpenSpec-driven build process.',
    author: 'AI-Native Leadership Board',
    context: 'UXEP platform · May 2026',
  },
];
