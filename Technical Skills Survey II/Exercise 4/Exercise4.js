// Step 1 //

const emblemClue1 = "Eagle";

let locationStart = "Villa";

if (emblemClue1 === "Eagle") {
    console.log ("Forum");
}

else if (emblemClue1 === "Lion") {
    console.log ("Colosseum");
}

else {
    console.log ("Villa");
}

// Step 2 //

const emblemClue2 = "Grapes";

if (emblemClue2 === "Laurel" && locationStart === "Forum") {
    locationStart += " of Augustus"
    // console.log ("Forum of Augustus")
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
    locationStart += " of Pompey"
    // console.log ("Villa of Pompey");
}

// Step 3 //

const emblemClue3 = 9;

switch (emblemClue3) 
{
    case 7: 
    locationStart += " North"
    // console.log ("North")
        break;
    case 3:
    locationStart += " South"
    // console.log ("South")
        break;
    case 9:
    locationStart += " East"
    // console.log ("East")
        break;
    case 4: 
    locationStart += " West"
    // console.log ("West")
}

// Question //

// Because == (double equals) will convert the compared values to a common type. On the other hand, === can only compare values of the same type and will return false if two different types are compared.