var hamburger = document.querySelector('nav > div');
var menu = document.querySelector('nav ul');
var navEnLogo = document.querySelector('header > div');

function toggleMenu() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navEnLogo.classList.toggle('inactive');
}

hamburger.addEventListener('click', toggleMenu);