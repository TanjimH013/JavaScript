"Use Strict";
let myNumber = 32;
//myNumber.toString(10);
console.log(myNumber.toString(32));

const city = [" Chittagong", " Dhaka", " Rajshahi", " Khulna ", " Sylhet"];

document.getElementById("demo").innerHTML = city;

console.log(typeof city);
console.log(city.length);

city.pop("Sylhet");

city.push("Rongpur");

city.shift("Borishal");

city.unshift("Chittagong");

city[5] = "Jessor";

city[city.length] = "Comilla";
for (i = 0; i < city.length; i++) {
  console.log(city[i]);
}

console.log("--- ForEach Method ---");

city.forEach(function (value) {
  console.log(value);
});

const numbers = [1, 5, 8, 50, 2, 10, 58, 100, 65, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

numbers.sort(function (a, b) {
  return b - a;
});

console.log(numbers);
/////////////////////////////////////////////////////////

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const countVowels = (sentence) => {
  let count = 0;
  const letter = Array.from(sentence);

  letter.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
};
console.log(
  countVowels(
    `Internet refers to the interconnection of various networks of computers through which information can be accessed from anywhere. Internet is one of the greatest inventions in the history of science and technology. It enables us to access and give out information of all kinds through large distances.`
  )
);
