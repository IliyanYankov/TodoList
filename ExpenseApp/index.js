//Select

const allInputs = document.querySelectorAll(".input");
const amount = document.querySelector(".amount");
const date = document.querySelector(".date");
const nameSpend = document.querySelector(".expense-made");
const submitButton = document.querySelector(".submit");
const table = document.querySelector(".table");

submitButton.addEventListener("click", createTable);
table.addEventListener("click", deleteColumn);

function createTable(e) {
  e.preventDefault;
  const tableRow = document.createElement("tr");

  allInputs.forEach((input) => {
    const tableData = document.createElement("td");
    tableData.textContent = input.value;
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  });

  tableRow.lastElementChild.textContent = "X";
  tableRow.lastElementChild.classList.add("button");
  tableRow.lastElementChild.previousSibling.textContent = "$" + amount.value;
  amount.value = "";
  date.value = "";
  nameSpend.value = "";
}

function deleteColumn(e) {
  console.log(e.target);
  const getData = e.target;
  if (getData.className === "button") {
    table.removeChild(getData.parentElement);
  }
}
