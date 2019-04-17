// Make 3 variables.  Your first variable should be a string.  Your second variable should be an array, which
// has a string inside.  Your final variable should be an object, which has a property which is a string.

// Write 3 console.log messages which show the string from each type of variable.


var myString = "Hello";
var myArray = [1, "Monday", 34];
// index #     0    1       2   
var myObject = {
    //KEY   VALUE
    color: 'green',
    size: "small",
    isBouncy: true
};


console.log(myString);
console.log(myArray[1]);
console.log(myObject.size);



// Make 7 variables: one is a string, one a number, one a boolean, one is undefined, one null, one
// an array, and one an object.  Write a console.log message showing the type of each variable.  What
// surprises you about this?


let str = "string"
let num= 15
let isTrue=true
let notAssigned=undefined
let none=null
let myArray=[1,1950]
let myObject1 ={
    color: "green"
}


console.log("string:"+typeof str)
console.log("Number:"+typeof num)
console.log("True or False "+typeof isTrue)
console.log("Not Assigned: "+typeof notAssigned)
console.log("Null: "+typeof none)
console.log("Array: "+typeof myArray)
console.log("Object: "+ typeof myObject1)




/* Challenge 3:
Make 2 variables.  The first is an array, the second is an object.  Inside each variable, store a string,
a number, a boolean, an undefined, a null, an array, and an object.
Once you've defined each variable, use console.log messages to output every value within your array and
your object. */



let myArray=["string", 12, true, undefined, null, [1,2,3], {key:"Hot", key2:"Sun"}]
let myObject={
    name:"Name",
    age: 12,
    state: null,
    newArray:[42,15,25],
    obj:{key:"Hot", key2:"Sun"}
}

for (var i = 0; i < 7; i += 1){
    console.log(myArray[i]);
}

myArray.forEach()