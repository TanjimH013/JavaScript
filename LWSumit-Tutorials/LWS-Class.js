"Use-Strict";
class person {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  insertCard(status) {
    console.log(`Name: ${this.name}
Age: ${this.age}
ID: ${this.id}
Welcome! ${status}`);
  }
}
const personOne = new person("Rayhan", 29, 1828569871);

personOne.insertCard("you may proceed");

const personTow = new person("Pabel", 30, 4526987125);

personTow.insertCard("wait for some while");

console.log("---------------");

class Ticket {
  constructor(
    coachClass,
    sit,
    passengerTotal,
    passengerName,
    nid,
    cellNum,
    pick,
    drop,
    price
  ) {
    this.coachClass = coachClass;
    this.sit = sit;
    this.passengerTotal = passengerTotal;
    this.passengerName = passengerName;
    this.nid = nid;
    this.cellNum = cellNum;
    this.pick = pick;
    this.drop = drop;
    this.price = price;
  }

  detailPassengerPrint() {
    console.table(`
    Class:${this.coachClass},
    Sit serial : ${this.sit}.
    
    Passenger Total: ${this.passengerTotal},
    Passenger Name: ${this.passengerName},
    NID: ${this.nid},
    Contact Number: ${this.cellNum}.
    
    Depart From: ${this.pick},
    Drop Area: ${this.drop}.
    
    Fare:${this.passengerTotal * this.price} only.
    `);
  }
}
const TicketOne = new Ticket(
  "Business",
  "D1-D3,E1",
  4,
  "Rayhan Mahmud",
  "42265453384",
  "+880 1521486527",
  "Chittagong",
  "Shirajgonj",
  1500
);
TicketOne.detailPassengerPrint();

const TicketTow = new Ticket(
  "Business",
  "B2,B3",
  2,
  "Md.Afzalur Rahman",
  "42265453384",
  "+880 1521486526",
  "Chittagong",
  "Dhaka",
  1150
);

TicketTow.detailPassengerPrint();
