'use strict';

const rotator = document.querySelectorAll('.rotator');
let timeout = 1000;

function myCallBack() {
    for (const item of rotator) {
        const active = item.querySelector('.rotator__case_active');
        const next = active.nextElementSibling;
        active.classList.remove('rotator__case_active');
        if (!(next === null)) {
            next.classList.add('rotator__case_active');
            timeout = next.dataset.speed;
            next.style.color = next.dataset.color;
        } else {
            item.querySelector('.rotator__case').classList.add('rotator__case_active');
            timeout = item.querySelector('.rotator__case').dataset.speed;
            item.querySelector('.rotator__case').style.color = item.querySelector('.rotator__case').dataset.color;
        }
    }
    console.log(timeout);
    setTimeout(myCallBack, timeout);
};

setTimeout(myCallBack, timeout);

