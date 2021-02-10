let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");
let drawObj={draw:function(){}, setup:function(){}}
let images = {}
let mainInterval;
let dT = 30;
let running  = false;
let initialSetUpDone = false;
function loadImages(sources, callback) {
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        // console.log("aca se define IMAGES")
        // console.log(images);
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
let sources = {
  darthVader:
    "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg",
  yoda: "http://www.html5canvastutorials.com/demos/assets/yoda.jpg",
  soccerBall:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg",
  spaceShip:
  "https://freesvg.org/img/SimpleSpaceship2.png"
};
function resume() {
  if(!initialSetUpDone){
    drawObj.setup();
  }
  if (running == false)
  {
    mainInterval = window.setInterval(drawObj.draw, dT);
    running = true;
    console.log("resuming");
  }
}
function pause(){
  if (running == true)
  {
    console.log(mainInterval);
    window.clearInterval(mainInterval);
    running = false;
    console.log("Stopping");
  }
}
function run(){
  loadImages(sources, resume);
}

function drawRotated(image, x, y, angle, w, h)
{
  ctx.save();

  ctx.translate(x, y);

  ctx.rotate(angle * Math.PI/180);

  ctx.drawImage(image, -w/2, -h/2, w, h);
  ctx.restore();
}
// La variable images contiene las imagenes cargadas

// console.log(IMAGES)

export {canvas, ctx, drawObj, images, dT, run, resume, running, pause, mainInterval, drawRotated, initialSetUpDone}