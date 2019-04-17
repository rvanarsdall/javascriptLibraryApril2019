//ARRAYS

// What is an array?
// it has [] 
// can hold multiple datatypes
//arrays can list datatype in ordered pair


let students = ["tony", "marshall", "tony", "george", ["tommy", "rachel"]]
// Hidden keys     0        1          2        3               4

console.log(typeof students) // Type of doesn't tell me that this is an ARRAY

console.log (students instanceof Array) // INSTANCEOF does tell me if an ARRAY

console.log(Array.isArray(students))

console.log(students[3]) // Returns the 3rd order

let name = students[4]
// Lets grab rachel

name = students[4][1]  // example of Array within Array

console.log(name)

// for of loop

let food =["pie", "shrimp", "cheese cake", "hotdog"]

for (f of food) { // gives the contents of arrays
    console.log(f + " is very tasty")
}


// Lots of Array methods
