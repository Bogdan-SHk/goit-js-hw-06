const inputEl = document.querySelector("#validation-input");


const onBlur = event => {
    if (inputEl.value.length === 6) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}
    
inputEl.addEventListener("blur", onBlur);