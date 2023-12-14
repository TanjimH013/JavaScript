'Use-Strict';

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition 🏋️‍♀️ ${rep} 🏋️‍♂️`);
}

for (let rep2 = 1; rep2 <= 10; rep2++) {
  console.log('Lifting weights repetition 🏋️‍♂️🏋️‍♀️');
}

//ForEach
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const myFunction = function (value) {
  console.log(value);
};

fruits.forEach(myFunction);
