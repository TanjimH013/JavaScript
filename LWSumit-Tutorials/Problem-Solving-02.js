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
