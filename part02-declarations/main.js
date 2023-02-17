"use strict";
exports.__esModule = true;
var message = "It's a basic string example";
var isBeginner = true;
var count = 9;
var me = { name: 'Sahin', age: 23 };
var name = "Sahin";
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
console.log(isNew, myName);
var strArr1 = ["Bir", "iki"];
var strArr2 = ["Bir", "iki"];
var numArr1 = [1, 2, 3];
var numArr2 = [1, 2, 3];
var mix1 = [1, "iki"];
// ########### ENUM #################
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 32] = "Green";
    Color[Color["Blue"] = 33] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var randomValue = 13;
randomValue = true;
randomValue = "Sahin";
console.log(randomValue);
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name, 999);
}
myVariable.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 33;
// ###########  #################
