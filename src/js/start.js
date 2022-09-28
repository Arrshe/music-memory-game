import { showCardContent } from "./actions.js";

const bandsMock = [
  "Paramore",
  "My Chemical Romance",
  "Avril Lavigne",
  "Panic! at the disco",
  "Simple Plan",
  "Fall Out Boy",
  "A Day to Remember",
  "Rise Aganist",
  "Green Day",
];

let cardContentArray = [];
let cardContainer = document.getElementById("cardContainer");

function fillArray() {
  for (let i = 0; i < 2; i++) {
    bandsMock.forEach((band) => {
      cardContentArray.push(band);
    });
  }
}

function createCardContent() {
  fillArray();
  cardContentArray.sort(function () {
    return Math.random() - 0.5;
  });
}

function createCard(cardContent, cardId) {
  let cardContainer = document.createElement("li");
  cardContainer.classList.add("emory__cardContainer");
  cardContainer.setAttribute("id", `cardContainer-${cardId}`);
  document.getElementById("cardlist").appendChild(cardContainer);
  let card = document.createElement("div");
  card.classList.add("emory__card");
  card.setAttribute("id", `card-${cardId}`);
  document.getElementById(`cardContainer-${cardId}`).appendChild(card);
  card.onclick = function () {
    showCardContent(`card-${cardId}`);
  };
  let front = document.createElement("div");
  front.classList.add("emory__cardface--front");
  front.setAttribute("id", `front-${cardId}`);
  document.getElementById(`card-${cardId}`).appendChild(front);
  let back = document.createElement("div");
  back.classList.add("emory__cardface--back");
  back.setAttribute("id", `back-${cardId}`);
  document.getElementById(`card-${cardId}`).appendChild(back);
  let content = document.createElement("p");
  content.classList.add("emory__cardcontent");
  content.innerHTML = cardContent;
  document.getElementById(`back-${cardId}`).appendChild(content);
  let cardlogo = document.createElement("img");
  cardlogo.classList.add("emory__cardlogo");
  cardlogo.src = "../../assets/img/emory-logo.svg";
  document.getElementById(`front-${cardId}`).appendChild(cardlogo);
}

function createCardList() {
  let cardlist = document.createElement("ul");
  cardlist.classList.add("emory__cardlist");
  cardlist.setAttribute("id", "cardlist");
  cardContainer.appendChild(cardlist);
}

function fillCards() {
  let cardId = 0;
  cardContentArray.forEach((cardContent) => {
    createCard(cardContent, cardId);
    cardId++;
  });
}

createCardContent();
createCardList();
fillCards();
