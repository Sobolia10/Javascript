'use strict';

// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', 
// если имеет значение '2' – 'весна' и так далее.Решите задачу через switch-case и в конце выведете переменную result в консоль.


let num = 4;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
}
console.log(result);

// 2.Создайте объект заработных плат obj. Выведите на экран зарплату Пети и Коли.let obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
// 3.Используя цикл для объектов ,посчитать зарплаты всех людей из задания 2.
// 4.Используя объект из задания 2 ,удалить людей у которых зарплата меньше 600.(использовать цикл и if для проверки ЗП).
// 5.Используя объект из задания 2, добавить сотруднику к ЗП 150 у.е. если его ЗП меньше 600.(использовать первоначальный вид объекта , то есть let obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};)
let obj = {
    'Коля': 1000,
    'Вася': 500,
    'Петя': 200
};
console.log(obj['Петя'], obj['Коля']);

let sum = 0;
for (let key in obj) {
    sum = sum + obj[key];
    console.log(sum);
}

for (let key in obj) {
    if (obj[key] < 600) {
        delete obj[key];
    }
}
console.log(obj);

for (let key in obj) {
    if (obj[key] < 600) {
        obj[key] = obj[key] + 150;
        console.log(obj[key]);
    }
}

// 6.Создать функцию filterFor(arr, num). Функция должна выводить те элементы массива которые больше или равны (>=)
//  значения переменной num.(arr - массив,num - любое число).

function filterFor(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item >= num) {
            console.log(item);
        }
    }
}

let bkjlk = [10, 55, 9];
let hn = 10;

filterFor(bkjlk, hn);

// 7.Создать функцию stringRepeat(str, repeatTotal).Данная функция принимает два параметра, str - строка, repeatTotal(число) - 
// количество повторов данной строки.вернуть из функцию строку в которой какое - то количество раз(repeatTotal) повторена строка str.Например stingRepeat("Dima", 3)-- > вернёт "DimaDimaDima"(такие задачи есть решённые, главное умение гуглить).


function stringRepeat(str, repeatTotal) {
    let result = '';
    for (let i = 0; i < repeatTotal; i++) {
        result = result + str;
    }
    console.log(result);
}

stringRepeat('Olia', 5);