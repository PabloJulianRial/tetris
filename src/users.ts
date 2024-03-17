export type User ={
    username: string,
    score: number,
}

 const currentUser: User = {
    username:"Pablo",
    score: 10000
}
 const topScorer: User = {
    username:"Athish",
    score: 2000
}
 const top2Scorer: User = {
    username:"Emma",
    score: 3000
}
 const top3Scorer: User = {
    username:"Baheer",
    score: 7000
}
 const top4Scorer: User = {
    username:"Michaela",
    score: 5000
}
 const top5Scorer: User = {
    username:"Michaela",
    score: 6000
}
 const top6Scorer: User = {
    username:"Michaela",
    score: 9000
}


export const users: User[] = [currentUser, topScorer, top2Scorer, top3Scorer, top4Scorer, top5Scorer, top6Scorer];


