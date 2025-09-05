const score = 400

// Creating New object

const balance = new Number(1000000)
// console.log(balance);

/*
Number {100}
[[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
100
*/

// Convert to string
const num = balance.toString();
//console.log(typeof num );

// Upto Fixed decimal place
//console.log(balance.toFixed(1));

//the method .toLocaleString() is used to convert numbers or dates
//  into a string using locale-specific formatting.

//console.log(balance.toLocaleString('en-IN'));

const numberM = (123456.789).toLocaleString("en-IN", {
  style: "currency",
  currency: "INR"
});
//console.log(numberM);

const otherNumber = 123.757

//console.log(otherNumber.toPrecision(4)); // Round of value


// ++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++ //

//onsole.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));// Round of value
//console.log(Math.ceil(3.1)) // Ceil value indicate upper value / incremental value 
//console.log(Math.floor(3.4)); // Floor value is lower  value/ decremental value
//console.log(Math.sqrt(4));
console.log(Math.random()) // Always value 0 ≤ value < 1

//Random number between 0 and N
let nUm = ((Math.random() * 10) + 1 );  
console.log(nUm); // 0 <= num < 10

//Random integer between 0 and N-1
let nuM = Math.floor((Math.random() * 10) + 1 );  
console.log(nuM); // 0, 1, 2, ..., 9


// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // max - min + 1 scale the range 
}
// + min → shifts the range up to start at min.
//Example: 8 + 5 = 13
// Math.random() * (max - min + 1) → gives a float between
// 0 and 11 (not including 11).
//Example: 0.73 * 11 = 8.03
console.log(getRandomInt(5, 15)); // any int from 5 to 15

// Random boolean
let bool = Math.random() < 0.5;
console.log(bool); // true or false

//Random element from an array
let fruits = ["apple", "banana", "mango", "orange"];
let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);


/*
abs: 
ƒ abs()
acos: 
ƒ acos()
acosh: 
ƒ acosh()
asi: 
ƒ asin()
asinh: 
ƒ asinh()
atan: 
ƒ atan()
atan2: 
ƒ atan2()
atanh: 
ƒ atanh()
cbrt: 
ƒ cbrt()
ceil: 
ƒ ceil()
clz32: 
ƒ clz32()
cos: 
ƒ cos()
cosh: 
ƒ cosh()
exp: 
ƒ exp()
expm1: 
ƒ expm1()
f16round: 
ƒ f16round()
floor: 
ƒ floor()
fround: 
ƒ fround()
hypot: 
ƒ hypot()
imul: 
ƒ imul()
log: 
ƒ log()
log1p: 
ƒ log1p()
log2: 
ƒ log2()
log10: 
ƒ log10()
max: 
ƒ max()
min: 
ƒ min()
pow: 
ƒ pow()
random: 
ƒ random()
round: 
ƒ round()
sign: 
ƒ sign()
sin: 
ƒ sin()
sinh: 
ƒ sinh()
sqrt: 
ƒ sqrt()
tan: 
ƒ tan()
tanh: 
ƒ tanh()
trunc: 
ƒ trunc()
*/
