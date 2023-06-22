import { renderUsers } from './modules/users/renderUsers.js';
import { getUsers } from './modules/users/users.js';

//Hämta användare och initialisera sidan
let userArray = [];
getUsers().then((users) => {
   userArray = users;
}).then(() => {
  initializePage(userArray);
});

function initializePage(users){
  renderUsers(users);
}

