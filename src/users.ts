export type User = {
  username: string;
  score: number;
};



export const topScorersArray: User[] = [
  {
    username: "Athish",
    score: 2000,
  },
  {
    username: "Emma",
    score: 3000,
  },

  {
    username: "Baheer",
    score: 7000,
  },
  {
    username: "Michaela",
    score: 5000,
  },
  {
    username: "Michaela",
    score: 5000,
  },
  {
    username: "Michaela",
    score: 5000,
  },
];

const topScorer: User = {
  username: "Athish",
  score: 2000,
};
const top2Scorer: User = {
  username: "Emma",
  score: 3000,
};
const top3Scorer: User = {
  username: "Baheer",
  score: 7000,
};
const top4Scorer: User = {
  username: "Michaela",
  score: 5000,
};
const top5Scorer: User = {
  username: "Michaela",
  score: 6000,
};
const top6Scorer: User = {
  username: "Michaela",
  score: 9000,
};

 export const orderedScorersArray = topScorersArray.sort((b, a) =>a.score - b.score )
