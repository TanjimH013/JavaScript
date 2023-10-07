/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both 
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall
*/




//Test 1
const mass2Mark = 78;
const height2Mark = 1.69;
const mass2John = 92;
const height2John = 1.95;

const BMI2Mark = mass2Mark / height2Mark **2;
const BMI2John = mass2John / (height2John * height2John);
const markHigher2BMI = BMI2Mark > BMI2John;

console.log(BMI2Mark, BMI2John, markHigher2BMI);




//Test 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

