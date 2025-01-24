"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(numbers) {
    if (!numbers) {
        return 0;
    }
    const delimiter = /,|\n/;
    const numberArray = numbers.split(delimiter).map(Number);
    return numberArray.reduce((sum, num) => sum + (num || 0), 0);
}
exports.add = add;
console.log(add("1\n2,3"));
