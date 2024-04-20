import Products from '../../interfaces/products';
import ModalWindow from '../modal/modalWindow';

class Card {
  productsCart: string[] =
    JSON.parse(localStorage.getItem('productsID') || 'null') || [];

  create(data: Products[]): void {
    const cardsContainer: HTMLElement | null =
      document.getElementById('cards-container');

    if (cardsContainer) {
      cardsContainer.innerHTML = '';

      data.forEach((el) => {
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

        cardsContainer.innerHTML += cardInner;
      });
    }

    this.isGoodsInCart();
    this.addGoodsToCart();
  }

  addGoodsToCart(): void {
    const cards = document.querySelectorAll('.card');
    const cartQuantity = document.querySelector('.cart__quantity');

    if (cartQuantity) {
      cartQuantity.innerHTML = `${this.productsCart.length}`;
    }

    const modal = new ModalWindow();

    if (cards) {
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          if (this.productsCart.find((el) => el === card.id)) {
            this.productsCart = this.productsCart.filter(
              (el) => el !== card.id
            );
            localStorage.setItem(
              'productsID',
              JSON.stringify(this.productsCart)
            );
            card.classList.remove('active');
          } else {
            this.productsCart.push(card.id);
            localStorage.setItem(
              'productsID',
              JSON.stringify(this.productsCart)
            );
            card.classList.add('active');
          }

          if (this.productsCart.length > 5) {
            modal.open();
            this.productsCart = this.productsCart.filter(
              (el) => el !== card.id
            );
            localStorage.setItem(
              'productsID',
              JSON.stringify(this.productsCart)
            );
            card.classList.remove('active');
            modal.addListenerToButton();
          }

          if (cartQuantity) {
            cartQuantity.innerHTML = `${this.productsCart.length}`;
          }
        });
      });
    }
  }

  isGoodsInCart(): void {
    this.productsCart =
      JSON.parse(localStorage.getItem('productsID') || 'null') || [];

    const cards = document.querySelectorAll('.card');

    if (cards) {
      cards.forEach((card) => {
        if (this.productsCart.find((el) => el === card.id)) {
          card.classList.add('active');
        }
      });
    }
  }
}

export default Card;
