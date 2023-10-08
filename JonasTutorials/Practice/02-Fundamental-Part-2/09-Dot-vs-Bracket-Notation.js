//Using DOt vs Bracket
console.log(tanjim.firstName);
console.log(tanjim["lastName"]);

const interestedIn = prompt(
  "What do you want to know about Tanjim? Choose between firstName, lastName, age, job and friends"
);

if (tanjim[interestedIn]) {
  console.log(tanjim[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, e-mail, job, location and friends"
  );
}

tanjim.location = "Bangaldesh";
tanjim["e-mail"] = "tanjim13hasan@gmail.com";
console.log(tanjim);

console.log(
  `${tanjim.firstName} has ${tanjim.friends.length} friends, and his best friend is all of three guys called ${tanjim.friends[0]}, ${tanjim.friends[1]} and ${tanjim.friends[2]}`
);
