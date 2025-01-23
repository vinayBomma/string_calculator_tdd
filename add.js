"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(numbers) {
    if (!numbers) {
        return 0;
    }
    return numbers
        .split(",")
        .map(Number)
        .reduce((a, b) => a + b, 0);
}
exports.add = add;
console.log(add("1, -3"));
