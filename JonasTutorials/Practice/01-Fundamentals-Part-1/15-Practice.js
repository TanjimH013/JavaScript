"Use-Strict";

if (day === "sunday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "monday") {
  console.log("Prepare theory videos");
} else if (day === "tuesday" || day === "wednesday") {
  console.log("Write code example");
} else if (day === "thursday") {
  console.log("Record videos");
} else if (day === "friday" || day === "saturday") {
  console.log("Enjoy the weekend 😏");
} else {
  console.log("Not a valid day!");
}

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//Problem 01:

// Declare pi as a constant. Find the area of a circle for radius r and save it in another variable named area.
// The area of a circle is:  pi*r* r or pi*r**2. (pi = 3.1416)

// Test Data: a) r = 5 meter   b) r = 28 meter

// [Sample Output:]

// a) "Area of the circle is 78.5"
// b) "Area of the circle is 2463.008640"

const PI = 3.1416;
const areaRADIUS = 5;
const areaRADIUS2 = 28;

const areaOfCIRCLE = PI * (areaRADIUS * areaRADIUS);
console.log(areaOfCIRCLE);

const areaOfCIRCLE2 = PI * areaRADIUS2 ** 2;
console.log(areaOfCIRCLE2);

//Problem 02.

// Write code to check the given Number is even or odd.
// [Condition:] number%2 == 0 (no reminder) is even otherwise odd.

// Test Data: a) number = 231 b) number = 16

// [Sample Output:]   a) "231 is a odd number"
// 		   b) "16 is a even number"

const numberONE = 231;
const numberTOW = 16;

const numberIS = numberONE % 2;
console.log(numberIS);

const THEnumber = numberTOW % 2;
console.log(THEnumber);

//[Bonus:]

// problem 1:

// If circle area is more than 1000 then show the result in km/h
// else output will be in m/s

// Sample output:
// Test Case 1: "Area of the circle is 78.5 m/s"
// Test Case 2: "Area of the circle is 2.463 km/h"

const area = 900;
const circleArea = area >= 1000;

if (circleArea) {
  console.log(`Are of the circle is ${area / 1000} mk/h`);
} else {
  console.log(`Area of the circle is ${area} m/h`);
}

// const PI = 3.1416;
// const radiusArea = 28;

// const circleArea = PI * radiusArea ** 2;

// let area;
// if (circleArea >= 1000) {
//   area = `${circleArea / 1000} km/h`;
// } else {
//   area = `${circleArea} m/h`;
// }

// console.log(`Area of the circle is ${area}`);
// An array is given that contains random intiger number. your task is write two array called "arrOdd" and "arrEven"
// and put the even value in arrEven and odd value in arrOdd.

// so as I mention i hate the number 6 and number 9. So you have to skip those number.

// Input: mainArr = [1 , 2 , 8 , 7 , 6 , 5 , 12, 4, 32, 9, 11, 3, 2]

output: arrOdd = [1, 7, 5, 11, 3];
arrEven = [2, 8, 12, 4, 32, 2];
let n = [1, 2, 8, 7, 6, 5, 12, 4, 32, 9, 11, 3, 2];
for (i = 1; i <= n; i++) {
  if (i === 6 || i === 9) {
    continue;
    let sum = i + n;
  }
  console.log(i);
}

let m = 70;
for (let i = 1; i <= m; i++) {
  if (i === 6 || i === 9 || i === 69) {
    continue;
  }
  console.log(i);
}

let a = 1;
if (a === a++) console.log(a);

console.log("-----Rest Operator-----");

const add = (...numbers) => {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(4, 5, 6);
add(7, 3, 9, 5);
add(6, 8, 9, 5, 4);

console.log(new Set("tanjim").size);
