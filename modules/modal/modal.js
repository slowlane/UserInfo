import { createModalPersonCard } from "./modalPersonCard.js";

//Skapa modalen
export function showModal(data) {
  createModal(data);
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
function createModal(data){
  createModalPersonCard(data);
}