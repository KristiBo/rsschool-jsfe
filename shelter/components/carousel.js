const petsImport = await fetch('../../assets/pets.json');
const pets = await petsImport.json();
const btnPrev = document.querySelector('.button_prev');
const btnNext = document.querySelector('.button_next');
const carousel = document.querySelector('.pets__carousel');
const cardsPrev = document.querySelector('.pets__cards_prev');
const cardsCurrent = document.querySelector('.pets__cards_current');
const cardsNext = document.querySelector('.pets__cards_next');

let petsCurrent = [];

function getRandomPets() {
  let petsRandom = [];

  while (petsRandom.length < 3) {
    let index = Math.floor(Math.random() * 8);

    if (
      !petsRandom.includes(pets[index]) &&
      !petsCurrent.includes(pets[index])
    ) {
      petsRandom.push(pets[index]);
    }
  }

  petsCurrent = petsRandom;
  return petsCurrent;
}

export function addContentToCard(pet) {
  return `
  <div class="pets__card" data-name="${pet.name}">
    <img src="${pet.img}" alt="${pet.name}" class="pets__image">
    <h4 class="pets__name">${pet.name}</h4>
    <button class="button button_transparent">Learn more</button>
  </div>
`;
}

export function createCardList(pets, parent) {
  for (const pet of pets) {
    const petElement = document.createElement('div');
    parent.append(petElement);
    petElement.outerHTML = addContentToCard(pet);
  }
}

createCardList(getRandomPets(), cardsPrev);
createCardList(getRandomPets(), cardsCurrent);
createCardList(getRandomPets(), cardsNext);

btnPrev.onclick = moveLeft;
btnNext.onclick = moveRight;

function moveLeft() {
  carousel.classList.add('animation_left');
}

function moveRight() {
  carousel.classList.add('animation_right');
}

carousel.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    carousel.classList.remove('animation_left');
    cardsCurrent.innerHTML = cardsPrev.innerHTML;
    cardsPrev.innerHTML = '';
    createCardList(getRandomPets(), cardsPrev);
  } else {
    carousel.classList.remove('animation_right');
    cardsCurrent.innerHTML = cardsNext.innerHTML;
    cardsNext.innerHTML = '';
    createCardList(getRandomPets(), cardsNext);
  }
});
