'use strict';

const signin = document.getElementById('signin');
const signinBtn = document.getElementById('signin__btn');
const signinForm = document.getElementById('signin__form');
const userId = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
let xhr = new XMLHttpRequest();

function welcomeActive(id) {
    userId.textContent = id;
    welcome.classList.add('welcome_active');
}

signinBtn.addEventListener('click', (e) => {
    const formData = new FormData(signinForm);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.responseType = 'json';
    xhr.send(formData);
    e.preventDefault();
})

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 & xhr.status === 200) {
        if (xhr.response.success === true) {
            localStorage.id = xhr.response.user_id;
            console.log(localStorage.id);
            signin.classList.remove('signin_active');
            welcomeActive(localStorage.id);
        } else {
            alert('Неверный логин/пароль');
        }
    }
}

function signinOn() {
    if (!localStorage.id) {
        signin.classList.add('signin_active');
    } else {
        welcomeActive(localStorage.id);
    }
}

signinOn();
