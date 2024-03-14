export type Shape = {
  
    color: string,
    cells:  number []
    rotate?: () => void
  }
  export const square: Shape = {
    
    color: "blue",
    cells: [5, 6, 17, 18]
};
  
  export const stick: Shape = {
  
  color: "green",
  rotate(){
    //some logic
  },
  cells: [5, 6, 7, 8]
  }
  export const ell: Shape = {
  
  color: "yellow",
  rotate(){
    //so,me logic
  },
  cells: [5, 17, 29, 30]
  }
  export const jey: Shape = {
 
  color: "pink",
  rotate(){
    //some logic
  },
  cells: [7, 19, 31, 30]
  }
  export const tee: Shape = {
  
  color: "orange",
  rotate(){
    //some logic
  },
  cells: [5, 6, 7, 18]
  }
  export const ess: Shape = {
 
  color: "brown",
  rotate(){
    //some logic
  },
  cells: [7, 8, 18 ,19]
  }
  export const zee: Shape = {
 
  color: "red",
  rotate(){
    //some logic
  },
  cells: [6, 7, 19, 20]
  }

  export const shapesArray = [
    square, stick, jey, ell, ess, zee, tee
  ]