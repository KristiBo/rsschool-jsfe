import BaseComponent from '../baseComponent/baseComponent';

class Controls extends BaseComponent {
  inner = `
    <div class="controls__create-car">
      <input type="text" name="text" class="input-name" id="name-create">
      <input type="color" name="color" class="input" id="color-create">
      <button class="button create-button">CREATE</button>
    </div>
    <div class="controls__update-car">
      <input type="text" name="text" class="input-name" id="name-update">
      <input type="color" name="color" class="input" id="color-update">
      <button class="button update-button">UPDATE</button>
    </div>
    <div class="controls__move-car">
      <button class="button race-button">RACE</button>
      <button class="button reset-button">RESET</button>
      <button class="button generate-button">GENERATE CARS</button>
    </div>`;

  container = document.getElementById('controls-container');
}

export default Controls;
