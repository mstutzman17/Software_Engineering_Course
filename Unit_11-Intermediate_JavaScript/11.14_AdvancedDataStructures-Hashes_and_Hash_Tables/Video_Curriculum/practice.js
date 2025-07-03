// // this will store all of our data
// class simpleMap{
//     constructor() {
//         this._items = []
//     }

//     // this is used to add an element to our simple map

//     set(k, v) { 

//         //the key and value pair is pushed into this._items array
//         this._items.push([k,v]);
//     }

//     get(k) {

//         // here we are trying to find the first index of each key value pair (the key itself), within the this._items array
//         let kv = this._items.find(kv => k === kv[0]);

//         // if we find it, we return index 1 of the array (the value of the key)
//         // if we don't find it we return undefined
//         return kv ? kv[1] : undefined;
//     }

//     has(k) {

//         // this is checking if a key exists within this simpleMap
//         return this._items.find(kv => k === kv[0]) !== undefined;
//     }

//     delete(k) {

//         // this allows us to find the item within our array
//         // searching through every possible key, value (worst case scenario)
//         let i = this._items.findIndex(kv => k === kv[0]);
        
//         // we update items to remove the item at the index we are trying to delete
//         if (i !== -1) this._items.splice(i, 1);
//     }

//     keys() {
        
//         return this._items.map(kv => kv[0]); 
//     }

//     values() {
        
//         return this._items.map(kv => kv [1]); 
//     }

//     entries() {
        
//         return this._items; 
//     }
// }

// // creates simpleMap called person
// const person = new simpleMap();

// // this sets a 3 key value pairs
// person.set('age', 32)
// person.set(12, 'number of eggs in a dozen')
// person.set(17, "Moses's favorite number")
// person.set('Purple', "Moses's favorite color.")

// console.log(person.get('age'))
// console.log(person.get(17))
// console.log(person.get(12))
// console.log(person.get('Purple'))

// console.log(person.has('Purple'))
// console.log(person.has('purple'))
// console.log(person.has('age'))
// console.log(person.has(17))

let fruits = {
    "apple": "red",
    "berry": "blue",
    "cherry": "red"
}

// function hash2(key) {

//     return Array.from(key).reduce(
//         (accum, char) => accum + char.charCodeAt(),
//         0
//     );
// }

// function hash(key) {

//     let total = 0;

//     for (const char of key) {
//         total += char.charCodeAt()
//     }

//     return total;
// }

// function hash (key, arrayLength) {

//    const hash = Array.from(key).reduce(
//         (accum, char) => accum + char.charCodeAt(),
//         0
//     );

//     return hash % arrayLength
// };

// class HashMap {

//     constructor(){
//         this.items = []
//     }

//     set (k,v) {
//         // this hashes the key for us
//         const hasedKey = hash (k, 10);
//         // we store the key at that specific index
//         this.items[hasedKey] = v;
//     }

//     get(k){

//         //hashedKey is the sum of the charCodes related to a specific string (e.g. apple = 530)
//         const hashedKey = hash (k);
//         return this.items[hashedKey];
//     }
// }

// const m = new HashMap()

// m.set('apple', 'red')
// m.set('grape', 'purple')

// console.log(m)

// console.log(m.get('grape'))
// console.log(m.get('apple'))


// console.log(hash('This is a large string and the charCode will be'))
// console.log(hash('moses'))
// console.log(hash('Barbara'))
// console.log(hash('multiplicative'))

// console.log(hash2('This is a large string and the charCode will be'))
// console.log(hash2('moses'))
// console.log(hash2('Barbara'))
// console.log(hash2('multiplicative'))

// function hash (key, arrayLength) {

//    const hash = Array.from(key).reduce(
//         (accum, char) => accum + char.charCodeAt(),
//         0
//     );

//     return hash % arrayLength
// };

// function hashPrime(key, arrayLength) {

//     const H_PRIME = 37;

//     let numKey = Array.from(key).reduce(
//         (accum, char) => accum * H_PRIME + char.charCodeAt(),
//         0
//     );

//     return numKey % arrayLength
// }

// class HashMap {

//     constructor(){
//         this.items = []
//     }

//     set (k,v) {
//         // this hashes the key for us
//         const hasedKey = hash (k, 10);
//         // we store the key at that specific index
//         this.items[hasedKey] = v;
//     }

//     get(k){

//         //hashedKey is the sum of the charCodes related to a specific string (e.g. apple = 530)
//         const hashedKey = hash (k);
//         return this.items[hashedKey];
//     }
// }

// const map = new HashMap()

// map.set('apple', 'red')
// map.set('grape', 'purple')
// map.set('seventeen', 'moses"s favorite number')

// console.log(map)

// console.log(hash('apple', 10))
// console.log(hash('grape', 10))
// console.log(hash('Moses"s favorite color is purple and his favorite number = 17', 10))

// console.log(hashPrime('cat', 10))
// console.log(hashPrime('act', 10))

// let array = [1,2,3,4];

// array.push(5)

// console.log(array)

// array.indexOf(3)

// console.log(array.indexOf(3))
// console.log(array.indexOf(-10))

// let mySet = new Set()

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(4)
// mySet.add(5)

// console.log(mySet)
// console.log(mySet.size)

// console.log(mySet.has(3))

// const data = {
//     4: "Hudson River",
//     name: "Bob",
//     3: "2343434",
//     age: "25",
//     state: "New York",
//     1: "NYC"
// }

// console.log(Object.keys(data))

const myDataMap = new Map()

myDataMap.set(4, "Hudson River")
myDataMap.set("name", "Bob")
myDataMap.set(3, "2343434")
myDataMap.set("age", "25")
myDataMap.set("state", "New York City")
myDataMap.set(1, "NYC")
myDataMap.set(true, "Illinois")

console.log(myDataMap)