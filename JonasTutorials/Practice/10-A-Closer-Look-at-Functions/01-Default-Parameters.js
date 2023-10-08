'use strict';

const bookings = [];

const creatingBooking = function (
  numFlight,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //Using method on ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    numFlight,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatingBooking('LH123');
creatingBooking('LH123', 2);
creatingBooking('LH123', 10);
creatingBooking('LH123', undefined, 1000);
