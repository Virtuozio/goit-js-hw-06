const divBoxes = document.getElementById("boxes");
const amounter = document.querySelector("input");
const createBtn = document.querySelector("#controls [data-create]");
const destroyBtn = document.querySelector("#controls [data-destroy]");
createBtn.addEventListener("click", createBoxes(amounter.value));
destroyBtn.addEventListener("click", destroyBoxes());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement("div");
    boxes.style.width = `${30 + amount * 10}px`;
    boxes.style.height = `${30 + amount * 10}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(boxes);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
