'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
const oldArr = [1, 2, 3];
const arr = [4, 5, 6, 7];
const badNewArr = [oldArr, arr];
console.log(badNewArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);

const NewArr = [...oldArr];
console.log(NewArr);

const newMenu = [...restaurant.mainMenu, 'Hilsa fry'];
console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterable: arrays, strings, maps, sets. NOT objects
const str = 'Tanjim';
const letters = [...str, '', 'm.'];
console.log(letters);
console.log(...str);

// //Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];
/*console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);*/

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const newRestaurantCopy = { ...restaurant };
newRestaurantCopy.name = 'Ristorante Al-Saladiya';
console.log(newRestaurantCopy.name);
console.log(restaurant.name);

const restauranto = {
  name: 'Cafe TJ da Bangalinano',
  location: 'Vai Angelo Tavanti 23, Firenze, Italy',
  categories: ['Bangladeshi', 'Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: [
    'Chom Chom',
    'Rosmalai',
    'Rosogolla',
    'Doi',
    'Sondesh',
    'Nan: Butter or Normal',
    'Porata',
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
  ],
  mainMenu: [
    'Choui Beef Vuna',
    'Rice',
    'Beef Akhni',
    'Kacchi',
    'Chicken Tanduri',
    'Kabab',
    'Pizza',
    'Pasta',
    'Risotto',
  ],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const newMENU = [...restauranto.mainMenu, 'Fish Curry'];
console.log(newMENU);

const MENU = [
  ...restauranto.starterMenu,
  ...restauranto.mainMenu,
  'Fish Curry',
];
console.log(MENU);
