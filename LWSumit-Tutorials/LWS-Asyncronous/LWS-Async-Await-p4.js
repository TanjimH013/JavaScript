"Use Strict";
const hello = async function () {
  return "Hello guys!";
};

console.log(hello());

//
//
console.log("----------------------------");

const paymentSuccess = true;
const marks = 81;

const enroll = function () {
  console.log("Course enrollment is in progress... 💬");

  const promise = new Promise(function (keep, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        keep();
      } else {
        reject("Your payment failed!.. ⛔🛑");
      }
    }, 2000);
  });
  return promise;
};

const progress = function () {
  console.log("Course on progress ........ 💬");

  const promise = new Promise(function (keep, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        keep();
      } else {
        reject("You could not get enough marks to get the certificate. 💔🚫");
      }
    }, 3000);
  });
  return promise;
};

const getCertificate = function () {
  console.log("Preparing your certificate!");

  const promise = new Promise(function (keep) {
    setTimeout(function () {
      keep("Congrats! You got the certificate. 👨‍🎓 👩‍🎓");
    });
  }, 1000);
  return promise;
};

async function course() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();

    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();
