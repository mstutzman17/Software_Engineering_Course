function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){ // tracks passes through array
        for(let j = 0; j<arr.length-i; j++){ // performs comparisons and swaps
         if(arr[j] > arr[j+1]){
            let temp = arr [j]; // Temporarily store arr[j]
            arr[j] = arr[j+1]; //Swap arr[j] with arr[j+1]
            arr[j+1] = temp; // Move the stored value to arr[j+1]
            }
        }
    }
    return arr;
}