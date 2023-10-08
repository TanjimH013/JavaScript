'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restauranto = {
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
};
console.log('-------OR-------');
console.log(0 || 'tanjim');
console.log('' || 'Tanin');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//Practical example
restauranto.numGuests = 0;
const guests1 = restauranto.numGuests ? restauranto.numGuests : 10;
console.log(guests1);

const guest2 = restauranto.numGuests || 10;
console.log(guest2);

console.log('-------AND-------');
console.log(0 && 'Tanjim');
console.log('Tanjim' && 'Hasan');
console.log('Hello' && 23 && null && 'Tanjim');

// Practical example
const restaurant = {
  orderPizza: function (mainIngredient, otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Spinach');
}
restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

restaurant.numGuests = 23;
const guestONE = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guestONE);

const guestTOW = restaurant.numGuests && 10;
console.log(guestTOW);
