///////////////////////////////////////////
console.log("-------WHILE loop-------");
///////////////////////////////////////////

let isRunning = true;
while (isRunning) {
  let rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("You are win");
    isRunning = false;
  } else {
    console.log("You've got = " + rand);
  }
}

///////////////////////////////////////////
console.log("-------DO WHILE loop-------");
///////////////////////////////////////////
let isRunning2 = false;

do {
  console.log("I m RUNNING");
} while (isRunning2);
