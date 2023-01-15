const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const counter = document.getElementById("value");
let counterValue = 0;
buttonDec.addEventListener("click", () => {
  counter.textContent = counterValue -= 1;
});

buttonInc.addEventListener("click", () => {
  counter.textContent = counterValue += 1;
});
