// Check Whether a Number is Perfect Square
//The number that results from squaring another integer is called a perfect square. A perfect square is a number that can be expressed as the product of an integer with itself.

function checkPerfectSquareNo(num){
    if(num<=0 || typeof num !=="number"){
        return console.log("Not a perfect square number");
    }
    if(Number.isInteger(Math.sqrt(num))){
        return console.log("perfect square number");
    }
    return console.log("Not a perfect square number");
}

checkPerfectSquareNo(9);
checkPerfectSquareNo(5);