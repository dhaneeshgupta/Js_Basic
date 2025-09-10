// Singleton Object:-
//const  Hacket = new Object();

// Non Singleton Object:-
const Hacket = {}

Hacket.name ="Nike"
Hacket.age = 25
Hacket.role = "Developer"
Hacket.language = "JavaScript"

//console.log(Hacket);

// Nested Object:-
const Developer = {
    fullname :{
        username:{
            firstname : "Hacket",
            lastname : "Puma",
        }
    }
}

//Accessing Object inside Object
//console.log(Developer.fullname.username);


// Assigning object to another object
const newdevelper = { 1: "Developer" , 2: "Hacket", 3: "Puma" }
const newdevelper1 = { 4: "Levis", 5: "Nike", 6: "Adidas" }

// const newdevelper3 = Object.assign({}, newdevelper, newdevelper1)
// console.log(newdevelper3);

//const newdevelper3 = {...newdevelper, ...newdevelper1}
//console.log(newdevelper3);

// Array of Object:-
const users = [
    {
       id : 1,
       name : "Hacket",
       age : 25, 
    },
    {
         id : 2,
            name : "Puma",
            age : 26,
    },
]

users[1].email
console.log(Hacket)

// Methods of Object:-
console.log(Object.keys(Hacket));
console.log(Object.values(Hacket));
console.log(Object.entries(Hacket));

// Checking Availibility of property in Object:-

console.log(Hacket.hasOwnProperty('name'));
console.log('name' in Hacket);