//Hämta användare från API:et
export async function getUser(id){
  const userData = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await userData.json();
  return user;
  
}

//Hämta alla användare från API:et
export async function getUsers(){
  try{
    const userData = await fetch('https://reqres.in/api/users/');
    const users = await userData.json();
    return users.data;
  }
  catch(e){
    console.log(e);
  }
}


