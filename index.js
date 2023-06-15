const userDiv = document.getElementById('users');
const userList = document.getElementById('user-list');


const users = [];
fetch('https://reqres.in/api/users/')
  .then(res => {
    if (!res.ok) {
      throw new Error('Nätverksrespons inte ok');
    }
    return res.json();
  })
  .then(data => {
    for(i = 0; i < data.data.length; i++){
      users.push(data.data[i]);
    }

    users.map((user) => {
      console.log(user);
      let li = document.createElement('li');
      li.classList.add('person');
      li.textContent = user.id;
      userList.appendChild(li)
    })
  })
  .catch(error => console.error('Det har uppstått ett probled vid hämtning av data: ', error));
