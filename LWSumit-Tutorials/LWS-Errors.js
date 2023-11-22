"Use Strict";
let x = "";

try {
  if (x == "") throw "Empty";
  if (isNaN(x)) throw "Not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too hight";
} catch (err) {
  console.log(err);
}

console.log("This is a test");
