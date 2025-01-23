"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
describe("add function", () => {
    test("returns 0 for an empty string", () => {
        expect((0, add_1.add)("")).toBe(0);
    });
});
