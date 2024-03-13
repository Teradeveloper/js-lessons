//#region Variables ---------------------------
var varName = vale;
// data types [string, number, boolean]
// string ---> 'name' or "name"
// number ---> 122323
// boolean ---> true or false

var divItem = document.getElementById("item");
console.log(typeof divItem);

// Age of a user on a social media platform.
var age = 23;
console.log(age, typeof age);

// Name of a user in a chat application.
var name = "Asmaa";
console.log(name, typeof name);

// Social media post content.
var postContent = "I'd like to introduce my friend's CV.";
console.log(postContent, typeof postContent);

// Checking if an email address is valid.
var isValidEmail = true;
console.log(isValidEmail, typeof isValidEmail);

// Distance traveled in a fitness app.
var distance = 23;
console.log(distance, typeof distance);

// Checking if a user is logged in.
var isLoggedIn = true;
console.log(isLoggedIn, typeof isLoggedIn);

// Title of a news article.
var title = "Two killed in Houthi missile attack on cargo ship - US officials";
console.log(title, typeof title);

// Search keyword entered by a user.
var searchKeyword = "Sport ";
console.log(searchKeyword, typeof searchKeyword);

// Number of items in a shopping cart.
var numberOfItems = 3;
console.log(numberOfItems, typeof numberOfItems);

// Temperature in weather forecast.
var temp = 26;
console.log(temp, typeof temp);

//#endregion Variables ------------------------

//#region array and loops ---------------------
// index start with 0 0   1   2   3
var studentsScores = [10, 20, 23, 33, 40, 23, 0, 5];
// 40 --> full mark
// < 20 --> faild
// > 20 --> passed
var passedStudents = [];
var failedStudents = [];

// loop
// while loop
// 1 --> first step (initial value)
// 2 --> condition
// 3 --> second step

var index = 0;
while (index < studentsScores.length) {
  // studentsScores[index] = studentsScores[index] + 3;

  if (studentsScores[index] >= 20) console.log(studentsScores[index], "Passed");
  else console.log(studentsScores[index], "Failed");

  index += 1;
}

var degree = [23, 10, -10, 50, 40, 19, 20];
// < 10 cold
// > 10 hot
// > 40 very hot

console.log(degree);

var index = 0;
while (index <= degree.length) {

  if (degree[index] < 10) {
    console.log(degree[index], "cold");
  } else if (degree[index] > 10 && degree[index] < 40) {
    console.log(degree[index], "hot");
  } else if (degree[index] >= 40) {
    console.log(degree[index], "very hot");
  }

  index += 1;
}

// console.log(studentsScores);
//#endregion -----------------------------------
