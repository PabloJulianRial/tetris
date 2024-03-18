export type Shape = {
  id:number,
  yPos:number ,
  xPos:number ,
  width:number,
  is90?:boolean ,
  is180?:boolean ,
  is270?:boolean ,
  is360?:boolean ,
  variation: number,
  color: string,
  lineTo:  number [][]
  rotate?: () => void
}
export const square: Shape = {
  id:1,
  yPos : 0,
  xPos : 100,
  width:40,
  variation: 0,
  color: "blue",
  lineTo:[ [100,-20],[140, -20], [140, 20], [100, 20], [100,-20]]
};

export const stick: Shape = {
  id:2,
  yPos : 0,
  xPos : 100,
  width:80,
  is90 : false,
  variation: 0,
color: "green",
rotate(){
  if(!this.is90){
    this.lineTo[0] = [this.lineTo[0][0]+40,this.lineTo[0][1]-40 ]
    this.lineTo[1] = [this.lineTo[1][0]-40,this.lineTo[1][1]+40 ]
    this.lineTo[2] = [this.lineTo[2][0]-60,this.lineTo[2][1]+20 ]
    this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1]-60 ]
    this.lineTo[4] = [this.lineTo[4][0]+40,this.lineTo[4][1]-40 ]
    this.is90 = true
  }
  else{
    this.lineTo[0] = [this.lineTo[0][0]-40,this.lineTo[0][1]+40 ]
    this.lineTo[1] = [this.lineTo[1][0]+40,this.lineTo[1][1]-40 ]
    this.lineTo[2] = [this.lineTo[2][0]+60,this.lineTo[2][1]-20 ]
    this.lineTo[3] = [this.lineTo[3][0]-20,this.lineTo[3][1]+60 ]
    this.lineTo[4] = [this.lineTo[4][0]-40,this.lineTo[4][1]+40 ]
    this.is90 = false
  }
  
  
},
lineTo: [ [100,0],[180, 0], [180, 20], [100, 20], [100, 0]],
//  [[140, -40], [140, 40], [220, 40], [120, -40], [140, -40]]

}
export const ell: Shape = {
  id:3,
  yPos : 0,
  xPos : 100,
  width:40,
  is90:false ,
  is180:false ,
  is360:false ,
  variation: 0,
color: "yellow",
rotate(){
  
  if(!this.is90 && !this.is180 && !this.is270 ){
    this.lineTo[0] = [this.lineTo[0][0],this.lineTo[0][1]+20 ]
    this.lineTo[1] = [this.lineTo[1][0]+60,this.lineTo[1][1]-40 ]
    this.lineTo[2] = [this.lineTo[2][0]+20,this.lineTo[2][1]-20 ]
    this.lineTo[3] = [this.lineTo[3][0]-20,this.lineTo[3][1] ]
    this.lineTo[4] = [this.lineTo[4][0],this.lineTo[4][1]+20 ]
    this.lineTo[5] = [this.lineTo[5][0]-20,this.lineTo[5][1]+60 ]
    this.lineTo[6] = [this.lineTo[6][0],this.lineTo[6][1]+20 ]
    console.log(this.lineTo);
    
    this.is90 = true
  }
  // else if(this.is90 && !this.is180 && !this.is270 && !this.is360){
  //   this.lineTo[0] = [this.lineTo[0][0]+40,this.lineTo[0][1]+20 ]
  //   this.lineTo[1] = [this.lineTo[1][0]-20,this.lineTo[1][1]+60 ]
  //   this.lineTo[2] = [this.lineTo[2][0]-40,this.lineTo[2][1]+40 ]
  //   this.lineTo[3] = [this.lineTo[3][0],this.lineTo[3][1]+40 ]
  //   this.lineTo[4] = [this.lineTo[4][0]-20,this.lineTo[4][1]-20 ]
  //   this.lineTo[5] = [this.lineTo[5][0],this.lineTo[5][1]-20 ]
  //   this.lineTo[6] = [this.lineTo[6][0]+40,this.lineTo[6][1]+20 ]
  //   console.log(this.lineTo);

  //   this.is90 = false
  //   this.is180 = true
  // }
  // else if(this.is90 && this.is180 && !this.is270 && !this.is360){
    else if(this.is90 = true){
    this.lineTo[0] = [this.lineTo[0][0],this.lineTo[0][1]-20 ]
    this.lineTo[1] = [this.lineTo[1][0]-60,this.lineTo[1][1]+40 ]
    this.lineTo[2] = [this.lineTo[2][0]-20,this.lineTo[2][1]+20 ]
    this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1] ]
    this.lineTo[4] = [this.lineTo[4][0],this.lineTo[4][1]-20 ]
    this.lineTo[5] = [this.lineTo[5][0]+20,this.lineTo[5][1]-60 ]
    this.lineTo[6] = [this.lineTo[6][0],this.lineTo[6][1]-20 ]
    // this.is270 = true
    this.is180 = false
    this.is90 = false
  }
  // else if(!this.is90 && !this.is180 && this.is270 && !this.is360){
  //   this.lineTo[0] = [this.lineTo[0][0],this.lineTo[0][1]-20 ]
  //   this.lineTo[1] = [this.lineTo[1][0]-60,this.lineTo[1][1]+40 ]
  //   this.lineTo[2] = [this.lineTo[2][0]-20,this.lineTo[2][1]+20 ]
  //   this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1] ]
  //   this.lineTo[4] = [this.lineTo[4][0],this.lineTo[4][1]-20 ]
  //   this.lineTo[5] = [this.lineTo[5][0]+20,this.lineTo[5][1]-60 ]
  //   this.lineTo[6] = [this.lineTo[6][0],this.lineTo[6][1]-20 ]
  //   this.is270 = false
  //   this.is360 = true
  // }
  
  
},
lineTo: [[100,-30],[100, 30], [140, 30], [140, 10], [120, 10], [120, -30], [100, -30]]
// lineTo: [[,+20],[60, -40], [20, -20], [-20, ], [, 20], [-20, 60], [,+20]]
}
export const jey: Shape = {
  id:4,
  yPos : 0,
  xPos : 100,
  width:40,
  is90:false ,
  is180:false ,
  is270:false ,
  is360:false ,
  
  variation: 0,
color: "pink",
rotate(){
  
  if(!this.is90 && !this.is180 && !this.is270 ){
    this.lineTo[0] = [this.lineTo[0][0],this.lineTo[0][1]+20 ]
    this.lineTo[1] = [this.lineTo[1][0],this.lineTo[1][1]]
    this.lineTo[2] = [this.lineTo[2][0]+20,this.lineTo[2][1] ]
    this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1]  ]
    this.lineTo[4] = [this.lineTo[4][0] - 40,this.lineTo[4][1] ]
    this.lineTo[5] = [this.lineTo[5][0]-40,this.lineTo[5][1] +20]
    this.lineTo[6] = [this.lineTo[6][0],this.lineTo[6][1]+20]
        console.log(this.lineTo);
        
    this.is90 = true
  }
  // else if(this.is90 && !this.is180 && !this.is270 && !this.is360){
  //   this.lineTo[0] = [this.lineTo[0][0]+40,this.lineTo[0][1]+20 ]
  //   this.lineTo[1] = [this.lineTo[1][0]-20,this.lineTo[1][1]+60 ]
  //   this.lineTo[2] = [this.lineTo[2][0]-40,this.lineTo[2][1]+40 ]
  //   this.lineTo[3] = [this.lineTo[3][0],this.lineTo[3][1]+40 ]
  //   this.lineTo[4] = [this.lineTo[4][0]-20,this.lineTo[4][1]-20 ]
  //   this.lineTo[5] = [this.lineTo[5][0],this.lineTo[5][1]-20 ]
  //   this.lineTo[6] = [this.lineTo[6][0]+40,this.lineTo[6][1]+20 ]
  //   console.log(this.lineTo);

  //   this.is90 = false
  //   this.is180 = true
  // }
  // // else if(this.is90 && this.is180 && !this.is270 && !this.is360){
  //   else if(this.is90 = true){
  //   this.lineTo[0] = [this.lineTo[0][0],this.lineTo[0][1]-20 ]
  //   this.lineTo[1] = [this.lineTo[1][0]-60,this.lineTo[1][1]+40 ]
  //   this.lineTo[2] = [this.lineTo[2][0]-20,this.lineTo[2][1]+20 ]
  //   this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1] ]
  //   this.lineTo[4] = [this.lineTo[4][0],this.lineTo[4][1]-20 ]
  //   this.lineTo[5] = [this.lineTo[5][0]+20,this.lineTo[5][1]-60 ]
  //   this.lineTo[6] = [this.lineTo[6][0],this.lineTo[6][1]-20 ]
  //   // this.is270 = true
  //   this.is180 = false
  //   this.is90 = false
  // }
  // else if(!this.is90 && !this.is180 && this.is270 && !this.is360){
  //   this.lineTo[0] = [this.lineTo[0][0],this.lineTo[0][1]-20 ]
  //   this.lineTo[1] = [this.lineTo[1][0]-60,this.lineTo[1][1]+40 ]
  //   this.lineTo[2] = [this.lineTo[2][0]-20,this.lineTo[2][1]+20 ]
  //   this.lineTo[3] = [this.lineTo[3][0]+20,this.lineTo[3][1] ]
  //   this.lineTo[4] = [this.lineTo[4][0],this.lineTo[4][1]-20 ]
  //   this.lineTo[5] = [this.lineTo[5][0]+20,this.lineTo[5][1]-60 ]
  //   this.lineTo[6] = [this.lineTo[6][0],this.lineTo[6][1]-20 ]
  //   this.is270 = false
  //   this.is360 = true
  // }
  
  
},

lineTo: [[100,-40],[100, 20], [60, 20], [60, 0], [80, 0], [80, -40], [100, -40]]

}
export const tee: Shape = {
  id:5,
  yPos : 0,
  xPos : 100,
  width:60,
  is90:false ,
  is180:false ,
  is270:false ,
  is360:false ,
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
  xPos : 100,
  width:60,
  is90:false ,
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
  xPos : 100,
  width:60,
  is90:false ,
  variation: 0,
color: "red",
rotate(){
  //some logic
},
lineTo: [[100,-20], [60, -20], [60, 0], [40, 0], [40, 20], [80, 20],[80, 0],[100, 0],  [100, -20]]
}

export const shapesArray = [
  square, stick, ell,jey, tee, ess, zee
] 
 