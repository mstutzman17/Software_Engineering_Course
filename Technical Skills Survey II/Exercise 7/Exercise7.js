const friend = "BRUTUS"
const shiftValue = 3;

// Step 1 //

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2 //

let encryptedName = "";
for (let i = 0; i < friend.length; i++) 
{
    const currentLetter = friend[i]
    // console.log (currentLetter);
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    // console.log (currentIndex)
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    // console.log (newIndex);
    encryptedName += alphabet[newIndex].toUpperCase();
    console.log (encryptedName)
}


// Question 1 //

// It is advantageous to use a loop in this situation because it drastically decreases the amount of code needed to achieve the desired outcome. Plus it allows for use of a name of any length.

// Question 2 //

// % alaphabet.length is used in the above loop so that if the shiftValue hahppens to go past the last letter it will automatically wrap around to the first letter.