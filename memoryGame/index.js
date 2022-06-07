const divGrid = document.querySelector(".showImages");

const getData = [
  { imageSrc: "./kroko.jpg", imageName: "kroko" },
  { imageSrc: "./mishka.jpg", imageName: "mishka" },
  { imageSrc: "./ptica.jpg", imageName: "prica" },
  { imageSrc: "./kroko.jpg", imageName: "kroko" },
  { imageSrc: "./mishka.jpg", imageName: "mishka" },
  { imageSrc: "./ptica.jpg", imageName: "prica" },
];

function createHtml() {
  getData.forEach((data) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    back.classList.add("back");
    card.classList.add("grid");

    face.src = data.imageSrc;
    face.setAttribute("name", data.imageName);

    divGrid.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    flipAndCheck(card, face.name);
  });
}

createHtml();

function flipAndCheck(cards, face) {
  cards.addEventListener("click", (e) => {
    e.preventDefault();
    cards.classList.toggle("toggle");
    const clickedCard = e.target;
    clickedCard.classList.add("ok");

    const flipped = document.querySelectorAll(".ok");
    if (flipped.length === 2) {
      setTimeout(() => {
        if (
          flipped[0].previousSibling.name === flipped[1].previousSibling.name
        ) {
          flipped[0].classList.remove("ok");
          flipped[1].classList.remove("ok");
          flipped[0].parentElement.style.pointerEvents = "none";
          flipped[1].parentElement.style.pointerEvents = "none";
        } else {
          flipped[0].parentElement.classList.remove("toggle");
          flipped[1].parentElement.classList.remove("toggle");
          flipped[0].classList.remove("ok");
          flipped[1].classList.remove("ok");
        }
      }, 1000);
    }

    console.log(flipped.length);
    restartGame(cards);
  });
}

function restartGame() {
  let i = 0;
  const cards = document.querySelectorAll(".grid");

  if (cards.classList === "toggle") {
  }

  cards.forEach((card) => {
    if (card.classList[1] === "toggle") {
      i++;
      if (i === 6) {
        cards.forEach((c) => {
          setTimeout(() => {
            c.classList.remove("toggle");
          }, 1000);
        });
        alert("You Win!");
      }
    }
  });
}
