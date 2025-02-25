function selectionSort(arr) {
    let n = arr.length; // get the length of the array
    // outer loop goes through each element of the array
    for (let i = 0; i < n - 1; i++) {
        let smallestIndex = i; // Assume the first element is the smallest

        // find the smallest element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j; // update the index of the minimum element
            }
        }
        // swap the found smallest element with the first element of the unsorted part
        if (smallestIndex !== i) {
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
        }
    }

    return arr; // return the sorted array
}
