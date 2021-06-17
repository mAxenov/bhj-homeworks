'use strict';

const checkbox = document.querySelectorAll('.interest');
console.log(checkbox);

for (let i = 0; i < checkbox.length; i++) {
    if (!checkbox[i].parentElement.classList.contains('interests')) {
        checkbox[i].querySelector('label').querySelector('.interest__check').addEventListener('change', checkboxActive);
    }
}

function checkboxActive(event) {
    const interest = this.closest('li').querySelector('.interests').querySelectorAll('.interest__check');
    console.log(interest);
    for (const item of interest) {
        if (this.checked) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    }
}