// function min(...nums){

// }

// [...]
// {...}

// function max(a , b , c , d , e , f , g){
//     console.log(arguments);
// }

// function max(){
//     console.log(arguments);
// }

// console.log(max())

// function sum() {
//     const args = Array.from(arguments)
//     return args.reduce((sum, val) => {
//         return sum + val;
//     })
// }

// const max = () => {
//     console.log(arguments);
// }

// const max = function() {
//     const args = Array.from(arguments);
//     return args.reduce((max, currVal) => {
//         return currVal > max ? currVal : max;
//     });
// };

// function sum(...nums){
//     console.log(nums)
//  }
 
// function sum(...nums){
//     return nums.reduce((sum, n) => sum + n);
//  }
 
// const sumAll = (...values) => {
//     return values.reduce((sum, n) => sum + n );
// }

// function makeFamily(parent1, parent2, ...kids){
//     console.log(parent1, parent2);
//     console.log(kids);
// }

// function makeFamily(parent1, parent2, ...kids){
//     return {
//         parents: [parent1, parent2],
//         children: kids.length ? kids : "None"
//     };
// }

// const filterByType = (type, ...vals) => {
//     return vals.filter(v => typeof v === type)
// }

// const things = [23,45,true,false, 0, 'hello', 'goodbye']

// console.log(filterByType('string',...things))

// console.log(things)

// function printStuff(a,...rest,b)

// const nums = [4,5,88,123,0,92]

// const palette = ['lavender berry', 'sunflower yellow', 'orchid orange']

// // const paletteCopy = palette.slice();
// // paletteCopy.pop()
// // palette.slice(2)

// // const paletteCopy = [...palette]

// const paletteCopy = ['sky blue',...palette, 'grass green']

// const greenTeas = ['snow jasmine', 'fragrant leaf']
// const oolongTeas = ['oney orchid', 'winter sprout']
// const herbalTeas = ['afrincan solstice', 'marshmallowroot']
// const coffees = ['gutemala red cat', 'snow leopard blend']

// const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas]

// const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey']
// console.log(withCaffeine)

// const vowels = 'aeiou';
// const vowelArr = [...vowels]

// const tea = {
//     type: 'oolong',
//     name: 'winter sprout',
//     origin: 'taiwan'
// };

// const arr = [...tea];

// for (let x of tea) {
//     console.log(x);
// }

// const tea2 = {...tea};

// const teaTin = {...tea, price: 22.99 };

// const newTea = {...tea, name: 'golden frost'}

// const teaData = {
//     steepTime: '30s',
//     brewTemp: 175,
//     origin: 'japan'
// }

// const fullTea = {...teaData, ...tea }

// const colors = ['red', 'orange', 'blue']
// // const dummyObj = {...'Careful what you wish for', ...colors}

// const shoppingCart = [
//     {
//         name: 'honey orchid',
//         quantity: 2,
//         price: 13.50
//     },
//     {
//         name: 'african solstice',
//         quantity: 4,
//         price: 25.99
//     }
// ];

// const cartCopy = [...shoppingCart]

// function makePerson (first, last, age){
//     return {
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     };
// }

// console.log(makePerson ('Moses', 'Stutzman', 32))

// function makePerson (first, last, age){
//     return {
//         first,
//         last,
//         age,
//         isAlive: true
//     };
// }

// console.log(makePerson ('Moses', 'Stutzman', 32))

// const mathStuff = {
//     x: 200,
//     add: function (a,b) {
//         return a + b;
//     },
//     square: function (a) {
//         return a * a;
//     }
// };

// const mathStuff = {
//    x: 200,
//    add(a,b){
//     return a + b
//    },
//    square(a)  {
//     return a * a;
//    },
//    () => {
    
//    }
// };

// const color = {
//    periwinkle: '9c88ff',
//    '9c88ff': 'periwinkle'
// };

// function makeColor(name, hex) {
//    return {
//       name: hex,
//       hex: name
//    };
// }

// function makeColor(name, hex) {
//    const color = {}; // variable called color with empty object
//    color[name] = hex;   // square brackets evaluate the value of name and hex and return a string
//    color[hex] = name;
//    return color;
// }

// function makeColor(name, hex) {
//    return {
//       [name]: hex,
//       [hex]: name,
//    }
// }

// const mystery = {
//    [6 + 7]: 'thirteen'
// };

// const obj = {};
// obj[6+7] = 'thirteen'

// const teaOrder = {
//    variety: 'oolong',
//    teaName: 'winter sprout',
//    origin: 'taiwan',
//    price: 12.99,
//    hasCaffeine: true,
//    quantity: 3
// };

// const {price, quantity, teaName} = teaOrder;
// const {origin} = teaOrder

// const {price, quantity, teaName,...otherStuff} = teaOrder;

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

// const options = {
//    refreshTime: 200
// }

// const {refreshTime = 750, waitTime = 1000} = options
// console.log(refreshTime)   // 200- initialized in options
// console.log(waitTime);     // 1000 - fallback to defualt

// const teaOrder = {
//    variety: 'oolong',
//    teaName: 'winter sprout',
//    origin: 'taiwan',
//    price: 12.99,
//    hasCaffeine: true,
//    quantity: 3
// };

// const {brewTemp = 175} = teaOrder

// const { teaName: tea} = teaOrder

// function checkout(tea){
//    const {quantity, price} = tea;
//    return quantity * price;
// }

// const order1 = {
//    variety: 'green',
//    teaName: 'silver needle',
//    origin: 'taiwan',
//    price: 12.99,
//    hasCaffeine: true,
// };

// function checkout(tea){
//    const {quantity = 1, price} = tea;
//    return quantity * price;
// }

// const students = [
//    {name: "Drake", GPA: 4.6},
//    {name: "Henrietta", GPA: 4.4},
//    {name: "Tung", GPA: 4.0},
//    {name: "Harry", GPA: 3.8},
//    {name: "Anthony", GPA: 3.2},
// ];

// // const [topStudent] = students;
// const [topStudent, secondBest] = students;

// const teaOrder = {
//    variety: 'oolong',
//    teaName: 'winter sprout',
//    origin: 'taiwan',
//    price: 12.99,
//    hasCaffeine: true,
//    quantity: 3
// };

// function getTotal(tea){
//    const {quantity, price} = tea;
//    return quantity * price;
// // }

// function getTotal({quantity, price}){
//    return quantity * price;
// }

// const longJumpResults = ['Tammy', 'Jessice', 'Violet' ];
// const swimMeetResults= ['Japan', 'France', 'Chile'];

// function awardMedals(){
//    return {
//       gold: 'Tammy',
//       silver:'Jessice'
//    }
// }

// function awardMedals([gold, silver, bronze]){
//    return {gold, silver, bronze};
// }

// const movie = {
//    Ratings: [
//       {Source: 'Internet Movie Database', Value: '8.3/10'},
//       {Source: 'Rotten Tomatoes', Value: '93%'},
//       {Source: 'Metacritic', Value: '88/100'}
//    ],
//    Versions: [
//       {version: 'Original release', runtime: 161},
//       {version: 'Directors Cut', runtime: 180}
//    ]
// }

// const {
//    Ratings: [
//       {Value: imdbRating},
//       {Value: rtRating},
//       {Value: metaRating}
//    ],
//    Versions: [
//       {version: originalRelease, runtime: originalReleaseRuntime},
//       {runtime: directorsCutRuntime}
//    ]

// } = movie;

let delicious = "Mayonnaise";
let disgusting = "Whipped Cream"

// let both = [delicious, disgusting];

// [disgusting, delicious] = both;

[disgusting, delicious] = [delicious, disgusting]
