import { describe, it, expect } from "vitest";
import { toggleActive } from "@/lib/processLog";

describe("toggleActive", () => {
  it("clicking a stage when none is active sets it as active", () => {
    expect(toggleActive(null, 1)).toBe(1);
  });

  it("clicking the active stage deactivates it", () => {
    expect(toggleActive(3, 3)).toBeNull();
  });

  it("clicking a different stage deactivates the previous and activates the new one", () => {
    expect(toggleActive(2, 5)).toBe(5);
  });

  it("works for all 6 stage ids", () => {
    for (let id = 1; id <= 6; id++) {
      expect(toggleActive(null, id)).toBe(id);
      expect(toggleActive(id, id)).toBeNull();
    }
  });
});
