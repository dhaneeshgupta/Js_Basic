// Object Literals:

const user= Symbol("userDetails");

const  JSuser ={
    name: "Hariom Gupta",
    email: "hariomgupta@gmail.com",
    [user] : "userDetails", // Symbol as Key & withou brackets it will take as string
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]

}

// Way To access Object Properties
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser[user]);



// Update Object Properties
JSuser.email = "dhaneeshgupta@gmail.com"; // Directly update
console.log(JSuser.email);

// Freeze the Object, after this we can't update the object properties
//Object.freeze(JSuser); 
//JSuser.email = "hariomchatgpt@gmial.com"; // It will not update the email

//console.log(JSuser);

// Fucntion to reference the Object

JSuser.greeting = function(){
    console.log(`Hello ${this.name} Welcome to JS World`);
}

JSuser.greetingTwo = function(){
    console.log(`Hello ${this.name} Welcome to JS World, Your email is ${this.email}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo())
