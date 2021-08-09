'use strict';

// ROOT
const root = document.querySelector('#root');
root.className = 'relative flex flex-col items-center bg-blue-50';


// DATA
const todos = [
    {
        title: 'Buth procedures',
        text: 'To be ready for a new day',
        time: '08:30',
    },
    {
        title: 'Breakfast',
        text: 'I have to eat well for a hard day',
        time: '09:00',
    },
    {
        title: 'Learn JS',
        text: 'It is hard but very interesting',
        time: '09:30',
    },
    {
        title: 'Dinner',
        text: 'It is time to take a break',
        time: '12:30',
    },
    {
        title: 'Learn JS',
        text: 'I have to practice more and more',
        time: '13:30',
    },
    {
        title: 'Football',
        text: 'I need to keep myself in good shape',
        time: '17:30',
    },
    {
        title: 'Shower',
        text: 'It is time to fresh up',
        time: '19:00',
    },
    {
        title: 'Dinner',
        text: 'It is time to eat something',
        time: '19:30',
    },
    {
        title: 'Relax',
        text: 'Have a good rest after a hard day',
        time: '20:00',
    },
    {
        title: 'Reading',
        text: 'Good book it is all I need',
        time: '21:30',
    },
    {
        title: 'Buth procedures',
        text: 'To be ready for a sleep',
        time: '23:00',
    },
    {
        title: 'Go to sleep',
        text: 'It was a good day!',
        time: '23:30',
    },
]

// APP (можно еще создать функции для элементов основной функции)
function createCard (todo) {
    const card = document.createElement('div')
    const cardCheckBox = document.createElement('input')
    const cardTitle = document.createElement('h2')
    const cardText = document.createElement('p')
    const cardTime = document.createElement('p')
    const cardButton = document.createElement('button')

    card.className = 'relative flex items-center m-4 p-4 w-5/12 h-20 rounded-xl bg-blue-300 shadow-lg'
    cardCheckBox.className = 'w-4 h-4 border-transparent rounded-xl'
    cardTitle.className = 'pl-4 w-5/12 text-2xl uppercase text-white font-bold'
    cardText.className = 'w-2/5 text-base text-white'
    cardTime.className = 'pl-4 text-xl text-white'
    cardButton.className = 'rounded-xl w-16 h-8 bg-white text-blue-300 hover:text-white hover:bg-blue-200'

    console.log(cardText.className);

    cardCheckBox.setAttribute('type', 'checkbox');

    cardTitle.textContent = todo.title
    cardText.textContent = todo.text
    cardTime.textContent = todo.time
    cardButton.textContent = 'Delete'

    card.append(cardCheckBox, cardTime, cardTitle, cardText, cardButton)
    root.append(card)
}

function render(model) {
    todos.forEach(obj => {
        createCard(obj);
    })
}

render(todos);

// FORM
function createForm () {
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const formLabel = document.createElement('label');
    const formInput = document.createElement('input');
    const formButton = document.createElement('button');

    formContainer.className = 'fixed flex flex-col justify-between mt-4 left-4 w-1/6 p-4 rounded-xl bg-gray-300 shadow-lg';
    form.className = 'rounded-xl';
    formLabel.className = 'mb-4 text-xl text-white ';
    formInput.className = 'mb-4 h-10 rounded-xl' ;
    formButton.className = 'rounded-xl w-24 h-10 bg-white text-gray-300 hover:bg-gray-200 hover:text-white';

    formLabel.textContent = 'Add a to-do to the to-do list';
    formButton.textContent = 'Add';

    // formButton.onclick = function() {
    //     alert('Click!');
    // } 

    formContainer.append(form, formLabel, formInput, formButton);
    root.append(formContainer);
}

createForm();

