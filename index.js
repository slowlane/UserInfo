const userDiv = document.getElementById('users');
const userList = document.getElementById('user-list');


const users = [];

//Hämta användarna
fetch('https://reqres.in/api/users/')
  .then(res => {
    if (!res.ok) {
      throw new Error('Nätverksrespons inte ok');
    }
    return res.json();
  })
  .then(data => {
    initializePage(data);
  })
  .catch(error => console.error('Det har uppstått ett problem vid hämtning av data: ', error));


//Skapa eventlistener för att lyssna på klicks på personer och hämta användaren
userList.addEventListener('click', async (e) => {
    const name = e.target.querySelector('p').textContent;
    const user = users.filter((person) => person.first_name === name);
    const userId = user[0].id;
    const person = await getUser(userId);
    showModal(person);
})


// Lägger till personer till arrayen och tillkallar renderUsers för att rita på skärmen
function initializePage(data){
    for(i = 0; i < data.data.length; i++){
      users.push(data.data[i]);
    }

    renderUsers();


}

//Logik för uppritning av personer
function renderUsers(){
  users.map((user) => {
    let img = document.createElement('img');
    let paragraph = document.createElement('p');
    let li = document.createElement('li');
    
    img.src=`${user.avatar}`;
    li.appendChild(img);
    li.classList.add('person');

    paragraph.innerText = user.first_name;
    li.appendChild(paragraph);
    
    // console.log(user);


    userList.appendChild(li);

  })
}

async function getUser(id){

  const userData = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await userData.json();
  console.log(user);
  return user;
  
}




//modal funktioner
function showModal(person) {
  createModal(person);

  window.addEventListener("click", outsideClick);
}

function hideModal() {
  var modal = document.getElementById("myModal");
  var modalContent = modal.querySelector('div');

  modalContent.innerHTML = '';
  modal.style.display = "none";


  window.removeEventListener("click", outsideClick);
}


function createModal(person){
  var modal = document.getElementById("myModal");
  var modalContent = modal.querySelector('div');


  let avatar = document.createElement('img');
  avatar.src = person.data.avatar;

  let name = document.createElement('p');
  name.textContent = `${person.data.first_name} ${person.data.last_name}`;

  let email = document.createElement('p');
  email.textContent = person.data.email;



  modalContent.appendChild(avatar);
  modalContent.appendChild(email);
  modalContent.appendChild(name);
  modal.style.display = "block";
}





function outsideClick(event) {
  var modal = document.getElementById("myModal");
  var modalContent = modal.querySelector('div');
  if (!modalContent.contains(event.target)) {
    console.log("hi");
    hideModal();
  }
}
