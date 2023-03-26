"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, and then 
// print that person’s name in lowercase, uppercase, and titlecase.
let personName1 = "shoaib maqsood";
console.log(`Name : ${personName1}`);
console.log(`Name in lower case : ${personName1.toLowerCase()}`);
console.log(`Name in Upper case : ${personName1.toUpperCase()}`);
let titleCaseName1 = personName1.split(" ");
for (let i = 0; i < titleCaseName1.length; i++) {
    titleCaseName1[i] =
        titleCaseName1[i].charAt(0).toUpperCase() +
            titleCaseName1[i].slice(1).toLowerCase();
}
console.log(titleCaseName1.toString());
console.log(titleCaseName1.toString().replace(/,/g, " "));
//In the last line of the code, replace(/,/g, " ") is used to replace all commas in the string with spaces.
//The /,/g is a regular expression pattern, where the forward slashes (/) are used to enclose the pattern and
//the g flag is used to specify a global search, meaning that it will match all occurrences of the pattern in the string.
//The comma inside the pattern represents the character to be replaced, and the " " after the comma represents
//the replacement character or string, in this case, a space.
//So, the replace() method with this regular expression pattern and replacement string replaces all commas
//in the string with spaces, effectively joining the words back together in the title case name output.
