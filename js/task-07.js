const text = document.getElementById("text");
const controler = document.getElementById("font-size-control");

controler.addEventListener("input", () => {
  text.style.fontSize = `${controler.value}px`;
});
console.log(text.style.fontSize);
