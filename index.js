const userDiv = document.getElementById('users');

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
  })
  .catch(error => console.error('Det har uppstått ett probled vid hämtning av data: ', error));

console.log(users);