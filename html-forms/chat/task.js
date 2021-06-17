'use strict';

const chatActive = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const chat = document.getElementById('chat-widget__messages');

chatActive.addEventListener('click', () => {
    chatActive.classList.add('chat-widget_active');
})


input.addEventListener('keyup', (event) => {
    let date = new Date;
    const txt = [
        'Кто тут?',
        'Вы не купили не одного товара, чтобы со мной разговаривать',
        'Где ваша совесть?',
        'Добрый день! До свидания',
        'К сожалению, все операторы сейчас заняты. Не пешите нам больше',
        'Мы ничего не будем вам продавать',
    ];
    let index = Math.floor(Math.random() * txt.length);
    if (event.key === 'Enter') {
        chat.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${date.getHours()} : ${date.getMinutes()}</div>
        <div class="message__text">${input.value}</div>
        </div>
        <div class="message">
        <div class="message__time">${date.getHours()} : ${date.getMinutes()}</div>
        <div class="message__text">${txt[index]}</div>
        </div>
        `;
        input.value = '';
    }
})