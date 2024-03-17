export type Shape = {
  speed:number ,
  color: string,
  lineTo:  number [][]
  rotate?: () => void
}
export const square: Shape = {
  speed : 0,
  color: "blue",
  lineTo:[ [100,0],[140, 0], [140, 40], [100, 40], [100,0]]
};

export const stick: Shape = {
  speed : 0,
color: "green",
rotate(){
  //some logic
},
lineTo: [ [100,0],[180, 0], [180, 20], [100, 20], [100, 0]]
}
export const ell: Shape = {
  speed : 0,
color: "yellow",
rotate(){
  //so,me logic
},
lineTo: [[100,0],[100, 60], [140, 60], [140, 40], [120, 40], [120, 0], [100, 0]]
}
export const jey: Shape = {
  speed : 0,
color: "pink",
rotate(){
  //some logic
},
lineTo: [[100,0],[100, 60], [60, 60], [60, 40], [80, 40], [80, 0], [100, 0]]
}
export const tee: Shape = {
  speed : 0,
color: "orange",
rotate(){
  //some logic
},
lineTo: [[100,0],[140, 0],[140, 20],[120, 20], [120, 40], [100, 40], [100, 20], [80, 20], [80, 0], [100, 0]]
}
export const ess: Shape = {
  speed : 0,
color: "brown",
rotate(){
  //some logic
},
lineTo: [[100,0],[140, 0], [140, 20], [160, 20], [160, 40], [120, 40], [120, 20], [100, 20], [100, 0]]
}
export const zee: Shape = {
  speed : 0,
color: "red",
rotate(){
  //some logic
},
lineTo: [[100,0], [60, 0], [60, 20], [40, 20], [40, 40], [80, 40],[80, 20],[100, 20],  [100, 0]]
}

export const shapesArray = [
  square, stick,  ell,jey, tee, ess, zee
] 