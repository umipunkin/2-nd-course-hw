document.getElementById('startGameButton').addEventListener('click', guessNumberGame);

        function guessNumberGame() {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let userGuess = 0;

            alert("Добро пожаловать в игру 'Угадай число'! Я загадал число от 1 до 100.");

            while (userGuess !== randomNumber) {
                userGuess = parseInt(prompt("Введите ваше число (от 1 до 100):"), 10);


                if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                    alert("Пожалуйста, введите число в диапазоне от 1 до 100.");
                    return;
                    
                }
                

                if (userGuess < randomNumber) {
                    alert("Ваше число меньше загаданного. Попробуйте ещё раз.");
                } else if (userGuess > randomNumber) {
                    alert("Ваше число больше загаданного. Попробуйте ещё раз.");
                } else {
                    alert("Поздравляем! Вы угадали число: " + randomNumber);
                    break; 
                }
            }
        }



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

            alert('Верный ответ!');

        } else {

            alert(`Ошибка! Правильный ответ: ${correctAnswer}`);

        }

    }

};


function reverseText() {
    const userInput = prompt("Введите текст, который хотите перевернуть:");
    if (userInput !== null) {
        const reversedText = userInput.split('').reverse().join('');
        alert("Перевернутый текст: " + reversedText);
    }
}


const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const optionsString = question.options.join("\n");

        const userAnswer = prompt(`${question.question}\n${optionsString}`);

        if (parseInt(userAnswer) === question.correctAnswer) {
            score++;
        }
    }

    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}


function playGame() {

    const userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага").toLowerCase();

    if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, выберите камень, ножницы или бумагу.");
        return;
    }
    
    const options = ["камень", "ножницы", "бумага"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('colorButton').addEventListener('click', function() {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = getRandomColor();
});