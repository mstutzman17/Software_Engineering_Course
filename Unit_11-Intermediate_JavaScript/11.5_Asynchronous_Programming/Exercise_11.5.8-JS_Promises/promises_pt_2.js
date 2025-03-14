// The following code is for the first and second part of the second part of the exercise (ie: Part 2: #1 and #2).

// The following code is sequened and run concurrently.
// In the first sequence, a card is being drawn from a newly shuffled deck. Then the value and suit of the card are printed to the console.
// In the second and third sequence 2 cards are being drawn from the same deck.
// The cards are drawn at different times and the value and suit of the cards are printed to the console.

// Deck ID: ctydvfufkxwt

fetch ('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then (data => (data))

fetch ('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then(data3 => {
        const card = data3.cards[0];
        console.log(`Drawn Card from Newly Shuffled Deck: ${card.value} of ${card.suit}`);
        return fetch ('https://deckofcardsapi.com/api/deck/ljawmh99an9c/draw/?count=1')
    })
    .then(response => response.json())
    .then(data1 => {
        const firstCard = data1.cards[0];
        console.log(`First Drawn Card: ${firstCard.value} of ${firstCard.suit}`)
        return fetch ('https://deckofcardsapi.com/api/deck/ljawmh99an9c/draw/?count=1')
    })
    .then(response => response.json())
    .then(data2 => {
        const secondCard = data2.cards[0];
        console.log(`Second Drawn Card: ${secondCard.value} of ${secondCard.suit}`)
    })