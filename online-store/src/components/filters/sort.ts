import BaseComponent from '../baseComponent/baseComponent';

class Sort extends BaseComponent {
  inner = `
      <select name="select" class="filters__sort" id="filters-sort">
        <option value="all">Sort by:</option>
        <option value="name-az">Name A-Z</option>
        <option value="name-za">Name Z-A</option>
        <option value="price-up">Price Up</option>
        <option value="price-down">Price Down</option>
      </select>`;

  container = document.getElementById('sort-container');
}

export default Sort;
