const frmPesquisa = document.querySelector("form");
frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;
    const apiKey = '582dc8d2';
    if (pesquisa == "") {
        alert('Preencha o campo!');
        return;
    }
   
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(json => console.log(json));

}

const carregaLista = (json) => {
const lista = document.querySelector("div.lista");
lista.innerHTML = "";


json.Search.forEach(element => (
    console.log(element);
 
   let item = document.createElement("div");

))


}