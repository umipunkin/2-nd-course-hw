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

// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// Задание 2

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleMale = [
    {name: 'Глеб' , gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'},
];

console.log(filter(peopleMale, isMale));

// Задание 3

const interval = setInterval(() => {
    console.log(new Date().toLocaleString());
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
}, 30000);

// Задание 4

function delayForSecond(callback) {
    setTimeout(function(){
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {
            cb();
        }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));