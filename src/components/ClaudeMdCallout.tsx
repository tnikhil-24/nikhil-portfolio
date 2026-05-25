const claudeMdExample = `# Project Context
You are working on a multi-agent collaboration platform.
Stack: Python, LangGraph, WebSockets, Redis.

# Grammar-for-Conciseness Trade-off
Prefer clear, direct sentences over grammatically
perfect but wordy ones. Omit filler phrases.

# Tool Instructions
- Always run tests before marking a task complete
- Use tracer-bullet vertical slices, never horizontal layers
- Flag Smart Zone decisions — do not make them alone
- @prd.md and @plan.md are ground truth`;

export default function ClaudeMdCallout() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          Claude.md
        </span>
        <p className="text-sm text-[var(--text-dim)]">
          A CLAUDE.md file in the repo root configures Claude as a team member with full project
          context — grounding instructions, tool rules, and conciseness trade-offs baked in from
          session one.
        </p>
      </div>

      <pre className="overflow-x-auto rounded border border-[var(--bg-border)] bg-[var(--bg-card)] p-5 font-mono text-xs leading-relaxed text-[var(--text-dim)]">
        <code>{claudeMdExample}</code>
      </pre>
    </div>
  );
}
