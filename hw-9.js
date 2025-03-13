// Задание 1

const hideBtn = document.querySelector('#btnHide');
const btnChangeTitle = document.querySelector('#btnChangeTitle');
const heading = document.querySelector('#heading');

hideBtn.addEventListener('click', () => heading.classList.toggle('d-none'))
btnChangeTitle.addEventListener('click', () => heading.textContent = 'Привет, Мир!')

// Задание 2

const btnChangeColor = document.querySelector('#btnChangeColor');
const colorHeading = document.querySelector('#colorHeading');

btnChangeColor.addEventListener('click', () => colorHeading.style.color = 'blue')

// Задание 4

const descriptionItems = document.querySelectorAll('li.description');
descriptionItems.forEach((item) => item.textContent = 'Измененный текст');


// Задание 5


const paragraphItems = document.querySelectorAll('p.descriptionRemove');
paragraphItems.forEach(p => p.textContent = 'Новый текст');

// Задание 6

btnNewElement.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац'
    document.body.appendChild(newParagraph);
});

// Задание 7

const btnRemove = document.querySelector('#btnRemove');

btnRemove.addEventListener('click', () => {

    const firstDescription = document.querySelector('.descriptionRemove');
    if (firstDescription) {
        firstDescription.remove();
    }
});
