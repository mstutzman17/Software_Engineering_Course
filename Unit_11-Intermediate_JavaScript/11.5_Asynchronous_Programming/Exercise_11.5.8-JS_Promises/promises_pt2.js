// The following code is for the first and second part of the second part of the exercise (ie: Part 2: #1 and #2).

// The following code is sequened and run concurrently.
// In the first sequence, a card is being drawn from a newly shuffled deck. Then the value and suit of the card are printed to the console.
// In the second and third sequence 2 cards are being drawn from the same deck.
// The cards are drawn at different times and the value and suit of the cards are printed to the console.

fetch ('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then (data => console.log(data))

fetch ('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then(data3 => {
        const card = data3.cards[0];
        console.log(`Drawn Card from Newly Shuffled Deck: ${card.value} of ${card.suit}`);
        return fetch ('https://deckofcardsapi.com/api/deck/vgarsvqawk18/draw/?count=1')
    })
    .then(response => response.json())
    .then(data1 => {
        const firstCard = data1.cards[0];
        console.log(`First Drawn Card: ${firstCard.value} of ${firstCard.suit}`)
        return fetch ('https://deckofcardsapi.com/api/deck/vgarsvqawk18/draw/?count=1')
    })
    .then(response => response.json())
    .then(data2 => {
        const secondCard = data2.cards[0];
        console.log(`Second Drawn Card: ${secondCard.value} of ${secondCard.suit}`)
    })

// The following code works with index2.html and promises_pt_2.css.
// When the webpage is opened it shows a 'Let 'er Rip' button that draws a card from a newly shuffled deck.
// Each time you press the button a new card will be drawn from the same deck.
// When there are no more cards left in the deck, the last drawn card will be shown and the button will be disabled until you refresh the page.

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("draw-card");
    const cardImage = document.getElementById("card-image");

    let deckId = null;  // Store deck ID so we can keep drawing from the same deck

button.addEventListener("click", () => {
    if (!deckId) {
        // Step 1: Fetch a new shuffled deck (only once)
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(deckData => {
            deckId = deckData.deck_id;  // this is to save deck ID
            return (drawCard(deckId));
        });
        //  Step 2: draw a card from the existing deck
    } else {
        drawCard(deckId); 
    }
});

        // Step 3: generate/update the image of the drawn card

function drawCard(deckId) {
    fetch (`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then (response => response.json())
        .then (cardData => {
            if (cardData.cards.length > 0) {    // checks if there are any cards in the object array of the returned request
                const card = cardData.cards[0]; // extracts the first card from cards array in cardData. This will also return an object with info about the card

                cardImage.src = card.image; // updates the image src with id="card-image. card.image has the URL from the API which is set as the src"
                cardImage.style.display = "block";  // this will show the image

                console.log (`Drawn Card: ${card.value} of ${card.suit}`);
            } else {
                console.log ('No more cards left in the deck!');
                button.disabled = true; // Disable button if deck is empty
            }
        })
        .catch(error => console.error('Error drawing card:', error));
    }
})