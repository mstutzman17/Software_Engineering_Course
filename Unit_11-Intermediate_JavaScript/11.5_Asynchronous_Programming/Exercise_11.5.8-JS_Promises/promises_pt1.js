// The following Code is the first part of the exercise. First, I've made a request for multiple numbers at once and I have printed the numbers to the conosle.
// Second, I've made 4 different requests (trivia, year, math, and date) for my favorite number. The result was 4 different facts about the number 17.

fetch ('http://numbersapi.com/47..57?json') // make request for the range of numbers between 47 and 57, including 47 and 57
    .then(response => response.json())
    .then(data => {
        console.log('Multiple Numbers:', data); // print the objects to the console.
    })

fetch ('http://numbersapi.com/17/trivia?json')
    .then(response => response.json())
    .then (data => console.log(data));

fetch ('http://numbersapi.com/17/year?json')
    .then(response => response.json())
    .then (data => console.log(data));

fetch ('http://numbersapi.com/17/math?json')
    .then(response => response.json())
    .then (data => console.log(data));

fetch ('http://numbersapi.com/17/date?json')
    .then(response => response.json())
    .then (data => console.log(data));

