'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive');

//Using of FUNCTION

function classRoom(male, female) {
  const passed = `Total passed ${male} male and ${female} female students.`;
  return passed;
}

const studentsPassed = classRoom(45, 37);
console.log(studentsPassed);

function classRoom(male, female) {
  const failed = `Total failed ${male} male and ${female} female students.`;

  return failed;
}

const studentsFailed = classRoom(10, 8);
console.log(studentsFailed);

// FUNCTION declaration
function calAgeONE(birthYear) {
  return 2037 - birthYear;
}

const ageONE = calAgeONE(1993);

//FUNCTION expression
const calAgeTOW = function (birthYear) {
  return 2037 - birthYear;
};
const ageTOW = calAgeTOW(1993);
console.log(ageONE, ageTOW);

//ARROW function
const calAgeTHREE = birthYear => 2037 - birthYear;
const AgeTHREE = calAgeTHREE(1993);
console.log(AgeTHREE);

//Traditional function
function yearsUntilRetirement(birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retirement in ${retirement} years`;
}

console.log(yearsUntilRetirement(1988, 'Abdullah'));
console.log(yearsUntilRetirement(1985, 'Nurullah'));
console.log(yearsUntilRetirement(1987, 'Abdul Qoyum'));
console.log(yearsUntilRetirement(1989, 'Abdul Quddus'));

//Assignments of Array
// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
//   percentages(populations[0]),
//   percentages(populations[1]),
//   percentages(populations[2]),
//   percentages(populations[3]),
// ];

console.log('--------Default Parameter---------');
const bookingTrain = [];
const booking = function (
  trainNum,
  numPassengers = 1,
  price = 500 * numPassengers
) {
  const createBooking = {
    trainNum,
    numPassengers,
    price,
  };
  console.log(createBooking);
  bookingTrain.push(createBooking);
};
booking('CHO', 2);
booking('CHO', 4);
booking('CHO', 1.5);
booking('CHO', 1);

console.log('------Coach Service-------');

const bookingCoach = [];
const bookingInfo = function (
  coachNum,
  passengerName,
  passengerNum = 1,
  price = 700 * passengerNum
) {
  const ticketBooking = { coachNum, passengerName, passengerNum, price };
  console.log(ticketBooking);
  bookingCoach.push(ticketBooking);
};

bookingInfo('C1,C2', 'Mr.Sheik', 2);
bookingInfo('D1', 'Mr.Shikdar', 1);
bookingInfo('D2', 'Mr.Talukdar', 1);
bookingInfo('D3, D4, E3, E4', 'Mr.Bahndary', 4);
bookingInfo('C3, C4, E1, E2, F1, F2, F3, F4', 'Mr.Anonymous', undefined, 5500);

const metroBooking = [];

const creatingMetroBooking = function (
  busNum,
  passengerName,
  passengerNum = 1,
  price = 30 * passengerNum
) {
  const metroTicket = {
    busNum,
    passengerName,
    passengerNum,
    price,
  };
  console.table(metroTicket);
  metroBooking.push(metroTicket);
};

creatingMetroBooking('A1,A2', 'Mr.Kuddus', 2);
creatingMetroBooking('B-All, C-All, E-All, G-All', 'Anonymous', undefined, 480);

console.log('----- How Passing Argument Works With Value ------');

const train = 'Suborna Express';
const passengerName = {
  name: 'Tanjim Hasan',
  nid: 2817009216,
};

const checkIn = function (trainNum, passengerNum) {
  trainNum = 'Sonar Bangla';
  passengerNum.name = 'Mr. ' + passengerNum.name;

  if (passengerNum.nid === 2817009216) {
    alert('Welcome to the platform');
  } else {
    alert('Wrong NID!');
  }
};

checkIn(train, passengerName);
console.table(train);
console.table(passengerName);

class Ticket {
  constructor(Coachclass, sit, passengerNum, name, nid, cell, drop, price) {
    this.Coachclass = Coachclass;
    this.sit = sit;
    this.passengerNum = passengerNum;
    this.name = name;
    this.nid = nid;
    this.cell = cell;
    this.drop = drop;
    this.price = price;
  }
  detail() {
    console.log(
      `Class: ${this.Coachclass}, Sit serial: ${this.sit}, Name: ${
        this.name
      }, Nid: ${this.nid}, Contact:${this.cell}, Drop Area: ${
        this.drop
      }, Price: ${this.passengerNum * this.price}`
    );
  }
}
const Ticket1 = new Ticket(
  'Business',
  'A1,A2',
  2,
  'Mr & Mrs. Salimullah Khan',
  '1246446232154',
  '+880 1075882254',
  'Shymoli square',
  1100
);
const Ticket2 = new Ticket(
  'Economy',
  'B1,B2',
  2,
  'Kaua Kader',
  '1246442871245',
  '+880 1075855254',
  'Gabtoli',
  850
);

Ticket1.detail();
Ticket2.detail();
