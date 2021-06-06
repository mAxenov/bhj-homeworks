"use strict";

const menu = document.querySelectorAll(".menu__link");
console.log(menu);

for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = () => {
        const menuItem = document.querySelectorAll(".menu_sub");
        if (menu[i].closest("li").querySelector(".menu_sub").classList.contains("menu_active")) {
            menu[i].closest("li").querySelector(".menu_sub").classList.remove("menu_active");
            return false;
        }
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove("menu_active");
        }
        if (menu[i].closest("li").querySelector(".menu_sub") !== null) {
            menu[i].closest("li").querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
    }
}
