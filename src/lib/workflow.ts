export interface WorkflowStage {
  id: number;
  label: string;
  status: string;
  humanRole: string;
  aiRole: string;
}

export const workflowStages: WorkflowStage[] = [
  {
    id: 1,
    label: "IDEA",
    status: "scoped",
    humanRole:
      "Define the problem worth solving. Set constraints, desired outcomes, and non-goals. This gate is human-only — no AI input until the human has a clear point of view.",
    aiRole:
      "None at this stage. Premature AI involvement anchors thinking too early. The human must own the idea.",
  },
  {
    id: 2,
    label: "RESEARCH",
    status: "validated",
    humanRole:
      "Direct the research queries. Evaluate sources critically. Decide which findings change the scope and which are noise.",
    aiRole:
      "Web research, technical reading, surfacing prior art, summarizing tradeoffs, flagging edge cases the human may not have considered.",
  },
  {
    id: 3,
    label: "PRD",
    status: "approved",
    humanRole:
      "Validate every user story. Make scope decisions — what's in, what's out, what's deferred. Sign off before Kanban generation begins.",
    aiRole:
      "Draft the PRD from research findings, generate user stories in standard format, flag ambiguities and missing acceptance criteria for human review.",
  },
  {
    id: 4,
    label: "KANBAN",
    status: "generated",
    humanRole:
      "Reprioritize tickets. Merge or split where the AI's decomposition was too coarse or too granular. Confirm ordering before the implementation loop starts.",
    aiRole:
      "Convert the approved PRD into independently-grabbable tickets using tracer-bullet vertical slices. Estimate complexity, suggest ordering, generate acceptance criteria per ticket.",
  },
  {
    id: 5,
    label: "IMPLEMENTATION LOOP",
    status: "executing",
    humanRole:
      "Review each phase output before the next phase begins (HITL gate). Unblock architectural decisions the agent cannot make alone. Catch Smart Zone / Dumb Zone violations.",
    aiRole:
      "Execute tickets phase by phase. Write code, generate tests TDD-style, request clarification on ambiguous specs. Continue AFK loop via @prd.md and @plan.md when human is unavailable.",
  },
  {
    id: 6,
    label: "QA / CODE REVIEW",
    status: "reviewed",
    humanRole:
      "Final approve, reject with notes, or merge. Human owns the ship decision. Regression testing of the golden path is non-negotiable before merge.",
    aiRole:
      "Run automated code review, surface regressions, generate edge-case test scenarios, check for OWASP top-10 issues in new code, produce a diff summary for the human reviewer.",
  },
];
