//Create your function below this line.



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal around 20 in this case.

*/
var bmi
bmiCalculator(65, 1.8)
//var bmi = bmiCalculator(65, 1.8);
function bmiCalculator(weight, height) {
  bmi = weight / (height * height);
  console.log(bmi);
  //  return Math.round(bmi)
}
console.log(bmi);


// var n = Math.random() * 6
// console.log(Math.floor(n)+1)
var x = 10
varTest()

function varTest() {
  var x = 1;
  console.log(x);  // 1
  if (true) {
    x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

console.log(x);  // 2

/* 
Scope has both LOCAL and GLOBAL scope

*/

// Example 1
var x = 12;
function scope(){
var x = 33;
console.log(x)// 33

}
scope();
console.log(x)// 12



// Example 2
var x = 12;
function scope(){
x = 33;
console.log(x)// 33

}
scope();
console.log(x)// 33


// Example 3
var x = 1

function scope(){
  var x = 2
  function scopeInner(){
    var x = 3 
    console.log(x) // 3
  }
  scopeInner()
  console.log(x)  // 2
}
scope()
console.log(x) // 1






const first = 'firstName';
let second = 'middleName';
var third = 'lastName';

function play() {
  const first = 'a';
  console.log(first, second, third);
  if (5 > 4) {
    const first = 1;
    let second = 2;
    var third = 3;
    console.log(first, second, third);
  }
  console.log(first, second, third);
}

play();
console.log(first, second, third);