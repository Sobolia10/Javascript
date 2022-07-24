// Задачи 
// 1.Создать функцию evenOrOdd(num) - num произвольное число. Нужно определить какое это число, чётное или нечётное 
// и вывести соответствующую надпись в консоль(console.log("Чётное") или console.log("Нечётное")).Пример: evenOrOdd(3) -> нечётное.

function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}
evenOrOdd(4)

// 2. Создать функцию searchMinValue(arr) - arr массив чисел. Из функции вернуть самое минимальное число 
// из массива searchMinValue([10,15,4,24,67]) -> должно возвращать минимальное число то есть 4 через специальное слово return.

function searchMinValue(arr) {
    return Math.min(...arr);
}
console.log(searchMinValue([10, 15, 4, 24, 67]));

// 3. Создать функцию sumPositiveVal(arr) - arr массив чисел. Функция принимает массив состоящий из положительных и отрицательных чисел.
//  Функция должна вернуть сумму только положительных то есть sumPositiveVal([1,-4,7,12]) => 1 + 7 + 12 = 20.должно вернуть число 20.

let arr = [1, -4, 7, 12];

function sumPositiveVal(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result = result + arr[i]
        }
    }
    return result;
}

let sum = sumPositiveVal(arr);

console.log(sum);

// 4. Создать функцию которая принимает в себя массив, например [10, 14, 32, 41, 15, 26, 17, 88, 29, 0, -11, -12, -13, -14, -15]. 
// В конце функции вы должны вывести два числа. первое число ээто будет количество положительных чисел в массиве, 
// Второе число это будет сумма отрицательных чисел. Число не является ни положительным не отрицательным значением, 
// то есть его нам надо пропустить. Функция в данном примере [10, 14, 32, 41, 15, 26, 17, 88, 29, 0, -11, -12, -13, -14, -15], 
// должна вывести число 9 - количество положительных чисел(число ноль не считается !!!!!!!) и  число -65(минус 65)-сумма отрицательных чисел.



let arr = [10, 14, 32, 41, 15, 26, 17, 88, 29, 0, -11, -12, -13, -14, -15];


function Diff(arr) {
    let positiveCount = 0;
    let negativeSum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 1) {
            positiveCount = positiveCount + 1;
        }
        if (arr[i] < 0) {
            negativeSum = negativeSum + arr[i];
        }
    }
    let obj = { positiveCount, negativeSum };
    return obj
}

console.log(Diff(arr));




