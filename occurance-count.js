let inputStr="AAABBBDDDSSSFGHHBC"; 
let list={}; 
let outputStr="";

countStringOccurance(inputStr);console.log(outputStr);

function countStringOccurance(inputStr){
inputStr.split('').reduce((a,b)=>list[b]=(list[b] || 0)+1);
//console.log(list)
for(a of Object.keys(list)){
    //console.log(a)
    outputStr+=a+list[a];
}
}