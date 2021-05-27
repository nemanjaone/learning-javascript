//For...Of loops
const subreddits = ['cringe', 'books', 'chickens', 'destinythegame', 'funny'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
    console.log(sub);
}