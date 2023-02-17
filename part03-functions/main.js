"use strict";
exports.__esModule = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 3; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(30));
