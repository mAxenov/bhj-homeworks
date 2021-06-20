'use strict';

const products = document.querySelectorAll('.product');
const buttons = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

for (const i of products) {
    const value = i.querySelector('.product__quantity-value');
    i.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        if (value.innerText > '1') {
            value.innerText = +value.innerText - 1;
        }
    });
    i.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        value.innerText = +value.innerText + 1;
    });
};

for (const button of buttons) {
    button.addEventListener('click', function () {
        const id = this.closest('.product').dataset.id;
        const cartItems = cart.querySelectorAll('.cart__product');
        let cloneProduce = this.closest('.product').cloneNode(false);
        cloneProduce.className = 'cart__product';
        cloneProduce.innerHTML = `
        <img class="cart__product-image" src="${this.closest('.product').querySelector('.product__image').getAttribute('src')}">
        <div class="cart__product-count">${this.closest('.product').querySelector('.product__quantity-value').innerText}`;
        console.log(cloneProduce);
        if (cartItems.length === 0) {
            cart.appendChild(cloneProduce);
        } else {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].dataset.id === id) {
                    cartItems[i].querySelector('.cart__product-count').innerText = +cartItems[i].querySelector('.cart__product-count').innerText + +this.closest('.product').querySelector('.product__quantity-value').innerText;
                    break;
                } else if (i === (cartItems.length - 1)) {
                    cart.appendChild(cloneProduce);
                }
            }
        }
        // console.log(this.closest('.product').querySelector('.product__image').cloneNode(false));
        // cloneProduce.innerHTML = `${this.closest('.product').querySelector('.product__image').cloneNode(false)}
        // <div class="cart__product-count">${this.closest('.product').querySelector('.product__quantity-value').innerText}</div>`;
        // console.log(cloneProduce);


    })
}

