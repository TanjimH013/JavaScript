'Use Strict';
// let itemLi = document.querySelectorAll('.item');
// for(let element of itemLi){
//     element.style.color ='red'
// } 

// let headerElement = document.querySelector('#header');
// headerElement.innerHTML='To-Do Apps'
// headerElement.style.color = 'blue'
// headerElement.style.fontSize = '3.5em'

// // let lastItem = document.querySelector('.item:nth-child(2)')
// // lastItem.style.color='red'

// let itemAll = document.querySelectorAll('.item:childe')
// for(element of itemAll){
//     element.style.color = 'red'
// }



// parent/child relation
const grandparent = document.querySelector('.todo-list');
const childrenOne = grandparent.querySelector('.item')
childrenOne.style.color='red'

const childrenTow = childrenOne.nextElementSibling;
childrenTow.style.color = 'green'

const childrenThree = childrenTow.nextElementSibling;
childrenThree.style.color ='blue'

console.log(children);