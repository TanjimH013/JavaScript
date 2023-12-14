'Use-Strict';

const friendONE = 'Shajib';
const friendTOW = 'Rayhan';
const friendTHREE = 'Pabel';

const friends = ['Shajib', 'Rayhan', 'Pabel'];
console.log(friends);

const Y = new Array(1994, 1994, 1993);

console.log(friends[2]);
console.log(friends[1]);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Tanjim';
const tanjim = [firstName, 'Hasan', 2023 - 1993, 'Unemployed', friends];
console.log(tanjim);
console.log(tanjim.length);

//Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
