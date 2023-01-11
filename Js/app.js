
//Selectors
const $taskInput = document.querySelector('.task-Input');
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
 const newToDo= document.createElement('li');
 newToDo.innerText = 'hey';
 newToDo.classList.add('toDoItem')
 toDoDiv.appendChild(newToDo);
 //Check mark button
 const completedButton = document.createElement('button');
 completedButton.innerHTML= '<i class= "fas fa-check"></i>';
 completedButton.classList.add("complete-button");
 toDoDiv.appendChild(completedButton);

 const trashButton = document.createElement('button');
 trashButton.innerHTML= '<i class= "fas fa-trash"></i>';
 trashButton.classList.add("trash-button");
 toDoDiv.appendChild(trashButton);
 //Append to list
 $taskList.appendChild(toDoDiv);
 
}