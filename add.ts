export function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }

  const delimiter = /,|\n/;
  const numberArray = numbers.split(delimiter).map(Number);

  return numberArray.reduce((sum, num) => sum + (num || 0), 0);
}

console.log(add("1\n2,3"));
