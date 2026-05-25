export const DEFAULT_COMMANDS = [
  "/grill-me",
  "/write-a-prd",
  "/to-issues",
  "/tdd",
  "/code-review",
];

export type AnimationPhase = "typing" | "pause";

export interface AnimationState {
  commandIndex: number;
  charIndex: number;
  phase: AnimationPhase;
}

export function nextAnimationStep(
  state: AnimationState,
  commands: string[]
): AnimationState {
  const current = commands[state.commandIndex];

  if (state.phase === "typing" && state.charIndex < current.length) {
    return { ...state, charIndex: state.charIndex + 1 };
  }

  if (state.phase === "typing") {
    return { ...state, phase: "pause" };
  }

  return {
    commandIndex: (state.commandIndex + 1) % commands.length,
    charIndex: 0,
    phase: "typing",
  };
}
