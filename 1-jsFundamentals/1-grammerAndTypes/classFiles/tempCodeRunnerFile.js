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