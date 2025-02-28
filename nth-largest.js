
const arr=[4,6,70,8,20,1];
const uniqueList=[...new Set(arr)];

let n=2;
let maxNum=Math.max(...arr);

while(n-1>0){
    let mx=0;
   for(let i=0; i<=uniqueList.length;i++){
    if(maxNum>uniqueList[i] &&  mx<uniqueList[i]){
       mx=uniqueList[i]; 
    }

   }
   maxNum=mx;
   n--;
}
console.log(maxNum);


//2

uniqueList.sort((a,b)=>b-a);
console.log(uniqueList[n]);


//3

let highest=2;let highestnum=0; 
//const uniqueList=[...new Set(highestList)]
while(highest>0){
    //console.log(highest)
    highestnum=Math.max(...uniqueList)
    uniqueList.splice(uniqueList.indexOf(highestnum),1)
    highest--;
}
console.log(highestnum)