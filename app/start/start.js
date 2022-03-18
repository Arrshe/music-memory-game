import { bandsMock } from "../../assets/mock/cardContentMock";

let cardContentArray = [];
let cardContainer = document.getElementById("cardContainer");

function fillArray() {
  for (let i = 0; i < 2; i++) {
    cardContentArray.push(bandsMock);
  }
}

function createCardContent() {
  fillArray();
  cardContentArray.sort(function () {
    return Math.random() - 0.5;
  });
}

function createCard() {
  let card = document.createElement("div");
  card.appendChild(cardContainer);
}
