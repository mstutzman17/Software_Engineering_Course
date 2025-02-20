const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },

    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

//   Step 1 //
 guests.BRUTUS = {
        title: "Senator",
        region: "Rome",
        dietaryPreferences: "Vegan",
        pastGifts: ["Silver Dagger", "Marble Bust"]
    }
// console.log (guests)

// Step 2 //

guests.CICERO.pastGifts = ["Scroll of Proverbs", "Quill", "Golden Lyre"]
// console.log (guests.CICERO)

// Step 3 //

const antonyRegion = guests.ANTONY.region;
// console.log (antonyRegion)

// Step 4 //

delete guests.CICERO
// console.log (guests)

// Step 5 //

const generalProfile = guests.ANTONY
generalProfile.region = "Egypt"
// console.log (generalProfile)

// Question 1 //
// ANOTONY's region will be Egypt. The reason his region is updated to Egypt is because objects are reference types and both generalProfile and the original guests are pointing to the same value.