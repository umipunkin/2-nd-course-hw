const generateProblem = () => {

    const operators = ['+', '-', '*', '/'];

    const num1 = Math.floor(Math.random() * 10) + 1;

    const num2 = Math.floor(Math.random() * 10) + 1; 

    const operator = operators[Math.floor(Math.random() * operators.length)];

    return { num1, num2, operator };

};

const calculate = ({ num1, num2, operator }) => {

    switch (operator) {

        case '+':

            return num1 + num2;

        case '-':

            return num1 - num2;

        case '*':

            return num1 * num2;

        case '/':

            return num1 / num2;

        default:

            return null;

    }

};

const runQuiz = () => {

    while (true) {

        const problem = generateProblem();

        const userAnswer = prompt(`Решите задачу: ${problem.num1} ${problem.operator} ${problem.num2}`);

        
        if (userAnswer === null) {

            console.log('Игра окончена.');

            break;
        }

        const correctAnswer = calculate(problem);
        
        if (parseFloat(userAnswer) === correctAnswer) {

            console.log('Верный ответ!');

        } else {

            console.log(`Ошибка! Правильный ответ: ${correctAnswer}`);

        }

    }

};




// Задание 1

const firstTask = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < firstTask.length; i++) {
   
    
    console.log(firstTask[i]);

    if (firstTask[i] === 10) {
        break;
    }
};

// Задание 2

const ordinalNumb = [1, 5, 4, 10, 0, 3];

const targetValue = 4;

let index = -1;

for (let i = 0; i < ordinalNumb.length; i++) {

    if (ordinalNumb[i] === targetValue) {

        index = i;

        break;
    }
    
}

console.log(index);

// Задание 3

const arr = [1, 3, 5, 10, 20];

const result = arr.join(' ');

console.log(result);

// Задание 4

const multivariate = [];

for (let i = 0; i < 3; i++) {
    const multivariate2 = [];
    for (let i = 0; i < 3; i++) {
        multivariate2.push(1);
    }
    multivariate.push(multivariate2)
}

console.log(multivariate);


// Задание 5

const adding = [1, 1, 1];

adding.push(2, 2, 2);

console.log(adding);

// Задание 6

let deletedItem = [9, 8, 7, 'a', 6, 5];

deletedItem = deletedItem.filter(item => item !== 'a');

deletedItem.sort((a, b) => a - b);

console.log(deletedItem);

// Задание 7

const numbers = [9, 8, 7, 6, 5];

const userInput = prompt("Угадайте число из массива 9, 8, 7, 6, 5:");

const guessedNumber = Number(userInput);

if (numbers.includes(guessedNumber)) {

    alert("Угадал");

} else {

    alert("Не угадал");
}

// Задание 8

const line = 'abcdef';

const spliteLine = line.split('');

const reverseLine = spliteLine.reverse('');

const joinLine = reverseLine.join('')

console.log(joinLine);

// Задание 9

const array = [
    [1, 2, 3],
    [4, 5, 6]
];

const mergedArray = [].concat(...array);

console.log(mergedArray);

// Задание 10


const randomArray = [4, 1, 8, 3, 7, 2, 5, 10, 6, 9];

for (let i = 0; i < randomArray.length - 1; i++) {
    
    const sum = randomArray[i] + randomArray[i + 1];

    console.log(`Сумма элементов ${randomArray[i]} и ${randomArray[i + 1]}: ${sum}`);
}

// Задание 11

const squareArray = (count) => count.map(num => num ** 2);

const inputArray = [1, 2, 3, 4, 5];

const squaredArray = squareArray(inputArray);

console.log(squaredArray);

// Задание 12

function getLengths(lenghtWords) {
    return lenghtWords.map(str => str.length);
}

const strings = ['массив', 'длины', 'слов'];

const lengths = getLengths(strings);

console.log(lengths);

// Задание 13

const getNegativeNumbers = (integers) => integers.filter(num => num < 0);

const convertedNumbers = [1, -2, 3, -4, 5, -6];

const negativeNumbers = getNegativeNumbers(convertedNumbers);

console.log(negativeNumbers);

// Задание 14

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const randomArrayNumber = [];

for (let i = 0; i < 10; i++){
    randomArrayNumber.push(randomNumber());
}

console.log(randomArrayNumber);

const evenArr = [];

for (let i = 0; i < randomArrayNumber.length; i++) {
    if (randomArrayNumber[i] % 2 === 0) {
        evenArr.push(randomArrayNumber[i]);
    }
}

console.log(evenArr);

// Задание 15

const averageNumber = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

console.log('Сгенерированный массив:',  averageNumber);

const average =  averageNumber.reduce((sum, current) => sum + current, 0) /  averageNumber.length;

console.log('Среднее арифметическое:', average);


