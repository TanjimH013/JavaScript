const age = "18";
if (age == 18) {
  console.log("You just became an adult 🤔(Loose)");
}

if (age === 18) {
  console.log("You just became an adult 😉(Strict)");
}

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 13) {
  console.log("Cool! 13 is an amazing number! 😘🥰");
} else if (favorite == 3) {
  console.log("3 is also a cool number 😍");
} else {
  console.log("Number is not perfect! 🥱");
}

if (favorite != 13) {
  console.log("Why not number 13? 😎");
}
