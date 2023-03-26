"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for
 only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list
at the end
of your program*/
let guestList = ["sajjad", "ali", "abrar", "bilal", "uzair", "omar hayat"];
console.log(`Good news! We found a bigger dinner table.`);
console.log(`We now have space for ${guestList.length} guests.`);
if (guestList.length > 2) {
    console.log(`Unfortunately, we can only invite two people for dinner.`);
}
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner.`);
}
console.log(`We still have space for ${guestList.length} guests.`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to a dinner party at my house next Friday.`);
}
guestList.pop();
guestList.pop();
console.log(`After removing the guests, the list is now empty: ${guestList}.`);
