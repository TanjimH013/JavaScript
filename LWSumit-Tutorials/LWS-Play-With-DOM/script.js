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



//parent/child relation
const grandparent = document.querySelector('.todo-list');
const childrenOne = grandparent.querySelector('.item')
childrenOne.style.color='red'

const childrenTow = childrenOne.nextElementSibling;
childrenTow.style.color = 'green'

const childrenThree = childrenTow.nextElementSibling;
childrenThree.style.color ='blue'





//create an element in dom

const divElement = document.createElement('div');

divElement.className = 'red';

divElement.setAttribute('id', 'red')
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
const h2Element = container.querySelector('h2');
container.insertBefore(divElement,h2Element);



//even listeners
const headerElement = document.querySelector('.mouse');
headerElement.addEventListener('mousemove',(event)=>{console.log(event);})


const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('keypress',(event)=>{
    console.log(event);
})

const inputElementFocus= document.querySelector('input[type = "text"]');
inputElementFocus.addEventListener('focus',(event)=>{console.log(event);})

