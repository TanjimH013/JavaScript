"use strict";
let paragraph = `A small country with a huge population name is Bangladesh. The total area of Bangladesh is 147,570 square kilometers but the total population is more than 164 million. Still, it is a green and naturally beautiful country. Our country is growing economically and it is doing well in export too.

We are the leader in world garments exporting right after china. Not only in the economy, but we also good at sports too. Our cricket team is one of the top seven teams in the world. Bangladesh has a very heart touching history behind. In 1971 this country got independence from Pakistan after a nine months war.

Lots of people sacrificed their lives in that time. On 16 December the Pakistani army surrendered and we got a new nation. That’s why we celebrate on 16 December as our Victory Day. Bangladesh is a very beautiful country with lots of natural spots to see. I love my country a lot.`;

let n = paragraph.search("Bangladesh");
console.log(n);

//Insensitive search

let m = paragraph.search(/pakistani/i);
console.log(m);

//Replace method
let r = paragraph.replace("147,570 square kilometers", "56,977 sq. miles");
console.log(r);

document.getElementById("prgrph").innerHTML = r;

//Match

let q = paragraph.match(/bangladesh | pakistan/gi);

console.log(q);

let s = paragraph.match("Bangladesh");
console.log(s);
