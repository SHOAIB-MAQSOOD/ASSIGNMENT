/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed*/

let userNames :string[]= ["admin", "shoaib", "ali", "ahmad"];
userNames = [];
if (userNames.length == 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < userNames.length; i++) {
    console.log(`Hello ${userNames[i]}, thank you for logging in again`);
  }
}
