// var studentNames = ["Asmaa", "Israa", "Mariam", "Amira"];
// var scores = [85, 99, 98, 100];

var students = [
  { name: "Asmaa", score: 85 },
  { name: "Israa", score: 99 },
  { name: "Mariam", score: 98 },
  { name: "Amira", score: 100 },
];

var studentToFind = prompt("Enter a student's name:");

var found = false;
var studentScore;

for (var index = 0; index < students.length; index++) {
  console.log(students[index].name);

  if (students[index].name === studentToFind) {
    found = true;
    studentScore = students[index].score;
    break; // Exit the loop once the student is found
  }
}

if (found) {
  console.log(studentToFind, "'s score is: ", studentScore);
} else {
  console.log("Student not found.");
}
