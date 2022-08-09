import BaseComponent from '../baseComponent/baseComponent';
import WinnersPage from '../winnersPage/winnersPage';

class Header extends BaseComponent {
  inner = `
    <button class="button garage-button active" id="garage-button">TO GARAGE</button>
    <button class="button winners-button" id="winners-button">TO WINNERS</button>`;

  container = document.getElementById('header-container');

  addListenersToButtons(): void {
    const winnersBtn: HTMLElement | null = document.getElementById('winners-button');
    const garageBtn: HTMLElement | null = document.getElementById('garage-button');
    if (winnersBtn) {
      winnersBtn.addEventListener('click', () => this.openWinnersPage());
    }
    if (garageBtn) {
      garageBtn.addEventListener('click', () => this.openGaragePage());
    }
  }

  openWinnersPage(): void {
    const winnersPage = new WinnersPage();
    const winnersBtn: HTMLElement | null = document.getElementById('winners-button');
    const garageBtn: HTMLElement | null = document.getElementById('garage-button');
    const controlsContainer: HTMLElement | null = document.getElementById('controls-container');
    const garageContainer: HTMLElement | null = document.getElementById('garage');
    if (controlsContainer && garageContainer) {
      garageContainer.style.display = 'none';
      controlsContainer.style.display = 'none';
      garageBtn?.classList.remove('active');
      winnersBtn?.classList.add('active');
      winnersPage.create();
    }
  }

  openGaragePage(): void {
    const winnersBtn: HTMLElement | null = document.getElementById('winners-button');
    const garageBtn: HTMLElement | null = document.getElementById('garage-button');
    const controlsContainer: HTMLElement | null = document.getElementById('controls-container');
    const garageHeader: HTMLElement | null = document.getElementById('garage');
    const winners: HTMLElement | null = document.getElementById('winners');
    if (winners && garageHeader && controlsContainer) {
      winners.innerHTML = '';
      garageBtn?.classList.add('active');
      winnersBtn?.classList.remove('active');
      garageHeader.style.display = '';
      controlsContainer.style.display = '';
    }
  }
}

export default Header;
