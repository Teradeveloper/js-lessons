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

console.log(studentsScores);

