export function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }

  return numbers
    .split(",")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

console.log(add("1, -3"));
