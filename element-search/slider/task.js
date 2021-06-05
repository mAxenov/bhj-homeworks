"use strict";

const items = document.querySelectorAll('.slider__item');
const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
let sliderNum = 0;

for (let i = 0; i < items.length; i++) {
    left.onclick = () => slidersActiveLeft();
    right.onclick = () => slidersActiveRight();
}

function slidersActiveRight() {
    items[sliderNum].classList.remove('slider__item_active');
    sliderNum = sliderNum + 1;
    if (sliderNum === items.length) {
        sliderNum = 0;
    }
    items[sliderNum].classList.add('slider__item_active');
}

function slidersActiveLeft() {
    items[sliderNum].classList.remove('slider__item_active');
    sliderNum = sliderNum - 1;
    if (sliderNum === -1) {
        sliderNum = items.length - 1;
    }
    items[sliderNum].classList.add('slider__item_active');
}
