//LOGICAL OPERATORS-AND (&&)
// BOTH SIDES NEED TO BE TRUE
//EXAMPLE 1//

let password = "chicken Gal"

if (password.length >= 8 && password.indexOf(' ') === -1){
    console.log("Valid Password");
}
else {
    console.log("Password cannot contain spaces")
}

// EXAMPLE 2 //

let num = 17;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10")
}
else {
    console.log ("Please choose a number between 1 and 10");
}

let pass = "Tim32 di3!"

if (pass.length >= 8 && pass.indexOf (" ") === -1) {
    console.log ("Valid Password")
}
else {
    console.log ("INVALID PASSWORD")
}

// LOGICAL OPERATORS- OR (||) 
// ONE OR BOTH CAN BE TRUE
// EXAMPLE 1 //

let age = 17;

// if (age <= 6) {
//     console.log ("FREE ADMISSION")
// }
// else if (age >= 65){
//     console.log ("FREE ADMISSION")
// }
// else {
//     console.log ("ADMISSION IS $10");
// }

if (age <= 6 || age >=65) {
    console.log("FREE ADMISSION")
}

else {
    console.log ("ADMISSION IS $10")
}

// EXAMPLE 2 //

// purple orchid violet

// let color = "";

// if (color === 'purple' || color === 'violet' || color === 'orchid' || color === 'red')
// {
//     console.log ("GREAT CHOICE!")
// }
// else {
//     console.log ('OOPS... TRY AGAIN')
// }

// LOGICAL OPERATORS: NOT (!)
// EXAMPLE 1

let logInUser;

// If there isn't a logged in user, do something

if (!logInUser) {
    console.log ("GET OUT OF HERE")
}

let flavor = "WATERMELON"

// if(flavor !== "grape" && flavor !== "cherry"){
//     console.log ("WE DON'T HAVE THAT HERE");
// }

if (!(flavor === "grape" || flavor === "cherry")) {
    console.log ("WE ONLY HAVE GRAPE OR CHERRY")
}

// OPERATOR PRECEDENCE 
// EXAMPLE 1

// let x = 7

// (x == 7 || x === 3) && x > 10; //

// this expression is false because of operator precedence.

// SWITHC STATEMENT
// EXAMPLE 1

// if (day === 1) {
//     console.log ("MONDAY")
// }
// else if (day === 2) {
//     console.log ("TUESDAY")
// }
// else if (day === 3) {
//     console.log ("WEDNESDAY")
// }
// else if (day === 4) {
//     console.log ("THURSDAY")
// }
// else if (day === 5) {
//     console.log ("FRIDAY")
// }
// else if (day === 6) {
//     console.log ("SATURDAY")
// }
// else if (day === 7) {
//     console.log ("SUNDAY")
// }
// else (console.log ("INVALID DAY"))

let day = 9;

switch (day) {
    case 1: 
        console.log ("MONDAY")
        break;
    case 2: 
        console.log ("TUESDAY")
        break;
    case 3: 
        console.log ("WEDNESDAY")
        break;
    case 4: 
        console.log ("THURSDAY")
        break;
    case 5: 
        console.log ("FRIDAY")
        break;
    case 6: 
        console.log ("SATURDAY")
        break;
    case 7: 
        console.log ("SUNDAY")
    default:
        console.log ("INVALID DAY")
}

// EXAMPLE 2

let emoji = "sae"

switch (emoji) {
    case "sad face":
    case "happy face":
        console.log("yellow")
        break;
    case "eggplant":
        console.log("purple")
        break;
    case "lips":
    case "heart":
        console.log("red")
    default:
        console.log ("NOT A VALID ENTRY")
}

// TERNARY OPERATOR: SHORTCUT FOR CONDITIONAL STATEMENTS
// TAKES IF AND ELSE INTO SINGLE LINE OF CODE
// THERE ARE 3 PIECES TO THIS CODE
// condition ? expIfTrue: expIfFalse
// EXAMPLE 1

let number = 9

if (number === 7){
    console.log ("LUCKY")
}

else {
    console.log ("BAD")
}

// TERNARY STATEMENT 
number === 7 ? console.log("LUCKY") :console.log ("BAD");

// let status = "ONLINE"

// let col = "GREEN"

// if (status === "offline") {
//     color = "red"
//     console.log ("USER IS OFFLINE")
// }
// else {
//     console.log ("USER IS ONLINE")
// }

// IMPROVED TERNARY STATEMENT
let login = "online"


let color = login === "offLine" ? "red" : "green";

let user = "offline";

let col = user === "offline" ? "red" : "green";