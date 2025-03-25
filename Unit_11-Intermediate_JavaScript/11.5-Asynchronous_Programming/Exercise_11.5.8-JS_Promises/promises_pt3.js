// The following code executes multiple requests from pokeapi.co.
// Each request returns a page with multiple pokemon and each page of results has 20 pokemon. 
// Then, a sequential number, the name of the pokemon and the url of the pokemon are all printed to the console.
// After each request is printed to the conosle, the function checks to see if there is another page of results.
// If there is, the next page is printed; if not the function ends.

// function fetchAllPokemon (url = 'https://pokeapi.co/api/v2/pokemon', count = 1) {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         data.results.forEach(pokemon => {   // this will loop through the pokemon results
//             console.log(`#${count} Name: ${pokemon.name}, URL: ${pokemon.url}`);
//             count++;
//         });
//         if (data.next) {    // this will check to see if a url for the next page exists
//             fetchAllPokemon(data.next, count); // this will return the data if there is a next page of results and number each result sequentially
//         }
//     })
//     .catch(error => console.error('Error fetching data:', error))
// }

// fetchAllPokemon()   // this will start fetching the list of pokemon


//The following code

fetch ('https://pokeapi.co/api/v2/pokemon/10092/')
    .then (response => response.json())
    .then (firstRandomPokemon => {
        const firstPokemonName = firstRandomPokemon.name
        const firstPokemonSpeciesUrl = firstRandomPokemon.species.url
        return fetch (firstPokemonSpeciesUrl)
            .then (response => response.json())
            .then (firstPokemonSpecies => {
                console.log (`First Pokemon: ${firstPokemonName}`);
                console.log (`Species Information:`, firstPokemonSpecies)
        return fetch ('https://pokeapi.co/api/v2/pokemon/917/')
    .then (response => response.json())
    .then (secondRandomPokemon => {
        const secondPokemonName = secondRandomPokemon.name
        const secondPokemonSpeciesUrl = secondRandomPokemon.species.url;
        return fetch (secondPokemonSpeciesUrl)
                .then (response => response.json())
                .then (secondPokemonSpecies => {
                    console.log (`Second Pokemon: ${secondPokemonName}`);
                    console.log (`Species Information:`, secondPokemonSpecies)
        return fetch ('https://pokeapi.co/api/v2/pokemon/117/')
    .then (response => response.json())
    .then (thirdRandomPokemon => {
        const thirdPokemonName = thirdRandomPokemon.name
        const thirdPokemonSpeciesUrl = thirdRandomPokemon.species.url;
        return fetch (thirdPokemonSpeciesUrl)
                .then (response => response.json())
                .then (thirdPokemonSpecies => {
                    console.log (`Third Pokemon: ${thirdPokemonName}`);
                    console.log (`Species Information:`, thirdPokemonSpecies)
                    });
                });
            })  ;  
        });
    });
})
.catch (error => console.error('Error:', error));   // Catch any erros






const chosenPokemon = [7, 17, 27, 37, 47, 57, 67, 77, 87, 97, 78, 1007, 1017, 6, 143, 244, 151, 150, 121, 117, 107, 392, 217, 317, 417, 517]
let currentIndex = 0;   // Tracks which pokemon to display next

document.querySelector("#randoPokemon button").addEventListener('click', () => {
    if (currentIndex >= chosenPokemon.length) {
        console.log ('All Pokemon have been displayed!');
        return;     // Stop when all Pokemon have been shown.
    }

    const pokemonId = chosenPokemon[currentIndex]; // Get the current Pokemon ID
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

    fetch(pokemonUrl)
        .then(response => response.json())
        .then(pokemonData => {  // This will extract the neccessary details
            console.log("Fetched Pokemon Data:", pokemonData);
        
        const name = pokemonData.name;
        const imageUrl = pokemonData.sprites?.other?.["official-artwork"]?.     front_default || 
        pokemonData.sprites?.front_default || 
        "";

        console.log("Image URL:", imageUrl);

        const speciesUrl = pokemonData.species?.url;     // Fetch species info
        if (!speciesUrl) {
            console.error("Species URL not found.");
            return;
        }

        return fetch(speciesUrl)
            .then(response => response.json())
            .then(speciesData => {
                const description = speciesData.flavor_text_entries.find(entry => entry.language.name === "en")?.flavor_text || "No description avaialable.";

                const nameElement = document.getElementById('pokeName')
                const imageElement = document.getElementById('pokeImage')
                const infoElement = document.getElementById('pokeInfo')

                if (!nameElement || !imageElement || !infoElement) {
                    console.error ("Error: One or more HTML elements are missing.");
                    return;
                }

                if (!imageUrl) {
                    console.error("Error: Image URL is empty or invalid.");
                    return;
                }

                nameElement.innerText = `Name: ${name}`;
                console.log("Setting image:", imageUrl);
                imageElement.src = imageUrl + `?v=${new Date().getTime()}`;
                imageElement.alt = `Image of ${name}`;
                infoElement.innerText = description;

                currentIndex++  // Move to the next Pokemon
            })
        })
        .catch(error => console.error('Error Fetching Data:', error));
})

