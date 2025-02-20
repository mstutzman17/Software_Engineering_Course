// LOOPS //

// without a loop //
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");

// 10 total Times

// 50 initial value (initialExpression)
// 60 when to run the loop (condition)
// +1 how to change the value each time (incrementExpression) 

// Example //

// for (let i = 1; i <= 10; i++) {
// console.log ("Hello:", i)
// }

// for (let i = 1; i <= 10; i+=3) {
//     console.log ("Hello:", i)
//     }

// for (let i = 1; i <= 20; i++) {
//     console.log (`${i}x${i} = ${i * i}`)
// }

for (let i = 200; i>=0; i-=25) {
    console.log (i)
}

// INFINITE LOOPS DON'T USE THEM!!!! //
// These are loops where the condition is never met


// for (let i = 1; i!== 20; i +=2) {
//     console.log (i);
// }

// FOR LOOPS AND ARRAYS //

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    },
];

// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     console.log (`${student.firstName} scored ${student.grade}`)
// }

let total = 0

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade;
    console.log (total/myStudents.length)
}

const word = "stressed";
let reversedWord = ''
for (let i =word.length -1; i >= 0; i --) {
    reversedWord += word[i];
    console.log (reversedWord)
}

// NESTED FOR LOOOPS //

// for (let i = 1; i <= 10; i ++) {
//     console.log ('Outer Loop:', i)
//     for (let j = 10; j >= 0; j -=5) {
//         console.log ('      Inner Loop', j)
//     }
// }

const gameBoard = [
    [4, 32, 8, 4 ],
    [64, 8, 32, 2 ],
    [8, 32, 16, 4 ],
    [2, 8, 4, 2 ],
]

// for (let i = 0; i < gameBoard.length; i ++) {
//     let row = gameBoard[i];
//     console.log (row)
//     for (let j = 0; j< row.length; j ++);
// }

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i ++) {
    let row = gameBoard[i];
    console.log (row)
    let j = 0;
    for (let j = 0; j < row.length; j ++);
    totalScore += row[j];
    console.log (totalScore)
}

// WHILE LOOPS //

for (let i = 0; i <= 5; i ++){
    console.log (i);
}
// the above for loop does the same thing as the while loop below //
let j = 0;
while(j <=5) {
    console.log (j)
    j++;
}

// while loops work best when you don't know how many times the loop will run //

// const target = Math.floor(Math.random() * 10)
// let guess = Math.floor (Math.random() * 10)
// while (guess !== target) {
//     console.log (`Traget: ${target} Guess ${guess}`);
//     guess = Math.floor (Math.random() * 10)
// }
// console.log (`Traget: ${target} Guess ${guess}`);
// console.log ("Congrats! You guessed the right number!")

// while(some condition)
// in the loop, update or attempt to make that condition false //

// BREAKS IN LOOPS //

// breaks are not commonly used in for loops
for (let i = 0; i <10; i++){
    console.log (i);
    if (i === 5){
        break;
    }
}

const target = Math.floor(Math.random() * 10)
let guess = Math.floor (Math.random() * 10)
while (true) {
if (target === guess) break;
console.log (`Target: ${target} Guess: ${guess}`)
guess = Math.floor(Math.random() * 10);
}
console.log (`Traget: ${target} Guess ${guess}`);
console.log ("Congrats! You guessed the right number!")

// FOR...OF LOOPS //
// Syntax: for (variable of iterable) {
// statemnet}

// Example //

const subreddits = ["soccer", "popheads", "cringe", "books"]
// for (let i =0; i < subreddits.length; i++) {
//     console.log (subreddits(i));
// }

for (let sub of subreddits){
    console.log(sub)
}

for (let char of "cockadoodledoo") {
    console.log (char.toUpperCase());
}

// COMPARING FOR AND FOR...OR LOOOPS //

const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

// for (let i = 0; i < magicSquare.length; i ++){
//     let row = magicSquare;
//     let sum = 0;
//     for(let j = 0; j < row.length; j++)
//         console.log(row[j]);
//     sum += row[j]
// }

for (let row of magicSquare){
    let sum = 0;
    for ( let num of row){
    sum += num;} {
        console.log (`${row} summed to ${sum}`);
    }
}

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i =0; i<words1.length; i ++) {
    console.log (words1[i], words2[i]);
}

// FOR...OF LOOPS WITH OBJECTS //

const movieReviews = {
    Arrival: 9.5,
    Allien: 9,
    Amelie: 8,
    "In Bruges": 9,
    Amadeus: 10,
    "Kill Bill": 8,
    "Little Miss Sunshine": 8.5,
    Coraline: 7.5
}

for (let movie of Object.keys (movieReviews)) {
    console.log(movie)
}

const ratings = Object.values(movieReviews)
let average = 0;
for (let r of ratings){
    total += r;
}
average /= ratings.length;
console.log(average);