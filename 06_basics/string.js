// String Decleration 

const name = "Hariom"
const repoCount = 8

//console.log(name + " " + repoCount  + " " + "Value"); // Outdated Syntax

//  String interpolation
//console.log(`Hello my name is ${ name} and my repo count is ${ repoCount}`)

const gameName = new String('HariomG-gc-mongo') // Decleration

//console.log(gameName[0]); // [0] => Access 0th index element

//console.log(gameName.__proto__); // Gives Object 

/*
console.log(gameName.charAt(3))
console.log(gameName.toUpperCase())
console.log(gameName.concat())
console.log(gameName.indexOf('i'))
console.log(gameName.slice())*/

// Substring :
const newString = gameName.substring(0,  5)
//console.log(newString); 

// Slice : string.slice(start, end); // End value is not Exclusive means not Included
const anotherString = gameName.slice(-8,  4) 
//console.log(anotherString)

/*
Length = 7
-8 → 7 - 8 = -1 → treated as 0 (start from index 0)
4 → stops before index 4
So it takes from index 0 → 3 → "Hari" 
*/

// Trim Method/Prototype : Used to remove extra space from String
let newStringOne = "   carry   "
console.log(newStringOne)
console.log(newStringOne.trim())

// Replace Method 
const url = "https://harry.com/harry%39gupta"
console.log(url)
console.log(url.replace('%39', '-'))

// Includes
console.log(url.includes("hii"));


// Split :
console.log(gameName.split('-'));
