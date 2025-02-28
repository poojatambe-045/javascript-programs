//Check Whether a Number is an Automorphic Number
//Numbers, whose square ends with the same digits as the number itself are referred to as automorphic numbers, sometimes known as circular or circular-permuted numbers.

var checkAutomorphicNumber=(num)=>{
    //let num=9
    let square=num*num;
    if(square.toString().slice(-1)==num)
        console.log("Number is an Automorphic Number")
    else  console.log("Number is not Automorphic Number")
    }

    checkAutomorphicNumber(5) //square ends with the same digits
    checkAutomorphicNumber(4);