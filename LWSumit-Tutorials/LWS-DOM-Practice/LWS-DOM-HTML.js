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
