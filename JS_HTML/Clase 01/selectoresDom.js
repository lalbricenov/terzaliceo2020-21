// querySelector sirve para seleccionar elementos del DOM usando selectores de css
let lista = document.querySelector("#miLista");
console.log(lista);
// lista.style.display = "none";
lista.style.backgroundColor = "purple";
let btn = document.querySelector("#btnOcultar");

function ocultarLista() {
  lista.style.display = "none";
}
// ocultarLista es una funcion que se va a ejecutar cuando se le haga click al boton
// event listener
btn.onclick = ocultarLista;
