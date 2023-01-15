const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

console.log(input.querySelectorAll);
input.addEventListener("input", (event) => {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
