const petsImport = await fetch('../../assets/pets.json');
const pets = await petsImport.json();
const cards = document.querySelector('.pets__cards');
const btnStart = document.querySelector('.button_start');
const btnBack = document.querySelector('.button_back');
const btnNumber = document.querySelector('.button_number');
const btnForward = document.querySelector('.button_forward');
const btnEnd = document.querySelector('.button_end');
const desktopSize = window.matchMedia('(min-width: 1280px)');
const tabletSize = window.matchMedia('(min-width: 768px)');
const mobileSize = window.matchMedia('(max-width: 767px)');

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
  cards.innerHTML = '';
  const listSize = petsAll.slice(0, page);
  const currentPets = listSize.slice(listSize.length - getPageSize());
  generateCard(currentPets, cards);
};

function generateCard(pets, parent) {
  for (const pet of pets) {
    const petElement = document.createElement('div');
    parent.append(petElement);
    petElement.outerHTML = addContentToCard(pet);
  }
};

function addContentToCard(pet) {
  return `
  <div class="pets__card" data-name="${pet.name}">
    <img src="${pet.img}" alt="${pet.name}" class="pets__image">
    <h4 class="pets__name">${pet.name}</h4>
    <button class="button button_transparent">Learn more</button>
  </div>
`;
};

btnForward.onclick = () => {
  if (page < getPageSize()) page = getPageSize();
  page += getPageSize();
  createCards();
  changeNumber();
  if (page >= petsAll.length) getDisabledNextBtn();
  getActivePrevBtn();
};

btnBack.onclick = () => {
  if (page < getPageSize()) page = getPageSize();
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
