fetch("")
fetch('https://reqres.in/api/users/')
  .then(res => {
    if (!res.ok) {
      throw new Error('Nätverksrespons inte ok');
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Det har uppstått ett probled vid hämtning av data: ', error));