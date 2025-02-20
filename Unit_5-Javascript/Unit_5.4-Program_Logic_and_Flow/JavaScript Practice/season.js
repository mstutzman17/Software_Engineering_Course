let season = "fall";
let response;

if (season === "summer") {
    console.log ("The season is summer!")
}

else if (season === "winter") {
    console.log ("The season is winter!")
}

else {
    console.log ("We cannot identify the season.")
}

let machineActive = true
let score = 17
let response;

if (machineActive === false){
    console.log ("The system is not turned on")
}

else {
    console.log ("The system is ready!")
}

if (score === 0 || score > 100) {
    console.log ("This is not possible, an error has occurred.")
}

else if ( score >= 0 && score <= 19) {
    console.log ("That was a terrible score -- total fail!")
}

else if (score >= 20 && score <= 39) {
    console.log ("You know some things, but it's a pretty bad score. Needs improvement.")
}

else if ( score >= 40 && score <= 69) {
    console.log ("You did a passable job, not bad!")
}

else if ( score >= 70 && score <= 89) {
    console.log ("That's a great score, you reall know your stuff!")
}

else if ( score >= 90 && score <= 100) {
    console.log ("What an amazing score! Did you cheat? Are you real?")
}