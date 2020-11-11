let canvas = document.querySelector("#canvas1");
let ctx = canvas.getContext("2d");
function circulo(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
// Eventos en javascript
// event listener
// Event listener para cuando se haga click en el canvas
// el evento se puede pasar como un argumento a la función que se ejecuta al hacer click
canvas.onclick = function (evento) {
  console.log(evento.offsetX, evento.offsetY);
  circulo(evento.offsetX, evento.offsetY, 15);
  //   console.log(evento);
  //   console.log(
  //     `Se hizo click en el canvas en las coordenadas ${evento.clientX}, ${evento.clientY} con respecto a la esquina superior izquierda de la pagina`
  //   );
  //   console.log(
  //     `Se hizo click en el canvas en las coordenadas ${evento.offsetX}, ${evento.offsetY} con respecto a la esquina superior izquierda del canvas`
  //   );
};
