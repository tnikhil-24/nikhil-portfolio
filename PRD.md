# PRD: Nikhil T — Developer Portfolio

## Problem Statement

Nikhil T is an AI Systems Engineer (MS CS @ UNT, GPA 3.90) actively job-seeking in the AI/ML and full-stack engineering space. His resume demonstrates genuine depth — multi-agent pipeline design, hybrid RAG architectures, fault-tolerant real-time systems, published npm tooling — but a plain resume fails to communicate the methodology behind the work. Recruiters see a list of projects; they don't see that Nikhil has built a repeatable, human-in-the-loop AI-assisted development workflow (Idea → Research → PRD → Kanban → Implementation Loop → QA) that lets him ship production-quality systems faster and with fewer rewrites. A static resume cannot differentiate between someone who "uses Cursor" and someone who has internalized AI-assisted software development as a first-class engineering practice.

## Solution

A recruiter-focused developer portfolio built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and shadcn/ui — deployed on Vercel. The portfolio communicates one core message: **Nikhil designs AI systems and ships them using AI as a build partner, not a crutch.**

The visual identity is "Technical Blueprint": near-black background (`#090c14`), cool white text (`#e8edf5`), single electric green accent (`#00ff88`) used only on interactive states, subtle dot-grid background texture, `Departure Mono` for all headings and UI labels, `Instrument Sans` for body text. No glassmorphism, no cyan gradients, no generic "AI portfolio" aesthetics.

Three routes:
- `/` — Single-page scroll: Hero → AI Pipeline Teaser → About → Skills → Experience → Footer
- `/projects` — Featured 6 cards + secondary grid of 6
- `/how-i-build` — Flagship deep-dive: 6-stage process log + diagrams from handwritten planning sessions

## User Stories

### Hero & First Impression
1. As a recruiter, I want to see Nikhil's name and positioning immediately above the fold, so that I can decide in 5 seconds whether to read further.
2. As a recruiter, I want to watch a live terminal animation typing real Claude Code slash commands (`/write-a-prd`, `/to-issues`, `/tdd`), so that I immediately understand this is someone who actively uses AI tooling, not just lists it.
3. As a recruiter, I want to see the tagline *"Full-Stack & AI Engineer. I design AI systems from the ground up — multi-agent pipelines, RAG architectures, real-time infra — and ship them faster because AI is my build partner, not just my toolbox"*, so that the depth signal lands before I scroll.
4. As a recruiter, I want three CTA buttons (View Projects / How I Build with AI / Download Resume), so that I can navigate directly to the section most relevant to my screening criteria.
5. As a recruiter opening the portfolio on a phone, I want all hero content to be fully readable and the terminal animation to be visible without horizontal scroll, so that I can evaluate the portfolio on mobile.

### AI Pipeline Teaser (Homepage)
6. As a recruiter, I want to see a condensed 3-step version of Nikhil's AI workflow directly on the homepage, so that I understand the methodology without navigating away.
7. As a recruiter intrigued by the teaser, I want a "See the full system →" link that goes to `/how-i-build`, so that I can explore the full 6-stage pipeline if I choose.

### About Section
8. As a recruiter, I want a short bio emphasizing Nikhil's MS CS (GPA 3.90), TA experience (200+ students), fintech internship (Oriana, Spring Boot + Kafka + React), published npm library (form-sanitize), and VS Code extension (DebtLens), so that I can quickly assess academic and professional credibility.

### Projects Page
9. As a recruiter, I want to see 6 featured project cards in terminal stdout format (`▸ PROJECT_NAME` / `// tech stack` / description / metrics), so that the project list feels like an engineering artifact, not a marketing page.
10. As a recruiter, I want project cards ordered by AI systems depth: Orvexa → AI Creator Studio → FinBot → DebtLens → Customer Support RAG → Welding Pro, so that the strongest AI signal lands first.
11. As a recruiter, I want stack badges rendered as monospace tags (`[PYTHON]` `[LANGCHAIN]`), so that I can scan the tech stack at a glance without reading prose.
12. As a recruiter, I want each featured card to have a `▾ build notes` expandable section describing which part of the AI workflow was used (PRD, tracer bullets, Kanban loop, Smart Zone split), so that I understand how Nikhil applied his methodology to real projects.
13. As a recruiter, I want cards for AI Creator Studio, DebtLens, and form-sanitize to show live/external links (Live Demo, VS Code Marketplace, npm), so that I can verify the work is actually shipped.
14. As a recruiter, I want all other project cards to show a GitHub link only — no broken or placeholder demo buttons — so that I trust the information presented.
15. As a recruiter, I want a secondary grid of 6 smaller cards (Cold Email Generator, ElderCare Voice Assistant, Market Regime Detection, NYC Traffic Analysis, form-sanitize, Multi-Face Detection) beneath the featured cards, so that I see breadth beyond the top projects.
16. As a recruiter on mobile, I want the featured cards to stack single-column and the secondary grid to go to 2-column, so that all projects are readable on small screens.

### How I Build with AI Page
17. As a technically-minded hiring manager, I want to see the full 6-stage AI workflow (Idea → Research → PRD → Kanban → Implementation Loop → QA/Code Review) rendered as a vertical process log, so that I can understand Nikhil's actual development methodology.
18. As a hiring manager, I want each stage displayed as a log entry (`[01] IDEA .............. ✓ scoped`) that expands on click to show the Human Role and AI Role split, so that I can see exactly where human judgment and AI execution are separated.
19. As a hiring manager, I want the currently "active" or selected stage to pulse with the green accent color, so that the interaction feels like watching a live process.
20. As a hiring manager, I want the page to include the original handwritten planning notes as a styled image callout (slightly rotated, off-white card treatment), so that I can see the raw thinking process behind the methodology.
21. As a hiring manager, I want a "Tracer Bullets vs Horizontal Coding" visual diagram explaining why LLMs default to layer-by-layer coding (DB → API → Frontend) and how the tracer bullet technique forces vertical slices, so that I understand a specific technical insight about working with AI coding agents.
22. As a hiring manager, I want a "Smart Zone / Dumb Zone" 2-column diagram showing which decisions Nikhil owns (architecture, scoring algorithms, scoping) vs. delegates to AI (boilerplate, API wiring, ticket generation), so that I understand how human oversight is maintained.
23. As a hiring manager, I want a Claude.md callout rendered as a styled code block showing how Nikhil configures Claude with project context (grounding instructions, grammar-for-conciseness trade-off, tool instructions), so that I see the tooling depth.
24. As a hiring manager, I want a "Ralph" section explaining the AFK autonomous loop: when Nikhil steps away, the agent continues executing phases using `@prd.md` as the source of truth with Smart model + phased execution, so that I understand how unsupervised agent execution is handled safely.
25. As a hiring manager, I want the HITL (Human-in-the-Loop) Multi-Phase Plan explained — showing how `@prd.md` and `@plan.md` gate each phase with human checkpoints — so that I understand the oversight structure.

### Skills Section
26. As a recruiter, I want skills grouped into labeled categories (Languages, Frontend, Backend, AI/ML, AI Tooling, Infra/DevOps), so that I can match Nikhil's skills to a job's requirements in one pass.
27. As a recruiter, I want "AI Tooling" (Claude Code, Cursor, MCP, Claude.md workflows) to have its own visually distinct highlighted category, so that the methodology signal is reinforced at the skills level.

### Experience & Education Timeline
28. As a recruiter, I want a timeline showing UNT TA role (Jan 2025–Present), Oriana internship (June 2023–July 2024), MS CS @ UNT (GPA 3.90, 2026), BTech CSE @ VNR VJIET (GPA 3.44, 2024), and the published research paper (MTCNN, Industrial Engineering Journal), so that I can verify academic and professional history at a glance.

### Footer
29. As a recruiter, I want the footer to list achievements (Winner CFG Competition, Runner-Up Hackathon), certifications (NPTEL Big Data Silver Medal — IIT Kanpur, Google IT Automation), and social links (GitHub, LinkedIn — placeholder), so that I have all contact and credibility signals in one place.
30. As a recruiter, I want a Download Resume CTA that links to the hosted PDF, so that I can save Nikhil's resume to my ATS without searching.

### Performance & Polish
31. As a recruiter on a slow connection, I want the hero and above-fold content to render within 2 seconds, so that I don't bounce before seeing any content.
32. As a recruiter, I want hover states on all interactive elements to use the `#00ff88` accent color with a smooth transition, so that interactions feel precise and intentional.
33. As a recruiter, I want page transitions to use Framer Motion with subtle entrance animations (staggered fade-up on scroll), so that the experience feels polished without being distracting.

## Implementation Decisions

### Module Breakdown

**1. Root Layout Module**
- Global CSS variables for the palette: `--bg: #090c14`, `--text: #e8edf5`, `--accent: #00ff88`
- Font loading: `Departure Mono` (Google Fonts) for headings/labels, `Instrument Sans` for body
- Dot-grid SVG background texture at 12% opacity applied at layout level
- Sticky nav with logo (`NT_`) and route links

**2. TerminalAnimation Component**
- Self-contained component: types out a sequence of real Claude Code slash commands with realistic character-by-character delay
- Sequence: `/grill-me` → `/write-a-prd` → `/to-issues` → `/tdd` → `/code-review`
- Shows a blinking `█` cursor between commands
- After completing the sequence, loops with a brief pause
- Accepts a `commands` prop for the sequence so it is reusable on the `/how-i-build` page
- Implemented with `useEffect` + `useState` — no external animation library dependency for the typing logic itself

**3. Hero Section**
- `TerminalAnimation` component centered as the focal element
- Name and tagline rendered in Departure Mono below
- Three CTA buttons using shadcn/ui `Button` variants; "How I Build with AI" is the primary (green accent)
- Framer Motion entrance: terminal window fades in first, then name/tagline stagger up, then CTAs

**4. AIPipelineTeaser Component (Homepage)**
- Condensed 3-step horizontal flow: `[IDEA]` → `[PRD + KANBAN]` → `[AGENT LOOP]`
- Each step is a minimal node with a label and one-line description
- "See the full system →" link routes to `/how-i-build`
- On mobile: stacks vertically with connecting arrows pointing down

**5. ProjectCard Component**
- Terminal stdout format:
  - Header: `▸ PROJECT_NAME` (Departure Mono, large)
  - Stack line: `// python, langgraph, gemini` (Departure Mono, dimmed)
  - Description: Instrument Sans, 2–3 sentences
  - Metrics: labeled fields `ACCURACY: 92%` in monospace
  - Expandable `▾ build notes` section: shows which workflow stage was used
  - Link buttons: "Live Demo" / "Marketplace" / "npm" / "GitHub" — only render if URL provided
- `isExpanded` local state for the build notes toggle
- Hover: left border shifts from `#1a2030` to `#00ff88`, background lightens to `#0d1520`

**6. Projects Page (`/projects`)**
- Featured section: 6 `ProjectCard` components in a responsive 2-column grid (1-column mobile)
- Secondary section: 6 smaller cards in a 3-column grid (2-column tablet, 1-column mobile)
- Project data stored in a static `lib/projects.ts` file as typed objects — no CMS
- Project ordering: Orvexa, AI Creator Studio, FinBot, DebtLens, Customer Support RAG, Welding Pro

**7. ProcessLog Component (`/how-i-build`)**
- Vertical list of 6 stage entries
- Each entry: `[0N] STAGE_NAME .............. ✓ status`
- Click/tap expands to show Human Role and AI Role in a two-column layout
- Active stage pulses green accent via CSS animation
- Stage data is a static array with `id`, `label`, `status`, `humanRole`, `aiRole` fields
- Framer Motion `AnimatePresence` for expand/collapse of detail panels

**8. DiagramCard Component**
- Reusable wrapper for the visual diagrams on `/how-i-build`
- Used for: Tracer Bullets diagram, Smart Zone / Dumb Zone diagram, HITL Multi-Phase Plan
- Styled as a terminal window with a title bar (`// diagram-name`)

**9. HandwrittenNotesCallout**
- Displays `handwritten/1.jpeg` and `handwritten/2.jpeg`
- Styled as off-white cards with subtle 2–3° rotation, drop shadow, slight border
- Caption: "These notes were sketched during a planning session — this is how I actually think through projects."

**10. Skills Section**
- Category-grouped display using a simple grid
- Each skill is a monospace tag
- "AI Tooling" category has a `#00ff88` border to visually separate it from others

**11. Timeline Component**
- Vertical timeline with connecting line
- Entries: role/institution, date range, key metrics
- Research paper entry links to the published paper URL

**12. Data Layer (`lib/`)**
- `lib/projects.ts` — typed project data (featured + secondary)
- `lib/skills.ts` — skill categories
- `lib/experience.ts` — timeline entries
- `lib/workflow.ts` — the 6 process log stages
- All data is static TypeScript — no fetch, no CMS, no database

### Key Technical Decisions
- **Next.js App Router** with static rendering for all pages — no dynamic routes, no server components doing data fetching. All data is co-located in `lib/`.
- **Framer Motion** used only for: page entrance animations (staggered fade-up), project card hover, process log expand/collapse, and the pipeline teaser connector animations. Not used for the terminal typing (native JS for performance).
- **shadcn/ui** used for Button, Badge, and Separator primitives only — all card and layout components are custom to maintain the terminal aesthetic.
- **Dot-grid background**: SVG pattern defined as a CSS `background-image` on the root `<body>` — one global asset, not repeated per-section.
- **Fonts**: Loaded via `next/font/google` for optimal performance (no FOUT, preloaded).
- **Resume PDF**: Served from `/public/resume.pdf` — placeholder path, Nikhil replaces the file without a code change.
- **Social links**: Defined as constants in `lib/config.ts` with `PLACEHOLDER` values — single place to update.
- **Handwritten images**: Served from `/public/handwritten/` — copied from current location.
- **Mobile**: Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) throughout. Terminal animation font size scales with `clamp()`.

## Testing Decisions

This is a static portfolio site with no backend logic, no API routes, and no database. The meaningful test surface is:

**What makes a good test here**: Test that the data layer produces the correct shape (no missing required fields), and that key interactive components behave correctly (terminal sequence completes, process log expands/collapses). Do not test CSS or visual layout — that belongs in manual QA.

**Modules worth testing:**
- `lib/projects.ts` — assert every featured project has `title`, `stack`, `description`, `githubUrl`, and that only the 3 designated projects have `liveUrl`
- `lib/workflow.ts` — assert all 6 stages have `id`, `label`, `humanRole`, `aiRole`
- `TerminalAnimation` — unit test that the command sequence progresses correctly and the cursor blinks between commands
- `ProcessLog` — test that clicking a stage entry toggles its expanded state and that only one stage is active at a time

**Out of scope for automated tests**: Visual regression, animation timing, responsive breakpoints, font rendering.

## Out of Scope

- **CMS / admin interface**: All content is static TypeScript. Content updates require a code change.
- **Contact form**: Email is displayed as a `mailto:` link only. No form submission, no backend.
- **Blog or writing section**: Not in scope for v1.
- **Dark/light mode toggle**: The "Technical Blueprint" design is dark-only by design decision.
- **Analytics**: No tracking scripts in v1.
- **Internationalization**: English only.
- **Authentication**: No protected routes.
- **AI Creator Studio integration**: The portfolio links to the live demo but does not embed it.
- **Orvexa project page**: Individual project deep-dive pages are out of scope for v1 — cards only.

## Further Notes

**Handwritten notes as source of truth for `/how-i-build`**: The two handwritten images (`handwritten/1.jpeg`, `handwritten/2.jpeg`) contain the original workflow diagrams. Image 1 covers: the Tracer Bullets vs horizontal coding concept, the full 6-stage pipeline (Idea → Research → PRD → Kanban → Implementation → QA/Code Review), and the Claude.md grounding approach. Image 2 covers: Smart Zone / Dumb Zone, HITL Multi-Phase Plan (`@prd.md` + `@plan.md` with phase gating), AFK Multiphase Plan, and the "Ralph" autonomous loop warning. These should be displayed as the handwritten callout component alongside the designed versions of each diagram.

**"Ralph" note**: The name "Ralph" refers to what happens when you let an agent improvise the plan autonomously without human checkpoints — it ends up in a runaway loop. The HITL system exists specifically to prevent Ralph. This is a memorable teaching moment worth calling out explicitly on the `/how-i-build` page.

**Placeholder policy**: GitHub URL, LinkedIn URL, and resume PDF are all placeholders. They are defined in `lib/config.ts` as `PLACEHOLDER_GITHUB`, `PLACEHOLDER_LINKEDIN`, `PLACEHOLDER_RESUME_URL` — Nikhil replaces these values without touching component code.

**Project "Built with AI" notes** (source data for `build notes` expand sections):
- Orvexa: Tracer bullet approach — built one full vertical slice (1 user, 1 agent, 1 result card) before scaling to multi-user rooms
- AI Creator Studio: PRD written with Claude, converted to 20+ Kanban tickets, executed in implementation loop; 127 tests written TDD
- FinBot: LangGraph StateGraph architecture co-designed with Claude as research partner before any code was written
- DebtLens: Smart Zone / Dumb Zone split — Nikhil owned debt scoring algorithm; Claude handled Cloudflare Worker boilerplate and VS Code API wiring
- Customer Support RAG: Retrieval architecture explored in research.md phase before PRD, preventing a costly rebuild
- Welding Pro: Agile sprint planning with Claude generating ticket breakdowns from the PRD
