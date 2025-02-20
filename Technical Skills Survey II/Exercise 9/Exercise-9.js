const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  const normalizedShift = ((shiftValue % 26) + 26) % 26; // Normalize the shift value
  let encryptedMessage = "";
  
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    
    if (/[a-zA-Z]/.test(char)) {  // Only encrypt alphabetic characters
      let isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();  // Convert to lowercase for ease
      
      let index = alphabet.indexOf(char);
      let newIndex = (index + shiftValue) % 26;
      let encryptedChar = alphabet[newIndex];
      
      if (isUpperCase) {
        encryptedChar = encryptedChar.toUpperCase();
      }

      encryptedMessage += encryptedChar;

      // Insert a random letter after every two characters
      if ((encryptedMessage.replace(/[^a-zA-Z]/, "").length % 2 === 0)) {
        const randomLetter = alphabet[Math.floor(Math.random() * 26)];
        encryptedMessage += randomLetter;
      }
    } else {
      encryptedMessage += char;  // Non-alphabetic characters remain unchanged
    }
  }

  return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  const normalizedShift = ((shiftValue % 26) + 26) % 26; // Normalize the shift value
  let decryptedMessage = "";
  let alphabetCount = 0; 
  // To track when to skip random leters

  for (let i = 0; i < encryptedMessage.length; i++) {
    let char = encryptedMessage[i];
    
     // Only decrypt alphabetic characters
    if (/[a-zA-Z]/.test(char)) {  
     alphabetCount++;
      let isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      
      let index = alphabet.indexOf(char);
      if (index !== -1) {  // Ensure index is valid
        let newIndex = (index - normalizedShift + 26) % 26;  
        // Handle negative shifts
        let decryptedChar = alphabet[newIndex];
        
        if (isUpperCase) {
          decryptedChar = decryptedChar.toUpperCase();
        }
        
        decryptedMessage += decryptedChar;
      }
      // Skip the next character if it's a random letter
      if (alphabetCount % 3 === 0) {
      i++;  // Move to the next character to skip the random letter
      }

    } else {
      decryptedMessage += char;  // Non-alphabetic characters remain unchanged
      i++;
    }
  }

  return decryptedMessage;
}

