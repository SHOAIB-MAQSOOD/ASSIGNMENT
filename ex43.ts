/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a
copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and 
store it in a separate array. Call show_magicians() with each array to show that you have one array of 
the original names and one array with the Great added to each magician’s name.*/

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      great_magicians.push(`the Great ${magicians[i]}`);
    }
    return great_magicians;
  }
  
  const magicians: string[] = ["shoaib", "ahmad", "abrar",];
  
  const great_magicians: string[] = make_great([...magicians]);
  
  console.log("Original Magicians:");
  show_magicians(magicians);
  
  console.log("Great Magicians:");
  show_magicians(great_magicians);
  