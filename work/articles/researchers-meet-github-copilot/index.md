# Researchers, Meet GitHub Copilot: Scaling Research Synthesis with Grounded AI

![Researchers, Meet GitHub Copilot: Research and GitHub Copilot icons](assets/thumbnail.png)

I asked the room a simple question: *"Raise your hand if AI has given you stereotypical, biased, or inaccurate information about your research."*

Every hand went up.

That moment defined why Qiwen Zhao, Victoria Tam, and I designed a GitHub Copilot workshop specifically for UX researchers: people who had never opened a code editor in their lives, who synthesize massive amounts of qualitative data, and who cannot afford hallucinated personas.

## The problem

Research teams wanted to use AI for synthesis, personas, journey maps, scenario maps, but early experiments produced exactly what researchers feared: stereotyped users, invented pain points, outputs that looked credible but weren't grounded in interview data.

The barrier wasn't willingness. It was access and structure. Enterprise GitHub setup, VS Code installation, and knowing how to prompt an AI coding assistant are not skills researchers are hired for. And without guardrails, AI defaults to its training data, not your transcripts.

## How we designed the workshop

We built the experience in two parts, designed with Miro as our planning canvas.

### Session 0: Getting in the door

Before teaching anyone to use Copilot, we had to get them in the door. [Session Zero](../session-zero-ai-development-foundation/) is a standalone onboarding deck I co-created with Caroline Miller, step-by-step, no skipped steps:

- How to request GitHub Copilot access in a corporate environment
- How to verify MyID group membership and log into enterprise GitHub
- How to install VS Code and complete the interface walkthrough
- Node.js, Git, and CDSI foundations for what comes next

No assumptions. Lots of visuals. If you can't get set up, nothing else matters. See [Session Zero](../session-zero-ai-development-foundation/) for the full onboarding walkthrough.

### The one-hour workshop: Zero to AI-assisted research

The main session walks researchers through:

- Understanding VS Code as a workspace (not scary engineering territory)
- Building a working file structure
- Crafting effective prompts
- Applying **Spec-Driven Development (SDD)**: writing clear, structured context before you start, so both you and your AI assistant share the same understanding of goals, constraints, and expected output

SDD originated in engineering, but it's essentially a design-first philosophy. We adapted it for research using three key files:

- **`README.md`**: Project overview and setup for humans
- **`project.md`**: Research context, goals, constraints
- **`copilot.md`**: Rules directing Copilot to draw only from actual interview transcripts and researcher expert findings

That last file is the guardrail. No hallucinated personas. No stereotyped users. The research stays grounded in what participants actually said.

## The methodology: grounded synthesis with structure

### The practice scenario: Forest Delivery Service

To give researchers a safe, low-stakes environment, we built a fictional product: **Forest Delivery Service**: where Red Riding Hood is a delivery person, Goldilocks is a customer expecting things just right, and Mama Bear packages baskets as best she can.

Researchers work with real `.vtt` interview transcripts and use Copilot to generate:

- Personas
- As-Is Journey Maps
- To-Be Scenario Maps

The same artifacts they'd produce in actual work. The fictional framing keeps it fun and removes the fear of working with sensitive data while still practicing real research skills.

### Why structure beats open-ended prompting

When Copilot has only a vague prompt, it reaches for patterns in its training data, which is where bias and stereotype enter. When Copilot reads `copilot.md` rules and actual transcript files in a structured repository, it has nowhere to go except your data.

This is the same principle behind the AI Journey Map Pipeline I built for a follow-on workshop: folder architecture, agent rules, human review gates. Research teams need systems, not just access to tools.

### What we taught beyond the tools

The workshop wasn't a feature tour. It was a mindset shift:

- AI is only as trustworthy as what you point it at
- Markdown files are lightweight, token-efficient context for agents
- A code editor is a workspace for structured thinking, not just engineering
- Spec-driven context scales, the same `README.md` / `project.md` / `copilot.md` pattern works across research projects

## Outcomes

The workshop lowered the barrier to entry for a research team navigating an evolving AI landscape. Peer feedback affirmed the approach:

> *"GitHub Copilot can feel intimidating for researchers without a coding background, but you really opened the door for our research team to confidently explore and benefit from this powerful tool in the evolving AI landscape."*
> **Qiwen Zhao**, workshop co-facilitator

Qiwen and Victoria had run an earlier introductory Copilot session with the research team, basic features, big data synthesis into personas. The follow-on workshop came directly from participant feedback: people wanted to learn artifact generation (journey maps, scenario maps), and interest extended beyond the research team.

I published a [LinkedIn article](https://www.linkedin.com/pulse/researchers-meet-github-copilot-building-workshop-scale-sargent-t1qbc/) documenting the full approach, which reached researchers and design leaders outside our immediate team.

## What you can take away

If you're enabling non-technical teams to work with AI coding assistants:

1. **Onboarding is half the workshop.** Session 0 isn't a prerequisite slide, it's the foundation. Enterprise access, IDE setup, and permissions are real blockers.
2. **Ground the AI in files, not vibes.** `copilot.md` rules that restrict sources to transcripts and researcher findings prevent the hallucination problem that makes researchers distrust AI.
3. **Practice with fiction, apply to reality.** A whimsical scenario with real `.vtt` files lets people learn Copilot mechanics without data sensitivity concerns.
4. **Teach structure, not just prompts.** Spec-Driven Development scales across projects. Researchers who learn the file pattern once can reuse it indefinitely.

UX researchers synthesize massive amounts of qualitative data. With the right structure, GitHub Copilot helps them do it faster and more consistently, without trading rigor for speed.

The hands went up because everyone had been burned. The workshop worked because we built guardrails that made AI accountable to actual research.
