let w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    // worker available

    // if w worker is not already defined
    if (typeof w == "undefined") {
      // create a new worker called 'w'
      w = new Worker("worker.js");

      // listening for worker events/message
      w.onmessage = function (event) {
        document.getElementById("digits").innerHTML = event.data;
      };
    } else {
      alert("Your browser dose not support web worker!");
    }
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = undefined;
  } else {
    alert("Your browser dost not support web worker!");
  }
}
