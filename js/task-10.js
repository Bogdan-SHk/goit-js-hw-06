function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const containerEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

containerEl.style.display = 'flex';
containerEl.style.flexDirection = 'column';
containerEl.style.flexWrap = 'wrap';
containerEl.style.alignItems = 'center';
containerEl.style.gap = '20px'

// Подія input

let inputValue = 0;
const value = event => inputValue = event.currentTarget.value;
 
inputEl.addEventListener('input', value);


// Подія click щодо кнопки Create

const createBoxes = amount => {
  const arrayForNewElements = [];
  let sizeNewElement = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeNewElement += 10;
    const newElement = document.createElement('div');
    newElement.style.height = `${sizeNewElement}px`;
    newElement.style.width = `${sizeNewElement}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    arrayForNewElements.push(newElement);
  }

  return containerEl.append(...arrayForNewElements);
}

const onСreateЕlementsСollection = event => createBoxes(Number(inputEl.value));

createButtonEl.addEventListener("click", onСreateЕlementsСollection);


// Подія click щодо кнопки Destroy

const destroyBoxes = event => {
  containerEl.textContent = '';
  inputEl.value = '';
}

destroyButtonEl.addEventListener("click", destroyBoxes);

