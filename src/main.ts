import "./style.scss";
import { Shape, square } from "./shapes";
import { shapesArray } from "./shapes";

const board = document.querySelector<HTMLDivElement>(".game__board");

if (!board) {
  throw new Error("cells not found");
}

for (let i: number = 1; i < 241; i++) {
  const cell = document.createElement("div");
  cell.classList.add(`cell${i}`);
  cell.classList.add(`game__board__cell`);
  cell.innerText = `${i}`;
  cell.style.fontSize = "10px";
  board.appendChild(cell);
}
const boardCells =
  document.querySelectorAll<HTMLDivElement>(".game__board__cell");

if (!boardCells) {
  throw new Error("cells not found");
}
const renderShape = (CurrentShape: Shape): void => {
  CurrentShape.cells.forEach((cell) => {
    const cellElement = boardCells[cell];
    cellElement.style.backgroundColor = CurrentShape.color;
  });
};

let CurrentShape: Shape = square;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    const isAtBottom = CurrentShape.cells.some((cell) => cell + 12 > 240);

    if (!isAtBottom) {
      CurrentShape.cells = CurrentShape.cells.map((cell) => cell + 12);
    }
    
    boardCells.forEach((cellElement) => {
      cellElement.style.backgroundColor = "rgb(233, 210, 210)";
    });

    renderShape(CurrentShape);
  }
});
