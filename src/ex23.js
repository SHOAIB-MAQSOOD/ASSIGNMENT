"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand  why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let x = 5;
let y = 10;
let a = true;
let b = null;
let c = undefined;
let d = { name: "shoaib" };
let e = [1, 2, 3];
let f = NaN;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
console.log("Is y > x? I predict True.");
console.log(y > x);
console.log("Is a != false? I predict true.");
console.log(a == true);
console.log("Is b == null? I predict True.");
console.log(b == null);
console.log("Is c == undefined? I predict True.");
console.log(c == undefined);
console.log("Is d.name === 'John'? I predict True.");
console.log(d.name === "shoaib");
console.log("Is e.length === 3? I predict True.");
console.log(e.length === 3);
console.log("Is f != f? I predict True.");
console.log(f != f);
console.log("Is x > y? I predict False.");
console.log(x > y);
console.log("Is b === undefined? I predict False.");
console.log(b === undefined);
console.log("Is c != null? I predict False.");
console.log(c != null);
console.log("Is d.name === 'Jane'? I predict False.");
console.log(d.name === "ali");
console.log("Is e[0] === 4? I predict False.");
console.log(e[0] === 4);
console.log("Is f === f? I predict False.");
console.log(f === f);
