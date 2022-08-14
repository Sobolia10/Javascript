// 1. Код ниже получает из массива строк новый массив, содержащий их длины:


var arr = ["Есть", "жизнь", "на", "Марсе"];


// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
//alert(arrLength); // 4,5,2,5
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

arr.map(
    el => console.log(el.length)
)

// 2. Представим ситуацию, в которой есть несколько записей для студентов с атрибутами: name, ID и marks.
let studentRecords = [{ name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
];


// получить имена студентов и записать их заглавными буквами.
// Результат выполнения: ['JOHN', 'BABA', 'YAGA', 'WICK']

studentRecords.forEach(element => {
    console.log(element.name.toUpperCase());
});


// 3. Имеем массив[{ name: 'John', id: 123, marks: 98 }, { name: 'Wick', id: 115, marks: 75 }]
// получить информацию о студентах, набравших более 50 баллов и имеющих id больше 120.

let someArray = [{ name: 'John', id: 123, marks: 98 }, { name: 'Wick', id: 115, marks: 75 }];

someArray.forEach(element => {
    if (element.marks > 50 && element.id > 120) {
        console.log(element);
    }
});

// результат вывода[{ name: 'John', id: 123, marks: 98 }]