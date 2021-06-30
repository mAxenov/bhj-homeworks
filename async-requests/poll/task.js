'use strict';
const xhr = new XMLHttpRequest();
const poolTitle = document.getElementById('poll__title');
const poolAnswer = document.getElementById('poll__answers');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

function answer() {
    const dataAnswers = xhr.response.data.answers;
    poolTitle.innerText = xhr.response.data.title;
    for (let i = 0; i < dataAnswers.length; i++) {
        console.log(dataAnswers[i], 1);
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.innerText = dataAnswers[i];
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
        poolAnswer.appendChild(button);
    }
}

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        answer();
    }
}

