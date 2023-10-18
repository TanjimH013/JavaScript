'Use strict';
const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const openingHours = {
  [weekdays[0]]: {
    open: 'Open 8 am',
    close: 'Close 8 pm',
  },
  [weekdays[1]]: {
    open: 'Open 11 am',
    close: 'Close 9 pm',
  },
  [weekdays[2]]: {
    open: 'Open 12 am',
    close: 'Close 10 pm',
  },
  [weekdays[3]]: {
    open: 'Open 11 am',
    close: 'Close 9 pm',
  },
  [weekdays[4]]: {
    open: 'Open 12 am',
    close: 'Close 10 pm',
  },
  [weekdays[5]]: {
    open: 'Open 8 am',
    close: 'Close 8 pm',
  },
  [weekdays[6]]: {},
};

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

if (restaurant.openingHours && restaurant.openingHours.mon);
console.log(restaurant.openingHours.mon.open);

//With optional chaining
console.log(restaurant.openingHours.tue?.open);
console.log(restaurant.openingHours?.fri?.open);

//RealLife example
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'Off Day';
  const close = restaurant.openingHours[day]?.close ?? 'Off Day';
  console.log(`On ${day}, we are at ${open}`);
  console.log(`On ${day}, we are at ${close}`);
}

//Method
console.log(restaurant.order?.(0, 1) ?? 'Method dost not exist');

//Arrays
const users = [{ name: 'Tanjim', email: 'hello@tanjim.com' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > [0]) console.log(users[0].name);
else console.log('User array empty');
