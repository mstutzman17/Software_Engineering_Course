// 1. **Track Animal Sightings**: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

const animalSightings = (...animal) => {
    console.log(...animal)
}

// 2. **Merge Habitat Areas**: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const habitatAreas = ['forests', 'grasslands', 'wetlands' ]
const habitatAreas2 = ['oceans', 'rivers', 'lakes']
const compHabAreas = [...habitatAreas, ...habitatAreas2]

// 3. **Update Conservation Status**: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const cheetahConservasionStatus = {
    status: 'vulnerable',
    population: 7100
    
}

const cheetahUpdate = {...cheetahConservasionStatus, areasFound: 'Eastern and Southern Africa', conservationEffortOne: 'Protect dwindling habitats', conservationEffortsTwo: 'mitigate human and wildlife conflict' }

// 4. **Catalog Genetic Diversity**: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const elephantProfile = {
    name: 'Trunk Norris',
    birthMonth: "July",
    energyLevels: 'Playful'
};

const elephantGenetics = {
    ...elephantProfile,
    genetics: 'Diverse'
}

// Above we has successful copy of the elephantProfile. We have also successfully added the genetics property to the elephantGenetics object.
// Both objects are unique and point to different places in JS memory.
// This is what happens when we use spread operator to make a shallow copy of an object. This would not work if we tried to copy nested objects wihtin an array or just a set of nested objects.

// 5. **Analyze Ecosystem Health**: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const ecosystemHealth = [
    {
    name: 'Grasslands',
    waterQuality: "Above Average",
    foodSuupply: "Average"
    },
    {
    name: 'Forests',
    waterQuality: "Slightly Below Average",
    foodSuupply: "Above Average"
    }
];

const ecosystemHealthCopy = {...ecosystemHealth, foodSupply: 'Below Average'}

// This was confusing for me. Let's start with what I did. 
// I declared a variable called ecosystemHelath that contains an array. Within that array there are 2 objects, with 3 properties each.
// Using the spread operator, I then made a copy of the original array and called it ecosystemHealthCopy. I put that copy into a new object. I also changed the property foodSupply (which is a property that both objects have) to 'Below Average'.
// What I expected to happen is different than what actually happend.
// What I Expected: I expected the ecosystemHealthCopy to only be a duplicate of the original that points to the same spot in memory. With that expectation, I thought that when I spread ecosystemHealth into an empty array and changed the value of the property foodSupply, it would change the value of BOTH foodSupply poperties in BOTH copies of ecosystemHealth.
// What Actually Happened: What actually happened is when I spread ecosystemHelath into a new array and updated the value of the foodSupply property, it did not change the value of either property in the copy. Instead it kept all the original property values and added a proto with the foodSupply property and the value that I specified. It also did not change the original.