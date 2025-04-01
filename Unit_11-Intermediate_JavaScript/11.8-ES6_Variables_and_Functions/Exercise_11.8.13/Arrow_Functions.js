// 1. **No Parameters: Activate Hyperdrive**: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

const activateHyperdrive = () => {
        console.log ("Hyperdrive activated!")
}
activateHyperdrive()

// 2. **Implicit Return: Scan for Lifeforms**: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.

const scanForLife = () => "No lifeforms detected"
console.log(scanForLife())

// 3. **Implicit Return with Objects: Log Coordinates**: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.

const currentCoordinates = () => ({x: 17.3, y: 87.7, z: 23.5})
console.log(currentCoordinates())

// 4. **Understanding `this`: Message from Home Base**: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.

const spacecraft = {
	name: "Delta17",
	receiveMessage: (message) =>
	{
		console.log(`Message received: ${message}`);
		console.log(`This spacecraft is: ${this.name}`);
	}
};
spacecraft.receiveMessage("Houston, we have a problem!");

// The result I expected from the previous lines of code is: "Message Received: Houston, we have a problem!" and "This spacecraft is: Delta17". The actual result was "Message recieved: Houston, we have a problem!" and "This spacecraft is:". The reason this happened is becuase arrow function expressions do not create a this keyword, unlike a regular function expression. Because that is true, the keyword this does not point to this.name and instead points to the global scope.