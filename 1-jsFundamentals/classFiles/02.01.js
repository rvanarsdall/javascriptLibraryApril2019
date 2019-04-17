
// Run Condition
for (i = 0; i < 10; i++) {
    console.log(i)
}

// for in can be array or object
parentThing = [1, 'Tracy', false, { key: "playing}" }]
for (let thing in parentThing) {
    console.log(thing)
}

parentThing = [1, 'Tracy', false, { key: "playing}" }]
for (let thing in parentThing) {
    console.log(parentThing[thing])

}


let obj = { keyA: true, keyB: "Alan", keyC: [1, 2, 3] }

for (let thing in obj) {
    console.log(obj[thing])

    console.log(obj["keyA"])
}



let obj1 = { first: "1150 academy", second: 1150, third: false }


for (x in obj1) {
    console.log(obj1[x])
}




/* Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
console.log a random number between 5 and 7.  Once you've completed the challenge with a for-loop, see if
you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
a for loop requires. */


/* for (let x = 1; x < 11; x++) {
    logger(x)
}

function logger(myLoopNumber) {
    var random = Math.floor(Math.random() * (7 - 5) + 5);
    console.log("Result of try " + myLoopNumber + " is: " + random)
} */


var myNewArray =[]
// build the array

for (let x = 1; x < 11; x++) {
    myNewArray.push(Math.floor(Math.random()*9))
}

// console.log(myNewArray)

for (element in myNewArray) {

  console.log("FOR IN LOOP"+myNewArray[element])
}

for (element of myNewArray) {
  console.log(`The new value of : ${element}`)
}







//mini- challenge

//make a function with two paramaters favorite food and favorite desert
//the function should return a sentece with those two paramaters inside

foodChoice("Mash Potatoes", "Apple Pie")

function foodChoice(favorFood, favorDesert) {
    return `Seems like your food of choice is ${favorFood} and ${favorDesert}`
}

console.log(foodChoice("mash potatoes", "apple pie"))



// demo  function compensition 
function first(inputFunction) {
    inputFunction()
}


function second() {
    console.log("functions are amazing but aslo hard")
}


first(second)


/* Challenge 2:
Let's compose functions!  Your first function should take a function as input and return that function
with a function call.  Your second function should take a string as input and return that string with 
extra stuff added to that string.  Console.log the results of your function calls.  Additional information
is below to help clarify what you're doing (the below is just an example):
first function: input-secondFunc output-secondFunc('coding is great!')
second function: input-'coding is great!' output-'coding is great!  pie is, too!' */


function firstFunction(myString) {

    return myString("Coding is Great")
}

function secondFunction(myString2) {

    return myString2 + " pie is too!"
}

console.log(firstFunction(secondFunction))



// Challenge 3
// make 2 functions the first function takes a function as input and calls that input function
// with a number value. The second function takes a number as input and concatenates that number
//with a string.
// the second function should return the concatenation
// the first function should return the call



function inputFunction1(myNumberParam) {
    return myNumberParam(Math.floor(Math.random()*10)+1)
}

function inputFunction2(myNumberParam) {
    return myNumberParam + " apples were stolen"
}

console.log(inputFunction1(inputFunction2))