const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const firstWaterCreature = mythicalCreatures.find(function(type){
    return type.type === "Water"
})

console.log(firstWaterCreature)

const indexOfGriffin = mythicalCreatures.findIndex(function(name){
    return name.name === "Griffin";
})

console.log(indexOfGriffin)

const seenInEnchantedForest = mythicalCreatures.find(function(location){
    return location.lastSeen === "Enchanted Forest"
})

console.log(seenInEnchantedForest)