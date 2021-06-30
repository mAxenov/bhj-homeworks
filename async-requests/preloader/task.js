'use strict';

const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

function addValute() {
    const jsonResponse = xhr.response.response.Valute;
    for (const key in jsonResponse) {
        console.log(key, jsonResponse[key].CharCode, jsonResponse[key].Value);
        let div = items.querySelector('.item').cloneNode(false);
        div.innerHTML = `<div class="item__code">
                ${jsonResponse[key].CharCode}
            </div>
            <div class="item__value">
                ${jsonResponse[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>`;;
        items.appendChild(div);
    }
    items.querySelector('.item').remove();
    loader.classList.remove('loader_active');
}

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        addValute();
    }
}


