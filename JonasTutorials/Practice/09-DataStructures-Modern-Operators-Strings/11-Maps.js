'use strict';

const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const hours = {
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

const rest = new Map();
rest.set('Name', 'Classico Italiano');
rest.set(1, 'Firenze', 'Italy');
rest.set(2, 'Lisbon', 'Portugal');
console.log(rest.set());

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', '11 am')
  .set('close', '8 pm')
  .set(true, 'we are open :D')
  .set(false, 'we are close :(');

console.log(rest.get('Name'));
console.log(rest.get(true));
console.log('open');

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
