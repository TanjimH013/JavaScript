"Use Strict";

const display = function (some) {
  console.log(some);
};

const calculate = function (num1, num2) {
  let sum = num1 + num2;
  //display(sum); //2nd way
  return sum;
};

// calculate(10,15);

let result = calculate(10, 15);

display(result); // primary way
