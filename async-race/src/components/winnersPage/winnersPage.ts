import BaseComponent from '../baseComponent/baseComponent';

class WinnersPage extends BaseComponent {
  inner = `
    <h2 class="winners-title">Winners (0)</h2>
    <h3 class="winners-page-number">Page #1</h3>`;

  container = document.getElementById('winners');
}

export default WinnersPage;
