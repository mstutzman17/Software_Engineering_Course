const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// STEP ONE //

function encryptLetter (letter,shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
}

// STEP TWO //

function encryptMessage (word, shift){
    let encryptedMessage = "";
    for (let i = 0; i <word.length; i++){
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

// STEP THREE //

function decryptLetter (letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}

// STEP FOUR //

function decryptMessage (word, shift){
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++){
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}

// QUESTION ONE //

// Yes it would return "BRUTUS" because the decryptedMessage function is the reverse of the encryptedMessage function.