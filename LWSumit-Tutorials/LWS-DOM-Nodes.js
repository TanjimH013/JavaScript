"Use Script";
const para = document.createElement("p");
const node = document.createTextNode("4.Hello World");

para.appendChild(node);

const element = document.getElementById("div1");
// element.appendChild(para); // join or connect

/////////////////////////////////////////////////

const p2 = document.getElementById("p2");
element.insertBefore(para, p2);

/////////////////////////////////////////////////

// const p2 = document.getElementById("p2");

// p2.remove(); // removing items(not supported by old browsers)

//////////////////////////////////////////////////

// const div1 = document.getElementById("div1");
// const p2 = document.getElementById("p2");

// div1.removeChild(p2); // All browser supported method

//////////////////////////////////////////////////

const div1 = document.getElementById("div1");
const p1 = document.getElementById("p1");
div1.replaceChild(para, p1); // Replace method
