//Form API

function validation() {
  const inputObj = document.getElementById("id1");

  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("You have made a range overflow!");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("You have made a range underflow!");
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity("Value missing !");
  } else if (inputObj.validity.stepMismatch) {
    inputObj.setCustomValidity("Only input number!");
  }

  if (!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}

////////////////////////////////////////////////////

//History API

function back(n) {
  window.history.back(n);
}

function backTo(n) {
  window.history.backTo(n);
}

function forward() {
  window.history.forward();
}

function getHistory() {
  alert(window.history.length);
}

////////////////////////////////////////////////////

//Storage API

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  alert(localStorage.getItem(key));
}

function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}
