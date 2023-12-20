'Use Strict';
// let itemLi = document.querySelectorAll('.item');
// for(let element of itemLi){
//     element.style.color ='red'
// } 

let headerElement = document.querySelector('#header');
headerElement.innerHTML='To-Do Apps'
headerElement.style.color = 'blue'
headerElement.style.fontSize = '3.5em'

// let lastItem = document.querySelector('.item:nth-child(2)')
// lastItem.style.color='red'

let itemAll = document.querySelectorAll('.item:childe')
for(element of itemAll){
    element.style.color = 'red'
}