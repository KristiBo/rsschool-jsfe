import Header from '../header/header';
import Footer from '../footer/footer';
import products from '../../products.json';
import Card from '../cards/cards';
import Filters from '../filters/filters';
import ModalWindow from '../modal/modalWindow';
import SortProducts from '../filters/sortProducts';

class App {
  header: Header;
  filters: Filters;
  card: Card;
  footer: Footer;
  modal: ModalWindow;
  sort: SortProducts;

  constructor() {
    this.header = new Header();
    this.filters = new Filters();
    this.card = new Card();
    this.footer = new Footer();
    this.modal = new ModalWindow();
    this.sort = new SortProducts();
  }

  create(): void {
    this.header.create();

    this.filters.create();

    this.card.create(products);

    this.card.addToCart();

    this.footer.create();

    this.modal.create();

    this.filters.sliderCreate();

    this.filters.addListeners();

    this.sort.filterGoods(products);
  }
}

export default App;
