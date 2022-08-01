import BaseComponent from '../baseComponent/baseComponent';

class ModalWindow extends BaseComponent {
  inner = `      
    <div class="modal__overlay">
      <div class="modal__window">
        <div class="modal__content">
          <span class="modal__text">Sorry, all slots are full</span>
          <button class="modal__button">ok</button>
        </div>
      </div>
    </div>`;

  container = document.getElementById('modal');

  modal: HTMLElement | null = document.querySelector('.modal');

  button: HTMLElement | null = document.querySelector('.modal__button');

  addListenerToButton(): void {
    if (this.button) {
      this.button.addEventListener('click', () => this.close());
    }
  }

  open(): void {
    if (this.modal) {
      this.modal.classList.add('open');
    }
  }

  close(): void {
    if (this.modal) {
      this.modal.classList.remove('open');
    }
  }
}

export default ModalWindow;
