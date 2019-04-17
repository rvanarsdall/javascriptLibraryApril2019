/* 
LOOPS

Loops offer a quick and easy way t do something repeadly
there are many different types of loops but they all do the same thing.

For statement
do while
labled
break
continue
for in
for of
.foreach
.map
*/


/* 
loops have 
creations of index variable
a run condition
change to indexing variable

*/




// for (let i = 0; i<=10; i++){
// console.log (i)
// }
let i=5
console.log(i-=3)
// loops can run infinitally

// counts to -25 by -3 and logs the numbers starting from 2

for (i; i>=-25; i-=3){
    console.log(i)
}

// display letters in a name individually

var myName = "Robert"


for (let i = 0; i< myName.length; i++) {
    console.log(myName[i])
}


// for loops can use lots of varibales

let start = 2
let stop = Math.floor(Math.random()*30)
let increment = 3

for (let i = start; i <= stop; i=i+increment) {
    console.log(i)
}

