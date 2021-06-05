"use strict";

const time = document.getElementById("timer");

function timer() {
    if (+time.textContent === 0) {
        alert("«Вы победили в конкурсе!");
        clearInterval(timerId);
    } else {
        let step = +time.textContent - 1;
        time.textContent = step;
    }
}

let timerId = setInterval(timer, 1000);