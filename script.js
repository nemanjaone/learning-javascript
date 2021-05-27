console.log("Hello!");

const age = 43;

if (age > 0 && age < 5) {
    console.log("FREE");
} else if (age > 5 && age < 50) {
    console.log("10$");
} else if (age > 50 && age < 65) {
    console.log("20$");
} else if (age > 65) {
    console.log("FREE");
} else {
    console.log("Error Age!");
}

//Switch Statement
const day = 2;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
}

//Array Practice
let lottoNumbers = [1, 2, 3, 4, 5, 6];
console.log(lottoNumbers[4]);

//push pop practice
let harryNames = ['Harry', 'Hermione', 'Ron', 'Draco'];
harryNames.push('Bellatrix');
console.log(harryNames);

harryNames.pop();
console.log(harryNames);

harryNames.pop();
console.log(harryNames);

//shift unshift practice
let lotrNames = ['Frodo', 'Sam', 'Legolas'];
lotrNames.unshift('Gimli');
console.log(lotrNames);
lotrNames.shift();
console.log(lotrNames);

//concat arrays
let cats = ['cat1', 'cat2'];
let dogs = ['dog1', 'dog2'];

let animals = cats.concat(dogs);
console.log(animals);

let animals2 = dogs.concat(cats);
console.log(animals2);

//includes
console.log("is cat1 there: " + cats.includes('cat1'));
console.log("is cat3 there: " + cats.includes('cat3'));

//indexof
console.log("cat2 index: " + cats.indexOf('cat2'));

//reverse array
lotrNames.reverse();
console.log(lotrNames);

//slice array
let colors = ['blue', 'red', 'yellow', 'orange', 'purple', 'juicewrld'];
let rapper = colors.slice(5);
console.log(rapper);

//splice array
let colorsS = colors.splice(1, 1);
console.log("colors: " + colors);
console.log("remove: " + colorsS);

//array within array
const gameBoard = [['x', 'o', 'x'], ['x', 'o', 'x'], ['x', 'o', 'x']];
console.log(gameBoard);
console.log(gameBoard[1][1]);

//object literals
const fitBitData = {
    totalSteps: 30000,
    totalMiles: 210,
    caloriesBurned: 1500,
    userName: "Christine",
};

console.log("Name: " + fitBitData.userName + "");
console.log("Distance Travelled: " + fitBitData.totalMiles + " miles");
console.log("Total Calories Burned: " + fitBitData.caloriesBurned + " cal");

//updating information in objects
const midterms = {
    Danielle: 91,
    Anthony: 56,
    Thomas: 73,
    Lara: 99,
};

console.log(midterms);
midterms.Lara = 50;
console.log(midterms);

//for loop practice
console.log("increment");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//decrement loop practice
console.log("decrement");
for (let i = 100; i >= 0; i -= 20) {
    console.log(i);
}

//looping over arrays
const doggo = ['lions', 'tigers', 'bears'];

for (let i = 0; i < doggo.length; i++) {
    console.log(i, doggo[i]);
}
for (let i = doggo.length - 1; i >= 0; i--) {
    console.log(doggo[i]);
}

//nested for loops
const seatingChart = [
    ['Kristen', 'Erik', 'Johnny'],
    ['Jeff', 'Joey', 'Jamaica'],
    ['Bobert', 'Robert', 'Fofobert']
]

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//while loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}


//password-ish loop
const secret = "hippo";
let attempts = 1;
let guess = prompt("enter the secret code...");
while (guess != secret) {
    if (attempts == 3) {
        console.log("you're locked out: too many attempts");
        break;
    };
    guess = prompt("enter the secret code...");
    attempts++;
}

if (guess == secret) {
    console.log("secret accepted");
};


console.log("Goodbye!");