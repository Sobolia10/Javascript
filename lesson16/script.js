1. Получить следующее простое число.(простое число делится на 1 и на само себя, больше ни на что)
в функцию поступает число, вам надо найти первое простое число которое больше числа переданного в функцию.

function getSimpleNumber(number) {
    let isSimple = false;
    let isFindSimpleDigital = false;

    let nextNumber = number + 1;

    while (!isFindSimpleDigital) {
        let currentNum = 2;
        while (!isSimple) {
            if (nextNumber == currentNum) {
                isSimple = true;
                isFindSimpleDigital = true;
                console.log(`${nextNumber} is simple`)
                break;
            }

            if (nextNumber % currentNum == 0) {
                isSimple = false;
                break;
            }

            currentNum++
        }
        nextNumber++;
    }
}
getSimpleNumber(13)


2. Метод "сортировка пузырьком"

function first(a, b) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i <= a; i++) {
        if (a % i == 0) {
            arr1.push(i);
        }
    }

    for (let j = 0; j <= a; j++) {
        if (b % i == 0) {
            arr2.push(j);
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1(i) == arr3(i)) {
                arr3.push(arr1[i]);
                break;
            }
        }
    }
    return arr3;
}

console.log(first(20, 27));


3. inAscOrder([1, 2, 4, 7, 19]); // returns true 
inAscOrder([1, 2, 3, 4, 5]); // returns true 
inAscOrder([1, 6, 10, 18, 2, 4, 20]); // returns false
Создать функцию которая возвращает true или false.На вход поступает массив и надо определить стоят ли числа в порядке возрастания.

function inAscOrder(arr) {
    for (let i = 1; i < arr.length; i++) {
        let preValue = arr[i - 1];
        if (preValue > arr[i]) {
            return false;
        }
    }
    return true;
}

console.log(inAscOrder([1, 6]));

4. adjacentElementsProduct([1, 2, 3]); == >
return 6
На вход поступает массив.Определить максимальное произведение двух соседних чисел в массиве.В данном случае 2 * 3 = 6.

function adjacentElementsProduct(arr) {
    let maxMultiply = 0;

    for (let i = 0; i < arr.length; i++) {
        const preValue = arr[i - 1];
        let tmpMax = arr[i] * preValue;

        if (maxMultiply < tmpMax) {
            maxMultiply = tmpMax;
        }
    }

    return maxMultiply
}

adjacentElementsProduct([4, 4, 3])

5. Создать функцию которая возвращает аббревиатуру.(берётся первая буква каждого слова и ставится в верхний регистр)

function getAbbr(name) {
    let splitName = name.split(' ');

    let result = '';

    for (let i = 0; i < splitName.length; i++) {
        result += splitName[i][0].toUpperCase();
    }

    return result;
}

console.log(getAbbr('Соболева Ольга Анатольевна'));

6.
findUniq([1, 1, 1, 2, 1, 1]) === 2
findUniq([0, 0, 0.55, 0, 0]) === 0.55
Создать функцию которая находит уникальное значение в массиве(нельзя использовать готовые функции js типо Set.Необходимо реализовать собственный алгоритм)

function findUniq(arr) {
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isNonUnique = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] && i != j) {
                isNonUnique = true;
                break;
            }
        }

        if (isNonUnique == true) {
            uniqueArr.push(arr[i]);
        }
    }

    console.log(uniqueArr);

}

findUniq([1, 3, 2, 2, 5, 3])