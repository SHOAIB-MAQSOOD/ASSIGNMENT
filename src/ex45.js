"use strict";
/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function with the required
information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    options.forEach(option => {
        const [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
const carInfo = storeCarInfo("Toyota", "Camry", "color: blue", "sunroof: true", "leather seats: false");
console.log(carInfo);
