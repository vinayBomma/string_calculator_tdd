import { add } from "./add";
describe("add function", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("supports newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
