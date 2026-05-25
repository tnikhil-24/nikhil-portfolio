export default function RalphCallout() {
  return (
    <div className="rounded border border-yellow-500/40 bg-yellow-500/5 p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-yellow-400">⚠ warning</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
            meet ralph
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Ralph */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-yellow-400">
              Ralph (no HITL)
            </span>
            <ul className="flex flex-col gap-2">
              {[
                "Agent improvises the plan mid-execution",
                "No checkpoints — drifts from the PRD",
                "Ships confidently in the wrong direction",
                "Requires a full rewrite to correct",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-mono text-xs text-[var(--text-dim)]">
                  <span className="mt-0.5 text-yellow-400">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Structured HITL */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Structured HITL
            </span>
            <ul className="flex flex-col gap-2">
              {[
                "@prd.md + @plan.md ground every phase",
                "Human gates block drift before it compounds",
                "Agent executes, human steers",
                "Corrections cost one phase, not a rewrite",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-mono text-xs text-[var(--text-dim)]">
                  <span className="mt-0.5 text-[var(--accent)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
