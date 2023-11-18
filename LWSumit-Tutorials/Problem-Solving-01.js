"Use Strict";
console.log("--- Random number between min and max(both included ---)");
//Random number between min and max(both included)

const getRndInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRndInteger(1, 6));

//
