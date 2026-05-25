"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_COMMANDS,
  nextAnimationStep,
  type AnimationState,
} from "@/lib/terminalAnimation";

export { DEFAULT_COMMANDS, nextAnimationStep } from "@/lib/terminalAnimation";
export type { AnimationState, AnimationPhase } from "@/lib/terminalAnimation";

interface Props {
  commands?: string[];
}

export default function TerminalAnimation({ commands = DEFAULT_COMMANDS }: Props) {
  const [state, setState] = useState<AnimationState>({
    commandIndex: 0,
    charIndex: 0,
    phase: "typing",
  });

  useEffect(() => {
    const current = commands[state.commandIndex];
    const fullyTyped = state.charIndex >= current.length;

    let delay: number;
    if (state.phase === "typing" && !fullyTyped) {
      delay = 50 + Math.random() * 30;
    } else if (state.phase === "typing" && fullyTyped) {
      delay = 1500;
    } else {
      delay = 400;
    }

    const t = setTimeout(
      () => setState((s) => nextAnimationStep(s, commands)),
      delay
    );
    return () => clearTimeout(t);
  }, [state, commands]);

  const displayedText = commands[state.commandIndex].slice(0, state.charIndex);

  return (
    <div
      className="w-full max-w-lg mx-auto rounded-lg border border-[var(--bg-border)] overflow-hidden shadow-2xl"
      role="img"
      aria-label="Terminal showing Claude Code slash commands"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[var(--bg-border)] bg-[var(--bg)] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-[var(--text-dim)]">
          ~ claude-code
        </span>
      </div>

      {/* Body */}
      <div className="bg-[var(--bg-card)] px-5 py-5">
        <div
          className="font-mono"
          style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)" }}
        >
          <span className="text-[var(--text-dim)]">claude $ </span>
          <span className="text-[var(--accent)]">{displayedText}</span>
          <span className="cursor-blink text-[var(--accent)]">█</span>
        </div>
      </div>
    </div>
  );
}
