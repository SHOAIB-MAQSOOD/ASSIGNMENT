/*. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/

let city_country = (city:string,country:string)=>{
 return (`"${city},${country}"`)
}
let City_Country_1 = city_country("Lahore","Pakistan")
let City_Country_2 = city_country("Karachi","Pakistan")
let City_Country_3 = city_country("Islamabad","Pakistan")
console.log(City_Country_1);
console.log(City_Country_2);
console.log(City_Country_3);

