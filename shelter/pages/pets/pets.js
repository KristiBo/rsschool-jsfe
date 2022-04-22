const logo = document.querySelector('.logo')
const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');

// Menu Burger

iconBurger.addEventListener('click', openMenu);
menuLinks.forEach(el => el.addEventListener('click', closeMenu));
overlay.addEventListener('click', closeMenu);

function openMenu() {
  document.body.classList.toggle('lock');
  iconBurger.classList.toggle('open');
  menuBurger.classList.toggle('open');
  overlay.classList.toggle('active');
  logo.classList.toggle('logo__burger');
};

function closeMenu() {
  document.body.classList.remove('lock');
  iconBurger.classList.remove('open');
  menuBurger.classList.remove('open');
  overlay.classList.remove('active');
  logo.classList.remove('logo__burger');
};
