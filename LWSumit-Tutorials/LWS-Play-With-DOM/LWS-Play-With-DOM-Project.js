'Use Strict';
/*
* Title: To do application using vanilla JS DOM
* Description: this JS file has all the JS Functions necessary to control the to do application
* Author: Sumit Saha (Learn With Sumit)
* Date: 12/07/2020
*/

// select elements & assign to variables

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// functions
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkBox'

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();

    let listItem =createTask(newTask.value);
    todoUl.appendChild(listItem)

    newTask. value = '';
// bind the new list item to the incomplete list
bindInCompleteItems(listItem, completeTask);
}

let completeTask = function(){
   let listItem = this.parentNode;
   let deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'Delete';
   deleteBtn.className = 'delete';
   listItem.appendChild(deleteBtn);

   let checkBox = listItem.querySelector('input[type ="checkbox"]');
   checkBox.remove();
   completeUl.appendChild(listItem);
   bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick){
let checkbox = taskItem.querySelector('input[type="checkbox"]');
checkbox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick){
let deleteButton = taskItem.querySelector('.delete');
deleteButton.onclick = deleteButtonClick
}

for(let i = 0; i < todoUl.children.length; i++){
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length[i]; i++){
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);