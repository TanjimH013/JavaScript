'use strict';

console.log('--- forEach in Maps ---');
const currencies = new Map([
  ['USD', 'United State dollar'],
  ['EUR', 'EURO'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('--- forEach in Set ---');

const uniqueCurrencies = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);
uniqueCurrencies.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
