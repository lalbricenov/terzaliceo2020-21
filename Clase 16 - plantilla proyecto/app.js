import {canvas, drawRotated, images} from './initialize.js'
import {ctx, drawObj, run, resume, pause, running, dT, mainInterval} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse, moverse

// Creo un array para almacenar todas las particulas
let balones = []

// console.log(images)
let Balon;
let Nave;


let puntaje = 0;
function mostrarPuntaje(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(`Puntaje: ${puntaje}`, 10, 50);
}

function algunaSeSalio(){
    for (let balon of balones){
        // se salió?
        if(balon.x >= 400 + balon.r || balon.x <= -balon.r || 
            balon.y >= 400 + balon.r || balon.y <= -balon.r )
        {
            return true;    
        }
    }
    return false;
}

drawObj.setup = function(){
    Balon = {
        //PROPIEDADES
        x:200,
        y:200,
        r:15,
        vX: 50,// px por segundo
        vY: -50,
        w:60,// grados por segundo
        angle: 0,
        imagen: images.soccerBall,
        //METODOS
        dibujarse:function(){
            // console.log(this.imagen)
            drawRotated(this.imagen, this.x, this.y,this.angle, 2*this.r, 2*this.r);
            // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
            // ctx.beginPath();
            // ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
            // ctx.fillStyle = "rgba(0,0,0,0.5)"
            // ctx.stroke();
            // ctx.fill();
        },
        moverse:function(){
            this.x = this.x + this.vX * dT/1000;
            this.y = this.y + this.vY * dT/1000;
            this.angle = this.angle + this.w *dT/1000;
        }
    
    };

    Nave = {
        //PROPIEDADES
        x:200,
        y:200,
        r:15,
        v:50;
        // Variable booleana que determina si la nave está en movimiento o no
        enMovimiento: false,
        angle: 45,
        imagen: images.spaceShip,
        //METODOS
        dibujarse:function(){
            drawRotated(this.imagen, this.x, this.y,this.angle-45, 2*this.r, 2*this.r);
        },
        moverse:function(){
            if (this.enMovimiento)
            {
                this.x = this.x + this.v*Math. * dT/1000;
                this.y = this.y + this.vY * dT/1000;
            }
        }
    
    }
    
}
drawObj.draw =  function(){
    ctx.clearRect(0,0,400,400);
    if (puntaje >= 10){
        // detener el juego
        pause();
        // muestre el mensaje de que ganó
        ctx.font = "50px Arial";
        ctx.fillStyle = "green"
        ctx.fillText(`GANASTE`, 80, 180);
        
    }
    // Si alguna de las particulas se salió, y aún no tiene 10 puntos
    // pierde
    if (puntaje < 10 && algunaSeSalio() ){
        // detener el juego
        clearInterval(mainInterval);
        // muestrar el mensaje de que perdio
        ctx.font = "50px Arial";
        ctx.fillStyle = "red"
        ctx.fillText(`PERDISTE`, 80, 180);
    }
    mostrarPuntaje()
    for (let balon of balones){
        // console.log(particula)
        balon.dibujarse();
        balon.moverse();
    }
    Nave.dibujarse();
    Nave.moverse();
}

run();

function crearParticula(){
    let nuevoBalon = Object.create(Balon)
    puntaje = puntaje + 1;
    // Asignarle al nuevo balón su correspondiente imagen
    // nuevoBalon.imagen = images.soccerBall;
    //asignar x, y, vX y vY
    nuevoBalon.x = 200;
    nuevoBalon.y = 200;
    // Genero el angulo de manera aleatoria
    // Math.random genera un numero aleatorio entre 0 y 1
    let ang = 2 * Math.PI * Math.random()
    // let v = numero aleatorio
    nuevoBalon.vX = 10 * Math.cos(ang)
    nuevoBalon.vY = 10 * Math.sin(ang)

    // añado el nuevo balón al array de balones
    balones.push(nuevoBalon)
    // console.log(balones)
}

// Al hacer click se va a ejecutar la función crear partícula
canvas.onclick = crearParticula


function teclaPresionada(e){
    if (e.code =='Space')
    {
        if (running) pause();
        else resume();

    }
    if (e.code == 'KeyW')
    {
        Nave.enMovimiento = true
        console.log('arrancar')
    }
    console.log(e.code)
}
function teclaLevantada(e)
{
    if (e.code == 'KeyW')
    {
        Nave.enMovimiento = false;
        console.log('detenerse')
    }
}
document.onkeydown = teclaPresionada;
document.onkeyup = teclaLevantada;

function mouseMovido(e){
    let newAng = Math.atan((e.offsetY - Nave.y)/(e.offsetX - Nave.x))* 180/Math.PI;
    if (e.offsetX > Nave.x) newAng += 180
    Nave.angle = newAng;
    console.log(newAng)
}
document.onmousemove = mouseMovido;





