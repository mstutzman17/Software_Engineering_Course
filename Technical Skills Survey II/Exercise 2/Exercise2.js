 alert("It Works")

const friend = "BRUTUS"
const shiftValue = 3;

// Step 1 //

const latinAlph = "abcdefghijklmnopqrstuvwxyz";

// Step 2 //

const firstLetter = friend[0];
const index = latinAlph.indexOf(firstLetter.toLowerCase());

Question 1

// Because the index always starts at 0 which would make B a 1 instead of a 2. //

// Step 3 //

const newIndex = index + shiftValue;
const encryptedFirstLetter = latinAlph;[newIndex]

Question 2

// By using the modulus operator %. 

// Step 4 //

const latinAlphLength = latinAlph.length;

// Step 5 //

const newIndex = (index + shiftValue) % latinAlphLength;
const encryptedFirstLetter = latinAlph[newIndex];

// Step 6 //

const encryptedMessage = "EUXWXV";
const challangeMessage = encryptedMessage.slice(0,3);





