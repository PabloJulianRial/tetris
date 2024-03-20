export type Shape = {
  id: number;
  yPos: number;
  xPos: number;
  width: number;
  is90?: boolean;
  is180?: boolean;
  is270?: boolean;
  is360?: boolean;

  color: string;
  lineTo: number[][];
  rotate: () => void;
};
export const square: Shape = {
  id: 1,
  yPos: 0,
  xPos: 100,
  width: 40,

  color: "blue",
  rotate() {},
  lineTo: [
    [100, -20],
    [140, -20],
    [140, 20],
    [100, 20],
    [100, -20],
  ],
};

export const stick: Shape = {
  id: 2,
  yPos: 0,
  xPos: 100,
  width: 80,
  is90: false,

  color: "red",
  rotate() {
    if (!this.is90) {
      this.lineTo[0] = [this.lineTo[0][0] + 40, this.lineTo[0][1] - 40];
      this.lineTo[1] = [this.lineTo[1][0] - 40, this.lineTo[1][1] + 40];
      this.lineTo[2] = [this.lineTo[2][0] - 60, this.lineTo[2][1] + 20];
      this.lineTo[3] = [this.lineTo[3][0] + 20, this.lineTo[3][1] - 60];
      this.lineTo[4] = [this.lineTo[4][0] + 40, this.lineTo[4][1] - 40];
      this.is90 = true;
      this.width += 20;
    } else {
      this.lineTo[0] = [this.lineTo[0][0] - 40, this.lineTo[0][1] + 40];
      this.lineTo[1] = [this.lineTo[1][0] + 40, this.lineTo[1][1] - 40];
      this.lineTo[2] = [this.lineTo[2][0] + 60, this.lineTo[2][1] - 20];
      this.lineTo[3] = [this.lineTo[3][0] - 20, this.lineTo[3][1] + 60];
      this.lineTo[4] = [this.lineTo[4][0] - 40, this.lineTo[4][1] + 40];
      this.is90 = false;
    }
  },
  lineTo: [
    [100, -20],
    [180, -20],
    [180, 0],
    [100, 0],
    [100, -20],
  ],
};
export const ell: Shape = {
  id: 3,
  yPos: 0,
  xPos: 100,
  width: 40,
  is90: false,
  is180: false,
  is270: false,
  is360: true,

  color: "purple",
  rotate() {
    if (!this.is90 && !this.is180 && !this.is270 && this.is360) {
      (this.lineTo = [
        [80, 20],
        [80, -20],
        [140, -20],
        [140, 0],
        [100, 0],
        [100, 20],
        [80, 20],
      ]),
        (this.is90 = true);
      this.is360 = false;
    } else if (this.is90 && !this.is180 && !this.is270 && !this.is360) {
      (this.lineTo = [
        [100, 20],
        [120, 20],
        [120, -40],
        [80, -40],
        [80, -20],
        [100, -20],
        [100, 20],
      ]),
        (this.is180 = true);
      this.is90 = false;
    } else if (!this.is90 && this.is180 && !this.is270 && !this.is360) {
      (this.lineTo = [
        [80, 0],
        [140, 0],
        [140, -40],
        [120, -40],
        [120, -20],
        [80, -20],
        [80, 0],
      ]),
        (this.is270 = true);
      this.is180 = false;
    } else if (!this.is90 && this.is180 && this.is270 && !this.is360) {
      (this.lineTo = [
        [100, -40],
        [100, 20],
        [140, 20],
        [140, 0],
        [120, 0],
        [120, -40],
        [100, -40],
      ]),
        (this.is360 = true);
      this.is270 = false;
    }
  },
  lineTo: [
    [100, -40],
    [100, 20],
    [140, 20],
    [140, 0],
    [120, 0],
    [120, -40],
    [100, -40],
  ],
};
export const jey: Shape = {
  id: 4,
  yPos: 0,
  xPos: 100,
  width: 40,
  is90: false,
  is180: false,
  is270: false,
  is360: true,

  color: "yellow",
  rotate() {
    if (!this.is90 && !this.is180 && !this.is270 && this.is360) {
      this.lineTo = [
        [60, 0],
        [100, 0],
        [100, 20],
        [120, 20],
        [120, -20],
        [60, -20],
        [60, 0],
      ];
      this.is90 = true;
      this.is360 = false;
      this.width += 20;
    } else if (this.is90 && !this.is180 && !this.is270 && !this.is360) {
      this.lineTo = [
        [80, 20],
        [80, -40],
        [120, -40],
        [120, -20],
        [100, -20],
        [100, 20],
        [80, 20],
        [80, -40],
      ];
      this.is180 = true;
      this.is90 = false;
      this.width -= 20;
    } else if (!this.is90 && this.is180 && !this.is270 && !this.is360) {
      this.lineTo = [
        [60, 0],
        [60, -20],
        [120, -20],
        [120, 20],
        [100, 20],
        [100, 0],
        [60, 0],
        [60, -20],
      ];
      this.is270 = true;
      this.is180 = false;
      this.width += 20;
    } else if (!this.is90 && !this.is180 && this.is270 && !this.is360) {
      this.lineTo = [
        [80, 20],
        [80, -40],
        [100, -40],
        [100, 0],
        [120, 0],
        [120, 20],
        [80, 20],
      ];
      this.is360 = true;
      this.is270 = false;
      this.width -= 20;
    }
  },

  lineTo: [
    [100, 0],
    [140, 0],
    [140, -60],
    [120, -60],
    [120, -20],
    [100, -20],
    [100, 0],
  ],
};
export const tee: Shape = {
  id: 5,
  yPos: 0,
  xPos: 100,
  width: 60,
  is90: false,
  is180: false,
  is270: false,
  is360: true,

  color: "green",
  rotate() {
    if (!this.is90 && !this.is180 && !this.is270 && this.is360) {
      this.lineTo = [
        [100, -40],
        [100, -20],
        [80, -20],
        [80, 0],
        [100, 0],
        [100, 20],
        [120, 20],
        [120, -40],
        [100, -40],
      ];
      this.is90 = true;
      this.is360 = false;
      this.yPos -= 20;
    } else if (this.is90 && !this.is180 && !this.is270 && !this.is360) {
      this.lineTo = [
        [100, 0],
        [160, 0],
        [160, -20],
        [140, -20],
        [140, -40],
        [120, -40],
        [120, -20],
        [100, -20],
        [100, 0],
      ];
      this.is90 = false;
      this.is180 = true;
      this.yPos += 20;
    } else if (!this.is90 && this.is180 && !this.is270 && !this.is360) {
      this.lineTo = [
        [100, -20],
        [100, 40],
        [120, 40],
        [120, 20],
        [140, 20],
        [140, 0],
        [120, 0],
        [120, -20],
        [100, -20],
      ];
      this.is180 = false;
      this.is270 = true;
    } else if (!this.is90 && !this.is180 && this.is270 && !this.is360) {
      this.lineTo = [
        [80, 0],
        [140, 0],
        [140, -20],
        [120, -20],
        [120, -40],
        [100, -40],
        [100, -20],
        [80, -20],
        [80, 0],
      ];
      this.is270 = false;
      this.is360 = true;
    }
  },

  lineTo: [
    [80, 0],
    [140, 0],
    [140, -20],
    [120, -20],
    [120, -40],
    [100, -40],
    [100, -20],
    [80, -20],
    [80, 0],
  ],
};
export const zee: Shape = {
  id: 6,
  yPos: 0,
  xPos: 100,
  width: 60,
  is90: false,

  color: "orange",
  rotate() {
    if (!this.is90) {
      this.lineTo = [
        [100, 20],
        [100, 0],
        [120, 0],
        [120, -40],
        [100, -40],
        [100, -20],
        [80, -20],
        [80, 20],
        [100, 20],
      ];
      this.is90 = true;
    } else {
      this.lineTo = [
        [100, -20],
        [140, -20],
        [140, 0],
        [160, 0],
        [160, 20],
        [120, 20],
        [120, 0],
        [100, 0],
        [100, 0],
      ];
      this.is90 = false;
    }
  },
  lineTo: [
    [100, -20],
    [140, -20],
    [140, 0],
    [160, 0],
    [160, 20],
    [120, 20],
    [120, 0],
    [100, 0],
    [100, 0],
  ],
};
export const ess: Shape = {
  id: 7,
  yPos: 0,
  xPos: 100,
  width: 60,
  is90: false,
  color: "aqua",
  rotate() {
    if (!this.is90) {
      this.lineTo = [
        [100, 20],
        [120, 20],
        [120, -20],
        [100, -20],
        [100, -40],
        [80, -40],
        [80, 0],
        [100, 0],
        [100, 20],
      ];

      this.is90 = true;
    } else {
      this.lineTo = [
        [100, 20],
        [100, 0],
        [120, 0],
        [120, -20],
        [160, -20],
        [160, 0],
        [140, 0],
        [140, 20],
        [100, 20],
      ];
      this.is90 = false;
    }
  },
  lineTo: [
    [100, 20],
    [100, 0],
    [120, 0],
    [120, -20],
    [160, -20],
    [160, 0],
    [140, 0],
    [140, 20],
    [100, 20],
  ],
};

export const shapesArray = [square, stick, ell, jey, tee, ess, zee];
