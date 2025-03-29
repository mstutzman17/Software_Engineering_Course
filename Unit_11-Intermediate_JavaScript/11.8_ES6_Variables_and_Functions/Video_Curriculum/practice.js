// var musician = "Elton John"

// musician = "Alanis Moriset"
// var musician = true

// var song = "Goodbye Yellow Brick Road"

// function sing() {
//     if(ture){
//     var song = "Goodbye Yellow Brick Road";
//     }
//     console.log(song)
// }

// console.log(song)

// // let x = 10;
// // let x = 99;

// let myChickens = "Are awesome pets, but not really"

// if(true){
//     let color = 'teal'
//     console.log(color);
//     if (true){
//         console.log(color);
//     }
// }

// // console.log(color)

// function dance() {
//     let dancetype ="Tango";
// }

// console.log(danceType)


// var i = 'hello'
// for (var i = 0; i <=3; i++){
//     console.log(i)
// }
// console.log(i)

// var i = 'hello'
// for (let i = 0; i <=3; i++){
//     console.log(i)
// }
// console.log(i)

// let mood = 'fantastic';
// function getMood(num) {
//     let mood ='meh';
//     if (num < 3) {
//         let mood = 'bad :(;'
//     }
//     return mood;
// }

// const cat = "monty"
// cat = "dead monty"

// let firstCat = "monty"
// firstCat = "dead monty"

// const myCats = []

// myCats.push('monty')

// const person {name: 'todd'}
// person = {}
// person.name = 'jen'

// console.log(chickens)
// let chickens = ['butters', 'nancy', 'junior', 'tilda', 'stevie chicks']
// console.log(chickens)

// Array.map (function(x){
//     return x * 2
// })

// // Example of Function Declaration

// function greet(){

// }

// // Example of Function Expression

// const add = function(x,y) {
//     return x + y;
// };

// [1,2,3].forEach(function (n, idx) {
//     console.log(n, idx);
// });

// [1,2,3].forEach((n, idx) => {
//     console.log(n, idx);
// })

// [2,3,6,78,99,104,23].reduce(function(max, currNum){
//     return Math.max(max, currNum);
// })

// [2,3,6,78,99,104,23].reduce((max, currNum) => {
//     return Math.max(max, currNum);
// })

// [1,2,3,4,5].forEach(n => {
//     console.log(n * 10);
// })

// // square everything

// let nums = [1,2,3];
// let arrSquared = nums.map(n => n ** 2); // [1,4,9]

// [1,2,3,4,5,6].filter(function(num) {
//     return num % 2 === 0;
// })

// [1,2,3,4,512,32,36,76,44,6].filter((num) => num % 2 === 0)

// const double = (n) => n * 2;
// const double = (n) => {
//     return n * 2;
// }

// [1,2,3,4,5,6,7,8].map (n => {
//     if (n % 2 ===0) {
//         return 'even';
//     }
//     return 'odd';
// });

// [1,2,3,4,5,6,7,8].map ((n => 
//     if (n % 2 ===0) {
//         'even';
//     }
//          'odd';
// );

// [1,2,3,4,5,6,7,8].map((n) => (n % 2 === 0 ? 'even' : 'odd')) 

// const dailyRainTotals = [ 
//     [1.2,0.35,2.2], 
//     [1.7,0.6,0.1], 
//     [2.5,0.9,1.5] 
// ];
// // dailyRainTotals.map((hourlyRainTotals) => {
// //     return hourlyRainTotals.reduce((sum,inchesOfRain) => {
// //         return sum + inchesOfRain;
// //     });
// // });

// dailyRainTotals.map((hourlyRainTotals) => 
//      hourlyRainTotals.reduce((sum,inchesOfRain) => sum + inchesOfRain)
// );

// const makeMath = (num) => ({
//         sqaure: num * num,
//         double: num * 2
//     })

// const cat = {
//     name: 'Bubs',
//     meow: fucntion(){
//         return `${this.name} says MEOW!!!`;
//     }
// };

// const cat = {
//     name: 'Bubs',
//     eat : function () {
//         console.log(this);
//         return `${this.name} chows down`
//     },
//     meow : () => {
//         console.log(this);
//         return `${this.name} says MEOW!!!`;
//     }
// };

// const double = n => {
//     return n * 2;
// }

// const makeObj = () => {
//     return {mood: 'meh'}
// }

const makeObj = () => {
    return {
    mood: 'meh'
    };
  };

  var _this = void 0;

  var cat = {
    name: 'Bubs',
    eat: function eat() {
        console.log(this);
        return "".concat(this.name, " chows down");
    },
    meow: function meow() {
        console.log (_this);
        return "".concat(_this.name, " says MEOW!!!")
    } 
  };

