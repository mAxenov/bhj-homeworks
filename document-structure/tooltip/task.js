'use strict';

const links = document.querySelectorAll('.has-tooltip');
const div = document.createElement('div');
div.classList.add('tooltip');
div.dataset.position = 'top';

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        for (const link of links) {
            link.classList.remove('tooltip_active')
        }
        div.style.top = this.getBoundingClientRect().top + this.getBoundingClientRect().height + 'px';
        div.style.left = this.getBoundingClientRect().left + 'px';
        div.innerHTML = this.getAttribute('title');
        if (this.querySelector('.tooltip_active') === null) {
            div.classList.add('tooltip_active');
        } else {
            div.classList.remove('tooltip_active');
        }
        this.append(div);
        e.preventDefault();
    })
}