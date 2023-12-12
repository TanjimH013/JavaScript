const display = document.getElementById("display");

function getData() {
  fetch("http://127.0.0.1:5500/JS/LWSumit-Tutorials/data.txt")
    .then((res) => res.text())
    .then((data) => {
      display.innerText = data;
    });
}
