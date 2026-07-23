# Going Beyond Figma Make: Version Control and Sharing for AI Prototypes

![Shop Talk: Figma Make prototype and GitHub repository side by side](assets/thumbnail.png)

You made something great in Figma Make. One prompt, a working prototype, a link you can share in five minutes. Then someone asks: *"Can we iterate on this together?"* or *"What changed between last week's version and this one?"* or *"Can engineering actually build from this?"*

That question: *what comes next?*, is what I built a Shop Talk session around. The audience was designers learning to vibe-code, developers trying Figma Make for the first time, and anyone who wanted to play with AI-generated code without getting lost in the tooling.

## The problem

Prompt-to-app tools like Figma Make, Lovable, and v0 compress the distance between idea and working prototype. That speed is real and valuable. But speed without structure creates a different problem: prototypes that live in sandboxes, with no version history, no collaboration workflow, and no path to production.

At enterprise scale, the question isn't just "can I build it?" It's "can my team maintain it, review it, and ship it?"

## How I designed the session

I structured the talk around a decision, not a tool demo. Two paths, clearly framed:

**Path A: Stay in the vibe lane.** Validate ideas quickly. Share Figma Make links. Iterate with prompts. Perfect for early exploration.

**Path B: Move to version-controlled code.** GitHub repository, local development, branches, pull requests. Perfect for team collaboration, quality, and anything heading toward production.

Most people need both, at different times. The session's job was to show when each path makes sense and how to move between them without pretending they're the same thing.

I walked through everything first, then opened questions. The demos assumed enterprise GitHub and VS Code setup, but I emphasized that Copilot can walk you through local environment setup if command-line Git feels intimidating.

## The methodology

### Prompt-to-app vs. AI-assisted coding

**Prompt-to-app (vibe coding)** builds the whole project in a sandbox from natural language. You describe what you want; AI handles the code. Tools include Figma Make, Lovable, v0, Google AI Studio. Think speed and exploration.

**AI-assisted coding** keeps you in an IDE with full control over local source code. Copilot, Cursor, and Windsurf act as collaborators, not autogenerators. Think quality, maintainability, and scalability.

I use both. Figma Make gets me to a concept I can see and click through. Then I export the code, open it in VS Code, and use Copilot to refine behaviors Figma Make can't express, design system alignment, component libraries, accessibility behaviors documented in Figma annotations.

### Figma Make publish vs. GitHub repository

| Dimension | Figma Make publish | GitHub repository |
|-----------|-------------------|-------------------|
| Speed to share | One click | Commit, push, deployment setup |
| Version control | Simple rename/republish | Full Git history |
| Maintenance | Minimal | Requires Git workflow (or Copilot guidance) |
| Best for | Stakeholder review, design handoffs | Team development, production path |

Figma Make publishing generates a secure hosted URL in seconds, snapshots and restoration, no repo required. Sharing (distinct from publishing) lets collaborators edit via prompting. Publishing creates a fixed snapshot on a hosted subdomain.

GitHub turns your prototype into a living, version-controlled asset, like Figma files, but built for code.

### The full workflow (when you need more than a link)

For complex applications, I outlined a five-step path from Figma Make to deployed product:

1. **Ideate**: Rapid prompting in Figma Make. Share with editor access for stakeholder iteration.
2. **Plan**: Copy designs into a working Figma file. Add annotations for motion, behavior, accessibility, and content. Mark frames ready for dev.
3. **Build**: VS Code + Copilot + Figma MCP server. Paste artboard links; let AI read your annotations. Run design system checks and accessibility tooling.
4. **Test**: Pull requests for review. Copilot bot and teammates review locally before merging.
5. **Implement**: CI/CD pipelines, security scans, observability. Production is a different magnitude, but the prototype earned its way there.

The key insight I shared: **documentation is the bridge.** A Figma artboard with annotations on how a table should sort by column, priority, status, date, let Copilot implement that behavior without me re-prompting from scratch. The MCP server read my notes. Development time dropped again.

### Practical GitHub setup (without the command line)

Not everyone needs terminal Git. I demonstrated two paths:

**VS Code source control**: Download Figma Make code as a zip, open in VS Code, initialize repository, commit, publish branch. Run `npm install` and `npm run dev` to preview locally (Node.js required for local preview, not for pushing code).

**GitHub Desktop**: Graphical interface for commits, branches, and pushes. No SSH keys required. I showed a real edit: change a name in the code, commit with a message, push to origin.

Critical detail: `.gitignore` automatically excludes `node_modules/`: a folder that would bloat the repo and slow every clone. VS Code creates this for you.

For solo experiments, working on `main` is fine. For team repos, branch first, review via pull request, then merge.

### Deployment options for design prototypes

Figma Make publish remains the fastest path, one click, done.

For version-controlled prototypes, GitHub Pages offers static hosting built into GitHub. Alternatives: present local preview in standups, share the repo for teammates to clone, or explore sandbox infrastructure with your engineering team.

## Outcomes

Nelson Wallace, who invited me to present, encouraged attendees to rewatch and follow along at their own pace. The session generated strong engagement, designers who had never touched GitHub left with a concrete path from Figma Make export to a published repository.

Carlos Salas asked the question I hear most: *when do you start in Figma Make vs. Copilot from scratch?* My answer: I almost never start from a blank IDE. Figma Make gives me something to react to, a dashboard, a layout, a concept. Starting in Copilot alone feels like a blank canvas with no brief. I go Make → export → IDE → enhance.

## What you can take away

Creation is happening faster than ever. That's exciting. But when possibilities are endless, the key is understanding your team's needs and choosing tools that empower collaboration, not just individual speed.

Three practical lessons:

1. **Figma Make is a starting line, not a finish line.** Use it to validate. Move to Git when you need history, collaboration, or production.
2. **Annotations are your handoff.** Whether you use MCP servers or manual prompting, documented intent in Figma reduces rework in code.
3. **You don't need to be a Git expert.** GitHub Desktop, VS Code source control, and Copilot can carry you through setup. Learn the concepts; let tools handle the syntax.

The best prototypes I build start with a vibe and end with version control. Both matter. The trick is knowing which lane you're in, and when to switch.
