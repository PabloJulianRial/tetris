import './style.scss'
import { Shape, square, stick, jey, ell, ess, zee, tee } from './shapes'
import { shapesArray } from './shapes'

const board = document.querySelector<HTMLDivElement>(".game__board")


if(!board){
  throw new Error("cells not found")
}

for(let i:number = 1; i < 241; i++){
  const cell = document.createElement("div")
  cell.classList.add(`cell${i}`)
  cell.classList.add(`game__board__cell`)
  cell.innerText = `${i}`
  cell.style.fontSize = "10px"
  board.appendChild(cell)
}
const boardCells = document.querySelectorAll<HTMLDivElement>(".game__board__cell")

if(!boardCells){
  throw new Error("cells not found")
}
const renderShape = (shape: Shape) :void=> {
  shape.cells.forEach((cell) => {
      const cellElement = boardCells[cell];
      cellElement.style.backgroundColor = shape.color;
  });
}




renderShape(square);
renderShape(stick);
renderShape(ell);
renderShape(jey);
renderShape(tee);
renderShape(ess);
renderShape(zee);