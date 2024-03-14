export type Shape = {
  
    color: string,
    cells: { x: number, y: number }[]
    rotate?: () => void
  }
  export const square: Shape = {
    
    color: "blue",
    cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
};
  
  export const stick: Shape = {
  
  color: "green",
  rotate(){
    //some logic
  },
  cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
  }
  export const ell: Shape = {
  
  color: "yellow",
  rotate(){
    //so,me logic
  },
  cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
  }
  export const jey: Shape = {
 
  color: "pink",
  rotate(){
    //some logic
  },
  cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
  }
  export const tee: Shape = {
  
  color: "orange",
  rotate(){
    //some logic
  },
  cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
  }
  export const ess: Shape = {
 
  color: "brown",
  rotate(){
    //some logic
  },
  cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
  }
  export const zee: Shape = {
 
  color: "red",
  rotate(){
    //some logic
  },
  cells: [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }]
  }

  export const shapesArray = [
    square, stick, jey, ell, ess, zee, tee
  ]