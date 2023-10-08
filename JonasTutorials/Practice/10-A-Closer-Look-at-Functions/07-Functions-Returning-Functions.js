{
  ('Using Strict');
}

console.log('-----Traditional Function------');

const greetY = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greetY('Hey');
greeterHey('Tanjim');
greeterHey('Hasan');

greetY('Hello')('Tanjim Hasan');

/**************************************************************/

const countryArr = function (countryName, capitalsName, area) {
  const string = function (countryName, capitalsName, area) {
    return string(`${countryName}, ${capitalsName}, ${area}`);
  };
  return console.log(countryName, capitalsName, area);
};

const countryInfo = countryArr('Bangaldesh', 'Dhaka', '148,460 km²');

/********************************************/
console.log('-----Using Arrow Function-----');
/******************************************/
const greet = greeting => name => console.log(`${greeting}, ${name}`);

greet('Hey')('Tanjim');

const country = countryName => capitalsName => area =>
  console.log(`${countryName}, ${capitalsName},${area}`);
country('Bangladesh')('Dhaka')(' 148,460 km²');

let numbers = [1, 2, 3, 4, 5];
squareNumber = numbers.map(numbers => numbers * numbers);
console.log(squareNumber);

console.log('-------Stand In Line-------');
const nextInLine = function (arr, itm) {
  arr.push(itm);
  const removedEL = arr.shift(arr[0]);
  return console.log(removedEL);
};
nextInLine([], 5);
nextInLine([], 1);
nextInLine([2], 1);
nextInLine([5, 6, 7, 8, 9], 1);
