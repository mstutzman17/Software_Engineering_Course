// function holler() {
//     console.log("Hey you!")
// }

// const whisper = function() {
//     console.log("pssst.... i have a secret")
// }

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

// const prices = [30.99, 19.99, 2.5,99]
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

// function forEach(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         callback(arr[i])
//     }
// }

// forEach(prices, function(price){
//     console.log(price)
// });

// const numbers = [21, 37, 64, 99, 142]
// const negatives = numbers.map(function(num){
//     return ( num * -1);
// })

// const doubles = numbers.map(function(num){
//     console.log(num * 2)
// })

// const toDos = [
//     {
//         id: 1,
//         text: 'walk the dog',
//         priority: 'high'
//     },
//     {
//         id: 2,
//         text: 'walk the chickens',
//         priority: 'medium'
//     },
//     {
//         id: 3,
//         text: 'feed the cats',
//         priority: 'low'
//     },
//     {
//         id: 1,
//         text: 'put out fire in garage',
//         priority: 'very high'
//     }
// ]

// const toDoText = toDos.map(function (todo) {
//     return todo.text;
// })

// const links = Array.from(document.querySelectorAll('a'));
// const urls = links.map(function (a){
//     return a.href;
// })

// function myMap(array, callback){
//     const emptyArray = [];
//     for(let i = 0; i < array.length; i++){
//         emptyArray.push(callback(array[i]))
//     }
// } 

// const newToDos = myMap(toDos, function(toDos) {
//     return toDos
// }) 
    
// function myMap(array, callback) {
//     const mappedArray = []
//     for (let i = 0; i < array.length; i++){
//         const val = callback(array[i], i, array)
//         mappedArray.push(val);
//     }
//     return mappedArray;
// }

// const priorityMap = myMap(toDos, function (priority){
//     return priority.priority;
// })

// const repeatedLetters = myMap(['a', 'b', 'c', 'd', 'e', ], function(str, idx){
//     return str.repeat(idx);
// })

// const words = [
//     'immunoelectrophoretically',
//     'rotavator',
//     'tsktsk',
//     'psychophysicotherapeutics',
//     'squirrelled',
//     'crypt',
//     'uncopyrightable',
//     'cysts',
//     'pseudopseudohypoparatahyroidism',
//     'unimaginatively'
// ]

// const containsVowel = function(word){
//     for (let char of word){
//         if(isVowel(char)) return true;
//     }
//     return false;
// }

// const randomWords = words.filter(function (w){
//     return w[0] === 'u' || w[0] === 'c'
// })

// const vowelWords = words.filter(containsVowel)
// const noVowels = words.filter(function(word){
//     return !containsVowel(word)
// })

// const isVowel = function (char){
//     return 'aeiou'.indexOf(char) !== -1;
// }

// const longWords = words.filter(function (word){
//     return word.length >= 20;
// })

// const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')

// const checked = Array.from(allCheckboxes).filter(function (box){
//     return box.checked;
// })

// const completedItems = checked.map(function (checkbox){
//     return checkbox.parentElement.innerText;
// })

// function extractCompletedTodos(){
//     const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')
//     return Array.from(allCheckboxes).filter(function (box){
//         return box.checked;
//     })
//     .map(function (checkbox){
//         return checkbox.parentElement.innerText;
//     })
// }

// const words = [
//     'immunoelectrophoretically',
//     'rotavator',
//     'tsktsk',
//     'psychophysicotherapeutics',
//     'squirrelled',
//     'crypt',
//     'uncopyrightable',
//     'cysts',
//     'pseudopseudohypoparatahyroidism',
//     'unimaginatively'
// ]

// function myFilter(arr, callback){
//     const filteredArray=[]
//     for (let i = 0; i < arr.length; i++){
//         if(callback(arr[i], i, arr)){
//             filteredArray.push(arr[i])
//         }
//     }
//     return filteredArray;
// }

// const shortWords = myFilter(words, function(word){
//     return word.length<=10;
// })

// const evenIndex = myFilter(words, function(word, i){
//     return i % 2 === 0
// })

// const words = [
//     'immunoelectrophoretically',
//     'rotavator',
//     'tsktsk',
//     'psychophysicotherapeutics',
//     'squirrelled',
//     'crypt',
//     'uncopyrightable',
//     'cysts',
//     'pseudopseudohypoparatathyroidism',
//     'unimaginatively'
// ]

// const longWords = words.some(function(word){
//     return word.length > 60;
// })

// const wordsWithThyroid = words.some(function(word){
//     return word.indexOf('thyroid') !== -1;
// })

// words.every(function(w){
//     return w.length >= 5;
// })

// function allStrings(arr){
//     return arr.every(function(el){
//        return typeof el === 'string'
//     })
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', function (e){
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]')
//     const allChecked = Array.from(checkboxes).some(function(checkbox){
//         return checkbox.checked
//     })
//     if(!allChecked) alert("Please agree to all terms before you continue.")
// })

// const mySome = function(arr, callback){
//     for(let i = 0; i <= arr.length; i++){
//         if (callback(arr[i], i, arr)) return true
//     }
//     return false;
// }

// mySome(words, function (word){
//     return word.length >= 5
// })

// const myEvery = function(arr, callback){
//     for(let i = 0; i <= arr.length; i++){
//         if (!callback(arr[i], i, arr)) return false
//     }
//     return true;
// }

// myEvery(words, function(word){
//     return typeof word === 'string'
// })

// myEvery(words, function(word){
//     return word > [3];
// })

// const scores = [
//     0, 0, 0, 0, 0, 0, 0, 0,
//     55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93
// ]

// scores.find(function(score){
//     return score >= 75
// })

// scores.find(function(score){
//     return score !== 0 && score % 2 === 0
// })

// const evenScores = scores.filter(function(score){
//     return score % 2 === 0
// })

// const firstEven = scores.findIndex(function(score){
//     return score !== 0 && score % 2 === 0
// })

// function partition (arr, pivot){
//     const pivotIndex = arr.findIndex(function(element){
//         return element > pivot
//     })
//     const failing = arr.slice(0, pivotIndex);
//     const passing = arr.slice(pivotIndex)
//     return [`Failing: ${failing} Passing: ${passing}`]
// }

// const scores = [
//     0, 0, 0, 0, 0, 0, 0, 0,
//     55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93
// ]

// function myFind(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         if (callback(arr[i], i, arr))
//             return arr[i]
//     }
//     return undefined
// }

// myFind(scores, function (score){
//     return score === 88;
// })

// function myFind2(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         if (callback(arr[i], i, arr) === true) return arr[i]
//     }
// }

// function myFindIndex(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         if (callback(arr[i], i, arr) === true) return i
//     }
//     return -1
// }

// myFindIndex(scores, function(score){
//     return score > 0
// })

// const nums = [20, 30, 50, 12,-2,45,99,19,22,85]

// let total = 0
// for(let num of nums){
//     total += num
// }
// console.log (total)

// let min = nums[0]
// for(let i = 1; i < nums.length; i++){
//     if (nums[i] < min) min = min = nums [i]
// }
// console.log(min)

// let max = nums[0]
// for(let i = 1; i < nums.length; i++){
//     if (nums[i] > max) max = nums [i]
// }
// console.log(max)

// const str="lollapalooza"
// const charFreq  = {}
// for(let char of str){
//     if(charFreq[char]){
//         charFreq[char] += 1;
//     }
//     else {
//         charFreq[char] = 1
//     }
// }

// let evens = [2,4,6,8,10]
// console.log (evens.reduce(function(accumulator, nextValue){
//     return accumulator + nextValue
// }))

// const words = ['Hello. ', 'I ', 'love ', 'you.']
// const results = words.reduce(function(accum, nextWord){
//     console.log(accum, nextWord);
//     return accum + nextWord;
// })

// const midtermScores = [ 88,70,93,94,64,62,56]
// const finalsScores = [92,93,76,77,78,59,61]
// const minScore = midtermScores.reduce(function(min, nextScore){
//     if(nextScore < min){
//         return nextScore;
//     }
//     return min;
// })

// const minMidtermScore = midtermScores.reduce(function(min, nextScore){
//     return nextScore < min ? nextScore : min
// })

// const maxScore = midtermScores.reduce(function(max, nextScore){
//     return nextScore > max ? nextScore : max
// })

const midtermScores = [ 88,70,93,94,64,62,56]
const finalsScores = [92,93,76,77,78,59,61]

const minMidtermScore = midtermScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min
})

const minFinalsScore = finalsScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min
})


const minOverallScore = finalsScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min
}, minMidtermScore);