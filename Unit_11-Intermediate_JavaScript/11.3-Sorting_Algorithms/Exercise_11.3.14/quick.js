function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];  // choosing the first element as pivot
    let swapIndex = start; // tracks the pivot should go

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;  
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]; // swap smaller element
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];   // swap pivot with the element at the swapIndex to put it in the correct place
    
    return swapIndex; // return the pivot's final index
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // find pivot position
        quickSort(arr, left, pivotIndex - 1);  // recursively sort left partition
        quickSort(arr, pivotIndex + 1, right); // recursively sort right partition
    }
    return arr;
}
