export interface AiNativeFundamental {
  index: string;
  title: string;
  description: string;
}

export const AI_NATIVE_FUNDAMENTALS: AiNativeFundamental[] = [
  {
    index: '01',
    title: 'AGENTS.md',
    description:
      'Persistent agent instructions loaded every session: rules, constraints, and project context in lightweight markdown that coding agents read before they write code.',
  },
  {
    index: '02',
    title: 'Spec-driven development',
    description:
      'OpenSpec workflow: proposal, specs, design, and tasks before implementation, so agents and humans share a contract for what "done" means.',
  },
  {
    index: '03',
    title: 'Skills',
    description:
      'Reusable SKILL.md playbooks that encode procedural knowledge: when to invoke them, step-by-step workflows agents follow for recurring tasks.',
  },
  {
    index: '04',
    title: 'MCP',
    description:
      'Model Context Protocol servers bridge the IDE to external tools: Miro, Figma, Atlassian, design systems, with structured tool calls instead of copy-paste context.',
  },
  {
    index: '05',
    title: 'Harness',
    description:
      'The agent runtime that orchestrates tools, context, and subagents: where skills, MCP servers, and AGENTS.md converge into shipped output.',
  },
  {
    index: '06',
    title: 'Agentic legibility',
    description:
      'Structure projects so AI can read intent: folder architecture, annotated boundaries, human gates, and markdown artifacts that stay machine-parseable and human-reviewable.',
  },
];
