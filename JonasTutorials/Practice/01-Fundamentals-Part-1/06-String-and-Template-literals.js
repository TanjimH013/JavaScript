//Strings
const firstName = "Tanjim";
const job = "Unemployed";
const birthYear = 1993;
const year = 2037;

const tanjim =
  "I'm" +
  " " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old " +
  job +
  "!";
console.log(tanjim);

//Template literals ` ${} `
const tanjimNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(tanjimNew);

console.log(`Just a regular string...`);

console.log("string with \n multiple \n lines");

console.log(`String
multiple
lines`);
