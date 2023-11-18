"Use Strict";
console.log("--- Random number between min and max(both included ---)");
//Random number between min and max(both included)

const getRndInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRndInteger(1, 6));

console.log("--- Array Sort method ---");
//Array sort method

const nameFriends = ["Rayhan", "Pabel", "Shajib", "Tamzid", "Zia", "Imroz"];
console.log(nameFriends.sort());

const roll = [
  1, 13, 5, 20, 15, 3, 18, 9, 7, 14, 5, 17, 6, 14, 4, 12, 10, 8, 16, 2, 11, 19,
];
roll.sort(function (a, b) {
  return a - b;
});
console.log(roll);

console.log(
  "--- using If, Else statement, logical & assignment operators with template literal ---"
);
//Getting out LeapYear using If, Else statement, logical & assignment operators with template literal
const isLeapYear = function (year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is Leap year!`);
  } else {
    console.log(`${year} is not a Leap year`);
  }
};
isLeapYear(2026);
isLeapYear(2030);
