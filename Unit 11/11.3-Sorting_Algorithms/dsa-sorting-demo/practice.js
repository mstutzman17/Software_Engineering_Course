// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         for(j = 0; j<arr.length; j++){
//          if(arr[i] > arr[i+1]){
//             let temp = arr [i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//          }
//          console.log(arr);
//     }
// }

function bubbleSort(arr){
    let count = 0; 
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            count++
            console.log(arr);
         if(arr[j] > arr[j+1]){
            let temp = arr [j];
            arr[j  ] = arr[j+1];
            arr[j+1] = temp;
            }
        }
    }
    console.log ("TOTAL COUNT:", count)
    return arr;
}

function bubbleSort2(arr){
    let count = 0; 
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j<arr.length-i; j++){
            count++
            console.log(arr);
         if(arr[j] > arr[j+1]){
            let temp = arr [j];
            arr[j  ] = arr[j+1];
            arr[j+1] = temp;
            }
        }
    }
    console.log ("TOTAL COUNT:", count)
    return arr;
}
