import Products from '../../interfaces/products';
import ModalWindow from '../modal/modalWindow';

class Card {
  create(data: Products[]): void {
    const cardsContainer: HTMLElement | null = document.getElementById('cards-container');

    data.forEach((el): void => {
      const cardInner = `
        <div class="card">
          <img src="${el.img}" alt="guitar" class="card__img">
          <h3 class="card__title">${el.name}</h3>
          <ul class="card__list">
            <li class="card__item"><strong>Type: </strong>${el.type}</li>
            <li class="card__item"><strong>Color: </strong>${el.color}</li>
            <li class="card__item"><strong>Hand: </strong>${el.hand}</li>
            <li class="card__item"><strong>Quantity: </strong>${el.quantity}</li>
          </ul>
          <p class="card__price">${el.price} €</p>
          <button class="card__button">Add to cart</button>
        </div>`;

      cardsContainer ? (cardsContainer.innerHTML += cardInner) : new Error('Element not found');
    });
  }

  addToCart(): void {
    const cards = document.querySelectorAll('.card');
    const cartQuantity: HTMLElement | null = document.querySelector('.cart__quantity');
    const modal = new ModalWindow();
    let count = 0;

    cards.forEach((card): void => {
      card.addEventListener('click', (): void => {
        card.classList.toggle('active');
        card.classList.contains('active') ? (count += 1) : (count -= 1);

        if (count > 20) {
          modal.open();
          count = 20;
          card.classList.remove('active');
          modal.close();
        }

        cartQuantity ? (cartQuantity.innerHTML = `${count}`) : new Error('Element not found');
      });
    });
  }
}

export default Card;
