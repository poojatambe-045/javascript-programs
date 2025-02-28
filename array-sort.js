//sort array and convert to string

let inputArray=[4,6,2,1,4,8,7];

//1
inputArray.sort((a,b)=>b-a)
let output=inputArray.join("");
console.log(output)  //8764421

//2
let output1="";
while(inputArray.length>0){
let largestNo=Math.max(...inputArray)
output1+=largestNo.toString();
inputArray.splice(inputArray.indexOf(largestNo),1)
}

console.log(output1)

//3
let res="";
let inputArray1=[4,6,2,1,4,8,7];

while(inputArray1.length>0){
    let highestnumber=-1;
    let index=-1;
    for(let i=0; i<=inputArray1.length;i++){
        if(inputArray1[i]> highestnumber){
            highestnumber=inputArray1[i];
            index=i;
        }
    }

    inputArray1.splice(index,1);
    res+=highestnumber.toString()
    
}
console.log(res)