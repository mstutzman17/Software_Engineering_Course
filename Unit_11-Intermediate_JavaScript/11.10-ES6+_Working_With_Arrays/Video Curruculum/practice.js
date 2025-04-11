function holler() {
    console.log("Hey you!")
}

const whisper = function() {
    console.log("pssst.... i have a secret")
}

// function add(x,y){
//     return x + y;
// }

// function subtract(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x * y;
// }

// function divide(x,y){
//     return x / y;
// }

// const mathFuncs = [add, subtract, multiply, divide]

// function add(a, b) { return a + b; }
// function subtract(a, b) { return a - b; }
// function multiply(a, b) { return a * b; }
// function divide(a, b) { return a / b; }
// function power(a,b){ return a ** b}

// const mathFuncs = [add, subtract, multiply, divide, power];

// // setTimeout(whisper, 4000)

// function doMath(a,b,mathFunc) {
//    return mathFunc(a,b)
// }

// console.log(doMath(17,27,add))
// console.log(doMath(17,27,multiply))
// console.log(doMath(17,27,divide))
// console.log(doMath(17,27,subtract))

// doMath(130.8,2, function(a,b){
//     console.log(`Answer: ${a ** b}`);
// })

// function doAllMath(a,b, mathFuncs){
//     for(let func of mathFuncs){
//         console.log(`Answer: ${func(a,b)}`)
//     }
// }

// console.log(doAllMath(130.38404810405322013, 2, mathFuncs))

// const colors = ['teal', 'cyan','peach','purple']

// function yellColors(val, index){
//     const caps = val.toUpperCase()
//     console.log(`At index ${index}: ${caps}`)
// }

// colors.forEach(yellColors)

// const prices = [30.99, 19.99, 2.5,99.0]
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// })
// console.log(total)

const prices = [30.99, 19.99, 2.5,99]
// let total = 0;
// for( let price of prices){
//     total += price;
// }
// console.log(total)

// let total = 0
// for (let i = 0; i < prices.lenght; i++){
//     total += prices[i];
// }

// Practice Exercise: 


// const myForEach = [4,5,6]

// myForEach.forEach(function (value){
//     console.log(value)
// })

function forEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

forEach(prices, function(price){
    console.log(price)
});