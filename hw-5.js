function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess = 0;

    alert("Добро пожаловать в игру 'Угадай число'! Я загадал число от 1 до 100.");

    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt("Введите ваше число (от 1 до 100):"), 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Пожалуйста, введите число в диапазоне от 1 до 100.");
            continue;
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

guessNumberGame();

// Задание 1

function findMin(Number1, Number2) {
    return Number1 < Number2 ? Number1 : Number2;
}

console.log(findMin(8, 4));
console.log(findMin(6, 6));
console.log(findMin(-2, 3));

// Задание 2

function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));

// Задание 3

function logSquare(number) {
    console.log(number * number);
}

logSquare(12);

// Задание 4

function checkAge() {

    let age = prompt("Сколько вам лет?");
    
    age = Number(age);
    
    if (isNaN(age)) {
        alert('Вы ввели неправильное значение');
    } else if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

checkAge();

// Задание 5

function multiplyIfNumbers(meaning1, meaning2) {

    const numA = Number(meaning1);
    const numB = Number(meaning2);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    }

    return numA * numB;
}

console.log(multiplyIfNumbers(3, 4));
console.log(multiplyIfNumbers('5', '6')); 
console.log(multiplyIfNumbers(7, 'abc'));
console.log(multiplyIfNumbers('xyz', 2));


// Задание 6


function cubeNumber() {
    while (true) {

        let input = prompt('Введите число:');
        
        if (input.toLowerCase() === null ) {
            break; 
        }

        let randomeNum = parseFloat(input);
        if (isNaN(randomeNum)) {
            console.log('Переданный параметр не является числом');
        } else {
            let cube = Math.pow(randomeNum, 3);
            console.log(`${randomeNum} в кубе равняется ${cube}`);
        }
    }
}

cubeNumber();

// Задание 7

function Circle(radius) {
    this.radius = radius;

    this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    };

    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
}


const circle1 = new Circle(5);
const circle2 = new Circle(10);


console.log("Circle 1 Area: ", circle1.getArea()); 
console.log("Circle 1 Perimeter: ", circle1.getPerimeter());

console.log("Circle 2 Area: ", circle2.getArea());
console.log("Circle 2 Perimeter: ", circle2.getPerimeter());