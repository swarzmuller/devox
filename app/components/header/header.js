
window.onscroll = function() {myFunction()};

let header = document.querySelector(".header");
let sticky = header.offsetTop  + 80;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


let hamburger = document.querySelector('.hamburger');
let menu = document.querySelectorAll(".header__menu-item");
hamburger.onclick = function () {
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle('active');
    }
};




