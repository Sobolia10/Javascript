// 1.является ли строка палиндромом
// func("anna")
// func("asxxccv")

// function func(str) {
//     let check = '';
//     for (let i = str.length - 1; i >= 0; --i) {
//         check += str[i];
//     }
//     return str == check;
// }

// console.log(func('anna'));
// console.log(func('asxxccv'));


// 2. написать функцию, которая принимает в себя массив
//     [1, 10, 5, 6, 15, 34, 30, 3, 13, 9, 44, 72, 44];
// вернуть массив, где вместо чисел которые делятся
// на 3 будет подставлена строка foo
// на 5 строка bar
// а если и на 3 и на 5 то footbar

// let num = [1, 10, 5, 6, 15, 34, 30, 3, 13, 9, 44, 72, 44];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 3 == 0) {
//         console.log('foo');
//     }
//     if (num[i] % 5 == 0) {
//         console.log('bar');
//     }
//     if (num[i] % 3 == 0 && num[i] % 5 == 0) {
//         console.log('footbar');
//     }
// }

// 3. Найти анаграмму
// анаграмма-символы совпадают, но нах в разном порядке

// anagram("friends", "finder")
// anagram("hello", "bye")

// function anagram(arr1, arr2) {
//     if (arr1.toLowerCase().split('').sort().join('') === arr2.toLowerCase().split('').sort().join('')) {
//         return true
//     }
//     return false
// }


// 4. Найти сумму всех чисел
// let arr = [
//     [1, 5, 7, 2, 3, 1, 2, 3],
//     [3, 2, 1, 15],
//     [53, 23, 12, 1]
// ];

// function arraySum(array) {
//     let sum = 0;
//     array[0]
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             sum += array[i][j];
//         }
//     }
//     console.log(sum);
// }
// arraySum(arr);


// 5. Получить на выходе из функции один общий массив
// let arr = [
//     [1, 5, 7, 2],
//     [3, 2, 1, 15],
//     [53, 23, 12, 1]
// ]

// function arraySum(array) {
//     let res = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             res.push(array[i][j])
//         }
//     }
//     return res;
// }
// console.log(arraySum(arr))



// 6. Дан массив с числами.
// Проверьте есть ли в нем два одинаковых массива
// Если есть выведите да, если нет-вывести нет
// function(arr) {
//     arr = [1, 5, 7, 2];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr([i + 1])) {
//             log('да');
//             return true;
//         }
//     }
//     log(net);
//     return false;
// }

// 7. Преобразуйте первую букву каждого слова строки в верхний регистр
//     "hello dima onilab" => "Hello Dima Onilab"
// split, каждое слово заsplitить, потом join

// let phrase = "hello dima onilab";
// let words = phrase.split(" ");
// let resArr = [];

// for (let i = 0; i < words.length; i++) {
//     let symbols = words[i].split('');
//     symbols[0] = symbols[0].toUpperCase();
//     resArr.push(symbols.join(""));
// }
// console.log(resArr.join(" "));

// 8. Написать функцию findWord(word, str);
// Написать функцию которая проверяет существует ли слово word в строке str


let str = 'abc def ghi jkl mno pqr stu';

function findWord(word, str) {
    return RegExp('\\b' + word + '\\b').test(str)
}
console.log(findWord('mno', str));


let our_string = "something";
if (our_string.indexOf('sme') + 1) {
    console.log("подстрока найдена");
} else {
    console.log("подстрока не найдена");
}