import { describe, it, expect } from "vitest";
import {
  nextAnimationStep,
  DEFAULT_COMMANDS,
  type AnimationState,
} from "@/lib/terminalAnimation";

const cmds = ["/tdd", "/deploy", "/foo"];

describe("nextAnimationStep", () => {
  it("advances charIndex while typing", () => {
    const s: AnimationState = { commandIndex: 0, charIndex: 0, phase: "typing" };
    expect(nextAnimationStep(s, cmds).charIndex).toBe(1);
  });

  it("increments charIndex on each step until fully typed", () => {
    let s: AnimationState = { commandIndex: 0, charIndex: 0, phase: "typing" };
    for (let i = 0; i < cmds[0].length; i++) {
      expect(s.charIndex).toBe(i);
      expect(s.phase).toBe("typing");
      s = nextAnimationStep(s, cmds);
    }
    // charIndex === length, still typing — one more step triggers the pause transition
    expect(s.charIndex).toBe(cmds[0].length);
    s = nextAnimationStep(s, cmds);
    expect(s.phase).toBe("pause");
  });

  it("transitions to pause when command is fully typed", () => {
    const s: AnimationState = {
      commandIndex: 0,
      charIndex: cmds[0].length,
      phase: "typing",
    };
    expect(nextAnimationStep(s, cmds).phase).toBe("pause");
  });

  it("transitions to next command after pause", () => {
    const s: AnimationState = {
      commandIndex: 0,
      charIndex: cmds[0].length,
      phase: "pause",
    };
    const next = nextAnimationStep(s, cmds);
    expect(next.commandIndex).toBe(1);
    expect(next.charIndex).toBe(0);
    expect(next.phase).toBe("typing");
  });

  it("wraps back to first command after last command", () => {
    const s: AnimationState = {
      commandIndex: cmds.length - 1,
      charIndex: cmds[cmds.length - 1].length,
      phase: "pause",
    };
    const next = nextAnimationStep(s, cmds);
    expect(next.commandIndex).toBe(0);
    expect(next.charIndex).toBe(0);
    expect(next.phase).toBe("typing");
  });

  it("sequences through all commands in order then restarts", () => {
    let s: AnimationState = { commandIndex: 0, charIndex: 0, phase: "typing" };

    for (let cmdIdx = 0; cmdIdx < cmds.length; cmdIdx++) {
      // type full command
      while (!(s.phase === "pause")) {
        s = nextAnimationStep(s, cmds);
      }
      expect(s.commandIndex).toBe(cmdIdx);

      // advance past pause
      s = nextAnimationStep(s, cmds);
    }

    // should have looped back to the start
    expect(s.commandIndex).toBe(0);
    expect(s.phase).toBe("typing");
  });

  it("works correctly with the default 5 commands", () => {
    let s: AnimationState = { commandIndex: 0, charIndex: 0, phase: "typing" };

    for (let i = 0; i < DEFAULT_COMMANDS.length; i++) {
      while (s.phase !== "pause") {
        s = nextAnimationStep(s, DEFAULT_COMMANDS);
      }
      expect(s.commandIndex).toBe(i);
      s = nextAnimationStep(s, DEFAULT_COMMANDS);
    }

    expect(s.commandIndex).toBe(0);
  });
});
