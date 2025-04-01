// 1.) Declare a Destination Variable: Use let to declare a variable named destination and assign it the value "Ancient Egypt". Print the destination to the console.

let destination = "Ancient Egypt"
console.log(destination)

// 2.) 2. **Change the Destination**: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe"
console.log(destination)

// 3. **Declare a Constant Travel Date**: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = `"2024-03-15"`
// travelDate = `"2025-04-17"`

// In the above code I tried to change the contents of the const travelDate. This cause an "Uncaught TypeError: Assignment to constant variable". This means that I cannot change the contents of the travelDate because I used const to declare the variable.

// 4. **Experiment with Variable Hoisting**: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(timeMachineModel)
var timeMachineModel = `"T-800"`


// When I printed "timeMachineModel" to the console, I got an "Uncaught ReferenceError: timeMachineModel is not defined". I then declared the timeMachineModel varibale using var and named it `"T-800"`. After doing this 'undefined' was printed to the console. This is happening becuase of variable hoisitng. The declaration of the variable is being hoisted to the top its scope, but the initialization is not. So what happnes is it prints undefined because technically the varibale exists, but it is unnamed. Behind the scenes this is how the code would look:

// var timeMachineModel
// console.log(timeMachineModel)
// timeMachineModel = `"T-800"`

