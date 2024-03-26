
var arr = [10, 2, 4, 28, 47, 9, 25];

var index = 0;  // 1
while (index < arr.length) { // 2
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

  index += 1; // 3
}