// Array :-

const myArray = [1, 2, 3, 4, 5];
//console.log(myArray);

// Array Methods :-
myArray.push(6); // add element at last
//console.log(myArray);

myArray.pop();// remove element form last
//console.log(myArray);

myArray.unshift(0); // add element at first
//console.log(myArray);

myArray.shift(); // remove element from first
//console.log(myArray);

// Questinaire Methods :-
//onsole.log(myArray.includes(8)); // check if element is present or not
//console.log(myArray.indexOf(3)); // return index of element

// const newArray = myArray.join(); // convert array to string
// console.log(myArray, typeof myArray); // Object
// console.log(newArray, typeof newArray); // String


// Slice & splice :-

console.log("A", myArray)

const newArray = myArray.slice(0, 3); // does not modify original array
console.log(newArray , )
console.log("B", myArray)


const newArray1 = myArray.splice(0, 3); // modify original array & also include last element    
console.log("c", myArray)
console.log(newArray1);

