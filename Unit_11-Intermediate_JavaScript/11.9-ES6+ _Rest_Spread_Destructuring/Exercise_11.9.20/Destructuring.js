// 1. **Unveiling the Coordinates**: Destructo has found a map with coordinates marked on it. Use object destructuring to extract the `x` and `y` coordinates from the given `coordinates` object. Print the coordinates.

const coordinates = {x: 34, y: 42, z: 67};

const {x, y} = coordinates;
console.log(`x: ${x}
y: ${y}`);

// 2. **The Map of Secrets**: The map reveals several locations, but only the first two are significant for the quest. Use object destructuring with the rest parameter to isolate the `first` and `second` locations from the `locations` object, capturing the rest in a variable called `remaining`. Print the key locations.

const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};

const {first, second, ...remaining} = locations;
console.log(`First: ${first}
Second: ${second}`);

// 3. **The Mysterious Door**: To open the Mysterious Door, a sequence is required, which might be incomplete. Use object destructuring to assign default values to ensure the door opens even if part of the code is missing. Make sure the `middle` defaults to one of the values from the `remaining` variable above if not provided. Print the door code sequence.

const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};

const {upper = "Beta", middle= remaining.third, lower = "Delta"} = doorCode;
console.log(upper, middle, lower);

// 4. **The Guardian's Riddle**: The guardian of an ancient library speaks in riddles. Use object destructuring to rename `ancientWord` to `translation` in the `riddle` object. Print the translation of the riddle.

const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};

const {ancientWord: translation} = riddle;
console.log(translation);

// 5. **The Array of Elements**: Inside the library, Destructo discovers an array that represents the elements needed to decipher the next clue. Use array destructuring to extract the first two elements. Print the essential elements.

const elements = ["Fire", "Water", "Earth", "Air"];

const [firstEssential, secondEssential] = elements;
console.log(firstEssential, secondEssential);

// 6. **Skipping Stones**: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.

const stones = [1, 2, 3, 4, 5, 6];

const [firstStone,,,,, sixthStone] = stones;
console.log(firstStone, sixthStone);


// 7. **The Array of Shadows**: The Cave of Shadows hides more than it reveals. Use array destructuring with the rest parameter to separate the visible shadow (which is the first) from the hidden ones. Print the visible shadow and the hidden shadows.

const shadows = ["Darkness", "Silence", "Whisper", "Echo"];

const [visibleShadow, ...hiddenShadows] = shadows;
console.log(visibleShadow, hiddenShadows);

// 8. **The Wise Function**: Destructo needs to decode ancient directions to continue his quest. Help him by writing a function `revealPath` that decodes and prints the direction and distance to travel. The function takes an object with `direction` and `distance` as parameters.

function revealPath({direction, distance, nextDirection, nextDistance}){
    console.log(`Travel ${direction} for approximately ${distance}. Then travel ${nextDirection} for exactly ${nextDistance}. X Marks the Spot!`)
}

revealPath({direction: "Northwest", distance: '17 Miles', nextDirection: "East", nextDistance: "217 Steps"})

// 9. **Potion of Clarity**: Destructo finds an ancient scroll with a potion recipe, but some ingredients are missing. Write a function `mixPotion` that uses defaults "Water" and "Fireflower" for `ingredient1` and `ingredient2` if they are not specified and print those mixings. The function takes an object with these optional properties.

function mixPotion({ingredient1 = "Water", ingredient2 = "FireFlower"} = {})
{
    console.log(`Let's mix ${ingredient1} with ${ingredient2}`)
}

mixPotion({ingredient1: "Hazelnut"})

// 10. **The Array Spell**: At the gates of an ancient library, Destructo must cast a spell with the first two ingredients from a list given to him by a wise owl. Create a function `castSpell` that uses array destructuring to access these ingredients from an array and print the spell casting.

function castSpell([ingredient1, ingredient2]){
    console.log (`Use the pleasant ingredient called ${ingredient1} and then the smelly one known as ${ingredient2}`)
}

castSpell(["Lavendar", "Wet Werewolfe Fur" ])

// 11. **The Nested Secret**: Behind the final door lies a nested artifact containing the ultimate clue. Use nested destructuring to extract `The Final Key`. Print the unveiled secret.

const nestedSecret = {outer: {inner: "The Final Key"}};

const {outer: {inner}} = nestedSecret
console.log(inner)

// 12. **The Swap of Fate**: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.

let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneA, stoneB] = [stoneB, stoneA]
console.log(stoneA, stoneB)