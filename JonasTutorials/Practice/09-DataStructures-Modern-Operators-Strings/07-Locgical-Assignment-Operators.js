'Use-Strict';

const restaurantONE = {
  name: 'Cpari',
  numGuests: 20,
};

const restaurantTOW = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// restaurantONE.numGuests = restaurantONE.numGuests || 10;
// restaurantTOW.numGuests = restaurantTOW.numGuests || 10;

restaurantONE.numGuests ||= 10;
restaurantTOW.numGuests ||= 10;

console.log(restaurantONE);
console.log(restaurantTOW);

const rest1 = {
  name: 'Cpari',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Tanjim Hasan',
};

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
console.log(rest1);
console.log(rest2);
