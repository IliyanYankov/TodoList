const gridContainet = document.querySelector(".grid-container");
//const grid = document.querySelector(".grid");
const gridAll = document.querySelectorAll(".grid");
const grid = document.querySelector(".grid");

let array = [];
let player = "X";
gridAll.forEach((grid, index) => {
  grid.addEventListener("click", (event) => {
    let playerChoise = choise();

    grid.textContent = playerChoise;
    event.target.style.pointerEvents = "none";

    array[index] = grid.textContent;

    checkWinner(event);
  });
});

function choise() {
  if (player === "X") {
    return (player = "O");
  } else {
    return (player = "X");
  }
}

function checkWinner(e) {
  if (
    (array[0] === "X" && array[1] === "X" && array[2] === "X") ||
    (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
    (array[6] === "X" && array[7] === "X" && array[8] === "X")
  ) {
    alert("Whinner X");

    restartGame();
  } else if (
    (array[0] === "O" && array[1] === "O" && array[2] === "O") ||
    (array[3] === "O" && array[4] === "O" && array[5] === "O") ||
    (array[6] === "O" && array[7] === "O" && array[8] === "O")
  ) {
    alert("Whinner O");

    restartGame();
  } else if (
    (array[2] === "O" && array[4] === "O" && array[6] === "O") ||
    (array[0] === "O" && array[4] === "O" && array[8] === "O")
  ) {
    alert("Whinner O");

    restartGame();
  } else if (
    (array[2] === "X" && array[4] === "X" && array[6] === "X") ||
    (array[0] === "X" && array[4] === "X" && array[8] === "X")
  ) {
    alert("Whinner X");

    restartGame();
  } else {
    for (let i = 0; i < array.length; i++) {
      if (!(array[i] === undefined)  && (i === 8)) {
        console.log(array);
      }
    }
  }
}

function restartGame() {
  array = [];
  gridAll.forEach((grid) => {
    grid.textContent = "";
    grid.style.pointerEvents = "all";
  });
}
