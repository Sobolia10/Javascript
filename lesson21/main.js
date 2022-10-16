const questions = [
    {
        question: "Какой язык работает в браузере?",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: 4,
    },
    {
        question: "Что означает CSS?",
        answers: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],
        correct: 2,
    },
    {
        question: "Что означает HTML?",
        answers: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motorboats Lamborginis",
        ],
        correct: 1,
    },
    {
        question: "В каком году был создан JavaScript?",
        answers: ["1996", "1995", "1994", "все ответы неверные"],
        correct: 2,
    },
];

let currentQuestionId;
let currentAnswer;

let answers = {
    correct: 0,
    incorrect: 0
}

const submitBtn = document.querySelector("#submit");

//set default page with #0 param
if (document.location.href.split('#').length > 1) {
    document.location.href = document.location.href.split('#')[0] + '#' + 0;
} else {
    document.location.href = document.location.href + '#0';
}

//set originalUrl WO param
const originalUrl = document.location.href.split('#')[0];

displayQuestion(0);


submitBtn.addEventListener('click', function () {
    if (currentAnswer === undefined) {
        alert('Select answer');
    } else {

        if (questions[currentQuestionId].correct === currentAnswer) {
            answers.correct++;
        } else {
            answers.incorrect++;
        }

        if (currentQuestionId === 3) {
            alert(`Correct = ${answers.correct}, Incorrect = ${answers.incorrect}`)
        }

        let num = parseInt(document.location.href.split('#')[1]) + 1;
        document.location.href = originalUrl + '#' + num;
        displayQuestion(num);
    }


})


function displayQuestion(num) {
    if (num === 4) {
        document.getElementById('submit').disabled = 1;
    }

    let quizHeaderHtml = document.querySelector('#header');

    quizHeaderHtml.innerHTML = `<div class="quiz-header" id="header">
			<!-- Заголовок вопроса -->
			<h2 class="title">Загружаем вопрос...</h2>

			<!-- Результаты викторины -->
			<h2 class="title">${questions[num].question}</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		</div>`

    let queryListHtml = document.querySelector('#list');
    queryListHtml.innerHTML = '';

    for (let i = 0; i < questions[num].answers.length; i++) {
        queryListHtml.innerHTML += `<li>
				<label>
					<input type="radio" class="answer" name="answer"  onchange="handleChangeInput(${num}, this)" value="${i}">
					<span>${questions[num].answers[i]}</span>
				</label>
			</li>`
    }
}

function handleChangeInput(question, number) {
    currentQuestionId = question;
    currentAnswer = parseInt(number.value) + 1;
}