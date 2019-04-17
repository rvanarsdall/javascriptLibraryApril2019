let myArray = [1, 10, 8, 5, 7, 11]
console.log("Using for loop with 'in'")

for (let x in myArray) {
    myArray[x] % 2 === 0 ? console.log(myArray[x] + " is even") : console.log(myArray[x] + " is odd")
}
console.log("Traditional Loop")

for (let x = 0; x < myArray.length; x++) {
    myArray[x] % 2 === 0 ? console.log(myArray[x] + " is even") : console.log(myArray[x] + " is odd")

}
console.log("Using for loop with 'OF'")
for (let x of myArray){
   x % 2 === 0 ? console.log(x + " is even") : console.log(x + " is odd")
}

myObj= {name: 'Batman', age: 42, isVillain: false}


console.log(objectChecker(myObj))


function objectChecker(object){
  //write your code here
  let myNewObj={}
  myNewObj.arrKey = Object.keys(object) // logging the KEYS in Array
  myNewObj.values = Object.values(object)  // logging the VALUES in Array
  myNewObj.howManyKeys = myNewObj.arrKey.length // logging the number of keys in Array 
  
 return myNewObj
}



