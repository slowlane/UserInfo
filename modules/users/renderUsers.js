import { getUser } from "./users.js";
import { showModal } from "../modal/modal.js";

//Logik för uppritning av personer
export function renderUsers(users){
  const userList = document.getElementById('user-list');
  users.map((user) => {
    
    let img = document.createElement('img');
    let paragraph = document.createElement('p');
    let li = document.createElement('li');
    
    img.src=`${user.avatar}`;
    li.appendChild(img);
    li.classList.add('person');

    paragraph.innerText = user.first_name;
    li.appendChild(paragraph);


    userList.appendChild(li);
    

  });
  addClickListener(users, userList);
}

function addClickListener(users, userList){
  userList.addEventListener('click', async (e) => {
    const name = e.target.querySelector('p').textContent;
    const user = users.filter((person) => person.first_name === name);
    const userId = user[0].id;
    const person = await getUser(userId);
    showModal(person);
  })
}