const inputField = document.querySelector(".input");
const submitBtn = document.querySelector(".button");
const message = document.querySelector(".paragraph");

submitBtn.addEventListener("click", checkValidation);

function checkValidation(e) {
  e.preventDefault;
  const valueField = inputField.value;
  if (valueField.length < 10) {
    message.style.color = "red";
    message.textContent = "You email is less than 10 charchaters";
  }
  if (!valueField.includes("@gmail.com")) {
    message.style.color = "red";
    message.textContent = "You email is invalid";
  } else {
    message.style.color = "green";
    message.textContent = "You email is aproved";
  }
}
