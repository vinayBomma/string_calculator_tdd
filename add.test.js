"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
describe("add function", () => {
    test("returns 0 for an empty string", () => {
        expect((0, add_1.add)("")).toBe(0);
    });
    test("returns the number itself for a single number", () => {
        expect((0, add_1.add)("1")).toBe(1);
    });
    test("returns the sum of two numbers", () => {
        expect((0, add_1.add)("1,2")).toBe(3);
    });
    test("supports newlines as delimiters", () => {
        expect((0, add_1.add)("1\n2,3")).toBe(6);
    });
});
