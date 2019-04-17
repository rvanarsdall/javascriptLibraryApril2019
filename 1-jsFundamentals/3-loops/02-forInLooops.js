//  FOR OF LOOPS


let student ={ name: "peter", awesome: true, degree: "javascript"}

for (item in student){ 

console.log(student[item])
}




let catArray =["tabby", "british short hair"]

for (cat in catArray) {
    console.log(cat)
    console.log(catArray[cat])
}


// let's write a for - in loop that capitalizes the name

let instructor = "roBeRT"
let capName
for (x in instructor) {
    if (x==0) {
        capName = instructor[x].toUpperCase()
    
    } else {
        capName+= instructor[x].toLowerCase()
    }
}

console.log(capName)


