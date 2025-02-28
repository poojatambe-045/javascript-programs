function isArmstrong(number) {
    const digits = number.toString().split('');
    const len = digits.length;
   // console.log(Math.pow(parseInt(2), len))
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), len), 0);
 
    if (sum === number) {
        console.log(number + " is an Armstrong Number");
    }
    else {
        console.log(number + " is not an Armstrong Number");
    }
}
 
isArmstrong(9474);
isArmstrong(520);
isArmstrong(153)
isArmstrong(15)



//console.log(Math.pow(parseInt(2), 3))


//Display Armstrong Numbers Between 1 to 1000 
function isArmstrong1(number) {
    let sum = 0;
    let temp = number;
    const digitsCount = number.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digitsCount);
        temp = Math.floor(temp / 10);
    }

    return sum === number;
}

let N = 1000;

for (let i = 1; i <= N; i++) {
    if (isArmstrong1(i)) {
        console.log(i);
    }
}