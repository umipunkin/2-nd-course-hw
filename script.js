
// 1-ое задание
let a=10;
a=20;
alert(a);

// 2-ое задание
const release="Год выпуска первого iPhone - 2007";
alert(release);

// 3-е задание

const nameCreator=`Брендан Эйх`;
alert(nameCreator);

// 4-ое задание

let variableA=10;
let variableB=2;
let amount=variableA+variableB;
alert(amount);
let difference=variableA-variableB;
alert(difference);
let increase=variableA*variableB;
alert(increase);
let share=variableA/variableB;
alert(share);


// 5-ое задание

let variableC=2**5;
alert(variableC);

// 6-ое задание

let remains=9%2;
alert(remains)

// 7-ое задание
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// 8-ое задание
let age=Number(prompt(`Сколько вам лет?`));
alert(age);

// // 9-ое задание
const user = {
    name: 'Умипункин',
    age: 29,
    "Likes pumpkins": true
 }

// 10-ое задание
let userName=prompt(`Введите ваше имя`);
let yourName=userName;
alert(`Привет, ${yourName}`);


// hw-2
// Задание 1

let password = prompt('Введите пароль');
if (password === 'пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
} 

// Задание 2

let c = Number(prompt('Введите любое число'));
if (c <= 10 && c >= 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 3

let d = Number(prompt('Введите любое число d'));
let e = Number(prompt('Введите любое число e'));
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно')
}

// Задание 4

let number1 = '2';
let number2 = '3';
alert(+number1 + +number2);

// Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case (1):
        alert('Зима')
        break;
    case (2):
        alert('Зима')
        break;
    case (3):
        alert('Весна')
        break;
    case (4):
        alert('Весна')
        break;
    case (5):
        alert('Весна')
        break;
    case (6):
        alert('Лето')
        break;
    case (7):
        alert('Лето')
        break;
    case (8):
        alert('Лето')
        break;
    case (9):
        alert('Осень')
        break;
    case (10):
        alert('Осень')
        break;
    case (11):
        alert('Осень')
        break;
    case (12):
        alert('Зима')
        break;


    default:
        alert('Такого месяца не существует')
        break;
}