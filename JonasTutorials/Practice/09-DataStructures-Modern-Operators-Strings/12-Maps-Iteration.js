'use strict';

const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const openingHours = {
  [weekdays[0]]: {
    open: '8 am',
    close: '8 pm',
  },
  [weekdays[1]]: {
    open: '11 am',
    close: '9 pm',
  },
  [weekdays[2]]: {
    open: '12 pm',
    close: '10 pm',
  },
  [weekdays[3]]: {
    open: '11 am',
    close: '9 pm',
  },
  [weekdays[4]]: {
    open: '12 pm',
    close: '10 pm',
  },
  [weekdays[5]]: {
    open: '8 am',
    close: '8 pm',
  },
  [weekdays[6]]: {
    close: 'Off Day',
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Tray again 🥱'],
]);
console.log(question);

//Convert Object to Map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// QUIZ APP
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
console.log(Object.entries(openingHours));

// const answer = Number(prompt('Your answer'));
// console.log(answer);
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(...question);
//
console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
