export function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]);
      numbers = numbers.slice(delimiterMatch[0].length);
    }
  }
  const numberArray = numbers.split(delimiter).map(Number);

  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers are not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numberArray.reduce((sum, num) => sum + (num || 0), 0);
}

console.log(add("//;\n-1;-2"));
