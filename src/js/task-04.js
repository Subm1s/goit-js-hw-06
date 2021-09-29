let counterValue = 0;
const currentValue = document.querySelector("#value");
const buttonIncrement = document.querySelector('button[data-action="increment"]')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    currentValue.textContent = counterValue;
});
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
});