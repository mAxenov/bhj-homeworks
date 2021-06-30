"use strict";

const print = document.getElementById("subscribe-modal");
const close = print.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((c) => c.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.substr((name + '=').length)) : null;
}

close.addEventListener('click', () => {
    print.classList.remove('modal_active');
    setCookie('modal', 'on');
})

function modalOn() {
    const takeCookie = getCookie('modal');
    if (takeCookie !== 'on') {
        print.classList.add('modal_active');
    }
}

modalOn();




// const close = document.querySelectorAll(".modal__close");
// const succes = document.getElementById("modal_success");
// console.log(close);
// close[0].onclick = () => print.className = "modal";
// close[1].onclick = () => {
//     print.className = "modal"
//     succes.className = "modal modal_active"
// }
// close[2].onclick = () => succes.className = "modal";