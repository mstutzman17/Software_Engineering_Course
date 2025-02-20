// CONDITIONALS-IF STATEMENTS 
//Example 1 //

if (1 !== 1){
    console.log("It's True!!");
}

// Example 2 //

// let rating = 2;
// if (rating < 3) {
//     console.log("You're NOT a superstar!");
// }

// if (rating === 3) {
//     console.log("You're a superstar!");
// }

// Example 3 //

// let num = 37;

// if (num % 2 !== 38){
//     console.log("ODD NUMBER")
// }

// CONDITIIONALS-ELSE IF STATEMENTS
//ELSE IF HAS TO BE PAIRED WITH IF
// Example 1 //

// let rating = 1;

// if (rating === 3) {
//     console.log("EXCEEDS EXPECTATION");
// }

// else if (rating === 2){
//     console.log('MEETS EXPECTATION');
// }

// else if (rating === 1){
//     console.log('NEEDS IMPROVEMENT')
// }

// CONDITIONALS-ELSE STATEMENTS
// ONLY 1 ELSE PER IF
//EXAMPLE 1//

let rating = 0;

if (rating === 3) {
    console.log("EXCEEDS EXPECTATION");
}

else if (rating === 2){
    console.log('MEETS EXPECTATION');
}

else if (rating === 1){
    console.log('NEEDS IMPROVEMENT')
}

else {
    console.log("INVALID RATING")
}

//EXAMPLE 2//

let highScore = 1430;
let userScore = 1430;

if (userScore >= highScore) {
    console.log ("Congrats, you have the new high score of ${userScore}");
}
else {
    console.log("Good Game. Your score of ${userScore} did not beat the high score of ${highScore}");
}

// CONDITIONALS-NESTING
//EXAMPLE 1//

let password = "hello kitty";

if(password.length >= 6){
    if(password.indexOf(' ') === -1);
    console.log("Valid Password");
}

else {
    console.log("Password cannot contain spaces");
}

// else {
//     console.log("Password is long enough");
// }

// TRUTHY AND FALSY VALUES
//EVERYTHING IN JS IS TRUTHY EXCEPT:
// FALSE, 0, "" (EMPTY STRING), NULL, UNDEFINED, NaN
//EXAMPLE 1//

let mystery = 17;

if (mystery) {
    console.log("TRUTHY");
}

else {
    console.log ("FALSY");
}

//EXAMPLE 2//

// let loggedInUser = "";
let loggedInUser ="mstutzman17"
if (loggedInUser) {
    console.log ('You are logged in')
}
else {
    console.log ('Please log in')
}

let season = summer;
let response;

if (season === "summer") {
    console.log("The season is summer!")
}