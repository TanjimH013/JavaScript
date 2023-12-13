//Object Constructor

const persons = function (firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  return `Name: ${firstName} ${lastName}, Age: ${age}, Eye Color: ${eyeColor}`;
};

console.log(persons("Tanjim", "Hasan", "30", "Dark Brown"));
console.log(persons("Rayhan", "Mahmud", "30", "Black"));
console.log(persons("Afzalur", "Rahman", "30", "Black"));

//Object iterables

const myNumbers = {};

//make it iterable

myNumbers[Symbol.iterator] = function () {
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

for (let num of myNumbers) {
  console.log(num);
}
