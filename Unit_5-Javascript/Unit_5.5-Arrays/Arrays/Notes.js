// ARRAYS
// [] is called Array Literal Syntax

// // To make an empty arry
// let students =[]

// // An array of strings
// let colors = ['red', 'orange', 'yellow'];

// // An array of numbers
// let lottoNums = [19, 22, 56, 12, 51];

// // A mixed array
// let stuff = [true, 68, "cat, null"];

// EXAMPLE 1 //

let shoppingList = ["cereal", "ice", "cheese"];

let lottoNums = [45, 12, 23, 25, 34];

let myCollections = [12, "dog", true, null, NaN];

// ARRAYS ARE INDEXED //
// Example 1 //

let colors = ['red', "orange", "yellow", "green", "blue", "indigo", "violet"]

// Changing Arrays
// Arrays are muteable meaning you can change the value of the elements within one.
// Example 1 //
let shopList = ["Cheddar Cheese", "2% Milk"];

// Update value in an array
//  Mostly good for changing a value
shopList[1]= "Whole  Milk"

// Add a value to an array
// Example 1
shopList[2] = "Ice Cream";

// Example 2: push() method
shopList [shopList.length] = "Tomatoes"
shopList [shopList.length] = "Potatoes"

// Common Array Methods:
// Push: add to end
// Pop: remove from end

let topSongs = [
    "First Time Ever I Saw Your Face",
    "God Only Knows",
    "A Day in the Life",
    "Life on Mars",
];

topSongs.push ("Fortunate Son", "Wish I Never Had");
topSongs.push (true)
topSongs.pop ()
const nextSong = topSongs.pop ();
topSongs.push ("YDG'N", "Don't It Make My Brown Eyes Blue")

// More Array Methods:
// Shift: remove from start
// Unshift: add to start

let dishes = ["big platter"];
dishes.unshift("large plate, small plate", "cereal bowl", "mug", "dirty spoon")
dishes.shift ()

// More Array Methods:
// concat: merge arrays

let fruits = ["apple, banana"]
let veggies = ["asparagus", "brussel sprouts"]
let meats = ["steak", "chicken breast"]

console.log (fruits.concat(veggies))

let allFood = fruits.concat(veggies, meats)

// includes: look for a value (boolean method)
// indexOf: just like str.indexOf

let ingredients = [
    "water",
    "corn starch",
    "flour",
    "cheese",
    "brown sugar",
    "shrimp",
    "eel",
    "butter"
];

console.log (ingredients.includes ("butter"))

console.log (ingredients.includes ("water", 0))

if (ingredients.includes ("fish")) {
    console.log ("I am gluten free, I can't eat that")
}

console.log (ingredients.indexOf ("maple syrup"))

// Can include a fromIndex
console.log (ingredients.indexOf ("cheese", 2))

console.log (ingredients.indexOf ('flour')) !== -1

// join: creates a string from array
// reverse: reverses an array

let letters = [
    "T",
    "C",
    "E",
    "P",
    "S",
    "E",
    "R"
];

console.log (letters.reverse())

console.log (letters.reverse ().join("-"))
console.log (letters.reverse ().join("-"))

console.log ([12,3,17,177,].join("+"))

// slice: copy portion of an array

let animals = [
    "shark",
    "salmon",
    "whale",
    "bear",
    "lizard",
    "tortoise"
]

let swimmers = animals.slice(0,3)

let mammals = animals.slice(2,4)

// let reptiles = animals.slice(4,6)

let reptiles = animals.slice(4)

let quadrupeds = animals.slice(-3)

// splice: remove/replace elements
// Sytax: splice(startIndex, deleteCount, itemsToInsert))
// deleteCount and itemsToInsert are optional arguments

// INSERTING W/ SPLICE
animals.splice (1,0, "octopus")

// DELETING WITH SPLICE
animals.splice (1, 2)

// REPLACING WITH SPLICE 
animals.splice (1,2, "orca", "grizzly" )

// sort: sorts an array
// This method sorts based off a values UTF-16 character code

let people = [
    "Mrs. Robinson",
    "Angie",
    "Jolene",
    "Maggie May",
    "Roxanne"    
]

let nums = [34, 10, 1000, 67, 99]

// CONST AND ARRAYS

const foods = ["Milk"]
foods.push ("chocolate")

foods.unshift ("tortillas")

console.log (foods)

// NESTED ARRAYS
// Example 1

const animalPairs = [
    ["doe", "buck"],
    ["ewe", "ram",],
    ["peahen", "peacock"]
]

// HOW TO REFERENCE SPECIFIC ARRAYS AND INDEX IN A NESTED ARRAY

// console.log (animalPairs [1] [1]) 

// HOW TO CHANGE A VALUE IN A NESTED ARRAY

// console.log (animalPairs [0] [1] = "stag")

