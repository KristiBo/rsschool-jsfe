import BaseComponent from '../baseComponent/baseComponent';

class GarageHeader extends BaseComponent {
  inner = `
    <h2 class="garage__title">Garage (1)</h2>
    <h3 class="garage__page-number">Page #1</h3>`;

  container = document.getElementById('garage-header');
}

export default GarageHeader;
