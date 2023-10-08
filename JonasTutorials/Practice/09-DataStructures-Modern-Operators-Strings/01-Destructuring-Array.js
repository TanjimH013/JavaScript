'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive to return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructing
// const nested = [2, 4, [5, 6]];
// // const [i, j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// console.log('------slice method------');
// function func() {
//   let arr = [23, 56, 87, 32, 75, 13];
//   let newArr = arr.slice(2, 4);
//   console.log(arr);
//   console.log(newArr);
// }
// func();

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
/**************************/
console.log('----------Restaurant---------');
/*********************** */
const restaurant = {
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
    'Chieck Tanduri',
    'Kabab',
    'Pizza',
    'Pasta',
    'Risotto',
  ],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [first, , , , second] = restaurant.categories;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
console.log(restaurant.order(0, 0));
const [starter, mainCourse] = restaurant.order(0, 0);
console.log(starter, mainCourse);
/********************************** */
console.log('-------Nested-------');
/******************************** */ const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
