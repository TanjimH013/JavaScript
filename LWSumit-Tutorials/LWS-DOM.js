"Use Strict";
const validateForm = function () {
  const form = document.forms["myForm"];

  const value = form["fname"].value;

  if (value === "") {
    alert("Name must be filled out");
    console.log(value);
    return false;
  }
};

//handel css

setTimeout(function () {
  const p = document.querySelector(".paragraph");

  p.style.color = "blue";
  p.style.fontSize = "2.8em";
  p.style.fontWeight = "600";
}, 2000);
