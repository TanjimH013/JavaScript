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

console.log(
  "--- Array.from, include search method, forEach loop, if statement ---"
);
//Getting outs vowels from sentences using Array.from, include search method, forEach loop, if statement

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
countVowels = function (sentence) {
  let count = 0;
  const letter = Array.from(sentence);
  letter.forEach(function (value) {
    if (vowels.includes(value)) count++;
  });
  return count;
};
console.log(countVowels("I love My country name is Bangladesh"));

//Getting outs duplicate & Unique numbers from a Array using filter method & indexOf search method

const numbers = [0, 1, 2, 3, 4, 3, 5, 5, 6, 7, 8, 6, 9, 8];
const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(duplicates);

const uniques = numbers.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});
console.log(uniques);
