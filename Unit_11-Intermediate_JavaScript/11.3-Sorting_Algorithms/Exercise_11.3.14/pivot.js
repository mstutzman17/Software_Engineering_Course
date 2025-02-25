function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];  // choosing the first element as pivot
    let swapIndex = start; // tracks the pivot's final position

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;  
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]; // swap smaller element
        }
    }

    // swap pivot with the element at the swapIndex to put it in the correct place
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    return swapIndex; // return the pivot's final index
}
