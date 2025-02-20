// 11.2.4
// Intro to Big-O //

// function backward(str){
//     let result = ""
//     for (let i = str.length - 1; i >= 0; i--){
//         result+=str[i]
//     }
//     return result;
// }

// function backward2(str){
//     return str.split("").reverse().join("")
// }

function addUpToFirst(n) {
    let total = 0;

    for (let i = 1; i <= n; i++){
        total += i;
    }

    return total;
}

// function addUpToSecond(n) {
//     return n * (n + 1) / 2;
// }

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log (i, j);
        }
    }
}

function allEven(nums) {
    let loopCount = 0;
    for (var i = 0; i < nums.length; i++) {
        loopCount++;
        if (nums[i] % 2 !== 0) {
            console.log ("LOOP COUNT:", loopCount)
            return false;
        }
    }
    console.log ("LOOP COUNT:", loopCount)
    return true;
}

funciton doMath(x) {
    return x * 23132354 * 21354 * 2
}

function makeVars(n){
    const n1 = n
    const n2 = n
    const n3 = n
}

function getThirdElement(arr){
    return arr[3]
}

function doubleAll(arr){
    for (let i =0; i < arr.length; i++){
        return arr[i] * arr[i] * 3 * 9 * arr.length
    }
}

function sum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

function double(nums) {
    let doubledNums = [];
    for (let i =0; i<nums.length; i++) {
        doubledNums.push (2 * nums[i]);
    }
    return doubledNums;
}