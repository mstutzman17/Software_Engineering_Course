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

const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

const ecosystemHealthCopy = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Scarce"}}

// What I orginally tried to do was the following: const ecosystemHealthCopy = {...ecosystemHealth, herbivores: "Scarce". The result of this was not what I expected. Upon further research, I learned that what I did was make a new top-level key called herbivores with the value that I specified. What I'm being asked to do is make a shallow copy and modify one of the nested properties. When I understood how to correctly perfom this operation, I wrote the code above. 
// Here are my observations after correctly performing required operations: 
// The above code spreads ecosystemHealth into a new varibale called ecosystemHealthCopy as well as accessing foodsupply in order to access the nested property herbivores. Once I accessed the herbivores property, I chnaged the value to scrace. Now when I call ecosystemHealth it remains unchanged. When I call ecosystemHealthCopy, the herbivores property was successfully updated to scarce, just like I specified.
// So why does it happen like this? My original thought was to directly access and update the herbivores property which gave me the result that I detailed above. Because herbivores is a property nested inside the object of the foodSupply property, I had to get more specific in order to update the values that I wanted to update.