'Use-/strict';

// const add = function (newElement) {
//   let arr = [1, 2, 3, 4, 5, 6];
//   for (let i = 0; i < newElement.length; i++) {
//     arr.push(newElement[i]);
//   }
//   return arr;
// };
// console.log(add([7]));

const add = function (newElement) {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < newElement.length; i++) {
    arr.push(newElement[i]);
  }
  return arr;
};
console.log(add([8, 9, 10]));

const addName = function (newDATA) {
  let obj = {
    person1: { name: 'Makie', profession: 'unemployed' },
    person2: { name: 'Pabelo', profession: 'unemployed' },
    person3: { name: 'Rezor', profession: 'unemployed' },
    person4: { name: 'Sett', profession: 'unemployed' },
  };
  for (let i = 0; i < newDATA; i++) {
    addName.push(newDATA);
  }
  return obj;
};

console.log(
  addName(
    { name: 'Tamina', profession: 'Officer' },
    { name: 'Xaya', profession: 'Work at abroad' }
  )
);

//Reverse for loop
const reverseString = function (str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
};

console.log(reverseString("'B' 'A' 'N' 'G' 'L' 'A' 'D' 'E' 'S' 'H'"));
