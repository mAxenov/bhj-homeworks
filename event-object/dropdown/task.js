'use strict';

const dropDown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener('click', dropDownActive);
}

function dropDownActive() {
    if (!this.querySelector('ul').classList.contains('dropdown__list_active')) {
        this.querySelector('ul').classList.add('dropdown__list_active');
    } else {
        this.querySelector('ul').classList.remove('dropdown__list_active');
    }
    this.addEventListener('click', (event) => {
        event.preventDefault();
        this.querySelector('.dropdown__value').textContent = event.target.textContent;

    });
}



// function dropdDownValue() {
//     console.log(this);
//     console.log(dropDowmUl.target);
//     return false;
// }