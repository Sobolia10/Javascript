// 1. При нажатии на кнопку поле input должно менять текст на '!!!!!!!!!!'.
function buttonOnClick() {
    document.getElementById('input1').setAttribute('value', '!!!!!!!!!!');
}


// 2. При нажатии на кнопку выводить через alert число из поля input умноженное на 10.
function buttonClick() {
    debugger
    let el = document.getElementById('input2').value;
    alert(el * 10);
};

// 3. C помощью делегирования заставить работать кнопку в виде креста,чтобы она удаляла элемент и списка).
container.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
};

// 4. Повторить поведение данной страницы (поменять местами: Привет-Пока)
function go() {
    let el1 = document.getElementById('test1').value;
    let el2 = document.getElementById('test2').value;
    document.getElementById('test1').value = el2;
    document.getElementById('test2').value = el1;
}