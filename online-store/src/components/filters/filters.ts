import SortProducts from './sortProducts';
import noUiSlider from '../../../node_modules/nouislider/dist/nouislider';
import products from '../../products.json';
import Card from '../cards/cards';

class Filters {
  sort: SortProducts;

  constructor() {
    this.sort = new SortProducts();
  }

  create(): void {
    const filtersContainer: HTMLElement | null = document.getElementById('filters-container');

    const filters = `
      <p class="filter__name">Price:</p>
      <div id="slider-price"></div>
      <p class="filter__name">Quantity:</p>
      <div id="slider-quantity"></div>
      <div class="filters__brand filter">
        <p class="filter__name">Brand:</p>
        <div class="filter__checkbox">
          <input type="checkbox" id="alvarez">
          <label for="alvarez">Alvarez</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="lamancha">
          <label for="lamancha">LaMancha</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="ltd">
          <label for="ltd">LTD</label>
        </div>
        <div class="filter__checkbox">
         <input type="checkbox" id="squier">
          <label for="squier">Squier</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="yamaha">
          <label for="yamaha">Yamaha</label>
        </div>
      </div>
      <div class="filters__type filter">
        <p class="filter__name">Type:</p>
        <div class="filter__checkbox">
          <input type="checkbox" id="basses">
          <label for="basses">Basses</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="electric">
          <label for="electric">Electric</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="classical">
          <label for="classical">Classical</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="western">
          <label for="western">Western</label>
        </div>
      </div>
      <div class="filters__color filter">
        <p class="filter__name">Color:</p>
        <div class="filter__checkbox">
          <input type="checkbox" id="black">
          <label for="black">Black</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="blue">
          <label for="blue">Blue</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="white">
          <label for="white">White</label>
        </div>
        <div class="filter__checkbox">
          <input type="checkbox" id="wood">
          <label for="wood">Wood</label>
        </div>
      </div>
      <div class="filters__left-handed filter">
        <div class="filter__checkbox">
          <input type="checkbox" id="left">
          <label for="left">For left-handed</label>
        </div>
      </div>
      <button class="filters__button-reset" id="button-reset">Reset filters</button>
      <button class="filters__button-clear" id="button-clear">Clear all</button>`;

    if (filtersContainer) filtersContainer.innerHTML = filters;
  }

  sortCreate(): void {
    const sortInner = `<select name="select" class="filters__sort" id="filters-sort">
    <option value="all">Sort by:</option>
    <option value="name-az">Name A-Z</option>
    <option value="name-za">Name Z-A</option>
    <option value="price-up">Price Up</option>
    <option value="price-down">Price Down</option>
  </select>`;
    const sortContainer: HTMLElement | null = document.getElementById('sort-container');
    if (sortContainer) sortContainer.innerHTML = sortInner;
  }

  sliderCreate(): void {
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
        .on('update', (value): void => {
          this.sort.filtersHandler('price', value);
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
        .on('update', (value): void => {
          this.sort.filtersHandler('quantity', value);
        });
    } else {
      new Error('Element not found');
    }
  }

  addListeners(): void {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
      this.sort.filtersHandler('search', searchInput.value);
    });

    const filtersSort = document.getElementById('filters-sort') as HTMLSelectElement;
    filtersSort.addEventListener('input', () => {
      this.sort.filtersHandler('sort', filtersSort.value);
    });

    const filterHand = document.getElementById('left') as HTMLInputElement;
    filterHand.addEventListener('click', () => {
      filterHand.checked ? this.sort.filtersHandler('hand', 'Left') : this.sort.filtersHandler('hand', 'Right');
    });

    const brandAlvarez = document.getElementById('alvarez') as HTMLInputElement;
    brandAlvarez.addEventListener('click', () => {
      this.sort.filtersHandler('brand', 'alvarez');
    });

    const brandLamancha = document.getElementById('lamancha') as HTMLInputElement;
    brandLamancha.addEventListener('click', () => {
      this.sort.filtersHandler('brand', 'lamancha');
    });

    const brandLtd = document.getElementById('ltd') as HTMLInputElement;
    brandLtd.addEventListener('click', () => {
      this.sort.filtersHandler('brand', 'ltd');
    });

    const brandSquier = document.getElementById('squier') as HTMLInputElement;
    brandSquier.addEventListener('click', () => {
      this.sort.filtersHandler('brand', 'squier');
    });

    const brandYamaha = document.getElementById('yamaha') as HTMLInputElement;
    brandYamaha.addEventListener('click', () => {
      this.sort.filtersHandler('brand', 'yamaha');
    });

    const typeBases = document.getElementById('basses') as HTMLInputElement;
    typeBases.addEventListener('click', () => {
      this.sort.filtersHandler('type', 'basses');
    });

    const typeElectric = document.getElementById('electric') as HTMLInputElement;
    typeElectric.addEventListener('click', () => {
      this.sort.filtersHandler('type', 'electric');
    });

    const typeClassical = document.getElementById('classical') as HTMLInputElement;
    typeClassical.addEventListener('click', () => {
      this.sort.filtersHandler('type', 'classical');
    });

    const typeWestern = document.getElementById('western') as HTMLInputElement;
    typeWestern.addEventListener('click', () => {
      this.sort.filtersHandler('type', 'western');
    });

    const colorBlack = document.getElementById('black') as HTMLInputElement;
    colorBlack.addEventListener('click', () => {
      this.sort.filtersHandler('color', 'black');
    });

    const colorBlue = document.getElementById('blue') as HTMLInputElement;
    colorBlue.addEventListener('click', () => {
      this.sort.filtersHandler('color', 'blue');
    });

    const colorWhite = document.getElementById('white') as HTMLInputElement;
    colorWhite.addEventListener('click', () => {
      this.sort.filtersHandler('color', 'white');
    });

    const colorWood = document.getElementById('wood') as HTMLInputElement;
    colorWood.addEventListener('click', () => {
      this.sort.filtersHandler('color', 'wood');
    });

    const resetButton = document.getElementById('button-reset') as HTMLButtonElement;
    resetButton.addEventListener('click', () => this.resetFilters());
  }

  resetFilters(): void {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    searchInput.value = '';
    this.sort.resetState();
    this.sort.filteredProducts = [...products];
    this.sort.sortGoods();
    const card = new Card();
    card.create(this.sort.filteredProducts);
    this.create();
    this.addListeners();
    this.sliderCreate();
  }
}

export default Filters;
