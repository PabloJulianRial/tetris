import "./style.scss";
import { Shape, shapesArray } from "./shapes";
import { nextShapesArray } from "./nextShapes";
import { users } from "./users";

const level = document.querySelector<HTMLDivElement>(
  ".game__display__stats__level"
);
const score = document.querySelector<HTMLDivElement>(
  ".game__display__stats__score"
);
const lines = document.querySelector<HTMLDivElement>(
  ".game__display__stats__lines"
);
const user = document.querySelector<HTMLDivElement>(
  ".game__display__stats__user"
);
const scoreOne = document.querySelector<HTMLDivElement>(
  ".game__display__scores__one"
);
const scoreTwo = document.querySelector<HTMLDivElement>(
  ".game__display__scores__two"
);
const scoreThree = document.querySelector<HTMLDivElement>(
  ".game__display__scores__three"
);
const scoreFour = document.querySelector<HTMLDivElement>(
  ".game__display__scores__four"
);
const scoreFive = document.querySelector<HTMLDivElement>(
  ".game__display__scores__five"
);
const scoreSix = document.querySelector<HTMLDivElement>(
  ".game__display__scores__six"
);
const next = document.querySelector<HTMLButtonElement>(
  ".game__display__next__item"
);

const canvas = document.getElementById("game__board") as HTMLCanvasElement;
const canvasNext1 = document.getElementById("next1") as HTMLCanvasElement;
const canvasNext2 = document.getElementById("next1") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const ctx1 = canvasNext1.getContext("2d");
const ctx2 = canvasNext2.getContext("2d");

if (
  !ctx ||
  !next ||
  !ctx1 ||
  !ctx2 ||
  !level ||
  !score ||
  !lines ||
  !user ||
  !scoreOne ||
  !scoreTwo ||
  !scoreThree ||
  !scoreFour ||
  !scoreFive ||
  !scoreSix
) {
  throw new Error("Error rendering game");
}

//----------the array of shapes to fall-----------
let generatedShapesArray: Shape[] = [];

for (let shapeIndex: number = 0; shapeIndex < 500; shapeIndex++) {
  const newShape: Shape =
    shapesArray[Math.floor(Math.random() * shapesArray.length)];
  generatedShapesArray.unshift(newShape);
}
let currentShape = generatedShapesArray[0];
let currentLevel: number = 10;
let currentScore: number = 1;
let currentLines: number = 10;
let fallInterval: number = 80;

level.innerText = `LEVEL ${currentLevel}`;
score.innerText = `Score  ${currentScore}`;
lines.innerText = `Lines ${currentLines}`;
user.innerText = `User: ${users[0].username}`;
scoreOne.innerText = `1st ${users[1].username} ${users[1].score}`;
scoreTwo.innerText = `2nd ${users[2].username} ${users[2].score}`;
scoreThree.innerText = `3rd ${users[3].username} ${users[3].score}`;
scoreFour.innerText = `4th ${users[4].username} ${users[4].score}`;
scoreFive.innerText = `5th ${users[5].username} ${users[5].score}`;
scoreSix.innerText = `6th ${users[6].username} ${users[6].score}`;

//--------logic to draw the shape------------------
const drawRandomShape = () => {
  //-------checking if the shape touches the bottom or the sides---------------
  if (
    currentShape.yPos < 380 &&
    currentShape.xPosStart >= 0 &&
    currentShape.xPosEnd < 260
  ) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = `${currentShape.color}`;
    currentShape.lineTo.forEach((line) => {
      const x = line[0];
      const y = line[1] + currentShape.yPos;
      ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.fill();
    currentShape.yPos += 1;
    drawNext1Shape();
    
  }
};
const drawNext1Shape = () => {
  nextShapesArray.forEach((nextShape) => {
    if (generatedShapesArray[1].id === nextShape.id) {
      ctx1.beginPath();
      ctx1.moveTo(30, 20);
      ctx1.strokeStyle = "black";
      ctx1.fillStyle = `${nextShape.color}`;
      nextShape.lineTo.forEach((line) => {
        const x = line[0];
        const y = line[1];
        ctx1.lineTo(x, y);
      });
      ctx1.stroke();
      ctx1.fill();
    }
  });
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft") {
    currentShape.lineTo.forEach((point) => {
      point[0] -= 20;
    });
    currentShape.xPosStart -= 20;
    currentShape.xPosEnd -= 20;
  } else if (event.key === "ArrowRight") {
    currentShape.lineTo.forEach((point) => {
      point[0] += 20;
    });
    currentShape.xPosStart += 20;
    currentShape.xPosEnd += 20;
  } else if (event.key === "ArrowDown") {
    currentShape.lineTo.forEach((point) => {
      currentShape.yPos += 1;
    });
  }
};

document.addEventListener("keydown", handleKeyDown);

setInterval(drawRandomShape, fallInterval);
