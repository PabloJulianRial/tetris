export type User = {
  username: string;
  score: number;
};



export const topScorersArray: User[] = [
  {
    username: "ATHISH",
    score: 2000,
  },
  {
    username: "EMMA",
    score: 3000,
  },

  {
    username: "BAHEER",
    score: 7000,
  },
  {
    username: "CHERYL",
    score: 5000,
  },
  {
    username: "TODD",
    score: 5000,
  },
  {
    username: "MICHA",
    score: 5000,
  },
];


 export const orderedScorersArray = topScorersArray.sort((b, a) =>a.score - b.score )
