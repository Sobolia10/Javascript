1) Используя конструкцию if..else(также можно использовать конструкцию if...else if), напишите код, который при заранее заданном числе хранящимся в переменной , выведет в консоль через console.log следующее:
1, если значение больше нуля,
 -1, если значение меньше нуля,
0, если значение равно нулю.

let number = 10;

if (number > 0) {
    console.log("1");
} else {
    console.log("Error");
}

if (number < 0) {
    console.log("-1");
} else {
    console.log("Error");
}

if (number = 0) {
    console.log("0");
} else {
    console.log("Error");
}

2)Проверить заранее заданную переменную a.Если переменная a равна нулю или равна двум, то прибавьте к ней 7, 
иначе поделите ее на 10. Выведите новое значение переменной на экран.Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let a;
let sum = 7;
let del = 10;

a = 5;
if (a == 0 || a == 2) {
    sum = a + sum;
    console.log(sum);
} else {
    del = a / 10;
    console.log(del);
}

a = 0;
if (a == 0 || a == 2) {
    sum = a + sum;
    console.log(sum);
} else {
    del = a / 10;
    console.log(del);
}

a = -3;
if (a == 0 || a == 2) {
    sum = a + sum;
    console.log(sum);
} else {
    del = a / 10;
    console.log(del);
}

a = 2;
if (a == 0 || a == 2) {
    sum = a + sum;
    console.log(sum);
} else {
    del = a / 10;
    console.log(del);
}

3) Проверить заранее заданную переменную a. Если переменная a равна или меньше 1, а переменная b больше или равна 3, 
то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let a;
let b;
a = 1;
b = 3;
if (a<=1 && b>=3) {
    sum = a + b;
    console.log(sum);
} else {
    difference = a - b;
    console.log(difference);
}

a = 0;
b = 6;
if (a<=1 && b>=3) {
    sum = a + b;
    console.log(sum);
} else {
    difference = a - b;
    console.log(difference);
}

a = 3;
b = 5;
if (a<=1 && b>=3) {
    sum = a + b;
    console.log(sum);
} else {
    difference = a - b;
    console.log(difference);
}

ЗАДАЧИ на цикл for.(если успеете,также реальзовать задачи с циклом while)
4)Выведите в консоль числа от 1 до 50.
for(let i = 1; i <= 50; i++) {
    console.log(i);
}

let i = 0;
while(i <= 50) {
    console.log(i);
    i++;
}

5)Дан массив с элементами [10, 6, 5, 112, 23]. С помощью цикла for выведите все эти элементы на экран.
let arr = [10, 6, 5, 112, 23];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr = [0, 6, 5, 112, 23];
let i = -1;

while (++i < 5) {
    console.log(arr[i]);
}

6)Дан массив с элементами [10, 2, 1, 5]. С помощью цикла for найдите произведение элементов этого массива.
(по аналогии с задачей которую мы решали на уроке только там надо было найти сумму чисел).

let arr = [10, 6, 5, 112, 23];
let multiply = 1;
for(let i = 0; i <arr.length; i++) {
    multiply = arr[i] * multiply;
    console.log(multiply);
}

let arr = [10, 2, 1, 5];
let i = 0;
let mult = 1;

while (i < arr.length) {
    mult = mult * arr[i];
    i++;
    console.log(mult);
}