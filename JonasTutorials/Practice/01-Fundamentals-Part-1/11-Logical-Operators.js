"Use-Strict";

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasDriversLicense && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You can able to drive");
} else {
  console.log("Someone else should drive");
}
