'use strict';

const tabs = document.querySelectorAll('.tabs');

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i].querySelectorAll('.tab');
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function () {
            this.closest('.tab__navigation').querySelector('.tab_active').classList.remove('tab_active');
            this.classList.add('tab_active');
            this.closest('.tabs').querySelector('.tab__content_active').classList.remove('tab__content_active');
            this.closest('.tabs').querySelectorAll('.tab__content')[i].classList.add('tab__content_active');
        });
    }
}
