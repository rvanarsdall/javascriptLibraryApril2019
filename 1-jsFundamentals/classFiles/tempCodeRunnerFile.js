var myNewArray =[]
// build the array

for (let x = 1; x < 11; x++) {
    myNewArray.push(Math.floor(Math.random()*9))
  
}

// console.log(myNewArray)

for (element in myNewArray) {
    let n= n+1
    
  console.log("FOR IN LOOP "+n+" "+myNewArray[element])
}