const textInput = document.getElementById("validation-input");
const inputLength = textInput.getAttribute("data-length");
console.log(inputLength);

textInput.addEventListener("blur", () => {
  if (textInput.value.length == inputLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
