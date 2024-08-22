// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    header.appendChild(menuToggle);

    menuToggle.addEventListener('click', function () {
        header.classList.toggle('nav-active');
    });
});
