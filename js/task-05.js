const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInputChange = event => event.currentTarget.value !== ''
    ? output.textContent = event.currentTarget.value
    : output.textContent = 'Anonymous';

textInput.addEventListener("input", onInputChange);
