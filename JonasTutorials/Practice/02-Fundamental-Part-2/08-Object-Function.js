'Use-Strict';

const tanjim = {
  firstName: 'Tanjim',
  lastName: 'Hasan',
  age: 2023 - 1995,
  job: 'Unemployed',
  friends: ['Pabel', 'Shajib', 'Rayhan'],
};

console.log(tanjim);
console.log(tanjim.age);
console.log(tanjim['friends']);

//Object using function as property called method

const Taxi = {
  brand: 'Banglar Bir',
  model: '16-Dec-2030',
  weight: '400 kg',
  engin: '3 phase AC induction motor',
  electric_motor:
    'Front and rear motor combined output up to 615 kW (825 bhp), 1,300 N⋅m (960 lb⋅ft), 3-phase AC induction motor',
  transmission: '1-speed fixed gear ratio (9.734:1 or 9.325:1); direct-drive',
  battery: '100 kWh lithium ion Discontinued: 60, 70, 75, 85, 90 kWh',

  start: function () {
    console.log('Taxi has started');
  },
  drive: function () {
    'Taxi is running';
  },
};

console.log(Taxi.brand);
console.log(Taxi.model);
console.log(Taxi['weight']);
console.log(Taxi['engin']);
console.log(Taxi.electric_motor);
console.log(Taxi['transmission']);
console.log(Taxi.battery);

Taxi.start();
Taxi.drive();
