const petsImport = await fetch('../../assets/pets.json');
const pets = await petsImport.json();
const logo = document.querySelector('.logo')
const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.pets__cards');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

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

// Pop-up

const toModal = pet => `
        <div class="modal__image">
          <img src="${pet.img}" alt="pet">
        </div>
        <div class="modal__text">
          <h3 class="modal__title">${pet.name}</h3>
          <h4 class="modal__subtitle">${pet.type} - ${pet.breed}</h4>
          <p class="modal__description">${pet.description}</p>
          <ul class="modal__list">
            <li class="modal__item"><b>Age:</b> ${pet.age}</li>
            <li class="modal__item"><b>Inoculations:</b> ${pet.inoculations}</li>
            <li class="modal__item"><b>Diseases:</b> ${pet.diseases}</li>
            <li class="modal__item"><b>Parasites:</b> ${pet.parasites}</li>
          </ul>
        </div>
        <button class="button button_transparent button_close"></button>
`;

function createModal(pet) {
  modalContent.innerHTML = toModal(pet);

  const closeModalBtn = document.querySelector('.button_close');
  
  modal.addEventListener('mouseenter', () => {
    closeModalBtn.classList.add('hover');
  });
  
  modal.addEventListener('mouseleave', () => {
    closeModalBtn.classList.remove('hover');
  });
  
  modalContent.addEventListener('mouseenter', () => {
    closeModalBtn.classList.remove('hover');
  });
  
  modalContent.addEventListener('mouseleave', () => {
    closeModalBtn.classList.add('hover');
  });
  
  closeModalBtn.addEventListener('click', closeModal);
};

cards.forEach(card => card.addEventListener('click', (e) => {
  if (e.target.closest('.pets__card')) {
    let pet = pets.find((pet) => pet.name === e.target.closest('.pets__card').dataset.name);
    createModal(pet)
    openModal();
  }
}));

modal.addEventListener('click', function(e) {
  if (!e.target.closest('.modal__content')) {
    closeModal();
  }
});

function openModal() {
  document.body.classList.add('lock');
  modal.classList.add('open');
};

function closeModal() {
  document.body.classList.remove('lock');
  modal.classList.remove('open');
  modalContent.innerHTML = "";
};
