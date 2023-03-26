"use strict";
/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
show that your array in original order by printing it
Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
Object.defineProperty(exports, "__esModule", { value: true });
let placesToVisit = ["Japan", "New Zealand", "Egypt", "Brazil", "France"];
// Print the original array
console.log("Original order: ", placesToVisit);
//Original order:  [ 'Japan', 'New Zealand', 'Egypt', 'Brazil', 'France' ]
// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical order: ", [...placesToVisit].sort());
// Print array in reverse alphabetical order without modifying the actual list
console.log("Reverse alphabetical order: ", [...placesToVisit].sort().reverse());
// Print the original array again to show it's still in its original order
console.log("Original order: ", placesToVisit);
// Reverse the order of the array and print it to show it has changed
placesToVisit.reverse();
console.log("Reversed order: ", placesToVisit);
// Reverse the order of the array again to show it's back to its original order
placesToVisit.reverse();
console.log("Original order: ", placesToVisit);
// Sort the array in alphabetical order and print it to show it has been changed
placesToVisit.sort();
console.log("Alphabetical order: ", placesToVisit);
// Sort the array in reverse alphabetical order and print it to show it has been changed
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order: ", placesToVisit);
