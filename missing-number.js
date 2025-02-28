const arr =[1,2,3,5,7,10];
//const arr =[5,7,8,4,5,16,20];

const distinctArray=[...new Set(arr.sort((a,b)=> a-b))];
console.log(distinctArray);

let first=arr[0];
let last=distinctArray[distinctArray.length-1];
//console.log(first,last);

for(let i=first; i<=last; i++){ 
    //console.log(i,distinctArray.includes(i))
if(!distinctArray.includes(i)){
 console.log("Missing Number is: " +i);
}

}
