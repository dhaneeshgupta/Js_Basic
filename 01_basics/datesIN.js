// DATES :-

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());

// Creating Date :-
let myCreatedDate = new Date (2025, 8, 6);
// console.log(myCreatedDate.toString());


// In DD/MM/YY & vice-versa formate  :-
// let  mYDate = new Date("2025-09-06")
let  mYDate = new Date("01-01-2025")
// console.log(mYDate.toLocaleDateString());


// Time Stamps
let myTimeStamps = Date.now()
// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));


// Some more Functionalities
let newDate = new Date();
// console.log(newDate.getHours());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());


// `${newDate.getDay()} and the time `

const time = newDate.toLocaleString('default',{
    weekday: 'short',
 
})

console.log(time);
