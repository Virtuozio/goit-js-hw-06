const changeColorBtn = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  colorName.textContent = `${randomColor}`;
});
