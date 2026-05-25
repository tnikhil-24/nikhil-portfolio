import DiagramCard from "@/components/DiagramCard";

const layers = ["Database", "API", "Frontend"];

export default function TracerBulletsDiagram() {
  return (
    <DiagramCard title="tracer-bullets-vs-horizontal">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {/* LLM Default */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
            LLM default
          </span>
          <div className="flex flex-col items-center gap-1">
            {layers.map((layer, i) => (
              <div key={layer} className="flex w-full flex-col items-center">
                <div className="w-full rounded border border-[var(--bg-border)] bg-[var(--bg-card)] py-2.5 text-center font-mono text-sm text-[var(--text-dim)]">
                  {layer}
                </div>
                {i < layers.length - 1 && (
                  <span className="my-0.5 font-mono text-base text-[var(--bg-border)]">↓</span>
                )}
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-[var(--text-dim)]">
            Sequential layers — no working feature until all three are done.
          </p>
        </div>

        {/* Tracer Bullet */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Tracer bullet
          </span>
          <div className="relative flex flex-col gap-1">
            {/* Vertical slice indicator */}
            <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-[var(--accent)] opacity-60" />
            {layers.map((layer) => (
              <div
                key={layer}
                className="relative w-full rounded border border-[var(--bg-border)] bg-[var(--bg-card)] py-2.5 pl-10 font-mono text-sm text-[var(--text)]"
              >
                <span className="absolute left-3.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
                {layer}
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-[var(--accent)]">
            Thin vertical slice through all layers → ships a working feature early, gets feedback before scaling.
          </p>
        </div>
      </div>
    </DiagramCard>
  );
}
