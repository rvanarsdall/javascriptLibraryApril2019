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