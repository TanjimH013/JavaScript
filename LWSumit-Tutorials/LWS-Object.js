"Use Strict";

//Object Constructor
const Person = function (firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  return `Name: ${firstName} ${lastName}, Age: ${age}, Eye Color: ${eyeColor}`;
};

console.log(Person("Tanjim", "Hasan", "30", "Dark Brown"));
console.log(Person("Rayhan", "Mahmud", "30", "Black"));
console.log(Person("Afzalur", "Rahman", "30", "Black"));

//Object iterables

const myNumber = {};

//make it iterable

myNumber[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

for (let num of myNumber) {
  console.log(num);
}
