const airplane = 'LH234';
const tanjim = {
  name: 'Tanjim Hasan',
  passport: 'EA0782649',
};

const checkIn = function (airplaneNum, passenger) {
  airplaneNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'EA0782649') {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(airplane, tanjim);
console.log(airplane);
console.log(tanjim);

const airplaneNum = airplane;
const passenger = tanjim;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * '10000000');
// };
// newPassport(tanjim);
// checkIn(airplane, tanjim);
