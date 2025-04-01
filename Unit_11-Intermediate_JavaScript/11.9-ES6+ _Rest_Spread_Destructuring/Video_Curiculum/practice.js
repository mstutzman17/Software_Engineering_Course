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
// const dummyObj = {...'Careful what you wish for', ...colors}

const shoppingCart = [
    {
        name: 'honey orchid',
        quantity: 2,
        price: 13.50
    },
    {
        name: 'african solstice',
        quantity: 4,
        price: 25.99
    }
];

const cartCopy = [...shoppingCart]