const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const handleInput = event => textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", handleInput);