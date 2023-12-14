"Use Strict";

const fruits = new Map([
  ["Banana", 300],
  ["Jackfruit", 100],
  ["Mango", 500],
  ["Lichi", 2500],
]);

console.log(fruits);

fruits.set("Banana", 1500); // mute the vale of banana
console.log(fruits);

fruits.set("Orange", 1000);
console.log(fruits); // add new key and value in the Map

const students = new Map(); // Create an empty Map

students.set(5266, "Rahim");
students.set(3620, "Karim");

console.log(students);

console.log(typeof students);
console.log(students instanceof Map);
