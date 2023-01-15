const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Будь-ласка заповніть усі поля!");
  } else {
    console.log({ email: email.value, password: password.value });
    form.reset();
  }
});
