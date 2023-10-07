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
    weekdays: 'Off Day',
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

// //Destructing

// // SPREAD,  because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [Pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, risotto, otherFood);

// //Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 4, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('Mushroom', 'Onion', 'Olives', 'Spinach');
// restaurant.orderPizza('mushroom');
