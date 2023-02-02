const inputEl = document.querySelector("#validation-input");

const onBlur = event => inputEl.value.length === 6 ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");

inputEl.addEventListener("blur", onBlur);
