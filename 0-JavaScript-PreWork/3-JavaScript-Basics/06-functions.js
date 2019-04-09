//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

/* 
We use the function keyword to notify that this is a function.
We name the function hello. We can name it whatever we want, as long as it's not a keyword. We'll talk about the parenthesis more soon.
We execute some code when the function is called. */


function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();




function numberEntered(x){
    console.log("The number you entered was: ", x);
}


numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);



function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);



//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}

//Call it
subtractTwoNumbers(5, 7);



function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);
console.log(getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0));



