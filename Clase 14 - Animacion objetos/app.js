import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

let x = 50;
let y = 300;
// let dX = 5;
// let dY = -2;
let vX = 5;
let v0Y = -40;
let aY = 2;
let t = 0;
drawObj.draw =  function(){
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.soccerBall, x, y, 30, 30);
  ctx.drawImage(images.yoda, 200, 200, 50, 50);
}
run()

