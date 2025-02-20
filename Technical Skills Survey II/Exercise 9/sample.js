

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



    // Return the character unchanged if it's not in the alphabet
    return letter;
}

function removeRandomLetters(str) {
   let result = '';
   for (let i = 0; i < str.length; i++) {
       // Keep the character unless it's the 3rd character in each group of three
       if ((i + 1) % 3 !== 0) {
           result += str[i];
       }
   }
   return result;
}

