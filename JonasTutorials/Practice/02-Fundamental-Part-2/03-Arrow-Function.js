//Function expression
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const age = calcAge(1995);
console.log(age);

//Arrow function
const calcAgeTow = (birthYear) => 2023 - birthYear;
const ageTOW = calcAgeTow(1995);
console.log(ageTOW);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Tanjim"));
