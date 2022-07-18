import Products from '../../interfaces/products';

class Card {
  create(data: Products[]): void {
    const cardsContainer: HTMLElement | null = document.getElementById('cards-container');

    data.forEach((el) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardImg = document.createElement('img');
      cardImg.classList.add('card__img');
      cardImg.setAttribute('src', el.img);
      cardImg.alt = 'guitar';

      const cardTitle = document.createElement('h3');
      cardTitle.classList.add('card__title');
      cardTitle.innerHTML = el.name;

      const cardList = document.createElement('ul');
      cardList.classList.add('card__list');

      const cardItemType = document.createElement('li');
      const cardItemColor = document.createElement('li');
      const cardItemHand = document.createElement('li');
      const cardItemQuantity = document.createElement('li');

      const cardsItems = [cardItemType, cardItemColor, cardItemHand, cardItemQuantity];

      cardsItems.forEach((item) => {
        item.classList.add('card__item');
        cardList.append(item);
      });

      cardItemType.innerHTML = `<strong>Type: </strong>${el.type}`;
      cardItemColor.innerHTML = `<strong>Color: </strong>${el.color}`;
      cardItemHand.innerHTML = `<strong>Hand: </strong>${el.hand}`;
      cardItemQuantity.innerHTML = `<strong>Quantity: </strong>${el.quantity}`;

      const cardPrice = document.createElement('p');
      cardPrice.classList.add('card__price');
      cardPrice.innerHTML = `${el.price} €`;

      const cardBtn = document.createElement('button');
      cardBtn.classList.add('card__button');
      cardBtn.innerHTML = 'Add to cart';

      card.append(cardImg, cardTitle, cardList, cardPrice, cardBtn);

      cardsContainer ? cardsContainer.append(card) : new Error('Element not found');
    });
  }
}

export default Card;
