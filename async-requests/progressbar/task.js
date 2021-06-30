'use stricct';

const progress = document.getElementById('progress');
const form = document.getElementById('form');
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total;
    }
    xhr.send(formData);
    e.preventDefault();
})



