const petsImport = await fetch('../../assets/pets.json');
const pets = await petsImport.json();
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const cards = document.querySelectorAll('.pets__cards');

const addContentToModal = (pet) => `
        <div class="modal__image">
          <img src="${pet.img}" alt="pet">
        </div>
        <div class="modal__text">
          <h3 class="modal__title">${pet.name}</h3>
          <h4 class="modal__subtitle">${pet.type} - ${pet.breed}</h4>
          <p class="modal__description">${pet.description}</p>
          <ul class="modal__list">
            <li class="modal__item"><b>Age:</b> ${pet.age}</li>
            <li class="modal__item"><b>Inoculations:</b> ${pet.inoculations.join(
              ', '
            )}</li>
            <li class="modal__item"><b>Diseases:</b> ${pet.diseases.join(
              ', '
            )}</li>
            <li class="modal__item"><b>Parasites:</b> ${pet.parasites.join(
              ', '
            )}</li>
          </ul>
        </div>
        <button class="button button_transparent button_close"></button>
`;

function createModal(pet) {
  modalContent.innerHTML = addContentToModal(pet);

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
}

cards.forEach((card) =>
  card.addEventListener('click', (e) => {
    if (e.target.closest('.pets__card')) {
      let pet = pets.find(
        (pet) => pet.name === e.target.closest('.pets__card').dataset.name
      );
      createModal(pet);
      openModal();
    }
  })
);

modal.addEventListener('click', function (e) {
  if (!e.target.closest('.modal__content')) {
    closeModal();
  }
});

function openModal() {
  document.body.classList.add('lock');
  modal.classList.add('open');
}

function closeModal() {
  document.body.classList.remove('lock');
  modal.classList.remove('open');
  modalContent.innerHTML = '';
}
