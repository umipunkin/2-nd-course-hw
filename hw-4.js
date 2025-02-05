// Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет!');
}

// Задание 2

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i)
}

// Задание 4

const obj = {
    Nikolay: '200',
    Vasiliy: '300',
    Petr: '400'
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
}

// Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество проходов циклов: ${num}`);

// Задание 6

let dayFriday = 7;
let allDay = 28;
for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}