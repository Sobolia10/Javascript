'use strict';
let taskInput = document.querySelector('.message');
let taskBtn = document.querySelector('.add');
let removeDoneTaskBtn = document.querySelector('#removeDoneTasks');
const todoWrapper = document.querySelector('.list-group');
let todoList = [];


taskBtn.addEventListener('click', function(e) {

    e.preventDefault();
    let newTodo = {
        id: Date.now(),
        todo: taskInput.value,
        done: false,
    };

    todoList.push(newTodo);
    displayMessage();
    taskInput.value = '';
});


removeDoneTaskBtn.addEventListener('click', function(e) {
    displayUndoneMessage();
});


function displayMessage() {
    let displayMessage = '';

    if (todoList.length == 0) {
        displayMessage = `<li id="emptyList" class="list-group-item empty-list ">
        <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
        <div class="empty-list__title">Список дел пуст</div>
    </li>`
    }

    todoList.forEach(function(item, i) {
        const isDone = item.done == true ? 'task-title--done' : '';
        displayMessage += `
        <li data-id="${item.id}" class="list-group-item d-flex justify-content-between task-item ${isDone}">
            <span class="task-title">${item.todo}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
                <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
            </div>
        </li>
        `;
    });

    todoWrapper.innerHTML = displayMessage;
};

function displayUndoneMessage() {
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        if (item.done == false) {
            displayMessage += `
        <li data-id="${item.id}" class="list-group-item d-flex justify-content-between task-item">
            <span class="task-title">${item.todo}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
                <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
            </div>
        </li>
        `;
        }
    });
    todoWrapper.innerHTML = displayMessage;
};

todoWrapper.addEventListener('click', (event) => {
    const taskItem = event.target.closest('.list-group-item');
    const idTaskItem = taskItem.getAttribute("data-id");

    if (event.target.getAttribute("data-action") == "delete") {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id == idTaskItem) {
                todoList.splice(i, 1);
                break;
            }
        }
        displayMessage();
    }

    if (event.target.getAttribute("data-action") == "done") {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id == idTaskItem) {

                if (todoList[i].done) {
                    todoList[i].done = false;
                    taskItem.classList.remove('task-title--done');
                } else {
                    todoList[i].done = true;
                    taskItem.classList.add('task-title--done');
                }
                break;
            }
        }

    }
});