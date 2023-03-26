/*. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array*/

function showMagicians(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++){
    console.log(magicians[i])
  }
}

const magicians: string[] = ["shoaib", "ahmad", "ali"];

showMagicians(magicians);


// //function showMagicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }