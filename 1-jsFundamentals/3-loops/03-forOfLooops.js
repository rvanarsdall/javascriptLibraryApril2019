//  FOR OF LOOPS
// this breaks with OBJECTS

// OF loops require your looping structure needs to be iterable or needs to be numbered


let student ={ name: "peter", awesome: true, degree: "javascript"}

for (item of student){ 

console.log(student[item])
}


let catArray =["tabby", "british short hair"]

for (cat of catArray) {
    console.log(cat)
    // console.log(catArray[cat])
}