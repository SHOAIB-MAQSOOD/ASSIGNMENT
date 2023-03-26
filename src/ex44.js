"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter  that collects as many
items as the function call provides, and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number
of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(...ingredients) {
    console.log(`You have ordered a sandwich with the following ingredients: ${ingredients.join(", ")}`);
}
makeSandwich("peanut butter", "jelly", "bread");
makeSandwich("peanut butter1", "jelly1", "bread1");
makeSandwich("peanut butter2", "jelly2", "bread2");
