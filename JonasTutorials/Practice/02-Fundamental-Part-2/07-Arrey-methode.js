//Array methods//
const friends = ["Pabel", "Rayhan", "Shajib"];

//Add elements
const newLength = friends.push("Tamjid");
console.log(friends);
console.log(newLength);

friends.unshift("Ziya");
console.log(friends);

//Remove elements
friends.pop(); //Last
console.log(friends);
const popped = friends.pop();
console.log(popped);

friends.shift(); // First
console.log(friends);
console.log(friends.indexOf("Pabel"));

console.log(friends.includes("Rayhan"));
console.log(friends.includes("Shajib"));

if (friends.includes("Pabel")) {
  console.log("You have a friend called Pabel");
}
