1. Ваша задача вернуть количество разработчиков у которых язык программирования Javascript и они из Европы.

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

let counter = 0;

for (let i = 0; i < list1.length; i++) {
    if (list1[i].continent == 'Europe' && list1[i].language == 'JavaScript') {
        counter++;
    }
}
console.log(counter);

console.log(list1.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length)


2. Ваша задача—
ваша функция должна вернуть следующий массив: [{
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
        greeting: 'Hi Sofia, what do you like the most about Java?'
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
        greeting: 'Hi Lukas, what do you like the most about Python?'
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
        greeting: 'Hi Madison, what do you like the most about Ruby?'
    }
];

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function listGreeting(someList) {
    let newList = [];
    for (let i = 0; i < someList.length; i++) {

        newList.push({
            firstName: someList[i].firstName,
            lastName: someList[i].lastName,
            country: someList[i].country,
            continent: someList[i].continent,
            age: someList[i].age,
            language: someList[i].language,
            greeting: 'Hi ' + someList[i].firstName + ', what do you like the most about ' + someList[i].language + '?'
        });
    }

    return newList;
}

console.log(listGreeting(list1));


3. Вам будет предоставлена​​ последовательность объектов, представляющих данные о разработчиках, которые подписались на участие в следующей встрече программистов, которую вы организуете.
Ваша задача состоит в том, чтобы вернуть последовательность, включающую самого старшего разработчика.В случае ничьей включите всех старших разработчиков одного возраста, перечисленных в том же порядке, в котором они появились в исходном входном массиве.
const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

function compare(a, b) {
    if (a.age < b.age) {
        return 1;
    }
    if (a.age > b.age) {
        return -1;
    }
    return 0;
}

console.log(list1.sort(compare));


4. Cоздайте функцию с двумя аргументами, которая будет возвращать массив первых nкратных x.
Предположим, что и заданное число, и количество раз для подсчета будут положительными числами больше, чем 0.
Возвращайте результаты в виде массива или списка(в зависимости от языка).Примеры

countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5) === [2, 4, 6, 8, 10]

function countBy(a, b) {
    let x = [];
    for (let i = 1; i < b + 1; i++) {
        x.push(a * i)
    }
    return x;
}
console.log(countBy(2, 5));


5. Dернуть имя одного убийцы, в нашем случае, 'James'
потому что он единственный человек, который видел и 'Lucas'
и 'Bill'

const killers = {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
};

for (let i = 0; i < Object.keys(killers).length; i++) {
    let a, b = false;

    let elName = Object.keys(killers)[i];

    for (let y = 0; y < killers[elName].length; y++) {
        if (killers[elName][y] == 'Bill') {
            a = true;
        }

        if (killers[elName][y] == 'Lucas') {
            b = true;
        }
    }

    if (a == true && b == true) {
        console.log(elName);
    }
}