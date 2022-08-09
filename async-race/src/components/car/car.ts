import BaseComponent from '../baseComponent/baseComponent';

class Car extends BaseComponent {
  inner = `
    <div class="car__controls">
      <button class="button car__select-button">SELECT</button>
      <button class="button car__remove-button">REMOVE</button>
      <h4 class="car__name">BMW</h4>
    </div>
    <div class="car__container">
      <button class="button car__start-button">A</button>
      <button class="button car__stop-button">B</button>
      <svg class="car__img" width="120" height="60">
        <use xlink:href="./assets/img/car.svg#car"></use>
      </svg>
      <img src="./assets/img/finishflag.png" alt="finish-flag" class="car__finish-img">
    <div>`;

  container = document.getElementById('car-container');
}

export default Car;
