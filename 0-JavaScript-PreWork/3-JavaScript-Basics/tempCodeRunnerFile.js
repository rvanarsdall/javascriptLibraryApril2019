function bmiCalculator (weight, height) {
    let interpretation = weight/(height*height)
    return interpretation;
}
var bmiCheck = bmiCalculator(6,2)

if (bmiCheck >24.9) {
  console.log("Your BMI is " + Math.round(bmiCheck *10) + " so you are over weight") //  block of code to be executed if the condition is true
}

if (bmiCheck<= 24.9 && bmiCheck>=18.5) {
  console.log("Your BMI is " + Math.round(bmiCheck *10)  + " so you are normal weight") //  block of code to be executed if the condition is true
}

if (bmiCheck < 18.5) {
  console.log("Your BMI is " + Math.round(bmiCheck *10) + " so you are underweight") //  block of code to be executed if the condition is true
}