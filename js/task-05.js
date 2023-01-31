const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInputChange = event => output.textContent = event.currentTarget.value;

textInput.addEventListener("input", onInputChange);