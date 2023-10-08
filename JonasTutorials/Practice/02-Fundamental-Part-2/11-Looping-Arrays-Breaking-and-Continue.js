"Use-Strict";
//Looping Arrays, Breaking and continuing

const tanjim = [
  "Tanjim",
  "Hasan",
  2023 - 1995,
  "unemployed",
  ["Pabel", "Shajib", "Rayhan"],
  true,
];
const types = [];

for (let i = 0; i < tanjim.length; i++) {
  // Reading from tanjim array
  console.log(tanjim[i], typeof tanjim[i]);

  // Filling types array
  // types[i] = typeof tanjim[i];
  types.push(typeof tanjim[i]);
}

console.log(types);

const years = [1985, 1995, 2000, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

/*****************************/
console.log("--- Continue and break ---");
//Continue and break
/****************************/

console.log("--- ONLY STRING ---");
for (let i = 0; i < tanjim.length; i++) {
  if (typeof tanjim[i] != "string") continue;

  console.log(tanjim[i], typeof tanjim[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < tanjim.length; i++) {
  if (typeof tanjim[i] === "number") break;

  console.log(tanjim[i], typeof tanjim[i]);
}
