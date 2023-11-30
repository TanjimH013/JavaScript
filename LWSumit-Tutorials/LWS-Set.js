"Use Strict";

const letter = new Set(["a", "b", "c", "d", "e", "c", "d", "e", "f"]);

console.log(letter); // set printed only unique values

const letterIterator = letter.values(); // making SET iterable and using for of method

for (let a of letterIterator) {
  console.log(a);
}

const entryValue = letter.entries(); // showing set all entries values

for (const entry of entryValue) {
  console.log(entry);
}
