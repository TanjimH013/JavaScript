const calcAge = function (birthYear) {
  return 2050 - birthYear;
};

const yearsUntilRetirement = function (firstName, birthYear) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳🎉🎊🎈`);
    return -1;
  }
};

console.log(yearsUntilRetirement("Tanjim", 1995));
console.log(yearsUntilRetirement("Hasan", 1970));
