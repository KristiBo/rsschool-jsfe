import Header from '../header/header';
import Car from '../car/car';
import Controls from '../controls/controls';
import GarageHeader from '../garageHeader/garageHeader';

class App {
  header: Header;

  garageHeader: GarageHeader;

  controls: Controls;

  car: Car;

  constructor() {
    this.header = new Header();
    this.garageHeader = new GarageHeader();
    this.controls = new Controls();
    this.car = new Car();
  }

  create(): void {
    this.header.create();
    this.garageHeader.create();
    this.controls.create();
    this.car.create();
    this.header.addListenersToButtons();
    this.header.openWinnersPage();
    this.header.openGaragePage();
  }
}

export default App;
