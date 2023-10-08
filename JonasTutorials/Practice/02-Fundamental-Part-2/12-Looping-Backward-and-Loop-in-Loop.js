"Use-Strict";
//LOOPING BACKWARD

const tanjim = [
  "Tanjim",
  "Hasan",
  2023 - 1995,
  "Unemployed",
  "Chittagong",
  ["Pabel", "Shajib", "Rayhan"],
  true,
];
for (let i = tanjim.length - 1; i >= 0; i--) {
  console.log(tanjim[i], typeof tanjim[i]);
}

//Loop in Loop

for (let exrc = 1; exrc <= 5; exrc++) {
  console.log(`---------Starting exercise ${exrc}`);

  for (let rep = 1; rep <= 2; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️🏋️‍♀️`);
  }
}
