import { add } from "./add";
describe("add function", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
