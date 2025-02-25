function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // the element to be inserted
      let j = i - 1; // start comparing with the previous element
      while (j >= 0 && arr[j] > current) { // shift elements that are greater than 'current' to the right
        arr[j + 1] = arr[j]; // shift element to the right
        j--;                // move to the previous element
      }
      arr[j + 1] = current; // insert 'current' in the correct position
    }
    return arr; // return the sorted array
  }