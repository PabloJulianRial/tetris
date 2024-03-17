export type Shape = {
    speed:number ,
    color: string,
    lineTo:  number [][]
    rotate?: () => void
  }
  export const nextSquare: Shape = {
    speed : 0,
    color: "blue",
    lineTo:[ [30, 20], [50, 20], [50, 40], [30,40], [30,20]]
  };
  
  export const nextStick: Shape = {
    speed : 0,
  color: "green",
  rotate(){
    //some logic
  },
  lineTo: [ [10, 20], [10, 30], [50, 30], [50, 20], [10, 20]]
  }
  export const nextEll: Shape = {
    speed : 0,
  color: "yellow",
  rotate(){
    //so,me logic
  },
  lineTo: [[20, 10], [20, 40], [50, 40], [50, 30], [30, 30], [30, 10], [20, 10]]
  }
  export const NextJey: Shape = {
    speed : 0,
  color: "pink",
  rotate(){
    //some logic
  },
  lineTo: [[30, 10], [40, 10], [40, 40], [20, 40], [20, 30], [30, 30], [30, 10]]
  }
  export const NextTee: Shape = {
    speed : 0,
  color: "orange",
  rotate(){
    //some logic
  },
  lineTo: [[15, 20],[45, 20],[45, 30], [35, 30], [35, 40], [25, 40], [25, 30], [15, 30], [15, 20]]
  }
  export const nextEss: Shape = {
    speed : 0,
  color: "brown",
  rotate(){
    //some logic
  },
  lineTo: [[40, 20], [20, 20], [20, 30], [30, 30], [30, 40], [50, 40], [50, 30], [40, 30], [40, 20]]
  }
  export const nextZee: Shape = {
    speed : 0,
  color: "red",
  rotate(){
    //some logic
  },
  lineTo: [[30, 20], [50, 20], [50, 30], [40, 30], [40, 40],[20, 40],[20, 30],  [30, 30], [30, 20]]
  }
  
  export const nextShapesArray = [
    nextSquare, nextStick,  nextEll,NextJey, NextTee, nextEss, nextZee
  ] 