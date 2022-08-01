Задачи:
1. let arr = ["Есть", "жизнь", "на", "Марсе"]; вернуть новый массив через  метод map содержащий длину слов.
let arr = ["Есть", "жизнь", "на", "Марсе"];
let result = arr.map(function (item) {
    return item.length;
});
console.log(result);

2.Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов. Пример:
let arr = [5, 3, 8, 1];

function filterRange(arr,a,b) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
};
alert(filterRange(arr, 1, 4)); // 3,1

3.У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
Пример:
let users = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 }
];

let names = users.map(function (user) {
    return user.name;
});
console.log(names); // [Вася, Петя, Маша]


4.let users = [ { name: "Вася", surname: "Пупкин", id: 1 }, 
{ name: "Петя", surname: "Иванов", id: 2 { name: "Маша", surname: "Петрова", id: 3 } ];
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
Пример:
let users = [
    { name: "Вася", surname: "Пупкин", id: 1 },
    { name: "Петя", surname: "Иванов", id: 2 },
    { name: "Маша", surname: "Петрова", id: 3 }
];

let usersMapped = users.map(function (value) {
    const result = {
        fullName: value.name + ' ' + value.surname,
        id: value.id
    }
    return result;
});

console.log(usersMapped);

    По итогу => usersMapped = [
        { fullName: "Вася Пупкин", id: 1 },
        { fullName: "Петя Иванов", id: 2 },
        { fullName: "Маша Петрова", id: 3 }
    ];


5.Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

let users = [
     { name: "Вася", age: 25 },
      { name: "Петя", age: 30 }, 
      { name: "Маша", age: 29 } 
    ];

function getAverageAge(users) {
    let result = 0;
    // for (let i = 0; i < users.length; i++) {
    //     const element = users[i];
    //     result = result + element.age;
    // }

    users.forEach(element {
        result = result + element.age;
    });


    result = result / users.length;
    return result;
}

console.log( getAverageAge(users) ); // => 28


6.Пусть arr – массив строк.
let strings = ["кришна", "крна", "харе", "хае",
"харе", "харе", "кришна", "кришна" ];

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
let strings = ["кришна", "крна", "харе", "хае", "харе", "харе", "кришна", "кришна" ];

function unique(arr) {
    
    let result = [];
    for (let x = 0; x < arr.length; x++) {
        let uniqueWord = true;
        for (let y = 0; y < arr.length; y++) {
            if (x != y) {
                if (arr[x] == arr[y]) {
                    uniqueWord = false;
                }
            }
        }

        if (uniqueWord) {
            result.push(arr[x]);
        }
    }
    return result;
}

console.log(unique(strings));