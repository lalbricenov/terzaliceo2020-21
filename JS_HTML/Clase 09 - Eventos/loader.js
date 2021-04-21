let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

function triangle(x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x1, y1);
  ctx.fill();
  ctx.stroke();
}
function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
function rectangle(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//rectángulos
// ctx.fillStyle = "red";
// rgba> red, green, blue, alpha. alpha quiere decir transparencia
// ctx.fillStyle = "rgba(0,0,200, 0.5)";
// ctx.strokeStyle = "black";
// Los dos primeros parámetros son las coordenadas x y y de la esquina superior izquierda del rectángulo. Los otros dos son el ancho y el alto del rectángulo

// ctx.fillRect(100, 200, 200, 100);
// ctx.fillRect(200, 100, 100, 200);

// // Para borrar se usa clearRect
// ctx.clearRect(150, 225, 100, 50);

// // paths: conjuntos de líneas
// // Triangulo
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 100);
// ctx.lineTo(200, 0);
// ctx.lineTo(200, 200);
// ctx.stroke();

// // Arco de circunferencia
// ctx.beginPath();
// ctx.arc(100, 100, 100, 0, Math.PI, true);
// ctx.lineTo(300, 100);
// ctx.stroke();
// ctx.fill();

ctx.fillStyle = "red";
ctx.strokeStyle = "blue";
triangle(50, 50, 200, 100, 100, 300);

ctx.fillStyle = "green";
ctx.strokeStyle = "purple";
triangle(60, 60, 230, 120, 100, 300);
circle(150, 20, 20);

ctx.fillStyle = "rgba(0,0,0,0)";
ctx.lineWidth = 3;
ctx.strokeStyle = "rgba(50,250,50,0.3)";
rectangle(100, 200, 100, 100);

ctx.beginPath();
ctx.moveTo(200, 300);
ctx.quadraticCurveTo(200, 200, 350, 70);
ctx.stroke();

let ballImg = new Image();
let finishedLoading = false;
async function loadAssets() {
  ballImg.src = await "Soccerball.svg";
}

// while (!assetsLoaded) {
//   console.log("loading");
// }
// ctx.drawImage(ballImg, 20, 20, 30, 30);
// ctx.drawImage(ballImg, 200, 20, 30, 30);
// ballImg.onload = function () {
// };

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  darthVader:
    "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg",
  yoda: "http://www.html5canvastutorials.com/demos/assets/yoda.jpg",
  soccerBall: "Soccerball.svg",
};
function run(images) {
  ctx.drawImage(images.soccerBall, 20, 20, 30, 30);
  ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
}
loadImages(sources, run);
