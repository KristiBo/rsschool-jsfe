import Header from '../header/header';
import Footer from '../footer/footer';
import products from '../../products.json';
import Card from '../cards/cards';
import Filters from '../filters/filters';
import Sort from '../filters/sort';
import ModalWindow from '../modal/modalWindow';
import SortProducts from '../filters/sortProducts';

class App {
  header: Header;
  sort: Sort;
  filters: Filters;
  card: Card;
  footer: Footer;
  modal: ModalWindow;
  sortProducts: SortProducts;

  constructor() {
    this.header = new Header();
    this.sort = new Sort();
    this.filters = new Filters();
    this.card = new Card();
    this.footer = new Footer();
    this.modal = new ModalWindow();
    this.sortProducts = new SortProducts();
  }

  create(): void {
    this.header.create();

    this.sort.create();

    this.filters.create();

    this.card.create(products);

    this.footer.create();

    this.modal.create();

    this.filters.sliderCreate();

    this.filters.addListeners();
  }
}

export default App;
