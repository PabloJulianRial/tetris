export type Shape = {
  id:number,
  yPos:number ,
  xPosStart:number,
  xPosEnd:number,
  isVertical?:boolean ,
  variation: number,
  color: string,
  lineTo:  number [][]
  rotate?: () => void
}
export const square: Shape = {
  id:1,
  yPos : 0,
  xPosStart :100,
  xPosEnd:140,
  isVertical : false,
  variation: 0,
  color: "blue",
  lineTo:[ [100,-20],[140, -20], [140, 20], [100, 20], [100,-20]]
};

export const stick: Shape = {
  id:2,
  yPos : 0,
  xPosStart :100,
  xPosEnd:180,
  isVertical : false,
  variation: 0,
color: "green",
rotate(){
  if(!this.isVertical){
    this.lineTo[0] = [this.lineTo[0][0]+40,this.lineTo[0][1]-40 ]
    this.lineTo[1] = [this.lineTo[1][0]-40,this.lineTo[1][1]+40 ]
    this.lineTo[2] = [this.lineTo[2][0]-60,this.lineTo[2][1]+20 ]
    this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1]-60 ]
    this.lineTo[4] = [this.lineTo[4][0]+40,this.lineTo[4][1]-40 ]
    this.isVertical = true
  }
  else{
    this.lineTo[0] = [this.lineTo[0][0]-40,this.lineTo[0][1]+40 ]
    this.lineTo[1] = [this.lineTo[1][0]+40,this.lineTo[1][1]-40 ]
    this.lineTo[2] = [this.lineTo[2][0]+60,this.lineTo[2][1]-20 ]
    this.lineTo[3] = [this.lineTo[3][0]-20,this.lineTo[3][1]+60 ]
    this.lineTo[4] = [this.lineTo[4][0]-40,this.lineTo[4][1]+40 ]
    this.isVertical = false
  }
  
  
},
lineTo: [ [100,0],[180, 0], [180, 20], [100, 20], [100, 0]],
//  [[140, -40], [140, 40], [220, 40], [120, -40], [140, -40]]

}
export const ell: Shape = {
  id:3,
  yPos : 0,
  xPosStart :100,
  xPosEnd:140,
  isVertical : false,
  variation: 0,
color: "yellow",
rotate(){
  //so,me logic
},
lineTo: [[100,-40],[100, 20], [140, 20], [140, 0], [120, 0], [120, -40], [100, -40]]
}
export const jey: Shape = {
  id:4,
  yPos : 0,
  xPosStart :60,
  xPosEnd:100,
  isVertical : false,
  variation: 0,
color: "pink",
rotate(){
  //some logic
},

lineTo: [[100,-40],[100, 20], [60, 20], [60, 0], [80, 0], [80, -40], [100, -40]]

}
export const tee: Shape = {
  id:5,
  yPos : 0,
  xPosStart :80,
  xPosEnd:140,
  isVertical : false,
  variation: 0,
color: "orange",
rotate(){
  //some logic
},
lineTo: [[100,-20],[140, -20],[140, 0],[120, 0], [120, 20], [100, 20], [100, 0], [80, 0], [80, -20], [100, -20]]
}
export const ess: Shape = {
  id:6,
  yPos : 0,
  xPosStart :100,
  xPosEnd:160,
  isVertical : false,
  variation: 0,
color: "brown",
rotate(){
  //some logic
},
lineTo: [[100,-20],[140, -20], [140, 0], [160, 0], [160, 20], [120, 20], [120, 0], [100, 0], [100, 0]]
}
export const zee: Shape = {
  id:7,
  yPos : 0,
  xPosStart :40,
  xPosEnd:100,
  isVertical : false,
  variation: 0,
color: "red",
rotate(){
  //some logic
},
lineTo: [[100,-20], [60, -20], [60, 0], [40, 0], [40, 20], [80, 20],[80, 0],[100, 0],  [100, -20]]
}

export const shapesArray = [
  square, stick,  ell,jey, tee, ess, zee
] 