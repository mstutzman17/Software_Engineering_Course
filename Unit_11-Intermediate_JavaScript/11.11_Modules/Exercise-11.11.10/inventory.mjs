// // 1. **Named Exports and Imports:** Create an inventory management system for an online store, practicing the use of named exports and imports.
//     - Implement `inventory.mjs`, exporting named functions: `addItem` that adds an item by name to the inventory array, `removeItem` that removes an item by name from the inventory array, `listItems` that logs all item names currently in the inventory.

const inventory = [];

export function addItem(...item){
    return inventory.push(...item) 
}

export function removeItem(...items){
    for(const item of items){
        const index = inventory.indexOf(item)
    if (index !== -1){
        inventory.splice(index, 1)
    }
    }
}

export function listItems(){
    return inventory
}