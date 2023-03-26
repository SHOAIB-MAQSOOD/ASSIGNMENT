/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array 
Test whether an item not in a array */
// Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "HELLO";
let str3: string = "Hello";

console.log("Is str1 equal to str3? I predict True.");
console.log(str1 == str3);

console.log("Is str1 not equal to str2? I predict True.");
console.log(str1 != str2);

// Tests using the lower case function
console.log("Is str1 lowercase equal to str2 lowercase? I predict True.");
console.log(str1.toLowerCase() == str2.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 5;
let num2: number = 10;
let num3: number = 5;

console.log("Is num1 equal to num3? I predict True.");
console.log(num1 == num3);

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);

console.log("Is num2 greater than num1? I predict True.");
console.log(num2 > num1);

console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

console.log("Is num2 greater than or equal to num1? I predict True.");
console.log(num2 >= num1);

console.log("Is num1 less than or equal to num3? I predict True.");
console.log(num1 <= num3);

// Tests using "and" and "or" operators
console.log("Is num1 less than num2 and num2 greater than num3? I predict True.");
console.log(num1 < num2 && num2 > num3);

console.log("Is num1 greater than num2 or num2 greater than num3? I predict True.");
console.log(num1 > num2 || num2 > num3);

// Test whether an item is in an array
let arr: string[] = ["apple", "banana", "cherry", "date"];

console.log("Is 'banana' in the array? I predict True.");
console.log(arr.includes("banana"));

console.log("Is 'grape' in the array? I predict False.");
console.log(arr.includes("grape"));
