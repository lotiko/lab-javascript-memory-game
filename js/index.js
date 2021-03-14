const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
const pairsClickedEl = document.getElementById("pairs-clicked");
const pairsGuessedEl = document.getElementById("pairs-guessed");
const restart = document.getElementById("restart");
let cardPicked = 0;

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      cardPicked++;
      cardPicked <= 2 && memoryGame.addPickedCard(card) && card.classList.toggle("turned");

      if (cardPicked === 2) {
        // check if pairs is guessed and add one to pairsclicked element
        let findPairs = memoryGame.checkIfPair(...memoryGame.getNamesPickedCards());
        let newScoreClicked = Number(pairsClickedEl.textContent) + 1;
        pairsClickedEl.textContent = newScoreClicked;
        if (findPairs) {
          // if guessed add one score guessed a
          let newScoreGuessed = Number(pairsGuessedEl.textContent) + 1;
          pairsGuessedEl.textContent = newScoreGuessed;
          memoryGame.resetPickedCards();
          cardPicked = 0;
        } else {
          setTimeout(reTurnCard, 2000, [...memoryGame.pickedCards]);
          memoryGame.resetPickedCards();
        }
      }
      if (memoryGame.isFinished()) {
        alert("You Won!!!!!!");
      }
    });
  });
  restart.addEventListener("click", () => {
    memoryGame.restart();
    pairsClickedEl.textContent = 0;
    pairsGuessedEl.textContent = 0;
    let html = "";
    memoryGame.cards.forEach((pic) => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="back" name="${pic.img}"></div>`;
      html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
      html += `</div>`;
    });

    // Add all the divs to the HTML
    document.querySelector("#memory-board").innerHTML = html;
  });
});

function reTurnCard(arrCards) {
  arrCards.forEach((card) => card.classList.toggle("turned"));
  cardPicked = 0;
}
