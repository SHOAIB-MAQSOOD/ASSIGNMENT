/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
add one guest to the beginning of array
Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list*/
let guestList :string[] = ["fasih","ali","abrar"];
let cannotAttend :string = 'fasih';
let newGuest :string = 'omar hayat';

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are invited to a dinner party at my house next Friday.`);
}

console.log(`${cannotAttend} cannot make it to the dinner.`);

for (let i = 0; i < guestList.length; i++) {
  if (guestList[i] === cannotAttend) {
    guestList[i] = newGuest;
  }
}

console.log(`Good news! We found a bigger dinner table.`);

guestList.unshift('sajjad');
guestList.splice(Math.floor(guestList.length / 2), 0, 'bilal');
guestList.push('uzair');

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are invited to a dinner party at my house next Friday.`);
}
