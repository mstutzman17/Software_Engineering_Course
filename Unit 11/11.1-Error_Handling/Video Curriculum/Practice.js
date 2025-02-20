// function hasEnoughFundsToBuy(price, qty, balance) {
//     const subtotal = Math.round (price * qty * 100) / 100;
//     console.log ("subtotal:", subtotal)
//     console.log ("balance:", balance)
//     if (subtotal <= balance) {
//         return "YOU HAVE ENOUGH MONEY!"
//     }
//     return "SORRY, YOU NEED MORE MONEY TO BUY THAT"
//     }

// // NOT ENOUGH MONEY
//     hasEnoughFundsToBuy (50.5, 10, 300)
//     hasEnoughFundsToBuy (200.3, 5, 600.9)

// // ENOUGH MONEY
// hasEnoughFundsToBuy (10, 6, 60)
// hasEnoughFundsToBuy (30, 3, 100)
// hasEnoughFundsToBuy (200.3, 3, 600.9)

// // Example:

// let grades = [99, 98, 76, 54, 66, 90, 81];
// let sum = 0;
// debugger;
// for (let i=0; i < grades.length; i++) {
//     sum += grades [i];
// //     console.log ("i", i);
// // console.log ("grade", grades [i])
// // console.log ("sum", sum)
// }	// let grades: number[]
// let avg = sum / grades.length;

// try {
//    3+3;
// } catch {
// console.log("OH NO ERROR!!!");
// }
// console.log("Did we make it?");

// try {
//     asdelfkjasdf();
// } catch (e) {
//     console.log("OH NO ERROR!!!");
//     console.log(e);
// }
// console.log("Did we make it?");

// function displayInitials(user) {
//     let firstNameLetter;
//     let lastNameLetter;
// try {
//     let firstNameLetter = user.firstName[0]
//     .toUpperCase();
//     let lastNameLetter = user.lastName[0]
//     .toUpperCase();
// } catch  (e) {
//     return "Invalid input!";
// }
//     return `Hello ${firstNameLetter}.$
//     {lastNameLetter}`;
// }

// displayInitials({ firstName: "Jason", lastName: "Momoa"})

// try {
//     console.log ("Inside Try")
//     undefined.pop();
// } catch (e) {
//     console.log("OH NO ERROR!!!");
//     console.log(e);
// }
// finally {
// console.log ("Inside Finally")
// }
// console.log("Did we make it?");

// console.log ("I AM BEFORE THE ERROR")
// throw "I AM THE ERROR"
// console.log ("I AM AFTER THE ERROR")

// try {
//     // throw "I AM THE ERROR"
//     throw new TypeError ("I don't like you doing that")
//     // undefined.pop();
//     }
//     catch (err) {
//     console.log ("what kind of error?", err.name);
//     console.log ("what is the message?", err.message);
//     console.log ("where did it happen?", err.stack);
// }

// function MonthError (message) {
//     this.message = message;
//     this.name = 'Month Error';
// }

// try {
//     getMonthName ("asdf")
// } catch (e) {
//     console.log ("Error:", e)
// }
// getMonthName(11) //should equal November

// try {
//     const oneLifeGuard = "An acceptable amount"
//     let lifeGuard = "Alex"
// } catch (e) {
//     console.log ("Oh no! There needs to be more than one lifeguard!")
//     console.log (e)
//     let lifeGuard = "Sherry"
// }

// function displayInitials (user) {
//   let firstNameLetter = user.firstName[0].toUpperCase()
//   let lastNameLetter = user.lastName[0].toUpperCase()
//   return `Hello ${firstNameLetter}.${lastNameLetter}`
// }

// function displayInitials (user) {
//   let firstNameLetter
//   let lastNameLetter
//   try {
//     firstNameLetter = user.firstName[0].toUpperCase()
//     lastNameLetter = user.lastName[0].toUpperCase()
//   } catch (e) {
//     return 'Invalid input!'
//   }
//   return `Hello ${firstNameLetter}.${lastNameLetter}`
// }

// displayInitials({ lastName: 'Momoa', firstName: 'Jason' })

// try {
//   willNotWork()
// } catch {
//   console.log('That might not work')
// }

// try {
//   noPopForYou()
// } catch (e) {
//   console.log ("Warren, put that pop back!!")
//   console.log (e)
// } finally {
//   console.log ("We are inside finally")
// }

// console.log("We made it here!!")

// try {
//   throw new TypeError ("I'm proud of you, Warren!!")
// } catch (err) {
//   console.log ("Thank you for cleaning your room.", err.message)
// }

// function getMonthName(mo) {
//     mo = mo - 1; //adjust month number for array index (1= Jan, 12=Dec)  
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']  
//     if (months[mo]) {
//     return months[mo];
//     } else {
//         throw new Error ("You must use a number between 1 and 12.")
//     }
// }

try {
    throw new Error("This is an error!");
  } catch (error) {
    console.log(error.message); 
  }
  
