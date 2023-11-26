"Use Strict";
//Input: linearsearch (['a', 'b', 'c','d','c'],c)
//output: 2 or 'not found!'
// problem: implement the linearsearch() funcation

const linearSearch = function (arr, val) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found!";
};

console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));

// lets get out of the longest String from an Array and show its Index number

//['America','Republic of Bangladesh','India','Pakistan']

const longestString = function (names) {
  let longestWord = "";

  for (nam of names) {
    if (nam.length > longestWord.length) {
      longestWord = nam;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
};

console.log(
  longestString(["America", "Republic of Bangladesh", "India", "Pakistan"])
);

//How many numbers from 1 to 100 are divisible by 3 or 5 or both 3 and 5?

const fizzBuzz = function (number) {
  for (i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(`${i} is Normal`);
    }
  }
};

fizzBuzz(100);

//Lets get out truthy value from an Array

const mixedArr = [
  "lws",
  undefined,
  "Hello! guys",
  false,
  "",
  "android",
  "apple",
  13,
  true,
  "Good bye",
  NaN,
];

//use filter function
const filterArray = mixedArr.filter(function (el) {
  if (el) {
    return true;
  } else {
    return false;
  }
});

console.log(filterArray);

console.log("-------------------------");

//ues boolean function
const booleanArray = mixedArr.filter(Boolean);
console.log(booleanArray);

console.log("-------------------------");
//Lets get out truthy value from an Object

const mixedObj = {
  a: "lws",
  b: undefined,
  c: "Hello! guys",
  d: false,
  e: "",
  f: "android",
  g: "apple",
  h: 13,
  i: true,
  J: "Good bye",
  k: NaN,
};

const truthyObject = function (mixedObj) {
  for (let i in mixedObj) {
    if (!mixedObj[i]) {
      delete mixedObj[i];
    }
  }
  return mixedObj;
};
console.log(truthyObject(mixedObj));
