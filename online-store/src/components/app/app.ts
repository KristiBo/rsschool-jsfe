import Header from '../header/header';
import Footer from '../footer/footer';
import products from '../../products.json';
import Card from '../cards/cards';
import Filters from '../filters/filters';
import ModalWindow from '../modal/modalWindow';
import noUiSlider from '../../../node_modules/nouislider/dist/nouislider';

class App {
  create(): void {
    const header = new Header();
    header.create();

    const filters = new Filters();
    filters.create();

    const card = new Card();
    card.create(products);

    const footer = new Footer();
    footer.create();

    const modal = new ModalWindow();
    modal.create();
    card.addToCart();

    const sliderPrice: HTMLElement | null = document.getElementById('slider-price');
    const sliderQuantity: HTMLElement | null = document.getElementById('slider-quantity');

    if (sliderPrice) {
      noUiSlider.create(sliderPrice, {
        start: [149, 1679],
        tooltips: true,
        connect: true,
        step: 100,
        range: {
          min: 149,
          max: 1679,
        },
        format: {
          to: function (value) {
            return value.toFixed();
          },
          from: function (value) {
            return parseInt(value);
          },
        },
      });
    } else {
      new Error('Element not found');
    }

    if (sliderQuantity) {
      noUiSlider.create(sliderQuantity, {
        start: [1, 5],
        tooltips: true,
        connect: true,
        step: 1,
        range: {
          min: 1,
          max: 5,
        },
        format: {
          to: function (value) {
            return value.toFixed();
          },
          from: function (value) {
            return parseInt(value);
          },
        },
      });
    } else {
      new Error('Element not found');
    }
  }
}

export default App;
