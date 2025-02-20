// sum of numbers: write a loop that calculates the sum of all numbers from 1 to 

let sum = 0;
for (let i = 1; i <= 100; i ++) {
    console.log (sum += i)
}

// Even numbers: write a loop that prints all even numbers from 2 to 20

for (let i = 2; i <= 20; i +=2) {
    console.log (i)
}

// Reverse order: write a loop that prints the numbers 10 down to 1.

for (let i = 10; i >=1; i--) {
    console.log (i);
}

// Multiplication Table: write a loop that prints the multiplication table for a given number

for (let i = 1; i <= 10; i++) {
    console.log (5 * i);
}

// Find the largest number in an array: write a loop that counts how many times a specific number appears in an array.

// ************let numbers = [12, 232, 432, 236, 765, 48, 46875, 2039] ************* //


// ***********for (let i = 0; i < numbers.length; i++) {
//     console.log(array[i]); // Access element using the index 'i'
//************* */   }

let number = 5;

for (let i = 1; i <= 10; i++) {
    for (j = 5; i <=10; i++) {
        console.log (`${i} ${'*'} ${j}`);
    }
}