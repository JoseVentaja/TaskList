
//Selectors
const $taskInput = document.querySelector('.task-input');
const $taskButton = document.querySelector('.task-button');
const $taskContainer = document.querySelector('.task-container');
const $taskList = document.querySelector('.task-list')

//Event Listeners
$taskButton.addEventListener('click',addToDo)


//Functions

function addToDo(event){
    //prevent form from submitting
    event.preventDefault();

//List Div
const toDoDiv = document.createElement("div");
toDoDiv.classList.add("toDo");
//Create LI
createChild(toDoDiv,'li', $taskInput.value ,'toDoItem');

 //Check mark button
 createChild(toDoDiv,'button','<i class= "fas fa-check"></i>','complete-button');

 createChild(toDoDiv,'button','<i class= "fas fa-trash"></i>',"trash-button");
 //Append to list
 $taskList.appendChild(toDoDiv);
 
}
function createChild(parent,elementName, html, classList){
    const element = document.createElement(elementName);
    element.innerHTML = html;
    element.classList.add(classList);
    parent.appendChild(element)
 }