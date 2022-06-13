const changeBtnLogin = document.getElementById("changeBtnLogin");
const loginForm = document.getElementById("formLogin");
const nameInputLogin = document.getElementById("nameInput");
const passwordLoginInput = document.getElementById("passwordInput");
const submitLogin = document.getElementById("inputButtonLog");

const registrationForm = document.getElementById("registrationFrom");
const changeBtnReg = document.getElementById("changeBtnReg");
const nameReg = document.getElementById("nameRegInput");
const passwordReg = document.getElementById("passwordRegInput");
const emailReg = document.getElementById("emailRegInput");
const numberReg = document.getElementById("phoneRegInput");
const submitReg = document.getElementById("inputButtonReg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault;
  let error = [];
  if (nameInputLogin == "") {
    error.push("Please enter the username");
  }
  if (passwordLoginInput == "") {
    error.push("Please enter the password");
  }
  if (!validationLocalStorage()) {
    error.push("Please enter the correct username or password");
  }

  console.log(error);
});

changeBtnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("toggle");
  registrationForm.classList.toggle("toggle");
});

changeBtnReg.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.toggle("toggle");
  registrationForm.classList.remove("toggle");
});

submitReg.addEventListener("click", saveLocalStorage);

function saveLocalStorage(e) {
  e.preventDefault();
  let arr;
  if (localStorage.getItem("login") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("login"));
  }
  arr.push(nameReg.value, passwordReg.value, emailReg.value, numberReg.value);
  localStorage.setItem("login", JSON.stringify(arr));
}

function claerFields() {
  passwordReg.textContent = "";
  nameReg.textContent = "";
  numberReg.textContent = "";
  emailReg.textContent = "";
  passwordLoginInput.textContent = "";
  nameInputLogin.textContent = "";
}

const validationLocalStorage = () => {
  let passwordLog = false;
  let nameLog = false;
  let arr;

  if (localStorage.getItem("login") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("login"));
  }

  for (let i = 0; i < arr.length; i++) {
    if (nameInputLogin.value === arr[i]) {
      passwordLog = true;
    }
    if (passwordLoginInput.value === arr[i]) {
      nameLog = true;
    }
  }
  if (passwordLog === true && nameLog === true) {
    return true;
  }
};

// console.log(validationLocalStorage());
