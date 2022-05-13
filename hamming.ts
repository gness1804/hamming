export function compute(left: string, right: string): number {
  let diffs = 0;
  if (left.length !== right.length) throw new Error('DNA strands must be of equal length.');
  left.split('').forEach((letter, index) => {
    if (letter !== right[index]) diffs++;
  })
  return diffs;
}
