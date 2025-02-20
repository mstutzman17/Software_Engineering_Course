// OBJECTS SYNTAX 
// {} IS AN OBJECT LITERAL

const fitbitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: "5 of 7",
    avgGoodSleep: "2:13",
    45: "fort five"
}

fitbitData.avgCalorieBurn
// syntax to access a property in an object
// all keys are stored as strings

// When you need comas and when you don't They are a must with multiple key value pairs/porperty //
let data = {a: 1,}
let stuff = {b: 2,}

// OTHER WAYS OF ACCESSING PROPERTIES FROM AN OBJECT

const numbers = {
    100: "one hundred",
    17: "seventeen",
    '76 trombones': "Great Song"
}

//  Using a dynamic value //

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

let mysteryColor = "yellow"

// ADDING NEW PROPERTIES OR UPDATING OLD PROPERTIES //

const userReviews = {};

userReviews ["queenBee49"] = 4.0;
console.log (userReviews)

userReviews.mrSmith78 = 3.5;
console.log (userReviews)

userReviews.colt = 5;
console.log (userReviews)

userReviews ["queenBee49"] += 2;
console.log (userReviews)

userReviews ["queenBee49"] ++;
console.log (userReviews)

// NESTING ARRAYS IN OBJECTS AND VICE VERSA //

const student = {
    firstName: "David",
    lastName: "Jones",
    strengths: ["Music", 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

// How would you add final and midterm and then divide them by 2? //

const avg = (student.exams.midterm + student.exams.final) /2;

const shoppingCart = [
    {
        product: "Jenga Classic",
        price: 6.88,
        quantity: 1
    },
    {
        product: "Echo Dot",
        price: 29.99,
        quantity: 3
    },
    {
        product: "Fire Stick",
        price: 39.99,
        quantity: 2
    }
];

let ticTacToe = [
['0', null, "X"],
['0', "X", null],
[null, "0", "X"]
]

const game = {
    player1: {
        username:"Blue",
        playingAs: "X"
    },
    player2: {
        username: "Muffins",
        playingAs: "O"
    },
    board: [
        ['0', null, "X"],
        ['0', "X", null],
        [null, "0", "X"]
            ]
        
}

// ARRAY AND OBJECT EQUALITY //

let nums = [1,2,3]
let mystery = [1,2,3]
// these variables are not equal. they look the same but refer to different arrays
// nums -> 12312324
// mystery -> 938320234

let moreNums = nums;
// these 2 arrays refer to the exact same array, so they are equal

// if you want to compare equality between arrays....

const user = {
    username: "CherryGarcia8",
    email: "garcia@gmail.com",
    notifications: ['message', 'alert'],
}

// if(user.notifications === []) {
//     console.log ('NO NEW NOTIFICATIONS')
// }

if (!user.notifications.length) {
        console.log ('NO NEW NOTIFICATIONS')
    }