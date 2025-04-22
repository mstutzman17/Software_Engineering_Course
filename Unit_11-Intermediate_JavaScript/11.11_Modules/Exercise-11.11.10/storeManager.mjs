//     - Implement `storeManager.mjs` that imports the functions from `inventory.mjs` to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.

import {addItem, removeItem, listItems} from './inventory.mjs';

// Demo:

addItem('Camero', 'Mustang', 'Corvette', 'Viper');

// Demo:

removeItem('Camero');

// Demo:

listItems(inventory);