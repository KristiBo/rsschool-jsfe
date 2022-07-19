class ModalWindow {
  create(): void {
    const modal = `
      <div class="modal">
        <div class="modal__overlay">
          <div class="modal__window">
            <div class="modal__content">
              <span class="modal__text">Sorry, all slots are full</span>
              <button class="modal__button">ok</button>
            </div>
          </div>
        </div>
      </div>`;

    document.body.innerHTML += modal;
  }

  open(): void {
    const modal: HTMLElement | null = document.querySelector('.modal');
    modal ? modal.classList.add('open') : new Error('Element not found');
  }

  close(): void {
    const button: HTMLElement | null = document.querySelector('.modal__button');
    const modal: HTMLElement | null = document.querySelector('.modal');
    const closeModal = () => (modal ? modal.classList.remove('open') : new Error('Element not found'));
    button ? button.addEventListener('click', () => closeModal()) : new Error('Element not found');
  }
}

export default ModalWindow;
