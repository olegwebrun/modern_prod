// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".branding");
const navItems = document.querySelectorAll(".menu__item");

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // Для каждного элемента мы прописываем класс(loop throu)
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    // Для каждного элемента мы прописываем класс(loop throu)
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}
