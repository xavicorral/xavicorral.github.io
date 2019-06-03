
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
let upArrow = document.querySelector('div.up-arrow');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
};

const myScrollFunc = () => {
  var y = window.scrollY;
  if (y >= 500) {
    upArrow.classList.add("arrow-show");
  } else {
    upArrow.classList.remove("arrow-show");
  }
};

const scrollUpSmoothly = () => {

}

window.addEventListener('scroll', myScrollFunc);
upArrow.addEventListener('click', scrollUpSmoothly);