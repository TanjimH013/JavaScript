'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----forEach Method----');
/*it'll pass in the current element of the array as an argument */

movements.forEach(function (i) {
  if (i > 0) {
    console.log(`You deposited ${i}`);
  } else {
    console.log(`You withdrew ${Math.abs(i)}`);
  }
});
// every time it receive element as an argument
/*
0: function(200) 
1: function(450) 
2: function(400)
3:  ...
*/

console.log('--- entries method in for of loop ---');
const iteration = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, iterate] of iteration.entries()) {
  if (iterate > 0) {
    console.log(`Iterate ${i + 1}: You deposited ${iterate}`);
  } else {
    console.log(`Iterate ${i + 1}: YOu withdrew ${Math.abs(iterate)}`);
  }
}

console.log('-----forEach----');

iteration.forEach(function (iterate, i, arr) {
  if (iterate > 0) {
    console.log(`Iterate ${i + 1}: You deposited ${iterate} `);
  } else {
    console.log(`Iterate ${i + 1}: You withdrew ${Math.abs(iterate)}`);
  }
});
