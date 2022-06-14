class Bank {
  constructor(incomeInput, spendInput, placeInput) {
    this.incomeInput = incomeInput;
    this.spendInput = spendInput;
    this.placeInput = placeInput;
    this.clearFieds();
  }
  show() {
    let value = 0;
    spendIncome.textContent = this.spendInput.value;
    moneyIncome.textContent = this.incomeInput.value;
    value =
      parseFloat(this.incomeInput.value) - parseFloat(this.spendInput.value);

    totalIncome.textContent = Number(totalIncome.textContent) + value;
  }
  clearFieds() {
    incomeInput.value = "";
    spendInput.value = "";
    placeInput.value = "";
  }
}

const incomeInput = document.querySelector(".amountIncome");
const spendInput = document.querySelector(".amountspend");
const placeInput = document.querySelector(".amountplace");
const button = document.querySelector(".submit");

const moneyIncome = document.querySelector(".moneyIncome");
const totalIncome = document.querySelector(".totalMoney");
const spendIncome = document.querySelector(".spendMoney");
let array = [];
const bank = new Bank(incomeInput, spendInput, placeInput);

const nameUser = window.prompt("Enter name");
console.log(nameUser);

button.addEventListener("click", () => {
  bank.show();
  bank.clearFieds();
  array.push(
    totalIncome.textContent,
    moneyIncome.textContent,
    spendIncome.textContent
  );
  console.log(array);
});

let arrayPerson = ["Iliyan", "Ema", "Neli"];

arrayPerson.forEach((person, index) => {
  let array;
  console.log(index);
  if (localStorage.getItem(`${person[index]}`) === null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem(`${person[index]}`));
  }
  array.push(new Bank(incomeInput, spendIncome, placeInput));
});

function getFromLocalStorage() {
  let array;

  if (localStorage.getItem(`${nameUser}`) === null) {
    array = [];
  } else {
    array = JSON.parse(localStorage.getItem(`${nameUser}`));
  }
}

// function saveLocalStorage(e) {
//     e.preventDefault();
//     let arr;
//     if (localStorage.getItem("login") === null) {
//       arr = [];
//     } else {
//       arr = JSON.parse(localStorage.getItem("login"));
//     }
//     arr.push(nameReg.value, passwordReg.value, emailReg.value, numberReg.value);
//     localStorage.setItem("login", JSON.stringify(arr));
//   }

// const validationLocalStorage = () => {
//     let passwordLog = false;
//     let nameLog = false;
//     let arr;

//     if (localStorage.getItem("login") === null) {
//       arr = [];
//     } else {
//       arr = JSON.parse(localStorage.getItem("login"));
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (nameInputLogin.value === arr[i]) {
//         passwordLog = true;
//       }
//       if (passwordLoginInput.value === arr[i]) {
//         nameLog = true;
//       }
//     }
//     if (passwordLog === true && nameLog === true) {
//       return true;
//     }
//   };
