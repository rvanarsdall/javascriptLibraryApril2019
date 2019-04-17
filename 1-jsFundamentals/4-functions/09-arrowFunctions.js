//ARROW FUNCTIONS

// Normal functino declaration
function coffee(){
    return "coffee is good"
}

// normal function expression

let tea= function(){
    return 'tea is healthy'
}


// arrow functions are always anonymous 
// arrow functions are un-named

let hotChocolate = () => {
    return "hot chocalate is king"
}

// Can not  call this  function before the arrow

let animals = (kittens, puppies) => { return `I have ${kittens}, cat(s) and ${puppies} dog(s)`}
console.log(2,3)


// concise vs block body


//consise body

let apples= x =>  `There are ${x} apples`
console.log(apples(10))

// block body
// in block bodies RETURN must be used in block body
let banannas= x=> {
    return `There are ${x} bannannas`
}
console.log(banannas(5))