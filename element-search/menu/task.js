"use strict";

const menu = document.querySelectorAll(".menu__link");

for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = () => {
        const menuItem = document.querySelectorAll(".menu_sub");
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove("menu_active");
        }
        if (menu[i].closest("li").querySelector(".menu_sub") !== null) {
            menu[i].closest("li").querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
    }
}
