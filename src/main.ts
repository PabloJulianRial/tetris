import "./style.scss";
import { Shape, shapesArray } from "./shapes";
import { nextShapesArray } from "./nextShapes";
import { users } from "./users";

const level =document.querySelector<HTMLDivElement>(".game__display__stats__level")
const score =document.querySelector<HTMLDivElement>(".game__display__stats__score")
const lines =document.querySelector<HTMLDivElement>(".game__display__stats__lines")
const user =document.querySelector<HTMLDivElement>(".game__display__stats__user")
const scoreOne =document.querySelector<HTMLDivElement>(".game__display__scores__one")
const scoreTwo =document.querySelector<HTMLDivElement>(".game__display__scores__two")
const scoreThree =document.querySelector<HTMLDivElement>(".game__display__scores__three")
const scoreFour =document.querySelector<HTMLDivElement>(".game__display__scores__four")
const scoreFive =document.querySelector<HTMLDivElement>(".game__display__scores__five")
const scoreSix =document.querySelector<HTMLDivElement>(".game__display__scores__six")
const next = document.querySelector<HTMLButtonElement>(".game__display__next__item")

const canvas = document.getElementById("game__board") as HTMLCanvasElement;
const canvasNext1 = document.getElementById("next1") as HTMLCanvasElement;
const canvasNext2 = document.getElementById("next1") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const ctx1 = canvasNext1.getContext("2d");
const ctx2 = canvasNext2.getContext("2d");

if (!ctx || !next || !ctx1 || !ctx2 || !level || !score || !lines || !user || !scoreOne || !scoreTwo ||
   !scoreThree || !scoreFour || !scoreFive || !scoreSix) {
  throw new Error("Error rendering game");
}

let currentLevel: number = 10
let currentScore: number = 1
let currentLines: number = 10
let currentShape: Shape = shapesArray[1]
let currentNextShape: Shape = nextShapesArray[1]
let fallInterval: number = 2000  - 6000*currentLevel/35

level.innerText = `LEVEL ${currentLevel}`
score.innerText = `Score  ${currentScore}`
lines.innerText = `Lines ${currentLines}`
user.innerText = `User: ${users[0].username}`
scoreOne.innerText = `1st ${users[1].username} ${users[1].score}`
scoreTwo.innerText = `2nd ${users[1].username} ${users[2].score}`
scoreThree.innerText = `3rd ${users[1].username} ${users[3].score}`
scoreFour.innerText = `4th ${users[1].username} ${users[4].score}`
scoreFive.innerText = `5th ${users[1].username} ${users[5].score}`
scoreSix.innerText = `6th ${users[1].username} ${users[6].score}`

const generateRandomShape = () : Shape  =>{
  currentShape = shapesArray[Math.floor(Math.random() * shapesArray.length)]
 return currentShape
}

const drawRandomShape = () =>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = 'black'
  ctx.fillStyle = `${currentShape.color}`
  currentShape.lineTo.forEach((line) =>{
    const x = line[0]
    const y = line[1] + currentShape.speed
    ctx.lineTo(x, y)
    
  })
  ctx.stroke();
  ctx.fill()
  currentShape.speed += 10
}

const drawNext1Shape = (shape: Shape) =>{
  ctx1.beginPath();
  ctx1.moveTo(30, 20)
  ctx1.strokeStyle = 'black'
  ctx1.fillStyle = `${shape.color}`
  shape.lineTo.forEach((line) =>{
    const x = line[0]
    const y = line[1]
    ctx1.lineTo(x, y)
  })
  ctx1.stroke();
  ctx1.fill()
}
const clearCanvas = () => {
  ctx.clearRect(0, 0, 240, 400);
};



setInterval(drawRandomShape, fallInterval)

//drawNext1Shape(generateRandomShape())

