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
      let img = document.createElement('img');
      let li = document.createElement('li');
      
      img.src=`${user.avatar}`;
      li.appendChild(img);
      li.classList.add('person');
      
      console.log(user);


      userList.appendChild(li);

    })
  })
  .catch(error => console.error('Det har uppstått ett probled vid hämtning av data: ', error));
