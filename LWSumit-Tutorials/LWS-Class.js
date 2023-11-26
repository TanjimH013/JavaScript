"Use-Strict";
class person {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  insertCard() {
    console.log(`Name: ${this.name}
Age: ${this.age}
ID: ${this.id}`);
  }
}
const personOne = new person("Rayhan", "29", 1828569871);

personOne.insertCard();

const personTow = new person("Pabel", "30", 4526987125);

personTow.insertCard();

console.log();
