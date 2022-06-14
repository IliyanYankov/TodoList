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
const bank = new Bank(incomeInput, spendInput, placeInput);

const nameUser = window.prompt("Enter name");
console.log(nameUser);

button.addEventListener("click", () => {
  bank.show();
  bank.clearFieds();
  username = nameUser
  state = {
    totalIncome: totalIncome.textContent,
    moneyIncome: moneyIncome.textContent,
    spendIncome: spendIncome.textContent,
  }
  storage_state = localStorage.getItem('all_state')
  if (storage_state === null) {
    localStorage.setItem('all_state', JSON.stringify({}))
  } 
  storage_state = JSON.parse(localStorage.getItem('all_state'))

  storage_state[nameUser] = state
  localStorage.setItem('all_state', JSON.stringify(storage_state))
  console.log(localStorage.getItem('all_state'));
});
