
//, if you take a number, sum up its digits, and if the original number is divisible by that sum, then it's a Harshad number. 
// For example, 18 is a Harshad number because the sum of its digits is 1 + 8 = 9, and 18 is divisible by 9.
// let num=18
// let sum=0;
// let arr=num.toString().split("").reduce((a,b)=>a+parseInt(b),0)

// console.log(num%arr===0?true:false)

function isHarshad(number) {
    let sumOfDigits = number
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
    return number % sumOfDigits === 0? "Harshad number":"Not a Harshad number";
  }
  
  isHarshad(18);
  isHarshad(15);
