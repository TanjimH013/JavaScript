"Use-Strict";

function logger() {
  console.log("My Name is Tanjim");
}
// Calling, Running, Invoking means function
logger();
logger();
logger();

function fruitProcessor(apples, orange) {
  const juice = `Juice with ${apples} apples and ${orange} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
