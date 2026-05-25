import DiagramCard from "@/components/DiagramCard";

const smartZone = [
  "Architecture decisions",
  "Scoring algorithm design",
  "Scoping & non-goals",
  "PRD writing & approval",
  "Ship / no-ship decision",
];

const dumbZone = [
  "Boilerplate generation",
  "API wiring",
  "Ticket generation",
  "Cloudflare Worker setup",
  "Test scaffolding",
];

export default function SmartZoneDiagram() {
  return (
    <DiagramCard title="smart-zone-dumb-zone">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Smart Zone */}
        <div className="flex flex-col gap-4 rounded border border-[var(--accent)] p-5">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Smart Zone
            </span>
            <span className="font-mono text-xs text-[var(--text-dim)]">Nikhil owns</span>
          </div>
          <ul className="flex flex-col gap-2">
            {smartZone.map((item) => (
              <li key={item} className="flex items-start gap-2 font-mono text-sm text-[var(--text)]">
                <span className="mt-0.5 text-[var(--accent)]">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Dumb Zone */}
        <div className="flex flex-col gap-4 rounded border border-[var(--bg-border)] p-5">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
              Dumb Zone
            </span>
            <span className="font-mono text-xs text-[var(--text-dim)]">AI executes</span>
          </div>
          <ul className="flex flex-col gap-2">
            {dumbZone.map((item) => (
              <li key={item} className="flex items-start gap-2 font-mono text-sm text-[var(--text-dim)]">
                <span className="mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DiagramCard>
  );
}
