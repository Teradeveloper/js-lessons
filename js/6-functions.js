function sumTwoNumbers(num1, num2) {
  return num1 + num2;
}

var result = sumTwoNumbers(1, 2);
console.log(result);

function getGrade(score) {
  var grade;

  if (score <= 30 && score > 25) {
    grade = "A";
  } else if (score <= 25 && score > 20) {
    grade = "B";
  } else if (score <= 20 && score > 15) {
    grade = "C";
  } else if (score <= 15 && score > 10) {
    grade = "D";
  } else if (score <= 10 && score > 5) {
    grade = "E";
  } else {
    grade = "F";
  }

  return grade;
}
