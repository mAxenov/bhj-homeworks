'use strict';

const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    for (const item of reveal) {
        console.log(item.getBoundingClientRect().top);
        console.log(window.innerHeight);
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    }
});
