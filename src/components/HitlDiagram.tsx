import DiagramCard from "@/components/DiagramCard";

const phases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4"];

export default function HitlDiagram() {
  return (
    <DiagramCard title="hitl-multi-phase-plan">
      <div className="flex flex-col gap-6">
        {/* Inputs */}
        <div className="flex flex-wrap gap-3">
          {["@prd.md", "@plan.md"].map((file) => (
            <span
              key={file}
              className="rounded border border-[var(--accent)] px-3 py-1 font-mono text-xs text-[var(--accent)]"
            >
              {file}
            </span>
          ))}
          <span className="font-mono text-xs text-[var(--text-dim)] self-center">
            — always in context, ground every phase
          </span>
        </div>

        {/* Phase flow */}
        <div className="flex flex-wrap items-center gap-2">
          {phases.map((phase, i) => (
            <div key={phase} className="flex items-center gap-2">
              {/* Phase block */}
              <div className="flex flex-col items-center rounded border border-[var(--bg-border)] bg-[var(--bg-card)] px-4 py-3 text-center">
                <span className="font-mono text-xs text-[var(--text-dim)]">{phase}</span>
                <span className="font-mono text-xs text-[var(--accent)]">Smart model</span>
              </div>

              {/* Human checkpoint (between phases, not after last) */}
              {i < phases.length - 1 && (
                <>
                  <span className="font-mono text-[var(--bg-border)]">→</span>
                  <div className="flex flex-col items-center rounded border border-[var(--text-dim)] px-3 py-2 text-center">
                    <span className="font-mono text-xs text-[var(--text-dim)]">Human</span>
                    <span className="font-mono text-xs text-[var(--text-dim)]">✓ gate</span>
                  </div>
                  <span className="font-mono text-[var(--bg-border)]">→</span>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-[var(--text-dim)]">
          Human reviews output before each phase begins — agent cannot proceed without approval.
        </p>
      </div>
    </DiagramCard>
  );
}
