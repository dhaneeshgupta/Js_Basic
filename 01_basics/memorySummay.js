// Stack (Primitive data types used) we get copy of memory
// Heap (Non-Primitive) We get reference of original value  that memory


let myYoutubename = "harry@abc.com"

let anotherName = myYoutubename
anotherName = "Codeorchai"

//console.log(anotherName) // Changed Value
//console.log(myYoutubename) // Return Copy of myYoutubeName

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"

}
console.log(userOne.email)

let userTwo = userOne
userTwo.email = "harry@google.com"


console.log(userOne.email)
console.log(userTwo.email)






