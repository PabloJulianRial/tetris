import "./style.scss";
import { Shape, shapesArray } from "./shapes";
import { nextShapesArray } from "./nextShapes";
import { orderedScorersArray } from "./users";
 

const paint = document.querySelector<HTMLButtonElement>(".button__paint");
const game = document.querySelector<HTMLDivElement>(".game");
const form = document.querySelector<HTMLFormElement>("#form");
const tetrisMusic = document.querySelector<HTMLAudioElement>("#tetrisMusic");
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
const start = document.querySelector<HTMLButtonElement>(".button__start");
const lineDown = document.querySelector<HTMLButtonElement>(".button__lineDown");

const canvas = document.getElementById("game__board") as HTMLCanvasElement;
const canvasNext1 = document.getElementById("next1") as HTMLCanvasElement;

const ctx = canvas.getContext("2d");
const ctx1 = canvasNext1.getContext("2d");

if (
 
  !paint ||
  !start ||
  !tetrisMusic ||
  !form ||
  !game ||
  !ctx ||
  !next ||
  !ctx1 ||
  !lineDown ||
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
const shapesPerLevel = 500;
let randomShapes: Shape[] = [];
let fallenShapesArray: Shape[] = [];

const newShapesArray = [...shapesArray];

for (let i: number = 0; i < shapesPerLevel; i++) {
  const randomIndex: number = Math.floor(Math.random() * newShapesArray.length);
  const newShape: Shape = newShapesArray[randomIndex];
  randomShapes.push(newShape);
}
let currentUser: string = "";
let currentShape = randomShapes[0];
let currentLevel: number = 1;
let currentScore: number = 0;
let currentLines: number = 10;
let fallInterval: number = 80;
let isBlack: boolean = false;
let isWhite: boolean = true;
let isPsycho: boolean = false;

level.innerText = `LEVEL ${currentLevel}`;
score.innerText = `Score  ${currentScore}`;
lines.innerText = `Lines ${currentLines}`;
user.innerHTML = `<div><h5> P1:${currentUser}</h5></div>`;
scoreOne.innerHTML = `<div>1st ${orderedScorersArray[0].username}</div><div> ${orderedScorersArray[0].score}</div>`;
scoreTwo.innerHTML = `<div>2nd ${orderedScorersArray[1].username}</div><div> ${orderedScorersArray[1].score}</div>`;
scoreThree.innerHTML = `<div>3rd ${orderedScorersArray[2].username}</div><div> ${orderedScorersArray[2].score}</div>`;
scoreFour.innerHTML = `<div>4th ${orderedScorersArray[3].username}</div><div> ${orderedScorersArray[3].score}</div>`;
scoreFive.innerHTML = `<div>5th ${orderedScorersArray[4].username}</div><div> ${orderedScorersArray[4].score}</div>`;

//--------logic to draw the shape------------------
const drawRandomShape = () => {
  //-------checking if the shape touches the bottom or the sides---------------
  if (
    currentShape.yPos < 380 &&
    currentShape.xPos >= 0 &&
    currentShape.xPos + currentShape.width <= 250
  ) {
    drawShape();
    drawNext1Shape();
    drawFallenShapes();
  }
  if (currentShape.yPos === 380) {
    fallenShapesArray.push(currentShape);
    randomShapes.shift();
    currentShape = randomShapes[0];
    drawFallenShapes();
  }
};

//----------------------------Events-----------------------------------------------

const handleForm = (event: Event) => {
  event.preventDefault();
  const usernameInput = (
    document.getElementById("username") as HTMLInputElement
  ).value;
  currentUser = usernameInput;
  (document.getElementById("username") as HTMLInputElement).value = "";
  game.style.display = "flex";
  form.style.display = "none";
  user.innerHTML = `<h6>${currentUser}</h6>`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fallenShapesArray = [];
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft") {
    if (currentShape.xPos > 10) {
      currentShape.lineTo.forEach((point) => {
        point[0] -= 20;
      });
      currentShape.xPos -= 20;
    }
  } else if (event.key === "ArrowRight") {
    if (currentShape.xPos - currentShape.width < 280) {
      currentShape.lineTo.forEach((point) => {
        point[0] += 20;
      });
      currentShape.xPos += 20;
    }
  } else if (event.key === "ArrowUp") {
    
      currentShape.rotate();
    
  }
};

const handlePaint = (): void => {
  if (!isBlack && isWhite && !isPsycho) {
    canvas.style.backgroundColor = "black";
    isBlack = true;
    return;
  }

  if (isBlack) {
    canvas.style.background =
      "linear-gradient(to bottom, #FF00FF, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF0000, #FF00FF)";
    canvas.style.backgroundSize = "100% 100%";
    canvas.style.animation = "gradient 15s ease infinite alternate";
    isBlack = false;
    isPsycho = true;
    return;
  }

  if (isPsycho) {
    canvas.style.backgroundColor = "white";
    canvas.style.background = "";
    canvas.style.animation = "";
    isPsycho = false;
    isWhite = true;
    return;
  }

  if (isWhite) {
    canvas.style.backgroundColor = "black";
    isWhite = false;
    isBlack = true;
    return;
  }
};

const handleStart = (): void => {
  startGame();
};

const handleLineDown = (): void => {
  ctx.clearRect(0, canvas.height - 20, canvas.width, 20);
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var shiftedImageData = ctx.createImageData(canvas.width, canvas.height);
  for (var y = 0; y < canvas.height - 20; y++) {
    for (var x = 0; x < canvas.width; x++) {
      var index = y * canvas.width * 4 + x * 4;
      var shiftedIndex = (y + 20) * canvas.width * 4 + x * 4;
      for (var i = 0; i < 4; i++) {
        shiftedImageData.data[shiftedIndex + i] = imageData.data[index + i];
      }
    }
  }
  ctx.putImageData(shiftedImageData, 0, 0);
  startGame();
};
form.addEventListener("submit", handleForm);
paint.addEventListener("click", handlePaint);
document.addEventListener("keydown", handleKeyDown);
lineDown.addEventListener("click", handleLineDown);
start.addEventListener("click", handleStart);

//-----------------------Drawing--------------------------------------

const drawShape = () => {
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
};
const drawFallenShapes = () => {
  fallenShapesArray.forEach((shape) => {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = `${shape.color}`;
    shape.lineTo.forEach((line) => {
      const x = line[0];
      const y = line[1] + shape.yPos;
      ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.fill();
  });
};
const drawNext1Shape = () => {
  ctx1.clearRect(0, 0, canvas.width, canvas.height);
  nextShapesArray.forEach((nextShape) => {
    if (randomShapes[1].id === nextShape.id) {
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
tetrisMusic.play();

let intervalId: number | null = null;
let isPaused: boolean = false;

const startGame = () => {
  intervalId = setInterval(drawRandomShape, fallInterval);
};

const pauseGame = () => {
  clearInterval(intervalId!);
  intervalId = null;
  isPaused = true;
};

const resumeGame = () => {
  startGame();
  isPaused = false;
};
const togglePauseResume = () => {
  if (isPaused) {
    resumeGame();
  } else {
    pauseGame();
  }
};

const pauseButton = document.querySelector(".button__pause");
if (pauseButton) {
  pauseButton.addEventListener("click", togglePauseResume);
}
