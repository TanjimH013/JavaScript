"Use-Strict";

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Tanjim"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 1;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}
