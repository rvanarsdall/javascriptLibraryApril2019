/* 
TYPES
*/

// Boolean
var on = true;
console.log(on);

// boolean can represent: True/False Yes/No , ON/OFF , 0/1


// Undefined

/* 
A variable has been declared but it's not been assigned a value
*/


let grass;
console.log(grass);

//NULL
// Null means a variable has been declaired and assigned a value of null

var empty = null
console.log(empty)


// NUMBERS

let myAge = 90;
console.log(myAge);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite)

//STRINGS
// Any value within quites; JS spites out the value within the quotes

let stringOne = "double quotes";
let stringTwo = 'single quuotes';

// String contatention vs addition

let first = 1060 + 20;
let second = "1090" + "30";


// Interpolation
// Lets you use strings with dynamic content

// Example 1:

let age = 32;
let string = `my age is: ${age}`;
console.log(string);


// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
// }

// console.log(step);




// OBJECTS

// What is an object?
// An object is a container that stores property names and their values and holds multip data types
// It is denoted by {}
// Have keys and values ----(Color (key): 'blue' (value))
//  seperated between key and value with a COLON and a comma

let hulk = {
    //KEY   VALUE
    color: 'green',
    age: [42,15,25],
    isStrong: true
}


console.log(hulk)

//selecting specific property of hulk
console.log(hulk.age[1])

//ARRAYS

/* 
Arrays stores multiple values in an ordered way. They too hold multipe data types


Denoted by []
Has values of (Blue, Green, Yellow) seperated by commas

*/


var stepsToBrushTeeth = ["uncap toothpaste", "squeeze toothpaste", "rinse brush"]
// Array indexing                0                   1                   2  
console.log(stepsToBrushTeeth)