//for in loop
const testScores = {
    keenan: 95,
    damon: 50,
    lezli: 36,
    Jason: 15
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}

console.log(total / scores.length);