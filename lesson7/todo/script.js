function displayMessages() {
    let toDoListContent = '';
    toDoList.forEach((item, i) => {
        toDoListContent += `
        <li class="list-item">
            <input type="checkbox" id="${i}" ${item.checked ? 'checked' : ''}>
            <label for="${i}" class="${item.important ? 'important' : ''}">${item.todo}</label>
            <span>
                <button data-id="${i}" class="list-item__btn list-item__important-btn">X</button>
                <button data-id="${i}" class="list-item__btn list-item__delete-btn">Удалить</button>
            </span>
        </li>
        `;
    });
    todoContainer.innerHTML = toDoListContent;
}

const taskInput = document.querySelector('.message');
const addBtn = document.querySelector('.add');
const todoContainer = document.querySelector('.todo');
const headerContainer = document.querySelector('#header-text');
const totalTodo = document.querySelector('#total-todo');
//Логические блоки обычно разделяются строкой как у меня по всему коду,так легче следить за логикой
//но не пихайте пустую строку по всему коду
//обработчики событий разделены строкой 
//какая-то лёгкая логика не требует такого разделения,так как достаточно примитивная и легко читается чуть-чуть опытному человеку)
let toDoList = [];

if (localStorage.getItem("toDoList")) {
    toDoList = JSON.parse(localStorage.getItem("toDoList"));
    displayMessages();
    setImportantCount();
}

addBtn.addEventListener('click', () => {
    const newToDoTask = {
        todo: taskInput.value,
        checked: false,
        important: false
    };
    taskInput.value = '';
    toDoList.push(newToDoTask);
    displayMessages();
    localStorage.setItem("toDoList", JSON.stringify(toDoList));

    let maxLengthValue = 0;
    let maxValueElement = '';

    for (let index = 0; index < toDoList.length; index++) {
        const element = toDoList[index];

        if (element.todo.length > maxLengthValue) {
            maxLengthValue = element.todo.length;
            maxValueElement = element.todo;
        }

        document.getElementById('longest-todo').innerHTML = maxValueElement;
    }

    setImportantCount();
});


todoContainer.addEventListener('change', (event) => {
    let idInput = event.target.getAttribute('id'); //Забираем атрибут id с элемента input. 
    toDoList[idInput].checked = !toDoList[idInput].checked; //В атрибуте id хранится порядковый номер элемента в массиве
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
});



todoContainer.addEventListener('click', (event) => {

    if (event.target.closest('.list-item__delete-btn')) {
        let idItem = event.target.getAttribute('data-id'); //data-... так записываются ваши собственные атрибуты 
        //в которые вы хотите поместить какую-то информацию и чтобы html элемент её сохранил (почитайте про data атрибуты)
        toDoList.splice(idItem, 1); // ПОЧИТАЙТЕ ПРО splice(вырезает элемент из массива)
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        displayMessages();
        setImportantCount();
        return; //Пишем return чтобы следующий if не выполнялся и не забирала наши вычислительные мощности.
    }
    if (event.target.closest('.list-item__important-btn')) {

        let idItem = event.target.getAttribute('data-id');
        toDoList[idItem].important = !toDoList[idItem].important;

        toDoList.sort(sortImportant);


        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        displayMessages();
    }
    setImportantCount();

});


headerContainer.addEventListener('click', () => {
    if (headerContainer.style.color === 'red') {
        headerContainer.style.color = 'white';
    } else {
        headerContainer.style.color = 'red';
    }

})

function setImportantCount() {
    let importantCount = 0;
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].important == true) {
            importantCount++;
        }
    }

    totalTodo.innerHTML = 'Important ' + importantCount + '; All: ' + toDoList.length;
}

function sortImportant(a, b) {
    if (!a.important)
        return 1;
    else return -1;
}




//ЗАДАНИЯ 
//В задании вы должны будете сделать пару своих html блоков(можно напрямую добавлять в index.html вставлять) 
//и с помощью Js менять значение.Красота ваших блоков,которые вы добавили не важна,главное увидеть результат работы js
//1.Под надписью  Longest string length вывести задание (todo) у которой самая большая длина строки
//2.После того как вы отметили ваше ежедневное задание как важное,нужно чтобы выполнялась такая логика


/*
*-Отмечено как важное задание
Было вот так
--123*
--55576676
-2332332
-999
а стало вот так после того как мы отметим пункт 999 как важный 
--123*
-999*
--55576676
-2332332

То есть важные задания перемещаются вверх и показываются одними из первых
(реализация устроит любая,какую придумаете или какую найдёте)

3.При первом нажатии на главную надпись формы "ToDo list - glo.academy" данная надпись меняет цвет на красный,
а при втором нажатии цвет надписи становится прежним,то есть белым
4.Также создать отдельный блок вне формы, в котором будет выводиться количество ежедневных задач ,которое вы себе поставили,
то есть существует такой список ваших дел
--123*
-999*
--55576676
-2332332

Надпись должна показывать цифру 4 сколько соотвественно и задач (если дел в списке ноль,показывать ноль)
*/