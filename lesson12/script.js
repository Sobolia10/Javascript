// Задачи:
//     1. Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
//     Например:
//     var d = new Date(2014, 0, 30); // 30 января 2014
// alert(formatDate(d)); // '30.01.14'
// P.S.Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01 .01, а не 1.1 .1 .
// 2.Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.
// 3. Выведите на экран текущую дату - время в формате '12:59:59 31.12.2014'.
// ВСЕ ЗАДАЧИ ДЕЛАТЬ ЧЕРЕЗ ОБЪЕКТ Date();

function formatDate(dateTime) {
    console.log(dateTime.toLocaleDateString('ru-RU', { day: "numeric", month: "long", year: "numeric" }));
}

formatDate(new Date(2014, 0, 30));
// alert(new Date(2014, 0, 30).toLocaleDateString('ru-RU', { day: "numeric", month: "numeric", year: "numeric" }));





function timeDifference(date) {
    let dateNow = new Date();
    // console.log(dateNow);
    // console.log(Math.floor(dateNow / 3600) % 24);


    console.log(Math.floor(Math.abs(dateNow - date) / 36e5));
}

timeDifference(new Date(01, 03, 1988));


function dateTimeHelper(inputDate) {
    let timeFormat = inputDate.toLocaleTimeString('ru-RU', { hour: "numeric", minute: "numeric", second: "numeric" })
    let dateFormat = inputDate.toLocaleDateString('ru-RU', { day: "numeric", month: "numeric", year: "numeric" })

    console.log(`${timeFormat} ${dateFormat}`);
}



dateTimeHelper(new Date(2014, 0, 30, 12, 59, 59));