//arrays

let newArr = ["brie", 17, true, { ketchup: true, pickles: false, meat: true }]

//arrays have numbered delements. the numbers are indexes nad the values are the elements

console.log(newArr)

newArr[3].pickles = true
console.log(newArr[3])


newArr[3] = "Zach is one bad dude with styling"
console.log(newArr[3])

//conditionals

let isRainy = true
let isWarm = true

if (isRainy == true) {
    console.log("bring your umbrella")

} else {
    console.log("leave umbrella at home")
}


let gpas = [1.9, 2.4, 1.8, 2.8]



/* Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement). */


let newArr = [20, 50, 13, 89, 4]



if (newArr[0] == 20) {
    newArr[0] += 20
}

if (newArr[1] == 50) {
    newArr[1] /= 10
}

if (newArr[2]== 13) {
    newArr[2]= newArr[2] 
}

console.log(newArr)




/* Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have. */


let newObj ={
    nameOfMovie: "Avengers",
    runTime: 120,
    characters: {
        name: "Spiderman",
        age: "17",
        items:["web", "suit"]
    },
    genre: "action"
}


console.log(newObj.nameOfMovie, newObj.characters.name, newObj.characters.items)


let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}

console.log(lotrObj.characters.charOne.age)




/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}

//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/



function hoistTest(){
    // console.log(first)
    // console.log(second, third);
    if (true){
      var first = 1;
      let second = 2;
      const third = 3;
      return second
     
    }
  }
  hoistTest();
  console.log(first, second);
