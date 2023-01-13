
//Selectors
const $taskInput = document.querySelector('.task-input');
const $taskButton = document.querySelector('.task-button');
const $taskContainer = document.querySelector('.task-container');
const $taskList = document.querySelector('.task-list')
const $filterOption = document.querySelector(".filter-todo")


let toDoList = JSON.parse(localStorage.getItem("toDos"));
if (toDoList != null) {
    toDoList.forEach(element => {
        addToDoToHtml(element.value, element.state);
    });

}
//Event Listeners
$taskButton.addEventListener('click', addToDo)
$taskList.addEventListener('click', deleteCheck);
$filterOption.addEventListener("change", filterToDo)

//Functions

function addToDo(event) {
    //prevent form from submitting
    event.preventDefault();

    //List Div
    addToDoToHtml($taskInput.value);
    //ADD TO DO TO LOCALSTORE
    saveLocalToDos($taskInput.value)
    $taskInput.value = '';

}
function createChild(parent, elementName, html, classList) {
    const element = document.createElement(elementName);
    element.innerHTML = html;
    element.classList.add(classList);
    parent.appendChild(element)
}
function addToDoToHtml(value, state = "uncompleted") {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");
    if (state === "completed") {
        toDoDiv.classList.add("completed")
    }

    //Create LI
    createChild(toDoDiv, 'li', value, 'toDoItem');

    //Check mark button
    createChild(toDoDiv, 'button', '<i class= "fas fa-check"></i>', 'complete-button');

    createChild(toDoDiv, 'button', '<i class= "fas fa-trash"></i>', "trash-button");
    //Append to list
    $taskList.appendChild(toDoDiv);
}

function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0] === "trash-button") {
        const taskToRemove = item.parentElement;
        taskToRemove.classList.add('fall');
        removeLocalToDos(taskToRemove);
        taskToRemove.addEventListener('transitionend', function () {
            taskToRemove.remove();
        });

    }
    else if (item.classList[0] === "complete-button") {
        const taskToCheck = item.parentElement;
        taskToCheck.classList.toggle('completed')

    }
}
function filterToDo(event) {
    const todos = $taskList.childNodes
    todos.forEach(function (toDo) {
        switch (event.target.value) {
            case "all":
                toDo.style.display = "flex";
                break;
            case "completed":
                if (toDo.classList.contains("completed")) {
                    toDo.style.display = "flex";
                } else {
                    toDo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!toDo.classList.contains("completed")) {
                    toDo.style.display = "flex"

                } else {
                    toDo.style.display = "none";
                }
                break;
        }
    })
}
function saveLocalToDos(toDo) {
    //Check --- Do i already have thing in there?
    let toDos;
    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
    const localToDo = {
        value: toDo,
        state: "uncompleted"
    }
    toDos.push(localToDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));

}
function removeLocalToDos(toDo) {
    let toDos;
    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
    const todoIndex = toDo.children[0].innerText;
    toDos.splice(toDos.indexOf(todoIndex), 1);
    localStorage.setItem("toDos", JSON.stringify(toDos));
    
}

function updateLocalStorage(toDo){
    let toDos;
    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
}