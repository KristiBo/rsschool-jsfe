import Header from '../header/header';
import Footer from '../footer/footer';
import products from '../../products.json';
import Card from '../cards/cards';
import Filters from '../filters/filters';
import ModalWindow from '../modal/modalWindow';
import noUiSlider from '../../../node_modules/nouislider/dist/nouislider';
import Products from '../../interfaces/products';
import filtersState from '../filters/filtersState';

class App {
  filterProducts: Products[];
  card: Card;

  constructor() {
    this.filterProducts = [];
    this.card = new Card();
  }

  create(): void {
    const header = new Header();
    header.create();

    const filters = new Filters();
    filters.create();

    this.card.create(products);
    this.card.addToCart();

    const footer = new Footer();
    footer.create();

    const modal = new ModalWindow();
    modal.create();
    this.filterListener();

    const sliderPrice: HTMLElement | null = document.getElementById('slider-price');
    const sliderQuantity: HTMLElement | null = document.getElementById('slider-quantity');

    if (sliderPrice) {
      noUiSlider
        .create(sliderPrice, {
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
        })
        .on('update', (value) => {
          this.filtersHandler('price', value);
        });
    } else {
      new Error('Element not found');
    }

    if (sliderQuantity) {
      noUiSlider
        .create(sliderQuantity, {
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
        })
        .on('update', (value) => {
          this.filtersHandler('quantity', value);
        });
    } else {
      new Error('Element not found');
    }
  }

  filterListener(): void {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
      this.filtersHandler('search', searchInput.value);
    });

    const filtersSort = document.getElementById('filters-sort') as HTMLSelectElement;
    filtersSort.addEventListener('input', () => {
      this.filtersHandler('sort', filtersSort.value);
    });

    const filterHand = document.getElementById('left') as HTMLInputElement;

    filterHand.addEventListener('click', () => {
      filterHand.checked ? this.filtersHandler('hand', 'Left') : this.filtersHandler('hand', 'Right');
    });

    const brandAlvarez = document.getElementById('alvarez') as HTMLInputElement;

    brandAlvarez.addEventListener('click', () => {
      this.filtersHandler('brand', 'alvarez');
    });

    const brandLamancha = document.getElementById('lamancha') as HTMLInputElement;

    brandLamancha.addEventListener('click', () => {
      this.filtersHandler('brand', 'lamancha');
    });

    const brandLtd = document.getElementById('ltd') as HTMLInputElement;

    brandLtd.addEventListener('click', () => {
      this.filtersHandler('brand', 'ltd');
    });

    const brandSquier = document.getElementById('squier') as HTMLInputElement;

    brandSquier.addEventListener('click', () => {
      this.filtersHandler('brand', 'squier');
    });

    const brandYamaha = document.getElementById('yamaha') as HTMLInputElement;

    brandYamaha.addEventListener('click', () => {
      this.filtersHandler('brand', 'yamaha');
    });

    const typeBases = document.getElementById('basses') as HTMLInputElement;

    typeBases.addEventListener('click', () => {
      this.filtersHandler('type', 'basses');
    });

    const typeElectric = document.getElementById('electric') as HTMLInputElement;

    typeElectric.addEventListener('click', () => {
      this.filtersHandler('type', 'electric');
    });

    const typeClassical = document.getElementById('classical') as HTMLInputElement;

    typeClassical.addEventListener('click', () => {
      this.filtersHandler('type', 'classical');
    });

    const typeWestern = document.getElementById('western') as HTMLInputElement;

    typeWestern.addEventListener('click', () => {
      this.filtersHandler('type', 'western');
    });

    const colorBlack = document.getElementById('black') as HTMLInputElement;

    colorBlack.addEventListener('click', () => {
      this.filtersHandler('color', 'black');
    });

    const colorBlue = document.getElementById('blue') as HTMLInputElement;

    colorBlue.addEventListener('click', () => {
      this.filtersHandler('color', 'blue');
    });

    const colorWhite = document.getElementById('white') as HTMLInputElement;

    colorWhite.addEventListener('click', () => {
      this.filtersHandler('color', 'white');
    });

    const colorWood = document.getElementById('wood') as HTMLInputElement;

    colorWood.addEventListener('click', () => {
      this.filtersHandler('color', 'wood');
    });
  }

  filtersHandler(key: string, value: string | (number | string)[]): void {
    switch (key) {
      case 'hand':
        filtersState.hand = value as string;
        break;
      case 'brand':
        filtersState.brand.includes(value as string)
          ? (filtersState.brand = filtersState.brand.filter((item) => item !== value))
          : filtersState.brand.push(value as string);
        break;
      case 'type':
        filtersState.type.includes(value as string)
          ? (filtersState.type = filtersState.type.filter((item) => item !== value))
          : filtersState.type.push(value as string);
        break;
      case 'search':
        filtersState.search = value as string;
        break;
      case 'sort':
        filtersState.sort = value as string;
        break;
      case 'price':
        filtersState.price = value as number[];
        break;
      case 'quantity':
        filtersState.quantity = value as number[];
        break;
      case 'color':
        filtersState.color.includes(value as string)
          ? (filtersState.color = filtersState.color.filter((item) => item !== value))
          : filtersState.color.push(value as string);
        break;
    }
    console.log(filtersState);
    this.filterGoods(products);
  }

  filterGoods(products: Products[]): void {
    this.filterProducts = [];
    const cardsContainer = document.getElementById('cards-container') as HTMLElement;
    this.filterProducts.push(
      ...products
        .filter((item) => item.name.toLowerCase().includes(filtersState.search.toLowerCase()))
        .filter((item) => item.price >= filtersState.price[0] && item.price <= filtersState.price[1])
        .filter((item) => item.quantity >= filtersState.quantity[0] && item.quantity <= filtersState.quantity[1])
        .filter((item) => filtersState.brand.includes(item.brand.toLowerCase()) || !filtersState.brand.length)
        .filter((item) => filtersState.type.includes(item.type.toLowerCase()) || !filtersState.type.length)
        .filter((item) => filtersState.color.includes(item.color.toLowerCase()) || !filtersState.color.length)
        .filter((item) => item.hand === filtersState.hand || filtersState.hand === 'Right')
    );
    this.sortGoods();
    console.log(filtersState);
    this.filterProducts.length
      ? this.card.create(this.filterProducts)
      : (cardsContainer.innerHTML = `<h2>No matches were found</h2>`);
    this.card.addToCart();
  }

  sortGoods(): void {
    if (filtersState.sort === 'price-up') this.filterProducts.sort((a, b) => a.price - b.price);
    if (filtersState.sort === 'price-down') this.filterProducts.sort((a, b) => b.price - a.price);
    if (filtersState.sort === 'name-az') {
      this.filterProducts.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }
    if (filtersState.sort === 'name-za') {
      this.filterProducts.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
    }
  }
}

export default App;
