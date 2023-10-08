'use strict';

const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const hours = {
  [weekdays[0]]: {
    close: '9 pm',
    open: '11 am',
  },
  [weekdays[1]]: {
    close: '9 pm',
    open: '11 am',
  },
  [weekdays[2]]: {
    close: '10 pm',
    open: '12 pm',
  },
  [weekdays[3]]: {
    close: '12 am',
    open: '4 pm',
  },
  [weekdays[4]]: {
    close: '10 pm',
    open: '12 pm',
  },
  [weekdays[5]]: {
    close: '8 pm',
    open: '10 am',
  },
  [weekdays[6]]: {
    close: '12 am',
    open: '4 pm',
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
  hours,

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

for (const day of Object.keys(hours)) {
  console.log(day);
}

// Property NAMES
const properties = Object.keys(hours);
console.log(properties);

let openStr = `we are opn on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(hours);
console.log(values);

// Entire object
const entries = Object.entries(hours);
// console.log(entries);

//[key ,value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and Close at ${close}`);
}
