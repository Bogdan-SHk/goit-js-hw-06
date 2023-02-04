let counterValue = 0;
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

const onDecreasCounterValue = event => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
}

buttonDecrementEl.addEventListener('click', onDecreasCounterValue);

const onIncreasCounterValue = event => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}

buttonIncrementEl.addEventListener('click', onIncreasCounterValue);
