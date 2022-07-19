class Header {
  create(): void {
    const headerContainer: HTMLElement | null = document.getElementById('header-container');
    const headerInner = `
    <a class="header__link" href="https://rolling-scopes-school.github.io/kristibo-JSFE2022Q1/online-store/">
      <img src="./assets/icons/logo.png" alt="logo" class="header__logo">
    </a>
    <h1 class="header__title">Guitar Store</h1>
    <form class="header__search search" id="search">
      <input class="search__input" id="search-input" type="search" name="search" autofocus autocomplete="off" placeholder="Search...">
    </form>
    <div class="header__cart cart">
      <img src="./assets/icons/shopping-cart.svg" alt="shopping-cart" class="cart__icon">
      <span class="cart__quantity">0</span>
    </div>
    `;
    headerContainer ? (headerContainer.innerHTML = headerInner) : new Error('Element not found');
  }
}

const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

export default Header;
