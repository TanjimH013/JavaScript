// 1)Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking ut into sub-problems
// - Transform array int string
// - Transform each element to string with °C
// - Strings needs to contain day (index +1)
// - Add ... between elements and start and end of string

'use strict';
const dataONE = [17, 21, 23];
const dataTOW = [12, 5, -5, 0, 4];
console.log(`... ${dataONE[0]}°C ... ${dataTOW[1]}°C ...${dataONE[2]}°C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let index = 0; index < arr.length; index++) {
    str += ` ${arr[index]}°C in ${index + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(dataONE);
