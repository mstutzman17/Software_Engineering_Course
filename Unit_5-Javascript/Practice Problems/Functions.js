// Write a function with 2 parameters to return a sum.
function sum (x,y){
    return (x + y)
}

function average (array) {
    if (array.length === 0){
        return 0;
        // this returns 0 if an array is empty.
    }

    let sum = 0;
    for (let i = 0; i<array.length; i++){
        sum += array[i]; 
        // This adds the numbers of the array together
    }
    return sum / array.length;
    // this takes the average of the numbers in the array
}

function vowelsOfStr (){
    
}
