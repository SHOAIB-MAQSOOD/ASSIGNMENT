"use strict";
/*. Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding
 the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["shoaib", "ahmad", "abrar",];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
make_great(magicians);
console.log(magicians);
showMagicians(magicians);
