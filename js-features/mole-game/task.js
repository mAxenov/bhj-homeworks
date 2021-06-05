"use strict";


// function checkHole() {
//     console.log("hello");

// }
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.addEventListener("click", function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = +dead.textContent + 1;
            if (+dead.textContent === 10) {
                alert("Победа");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent = +lost.textContent + 1;
            if (+lost.textContent === 5) {
                alert("Проигрыш");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        };
    });
}





