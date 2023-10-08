"Use-Strict";

//Function declaration
function calcAge(birthYear) {
  return 2023 - birthYear;
}

const ageONE = calcAge(1995);
console.log(ageONE);

//Function expression
const calcAgeTOW = function (birthYear) {
  return 2023 - birthYear;
};

const ageTOW = calcAgeTOW(1995);
console.log(ageTOW);
