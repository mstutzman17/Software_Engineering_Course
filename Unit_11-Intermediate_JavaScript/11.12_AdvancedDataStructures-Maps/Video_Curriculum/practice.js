// const myObject = {}
// myObject ['a'] = 1
// myObject [true] = 'TRUE!!!!'
// console.log(myObject)

// const key = {}
// myObject[key] = 'An object'
// console.log(myObject)

// const mystery = {stuff: 1, otherStuff: 4}
// console.log(myObject[mystery])

// const myMap = new Map();
// myMap.set(7, 'seven')
// myMap.set('7', 'seven string')
// const empty = [];
// myMap.set(empty, "empty array")
// myMap.get(empty)
// myMap.get('7')
// myMap.set(true, "TRUE")
// myMap.get(true)

// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// const funcCalls = new Map();
// funcCalls.set(add, 0)
// funcCalls.set(multiply, 0)

// const bandData = [
// [3, "3 Doors Down"],
// ['three', "Three Dog Night"],
// ['nine', "Nine Inch Nails"],
// ['four', "The Four Seasons"],
// [41, "Sum 41"],
// ];

// const bandMap = new Map(bandData)

// console.log([...bandMap])

// bandMap.set(182, 'Blink-182').set('twenty-one','Twenty One Pilots')
// bandMap.has(41)
// bandMap.has(3)
// bandMap.has(9)
// bandMap.has('nine')
// bandMap.delete('twenty')
// console.log(bandMap.has('twenty'))
// // bandMap.clear()
// // console.log(bandMap)
// console.log(bandMap.keys())

// // bandMap.forEach((val, key) => {
// //     console.log(key + '=' + val)
// // })

// for(let [key, value] of bandMap) {
//     console.log(key, '=', value)
// }

;

const bannedHashTags = new Set(
    ['nofilter', 'justsaying', 'winning', 'yolo']
);

// bannedHashTags.add('bestLife').add('TFW').add('FTW')
// bannedHashTags.add('yolo')
// bannedHashTags.delete('winning')
// bannedHashTags.clear()
// console.log(bannedHashTags)

// console.log(bannedHashTags.has('bestLife'))

// const randomSet = new Set ('hello', 'goodbye')
// console.log(randomSet)

function filterHashTags (tags){
    const bannedHashTags = new Set([
        'nofilter', 'justsaying', 'winning', 'yolo'
    ]);
    return tags.filter((tags) => !bannedHashTags.has(tags))
}

const susansTags = ['happyMonday', 'yolo', 'winning', 'sunset']

console.log(filterHashTags(susansTags))

const ages = [45,42,21,23,24,98,2,2, 4, 12, 13, 12, 45];
[...new Set(ages)]

const test = new Set()