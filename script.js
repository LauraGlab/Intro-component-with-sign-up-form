const applyButton = document.querySelector("button");
applyButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstname = form["firstname"].value;
  const lastname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstname === "") {
    addError("firstname");
  } else {
    removeError("firstname");
  }
  if (lastname === "") {
    addError("lastname");
  } else {
    removeError("lastname");
  }
  if (email === "") {
    addError("email");
  } else {
    removeError("email");
  }
  if (password === "") {
    addError("password");
  } else {
    removeError("password");
  }
});

function addError(input) {
  const formControl = form[input].parentNode;
  formControl.classList.add("error");
  const small = form[input].parentNode.querySelector("small");
  small.classList.add("error");
}

function removeError(input) {
  const formControl = form[input].parentNode;
  formControl.classList.remove("error");
  const small = form[input].parentNode.querySelector("small");
  small.classList.remove("error");
}
