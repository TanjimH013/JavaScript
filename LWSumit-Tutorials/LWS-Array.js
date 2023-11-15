"Use Strict";
let myNumber = 32;
//myNumber.toString(10);
console.log(myNumber.toString(32));

const city = [" Chittagong", " Dhaka", " Rajshahi", " Khulna ", " Sylhet"];

document.getElementById("demo").innerHTML = city;

console.log(typeof city);
console.log(city.length);

city.pop("Sylhet");

city.push("Rongpur");

city.shift("Borishal");

city.unshift("Chittagong");

city[5] = "Jessor";

city[city.length] = "Comilla";
for (i = 0; i < city.length; i++) {
  console.log(city[i]);
}

console.log("--- ForEach Method ---");

city.forEach(function (value) {
  console.log(value);
});
