//Check Whether a Number is a Duck Number
//Duck numbers are special numbers that occur when a number has the digit '0' in it, but the '0' is not the first digit. 
// numbers require the digit '0' to appear in the number, but not as the first digit.

function CheckWhetherNumbeisDuckNumber(num){
    //let num="5233044";
    let numArr=num.split("");
    //numArr.indexOf(find("0"))==="0"? numArr.shift():numArr;
    if(numArr.indexOf(numArr.find((x)=>x=="0"))==0){
        console.log("Not a Dock number")
    }else{
        if(numArr.indexOf(numArr.find((x)=>x=="0"))>0){
            console.log("Dock number")
        }else{
            console.log("Not a Dock number")
        }
    }
    }

     CheckWhetherNumbeisDuckNumber("70268745") //check number contains zero or not , not applicable if zero found at start