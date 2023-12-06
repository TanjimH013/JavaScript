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
