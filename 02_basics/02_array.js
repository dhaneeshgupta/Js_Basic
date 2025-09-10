const marvel = ["Ironman", "Thor", "Hulk", "Captain America"];
const dc = ["Batman", "Superman", "FLash"]
//marvel.push(dc);

//console.log(marvel); // 
// Output: [ 'Ironman', 'Thor', 'Hulk', 'Captain America',
//  [ 'Batman', 'Superman', 'FLash' ] ]

//console.log(marvel[4][1]);
// Output: Superman 

marvel.concat(dc); // This will not change the original array
//console.log(marvel);
// Output: [ 'Ironman', 'Thor', 'Hulk', 'Captain America',
//  [ 'Batman', 'Superman', 'FLash' ]

const allHeroes = marvel.concat(dc); // Concat returns a new array
//console.log(allHeroes);


const newHeroes = [...marvel, ...dc] // ... is spread operator
//console.log(newHeroes);


const nums = [3, 5, 1, [7, 9, 2], 4, [6, 8, [4,  5 ] ] ]; // Nested array

const flatNums = nums.flat(2); // flat method to flatten the array, 2 is depth
// 2 depth means how many levels of nesting should be flattened
//console.log(flatNums); 
// Output: [ 3, 5, 1, 7, 9, 2, 4, 6, 8, 4, 5 ]


// Converting string to array
const name = "Hariom Gupta";
const arrName = Array.from(name); // Using Array.from method
console.log(arrName);
console.log(Array.isArray(name)); // false
console.log(Array.isArray(arrName)); // true

// Output: [ 'H', 'a', 'r', 'i', 'o', 'm', ' ', 'G', 'u', 'p', 't', 'a' ]


console.log(Array.from({name: "Hariom"})); // Output: [ undefined ]`
// When we pass an object which is not iterable, it returns an array of undefined with length equal to the number of keys in the object
// Here the object has only one key, so the length of the array is 1
