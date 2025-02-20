const guests = ["ANOTONY", "CICERO", "CASSIUS", "CLEOPATRA"]

// Step 1 //

guests.unshift ("BRUTUS")
// console.log (guests)

// Question 1 //
// console.log (guests)

// Step 2 //

guests.push ("AUGUSTUS", "LUCIA")
console.log (guests)

// Step 3 //

console.log (guests.includes ("SPARTACUS"))

// Question 2 //
// The value of spartacusIndex would be -1
// console.log (guests.indexOf("SPARTACUS"))

// Step 4 //

guests.splice (3,1)
// console.log (guests)

// Step 5 //

const specialGuests = guests.slice (0,3)
// console.log (specialGuests)

// Step 6 //

const honoredGuests = guests.slice (0,1)
// console.log (honoredGuests)
const otherGuests = guests.slice (1)
// console.log (otherGuests)
otherGuests.sort()
// console.log (otherGuests)
const sortedGuests = honoredGuests.concat(otherGuests)
// console.log (sortedGuests)