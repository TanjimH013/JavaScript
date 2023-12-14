"Use Strict";

const myMove = function () {
  const animation = document.querySelector(".animation");
  let pos = 0;

  setInterval(frame, 5);

  function frame() {
    if (pos < 479) {
      pos++;

      animation.style.top = pos + "px";
      animation.style.left = pos + "px";
      animation.style.backgroundColor = "#f08c00";
    } else {
      clearInterval(setInterval);
    }
  }
};

// myMove();
