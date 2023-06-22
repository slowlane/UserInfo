import { renderModalPersonCard } from "./renderPersonModalCard.js";

//Skapa modalen
export function showModal(data) {
  createModalContent(data);
  window.addEventListener("click", outsideClick);
}

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.innerHTML = '';
  modal.style.display = "none";
  window.removeEventListener("click", outsideClick);
}

//Om man klickar utanför modal-innehållet så stängs modalen
function outsideClick(event) {
  const modalContent = document.querySelector('#myModal div');
  if (!modalContent.contains(event.target)) {
    hideModal();
  }
}

//Skapa modal-innehållet
function createModalContent(data){
  renderModalPersonCard(data);
}