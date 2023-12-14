"Use-Strict";

// console.log("Line one code");

// setTimeout(function () {
//   console.log("Line Tow code");
// }, 2000);

// console.log("Line Three code");

//setTimeout
//setInterval

console.log("---------------");

const paymentSuccess = true;
const marks = 70;

const enroll = function (callback) {
  console.log("Course enrollment is in progress.");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed!");
    }
  }, 2000);
};

const progress = function (Callback) {
  setTimeout(function () {
    if (marks >= 80) {
      Callback();
    } else {
      console.log("You could not get enough marks to get the certificate");
    }
  }, 300);
};

const getCertificate = function () {
  console.log("Preparing your certificate");
  setTimeout(function () {}, 1000);
};

enroll(function () {
  progress(getCertificate);
});

console.log("--------------------------------------");
