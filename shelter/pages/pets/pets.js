const petsImport = await fetch('../../assets/pets.json');
const pets = await petsImport.json();
const logo = document.querySelector('.logo')
const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');
const cards = document.querySelector('.pets__cards');
const slider = document.querySelectorAll('.pets__slider');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const btnStart = document.querySelector('.button_start');
const btnBack = document.querySelector('.button_back');
const btnNumber = document.querySelector('.button_number');
const btnForward = document.querySelector('.button_forward');
const btnEnd = document.querySelector('.button_end');
const desktopSize = window.matchMedia('(min-width: 1280px)');
const tabletSize = window.matchMedia('(min-width: 768px)');
const mobileSize = window.matchMedia('(max-width: 767px)');

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
            <li class="modal__item"><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
            <li class="modal__item"><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
            <li class="modal__item"><b>Parasites:</b> ${pet.parasites.join(', ')}</li>
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

slider.forEach(card => card.addEventListener('click', (e) => {
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

// Pagination

let petsAll = [];
let page = getPageSize();

function getPageSize() {
  if (desktopSize.matches) return 8;
  if (tabletSize.matches) return 6;
  if (mobileSize.matches) return 3;
}

getRandomPets();

function getRandomPets() {
  petsAll.push(...pets.slice(0, 3).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(3, 6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(0, 6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(0, 2).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(2, 4).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(4).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(0, 6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(0, 2).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(2, 4).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(4).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(0, 3).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(3, 6).sort(() => Math.floor(Math.random() - 0.5)));
  petsAll.push(...pets.slice(6).sort(() => Math.floor(Math.random() - 0.5)));  
};

createCards();

function createCards() {
  cards.innerHTML = "";
  const listSize = petsAll.slice(0, page);
  const currentPets = listSize.slice(listSize.length - getPageSize());
  generateCard(currentPets, cards);
};

function generateCard(pets, parent) {
  for(const pet of pets) {
    const petElement = document.createElement('div');
    parent.append(petElement);   
    petElement.outerHTML = toCard(pet);
  }
};

function toCard (pet) {
  return `
  <div class="pets__card" data-name="${pet.name}">
    <img src="${pet.img}" alt="${pet.name}" class="pets__image">
    <h4 class="pets__name">${pet.name}</h4>
    <button class="button button_transparent">Learn more</button>
  </div>
`};

btnForward.onclick = () => {
  if(page < getPageSize()) page = getPageSize();  
  page += getPageSize();
  createCards();  
  changeNumber();
  if (page >= petsAll.length) getDisabledNextBtn();
  getActivePrevBtn();
};

btnBack.onclick = () => {
  if(page < getPageSize()) page = getPageSize();  
  page -= getPageSize();
  createCards();  
  changeNumber();
  if (page <= getPageSize()) getDisabledPrevBtn();
  getActiveNextBtn();
};

btnEnd.onclick = () => {   
  page = petsAll.length;
  createCards();  
  changeNumber();   
  getActivePrevBtn();
  getDisabledNextBtn();  
};

btnStart.onclick = () => {   
  page = getPageSize();
  createCards();  
  changeNumber();   
  getDisabledPrevBtn();
  getActiveNextBtn();
};

function getActiveNextBtn() {
  btnForward.disabled = false;
  btnEnd.disabled = false;
};

function getDisabledNextBtn() {
  btnForward.disabled = true;
  btnEnd.disabled = true;
};

function getActivePrevBtn() {
  btnStart.disabled = false;
  btnBack.disabled = false;
};

function getDisabledPrevBtn() {
  btnStart.disabled = true;
  btnBack.disabled = true;
};

function changeNumber() {
  btnNumber.textContent = page / getPageSize();
};
