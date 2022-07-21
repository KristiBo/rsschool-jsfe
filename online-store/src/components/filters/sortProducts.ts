import State from '../../interfaces/state';
import Card from '../cards/cards';
import Products from '../../interfaces/products';
import products from '../../products.json';

const filtersState: State = {
  search: '',
  sort: 'all',
  price: [149, 1679],
  quantity: [1, 5],
  brand: [],
  type: [],
  color: [],
  hand: 'Right',
};

class SortProducts {
  filteredProducts: Products[];
  card: Card;

  constructor() {
    this.filteredProducts = [];
    this.card = new Card();
  }

  filtersHandler(key: string, value: string | (number | string)[]): void {
    switch (key) {
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

      case 'color':
        filtersState.color.includes(value as string)
          ? (filtersState.color = filtersState.color.filter((item) => item !== value))
          : filtersState.color.push(value as string);
        break;

      case 'hand':
        filtersState.hand = value as string;
        break;
    }

    this.filterGoods(products);
  }

  filterGoods(products: Products[]): void {
    this.filteredProducts = [];
    const cardsContainer: HTMLElement | null = document.getElementById('cards-container');

    this.filteredProducts.push(
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

    if (this.filteredProducts.length) {
      this.card.create(this.filteredProducts);
    } else {
      if (cardsContainer) cardsContainer.innerHTML = `<h2>No matches were found</h2>`;
    }
  }

  sortGoods(): void {
    if (filtersState.sort === 'price-up') this.filteredProducts.sort((a, b) => a.price - b.price);

    if (filtersState.sort === 'price-down') this.filteredProducts.sort((a, b) => b.price - a.price);

    if (filtersState.sort === 'name-az') {
      this.filteredProducts.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      });
    }

    if (filtersState.sort === 'name-za') {
      this.filteredProducts.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
      });
    }
  }

  resetState(): void {
    filtersState.search = '';
    filtersState.price = [149, 1679];
    filtersState.quantity = [1, 5];
    filtersState.brand = [];
    filtersState.type = [];
    filtersState.color = [];
    filtersState.hand = 'Right';
  }
}

export default SortProducts;
