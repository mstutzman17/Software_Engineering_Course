// PRACTICE ONE //

function isValidPassword(password, username){
    if(password.length < 8){
        return false;
    }
    if (password.indexOf(' ')){
        return false;
    }
    if(password.indexOf(username)){
        return false;
    }
    return true;
}

// PRACTICE TWO //

// Writee a function to find the average value in an array of numbers
// avg ([0, 50]) ///25
// avg([75,76,80,95,100]) //85.2

function average (array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i <array.length; i++){
        sum += array[i]
    }
    return sum / array.length;
}

// PRACTICE THREE //

// A pangram is a sentence that contains every letter of the alphabet, like: "the quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabeet. Make sure you ignore string casing!

// isPangram{'The five boxing wizards jump quickly') //true
// isPangram)'The five boxing wizards jump quick') //false

function isPangram (sentence) {
    sentence = sentence.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabet) {
        if (!sentence.includes(letter)) {
            return false
        }
    }
}
return true

// PRACTICE FOUR //

// Write a getCard() function which returns a random playing card object, like:
//         {
//          value: "K"
            // suuit: "clubs"
//          }
// Pick a random value from:
// -------- 2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
// --------- clubs,spades, hearts, diamonds
// Return both in an object

// function getCard(){
//     const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
//     const valueIdx = Math.floor(Math.random() * values.length);
//     const suits = ["clubs","spades", "hearts", "diamonds"]
//     const suitIdx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitIdx]
//     return {value: value, suit: suit}
// }

function pick (array){
    const idx = Math.floor(Math.random() * array.length);
    return array[idx]
}


function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = ["clubs","spades", "hearts", "diamonds"];
    return { value: pick(values), suit: pick(suits)}
}
