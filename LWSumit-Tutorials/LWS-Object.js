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
