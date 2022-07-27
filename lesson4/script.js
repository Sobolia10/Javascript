ЗАДАЧИ
1.Создать функцию,которая принимает в себя два параметра ,массив anyArr и произвольное число num. Данная функция должна вернуть 
новый массив ,который содержит только числа из массива anyArr которые меньше числа num.Пример
function filterArr(anyArr, num);
function filterArr([5,8,14,23,75,43,7,55], 15) => [5,8,14,7]

function filterArr(anyArr, num) {
    let result = [];
    for (let i = 0; i < anyArr.length; i++) {
        if (anyArr[i] < num) {
            result.push(anyArr[i]);
        }
    }

    return result;
}

const abc = filterArr([5,8,14,23,75,43,7,55], 15);
console.log(abc)

2. Написать функцию которая принимает в себя один параметр -- массив. Вернуть из функции с помощью return максимальное значение из массива
(нельзя использовать Math.max и call,apply,bind) только с помощью If.
function maxValue([5,8,14,23,75,43,7,55]) => 75

let tmpArr = [5,8,14,23,75,43,7,55];

function maxValue(arr) {
    let tmpValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > tmpValue) {
            tmpValue = arr[i];            
        }
    }
    console.log(tmpValue);
    return tmpValue;
}

maxValue(tmpArr)


3.Написать функцию reverse() которая принимает один параметр - массив. Нужно вернуть новый перевернутый массив.
funciton myReverse([1,2,3]) => [3,2,1] (нельзя использовать встроенную функцию reverse)

function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverse([1,2,3]))

4. дан массив объектов
Дан массив объектов.
1. Посчитать сумму всех зарплат в компании.

const myCompany = [
    {
        name: "Alex",
        salary: 1000,
        age: 23
    },
    {
        name: "Dima",
        salary: 2000,
        age: 15
    },
    {
        name: "Max",
        salary: 500,
        age: 52
    },
    {
        name: "Qwe",
        salary: 300,
        age: 23
    },
    {
        name: "Mira",
        salary: 700,
        age: 32
    },
    {
        name: "Vika",
        salary: 100,
        age: 34
    },
];

function salarySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i].salary;
    }
    console.log(sum);
}

salarySum(myCompany);

2. Написать функцию которая принимает в себя один параметр-- массив.Каждый элемент в данном массиве это 
человек со своими данными, вывести в консоль человека с самым большим и самым маленьким возрастом.
(сделать это через цикл, чтобы если был передан другой массив объектов, данная функция сработала правильно).

function minMaxSalary(arr) {
    let minSalary = 999999;
    let maxSalary = 0;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i].salary;
        if (el < minSalary) {
            minSalary = el;
        }
        if (el > maxSalary) {
            maxSalary = el;
        }
            
    }
    console.log(minSalary);
    console.log(maxSalary);
}

minMaxSalary(myCompany);
