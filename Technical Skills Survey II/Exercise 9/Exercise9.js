const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift) {
    const isUpperCase = letter === letter.toUpperCase(); // Check if the letter is uppercase
    const letterLower = letter.toLowerCase(); // Convert letter to lowercase to find its index

    if (alphabet.includes(letterLower)) {
        const index = alphabet.indexOf(letterLower);
        const effectiveShift = shift % alphabet.length; // Normalize shift to 0–25
        const newIndex = (index + effectiveShift) % alphabet.length;
        const encryptedLetter = alphabet[newIndex];

        // If the letter was originally uppercase, convert the result back to uppercase
        return isUpperCase ? encryptedLetter.toUpperCase() : encryptedLetter;
    }

    // Return the letter unchanged if it's not in the alphabet
    return letter;
}

function insertRandomLetterEveryTwoChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i]; // Add the current character

        // After every 2 characters, insert a random letter (if it's not the last character)
        if ((i + 1) % 2 === 0 && i !== str.length - 1) {
            const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            result += randomLetter; // Insert a random letter
        }
    }
    return result;
}

function encryptMessage(message, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        encryptedMessage += encryptLetter(message[i], shift);
    }

    // Insert a random letter after every 2 characters in the encrypted message
    return insertRandomLetterEveryTwoChars(encryptedMessage);
}

function decryptLetter(letter, shift) {
    const isUpperCase = letter === letter.toUpperCase(); // Check if the letter is uppercase
    const letterLower = letter.toLowerCase(); // Convert letter to lowercase to find its index

    if (alphabet.includes(letterLower)) {
        const index = alphabet.indexOf(letterLower);
        const effectiveShift = shift % alphabet.length; // Normalize shift to 0–25
        const newIndex = (index - effectiveShift + alphabet.length) % alphabet.length;
        const decryptedLetter = alphabet[newIndex];

        // If the letter was originally uppercase, convert the result back to uppercase
        return isUpperCase ? decryptedLetter.toUpperCase() : decryptedLetter;
    }

    // Return the letter unchanged if it's not in the alphabet
    return letter;
}

function removeRandomLetters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // Keep the character unless it's the 3rd character in each group of three (the random letter)
        if ((i + 1) % 3 !== 0) {
            result += str[i];
        }
    }
    return result;
}

function decryptMessage(message, shift) {
    let filteredMessage = removeRandomLetters(message); // Remove random letters inserted during encryption
    let decryptedMessage = "";
    for (let i = 0; i < filteredMessage.length; i++) {
        decryptedMessage += decryptLetter(filteredMessage[i], shift);
    }
    return decryptedMessage; // Return the decrypted message
}
