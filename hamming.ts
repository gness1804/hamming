export function compute(left: string, right: string): number {
  let diffs = 0;
  left.split(',').forEach((letter, index) => {
    if (letter !== right[index]) diffs++;
  })
  return diffs;
}
