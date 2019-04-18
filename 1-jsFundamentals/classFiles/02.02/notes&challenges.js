let arr = [{key: 'academy'}, undefined, true, ['brie', 'rob', [true, false], undefined], 1150];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3][2][1]);

// arr[1] = 'whatever i want';

// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }



// Challenge 1:
// Build an array that has a string, a boolean, another array, an object, and a number inside.  Write a separate
// console.log to show every value within the array.  Once you've done that, use a for-of loop to console.log
// every value within the array.  If you can get the for-of loop to work correctly, try this with a .forEach.


// myNewArr= ["I'm a String", true, [1,2,true,"string me"],{key: 'academy'} ]


// for (let x = 0; x< myNewArr.length; x++){
// console.log(myNewArr[x])

// }

// for (let arrNum of myNewArr) {
//     console.log(arrNum)
// }


// for (arrNum2 in myNewArr) {
//     console.log(myNewArr[arrNum2])
// }

// myNewArr.forEach(function(arrNum3) {
//     console.log(arrNum3);
//   });


// Challenge 2:
// Build an array with the values: 'swimming', 'running', 'yoga', 'biking', 'climbing'.  Add the value
// 'stretching' with 'splice', but don't remove any contents in the array.  Add the value 'basketball' with
// 'splice', but *do* remove one element.  Finally, use 'slice' to cut and save a portion of your array to 
// a separate variable.  Use console.logs between every 'splice' or 'slice' to confirm that your array is 
// changing as you expect it to.


// let myNewArr = ['swimming', 'running', 'yoga', 'biking', 'climbing']
// console.log(myNewArr)
// myNewArr.splice(0,0,"stretching")
// console.log(myNewArr)

// myNewArr.splice(2,1,"basketball")
// console.log(myNewArr)

// let myNewerArray=myNewArr.slice(1,3)
// console.log(myNewerArray)


// Challenge 3:
// This challenge has 2 parts.  First, create an object with 5 key-value pairs.  Using a Javascript feature 
// demonstrated in your videos, create an array of all the keys in your object.  Use a for-of loop to
// console.log every key in your keys array.
// input: {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}}
// output: key1, key2, key3, key4, key5
// Once you've completed the above, use the .forEach method and your keys array to console.log all the values
// in your object.  Show these values using [] notation but not using Object.values().
// input: [key1, key2, key3, key4, key5]
// output: 'yeah!', 1150, true, [1,2,3,4], {innerKey: 'mind blown!'}
// */




let myNewObj = {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}}
let myNewArray=[]



myNewArray = Object.keys(myNewObj) // gives us the names of the keys in the array

// console.log(myNewArray)
// for (element of myNewArr){
//     console.log(element)
// }
for (element of myNewArray){
    console.log(element)
}

//Map Filter 


/*
Article Discussion:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Have students team into groups of 2.  Each group should take 20 minutes to read an article (assigned)
and build an example to demonstrate to another group what their method does.  Have students teach each
other in 10 minute intervals.  
*/