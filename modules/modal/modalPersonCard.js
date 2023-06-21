//Skapa innehållet för modalen (personer)
export function createModalPersonCard(person){
  const modal = document.getElementById("myModal");

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  let avatar = document.createElement('img');
  avatar.src = person.data.avatar;

  let name = document.createElement('p');
  name.textContent = `${person.data.first_name} ${person.data.last_name}`;

  let email = document.createElement('p');
  email.textContent = person.data.email;

  modalContent.appendChild(avatar);
  modalContent.appendChild(email);
  modalContent.appendChild(name);
  modal.appendChild(modalContent);


  modal.style.display = "block";
}