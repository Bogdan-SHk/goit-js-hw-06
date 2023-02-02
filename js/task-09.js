function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");


const onChangeBackgroud = event => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorNameEl.textContent = `${getRandomHexColor()}`;
}

buttonEl.addEventListener("click", onChangeBackgroud);