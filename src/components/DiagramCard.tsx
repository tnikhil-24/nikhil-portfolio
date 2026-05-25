import type { ReactNode } from "react";

interface DiagramCardProps {
  title: string;
  children: ReactNode;
}

export default function DiagramCard({ title, children }: DiagramCardProps) {
  return (
    <div className="overflow-hidden rounded border border-[var(--bg-border)]">
      <div className="flex items-center border-b border-[var(--bg-border)] bg-[var(--bg-card)] px-4 py-2.5">
        <span className="font-mono text-xs text-[var(--text-dim)]">// {title}</span>
      </div>
      <div className="bg-[var(--bg)] p-6">{children}</div>
    </div>
  );
}
