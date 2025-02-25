// Helper function to get the digit at a specific place
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the largest number of digits in an array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

// actual Radix Sort Function
function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []); // Create 10 buckets (0-9)

        // Place numbers into buckets based on the current digit
        for (let num of arr) {
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }

        // Flatten the buckets back into the array
        arr = [].concat(...digitBuckets);
    }

    return arr;
}
