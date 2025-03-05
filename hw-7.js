// function reverseText() {
//     const userInput = prompt("Введите текст, который хотите перевернуть:");
//     if (userInput !== null) {
//         const reversedText = userInput.split('').reverse().join('');
//         alert("Перевернутый текст: " + reversedText);
//     }
// }


// const quiz = [
//     {
//         question: "Какой цвет небо?",
//         options: ["1. Красный", "2. Синий", "3. Зеленый"],
//         correctAnswer: 2
//     },
//     {
//         question: "Сколько дней в неделе?",
//         options: ["1. Шесть", "2. Семь", "3. Восемь"],
//         correctAnswer: 2
//     },
//     {
//         question: "Сколько у человека пальцев на одной руке?",
//         options: ["1. Четыре", "2. Пять", "3. Шесть"],
//         correctAnswer: 2
//     }
// ];

// function startQuiz() {
//     let score = 0;

//     for (let i = 0; i < quiz.length; i++) {
//         const question = quiz[i];
//         const optionsString = question.options.join("\n");

//         const userAnswer = prompt(`${question.question}\n${optionsString}`);

//         if (parseInt(userAnswer) === question.correctAnswer) {
//             score++;
//         }
//     }

//     alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
// }


// Задание 1

const bigStr = 'js';
console.log(bigStr.toUpperCase());

// Задание 2

function filterByStartingString(array, startingString) {

    const lowerCaseStartingString = startingString.toLowerCase();
    
    const filteredArray = array.filter(item => 
        item.toLowerCase().startsWith(lowerCaseStartingString)
    );

    return filteredArray;
}

const stringsArray = ["Карта", "Паспорт", "Картина", "Книга", "Картридж"];
const startString = "Кар";
const result = filterByStartingString(stringsArray, startString);

console.log(result);

// Задание 3

const roundedNumber = 32.58884;
let lessRoundedNumber = Math.floor(roundedNumber);
console.log(lessRoundedNumber);

let moreRoundedNumber = Math.ceil(roundedNumber);
console.log(moreRoundedNumber);

let nearRoundedNumber = Math.round(roundedNumber);
console.log(nearRoundedNumber);

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log('Минимальное значение:', minValue);
console.log('Максимальное значение:', maxValue);

// Задание 5

function getRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

getRandomNumber();


// Задание 6

function generateRandomArray(n) {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('Введите положительное число.');
    }

    const length = Math.floor(n / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * n);
        randomArray.push(randomNum);
    }

    return randomArray;
}

console.log(generateRandomArray(10));

// Задание 7

function integersNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntegerNumber = integersNumber(4, 18);
console.log(randomIntegerNumber);

// Задание 8

const todayDate = new Date();
console.log(todayDate);


// Задание 9

const currentDay = new Date();

const futureDay = new Date(currentDay);

futureDay.setDate(currentDay.getDate() + 73);

console.log('Текущая дата', currentDay);
console.log('Дата, которая наступит через 73 дня', futureDay);

// Задание 10

function formatDateAndTime(date) {
    const daysOfWeek = [
        'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
        'Четверг', 'Пятница', 'Суббота'
    ];
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 
        'мая', 'июня', 'июля', 'августа', 
        'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    
    console.log(formattedDate);
    console.log(formattedTime);
}


const now = new Date();
formatDateAndTime(now);

