const lufthansa = {
  airline: 'Luthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} ${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Tanjim Hasan');
lufthansa.book(240, 'Nipu Akter');
console.log(lufthansa);
