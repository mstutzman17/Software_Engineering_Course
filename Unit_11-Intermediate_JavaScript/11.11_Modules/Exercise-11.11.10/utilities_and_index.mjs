// 3. **Re-exporting Modules:** Organize utility functions using re-exporting techniques to create a streamlined import process.
//     - Create a `utils` directory. Within the utils directory, create individual modules: `stringUtils.mjs` for string manipulation functions and `numberUtils.mjs` for numeric operations that export various utility functions. Implement the `index.mjs`, which aggregates and re-exports all utility functions from the utils directory, facilitating a single point of import.
//     - Create `app.mjs` that imports utilities from the aggregated `utils/index.mjs` and demonstrates their use.

// String Utilites
export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split('').reverse().join('')
}

export function countVowels(string){
    const vowels = 'aeiouAEIOU';
    return [...string].reduce((count, char) =>
        vowels.includes(char) ? count + 1 : count, 0)
}

// Number Utilities
export function add(x, y) {
    return x + y;
}

export function subtract(x, y){
    return x - y;
}

export function multiply(x,y){
    return x * y;
}

export function divide(x,y){
    return x / y;
}