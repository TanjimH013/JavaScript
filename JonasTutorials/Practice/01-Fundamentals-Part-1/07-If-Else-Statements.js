"Use-Strict";

const age = 5;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("You can apply for driving license 🛵 🚗 🛺 🚚");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years :)`);
}

const birthYears = 1999;

let century;
if (birthYears <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
