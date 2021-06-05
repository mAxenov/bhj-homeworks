"use strict";

const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
cookie.onclick = function () {
    clicker.textContent = +clicker.textContent + 1;
    if (+clicker.textContent % 2 !== 0) {
        cookie.width = 300;
    } else {
        cookie.width = 200;
    }
}