// Selectors 

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Function

const addTodo = (event ) =>{
    event.preventDefault();


    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');

    newTodo.innerText = todoInput.value;

    todoInput.value = "";

    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);


    // Completed Button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);


    // appending to list

    todoList.appendChild(todoDiv);
}

// deleting todo

const deleteCheck = (event) =>{
    const item = event.target ;

    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })

    }


    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// Event Listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)