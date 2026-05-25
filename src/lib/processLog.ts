export function toggleActive(current: number | null, clicked: number): number | null {
  return current === clicked ? null : clicked;
}
