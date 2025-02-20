// Step 1 //

const randomDecimal = Math.random();

// Step 2 //

const range = 33 - 3 + 1;

// Question 1 //

// Because in the range of 3 and 33, there are 31 possible numbers that could be returned: 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33.

// Step 3 //

const randomInRange = randomDecimal * range;

// Question 2 //

// Because you're essentially multiiplying by 1 which means that you would get the number that you're multiplying by plus the random decimal as an outcome.

// Step 4 //

const randomNum = Math.floor(randomInRange);

// Question  3 //

// We use Math.floor becuase it will round down instead of so that we don't go over the end number in our desired range.

// Step 5 //

const shiftValue = randomNum + 3;

// Question 4 //

// Because Math.random will give us a decimal between 0 and 1, not including 1. So adding 3 will ensure that our number is between 3 and 33 and not 0 and 33.