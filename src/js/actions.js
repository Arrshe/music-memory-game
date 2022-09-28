export function showCardContent(cardId) {
  document.getElementById(cardId).classList.add("show");
}

export function hideCardContent(cardId) {
  document.getElementById(cardId).classList.remove("show");
}
