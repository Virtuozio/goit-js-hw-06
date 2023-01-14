const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;
  console.log(login.value, password.value);
  if (login.value === "" || password.value === "") {
    return alert("Будь-ласка заповніть усі поля!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
