class Filters {
  create(): void {
    const filtersContainer: HTMLElement | null = document.getElementById('filters-container');

    const filters = `
      <select name="select" class="filters__sort" id="filters-sort">
        <option value="all">Sort by:</option>
        <option value="name-az">Name A-Z</option>
        <option value="name-za">Name Z-A</option>
        <option value="price-up">Price Up</option>
        <option value="price-down">Price Down</option>
      </select>
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

    filtersContainer ? (filtersContainer.innerHTML = filters) : new Error('Element not found');
  }
}

export default Filters;
