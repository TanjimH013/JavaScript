"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");

//Using of FUNCTION

function classRoom(male, female) {
  const passed = `Total passed ${male} male and ${female} female students.`;
  return passed;
}

const studentsPassed = classRoom(45, 37);
console.log(studentsPassed);

function classRoom(male, female) {
  const failed = `Total failed ${male} male and ${female} female students.`;

  return failed;
}

const studentsFailed = classRoom(10, 8);
console.log(studentsFailed);

// FUNCTION declaration
function calAgeONE(birthYear) {
  return 2037 - birthYear;
}

const ageONE = calAgeONE(1993);

//FUNCTION expression
const calAgeTOW = function (birthYear) {
  return 2037 - birthYear;
};
const ageTOW = calAgeTOW(1993);
console.log(ageONE, ageTOW);

//ARROW function
const calAgeTHREE = (birthYear) => 2037 - birthYear;
const AgeTHREE = calAgeTHREE(1993);
console.log(AgeTHREE);

//Traditional function
function yearsUntilRetirement(birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retirement in ${retirement} years`;
}

console.log(yearsUntilRetirement(1988, "Abdullah"));
console.log(yearsUntilRetirement(1985, "Nurullah"));
console.log(yearsUntilRetirement(1987, "Abdul Qoyum"));
console.log(yearsUntilRetirement(1989, "Abdul Quddus"));

//Assignments of Array
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
  percentagesOfWorld1(populations[0]),
  percentagesOfWorld1(populations[1]),
  percentagesOfWorld1(populations[2]),
  percentagesOfWorld1(populations[3]),
];
