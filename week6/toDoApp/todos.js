import {
    ToDo
} from './toDo.js';

let todos = [];

//Check localStorage for existing ToDo list items
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos')); //If there is a Todo in the local storage, take it and turn it back to an array
}
setList();

//This will display the Todos 
function setList() {
    if (todos.length > 0) {
        let list = document.querySelector('ul');
        list.innerHTML = '';


        todos.forEach((todo) => {
                list.innerHTML += 
                `<li>
                  <label ${ todo.Completed ? 'class="completed"' : ''}>
                  <input type="checkbox" value="${todo.Id}" ${ todo.Completed ? "checked" : ""}>
                  ${todo.Content}
                  </label>
                  <input type="button" class='delete' id="${todo.Id}" value="X"></button>
                </li>`; //The todo item is being assigned the ID from the ToDo class
            }
        );

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(
            checkbox => {
                checkbox.addEventListener('change', (event) => {
                    const id = Number(event.target.value);
                    const todo = todos.find(todo => todo.Id === id); //Find the one Todo that has the Id of the todo that got clicked
                    todo.Completed = !todo.Completed; //Turn it into the opposite 
                    
                    //Save Todo Checklist
                    localStorage.setItem('todos', JSON.stringify(todos));

                    setList();
                    })

                });
            }
    }

console.log(todos);

const button = document.querySelector('#save');
button.addEventListener('click', (event) => {
    //This makes it so that the website does not submit itself
    event.preventDefault();

    const contentElement = document.querySelector('#content'); //Text box is a value 

    const newToDo = new ToDo(contentElement.value);
    todos.push(newToDo);

    localStorage.setItem('todos', JSON.stringify(todos));

    setList();

    console.log(todos);

    contentElement.value = '';





});

const deleted = document.querySelector('.delete');
deleted.addEventListener('change', () => {
    deleted.remove();
})