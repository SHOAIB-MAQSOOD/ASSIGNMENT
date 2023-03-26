"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["fasih", "ali", "abrar"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are nvited to a dinner party at my house next Friday.`);
}
let cannotAttend = 'fasih';
let newGuest = 'omar hayat';
console.log(`${cannotAttend} cannot make it to the dinner.`);
for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === cannotAttend) {
        guestList[i] = newGuest;
    }
    console.log(`Dear ${guestList[i]}, you are invited to a dinner party at my house next Friday.`);
}
