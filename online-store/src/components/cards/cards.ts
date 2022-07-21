import Products from '../../interfaces/products';
import ModalWindow from '../modal/modalWindow';

class Card {
  productsCart: Element[] = [];

  create(data: Products[]): void {
    const cardsContainer: HTMLElement | null = document.getElementById('cards-container');
    if (cardsContainer) cardsContainer.innerHTML = '';

    data.forEach((el): void => {
      const cardInner = `
        <div class="card" id="${el.id}">
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

      if (cardsContainer) cardsContainer.innerHTML += cardInner;
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card): void => {
      if (this.productsCart.find((el) => el.id === card.id)) card.classList.add('active');
    });

    this.addToCart();
  }

  addToCart(): void {
    const cards = document.querySelectorAll('.card');
    const cartQuantity: HTMLElement | null = document.querySelector('.cart__quantity');
    const modal = new ModalWindow();
    let count = this.productsCart.length;

    cards.forEach((card): void => {
      card.addEventListener('click', () => {
        if (this.productsCart.find((el) => el.id === card.id)) {
          this.productsCart = this.productsCart.filter((el) => el.id !== card.id);
          card.classList.remove('active');
          count = this.productsCart.length;
        } else {
          this.productsCart.push(card);
          card.classList.add('active');
          count = this.productsCart.length;
        }

        if (count > 20) {
          modal.open();
          this.productsCart = this.productsCart.filter((el) => el.id !== card.id);
          card.classList.remove('active');
          count = this.productsCart.length;
          modal.close();
        }

        if (cartQuantity) cartQuantity.innerHTML = `${count}`;
        console.log(this.productsCart);
      });
    });
  }
}

export default Card;
