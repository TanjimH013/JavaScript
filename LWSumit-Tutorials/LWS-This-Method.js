"Use Strict";

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "Tanjim",
  lastName: "Hasan",
};

console.log(person1.fullName.call(person2));
