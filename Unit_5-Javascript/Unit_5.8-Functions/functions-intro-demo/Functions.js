// FUNCTIONS SYNTAX AND FORMAT //

function grumpus(){
    console.log ("ugh...you again");
    console.log("FOR THE LAST TIME...");
    console.log ("LEAVE ME ALONE!!!");
}
grumpus()
grumpus()
grumpus()

for (let i = 0; i <50; i++){
    grumpus()
}

// DICE ROLL FUNCTION //

// function rollDie(){
//     let roll = Math.floor(Math.random() *6) + 1
//     console.log (`Rolled: ${roll}`)
// }
// rollDie()

// function throwDice(){
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }

// throwDice()

// FUNCTION PARAMETERS //

function greet(nickname){
    console.log (`Hi, ${nickname}!`);
}
greet("tim")
 
function rollDie(){
    let roll = Math.floor(Math.random() *6) + 1
    console.log (`Rolled: ${roll}`)
}

function throwDice(numRolls){
    for (let i =0; i<numRolls; i ++){
        rollDie();
    }
}

// FUNCTIONS WITH MULTIPLE PARAMETERS //

function square (num){
    console.log(num * num);
}

function sum(x,y){
    console.log (x + y);
}

function divide (a,b){
    console.log (a/b);
}

// RETURN STATEMENTS //

function add(x,y){
    return x + y;
}

// return statements end a funcitons execution //

function square (x,y){
    return x*x;
    console.log ("All done!")
}

// function isPurple(color){
//     if(color.toLowerCase === 'purple'){
//         return true;
//     }
//     else {
//         return false
//     }
// }

// function isPurple (color){
//     return color.toLowerCase() === 'purple';
// }

function containsPurple (arr){
    for(let color of arr){
        if(color === "purple" || color === "magenta"){
            return true;
        }
    }
}
return false;