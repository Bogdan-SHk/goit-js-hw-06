const inputEl = document.querySelector("#validation-input");

const handleBlur = event => inputEl.value.length === 6 ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");

inputEl.addEventListener("blur", handleBlur);
