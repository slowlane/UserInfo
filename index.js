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


//Skapa eventlistener för att lyssna på klicks på personer
userList.addEventListener('click', (e) => {
    const name = e.target.querySelector('p').textContent;
    const user = users.filter((person) => person.first_name === name);
    console.log(user);
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
    
    console.log(user);


    userList.appendChild(li);

  })
}


