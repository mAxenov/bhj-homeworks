'use strict';

const textSize = document.querySelector('.book__control').querySelectorAll('.font-size');
const book = document.querySelector('.book');

for (let i = 0; i < textSize.length; i++) {
    textSize[i].addEventListener('click', function (e) {
        for (const remove of textSize) {
            remove.classList.remove('font-size_active');
        }
        textSize[i].classList.add('font-size_active');
        if (textSize[i].classList.contains('font-size_small')) {
            book.classList.remove('font-size_big');
            book.classList.add('book_fs-small');
        } else if (textSize[i].classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('font-size_big');
        } else {
            book.classList.remove('book_fs-small', 'font-size_big');
        }
        e.preventDefault();
    });
};