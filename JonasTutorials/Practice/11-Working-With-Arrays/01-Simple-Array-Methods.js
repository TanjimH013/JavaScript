'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

//SLICE METHOD
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(5));
console.log(arr.slice(4, 5));
console.log(arr.slice(3, 4));
console.log(arr.slice(2, 3));
console.log(arr.slice(1, 2));
console.log(arr.slice(0, 1));
console.log(arr.slice(-2));
console.log(arr.slice(-5));
console.log(arr.slice(1, -2));
console.log(arr.slice(2, -1));
console.log(arr.slice(1, -1));

//Tow types of Shallow copay of Array

console.log(arr.slice());

console.log([...arr]);

console.log('---SPLICE METHOD---');
//SPLICE METHOD
arr.splice(0, 2, 'A', 'B');
console.log(arr);

console.log('---REVERSE METHOD---');
//REVERSE METHOD
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrTOW = ['k', 'j', 'i', 'h', 'g'];
console.log(arrTOW.reverse());

//concatenate
const letter = arr.concat(arrTOW);
console.log(letter);
// console.log(arr.concat(arrTOW));

console.log([...arr, ...arrTOW]);

//JOIN METHOD
console.log(letter.join(' - '));

console.log('---Sort method---');
//SORT METHOD

const numbers = [50, 100, 5, 10, 1, 2, 3, 4];
numbers.sort(function (x, y) {
  return x - y;
});
console.log(numbers);
