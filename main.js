const menuBtn = document.querySelector(".menu-btn");
const menuBtnOpen = document.querySelector(".menu-btn #menu-open-icon");
const menuBtnClose = document.querySelector(".menu-btn #menu-close-icon");
const overlay = document.querySelector("#overlay");
const headerMenu = document.querySelector("header ul");

function menu() {
    menuBtnOpen.classList.toggle("hide");
    menuBtnClose.classList.toggle("hide");
    overlay.classList.toggle("hide");
    headerMenu.classList.toggle("active-menu");
}

function closeByOverlay() {
    menuBtnOpen.classList.remove("hide");
    menuBtnClose.classList.add("hide");
    overlay.classList.add("hide");
    headerMenu.classList.remove("active-menu");
}

menuBtn.addEventListener("click", menu);
overlay.addEventListener("click", closeByOverlay);
