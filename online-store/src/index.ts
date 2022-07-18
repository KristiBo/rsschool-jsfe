import './main.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import products from './products.json';
import Card from './components/cards/cards';
import Filters from './components/filters/filters';

const header = new Header();
header.create();

const filters = new Filters();
filters.create();

const card = new Card();
card.create(products);

const footer = new Footer();
footer.create();

import noUiSlider from '../node_modules/nouislider/dist/nouislider';

const sliderPrice: HTMLElement | null = document.getElementById('slider-price');

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

const sliderQuantity: HTMLElement | null = document.getElementById('slider-quantity');

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
