"Use Strict";

const listen = function () {
  const event = document.querySelector(".event");
  event.innerHTML = `Yes! I'm listening you`;
  event.style.color = "chocolate";
  event.style.fontSize = "2.9em";
  console.log(event);
};

const button = document.querySelector(".button");

button.onclick = function () {
  button.innerHTML = `What do want?`;
  button.style.marginTop = "5px";
  button.style.marginLeft = "75px";
  button.style.color = "blue";
  button.style.fontSize = "2.9em";
  console.log(button);
};

//add Event handler
const button2 = document.querySelector(".button2");
button2.style.marginLeft = "25px";

button2.addEventListener("click", function () {
  button2.innerHTML = `Hi! I'm addEventListener`;
  button2.style.fontSize = "2.9em";
  button2.style.color = "crimson";
  button2.style.fontWeight = "500";
});

button2.addEventListener("mouseover", function () {
  button2.innerHTML = "Click me";
});
