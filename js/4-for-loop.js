var arr = [10, 2, 4, 28, 47, 9, 25];

for(var index = 0; index < arr.length; index += 1) {
  if (arr[index] <= 20) {
    // console.log('before adding 3: number = ' + arr[index] + " after adding 3: number = " + (arr[index] += 3));
    console.log(`before adding 3: number = ${ arr[index] } after adding 3: number = ${ arr[index] += 3 }`);
  } else if (arr[index] > 20 && arr[index] <= 30) {
    // console.log("before subtracting 5: number = " + arr[index] + " after subtracting 5: number = " + (arr[index] -= 5));
    console.log(`before subtracting 5 : number = ${ arr[index] } after subtracting 5: number = ${ arr[index] -= 5 }`);

  } else if (arr[index] > 30) {
    // console.log("before multiplying by 2: number = " + arr[index] + " after multiplying by 2: number = " + (arr[index] *= 2));
    console.log(`before multiplying by 2: number = ${ arr[index] } after multiplying by 2: number = ${ arr[index] *= 2 }`);
  }
}

var studentNames = ["Asmaa", "Israa", "Mariam", "Amira"];
var scores = [85, 99, 98, 100];

var studentToFind = prompt("Enter a student's name:");

var found = false;
var studentScore;

for(var index = 0; index < studentNames.length; index += 1) {
  console.log(studentNames[index]);

  if (studentNames[index] === studentToFind) {
    found = true;
    studentScore = scores[index];
    break; // Exit the loop once the student is found
  }
}

if (found) {
  console.log(studentToFind, "'s score is: ", studentScore);
} else {
  console.log("Student not found.");
}
