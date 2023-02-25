var guestList = ["fasih", "ali", "abrar"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are nvited to a dinner party at my house next Friday."));
}
var cannotAttend = 'fasih';
var newGuest = 'omar hayat';
console.log("".concat(cannotAttend, " cannot make it to the dinner."));
for (var i = 0; i < guestList.length; i++) {
    if (guestList[i] === cannotAttend) {
        guestList[i] = newGuest;
    }
    console.log("Dear ".concat(guestList[i], ", you are invited to a dinner party at my house next Friday."));
}
