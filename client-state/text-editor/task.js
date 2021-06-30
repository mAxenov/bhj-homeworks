'use strict';

const editor = document.getElementById('editor');

function setText(value) {
    localStorage.setItem('text', value);
}

function getText(value) {
    if (localStorage.getItem(value) !== null) {
        editor.value = localStorage.getItem(value);
    }
}

editor.addEventListener('input', () => {
    setText(editor.value);
});

getText('text');
