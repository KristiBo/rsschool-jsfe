import BaseComponent from '../baseComponent/baseComponent';

class Header extends BaseComponent {
  inner = `
        <a class="header__link" href="https://rolling-scopes-school.github.io/kristibo-JSFE2022Q1/online-store/">
          <img src="./assets/icons/logo.png" alt="logo" class="header__logo">
        </a>
        <h1 class="header__title">Guitar Store</h1>
        <div class="header__search search">
          <input class="search__input" id="search-input" type="search" name="search" autofocus autocomplete="off" placeholder="Search...">
        </div>
        <div class="header__cart cart">
          <img src="./assets/icons/shopping-cart.svg" alt="shopping-cart" class="cart__icon">
          <span class="cart__quantity">0</span>
        </div>`;

  container = document.getElementById('header-container');
}

export default Header;
