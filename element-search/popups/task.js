"use strict";

const print = document.getElementById("modal_main");
print.className = "modal modal_active";

const close = document.querySelectorAll(".modal__close");
const succes = document.getElementById("modal_success");
console.log(close);
close[0].onclick = () => print.className = "modal";
close[1].onclick = () => {
    print.className = "modal"
    succes.className = "modal modal_active"
}
close[2].onclick = () => succes.className = "modal";