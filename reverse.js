let reverseString="Pooja Tambe";
console.log(reverseString.split('').reverse().join(''))  //reverse chars
console.log(reverseString.split(' ').reverse().join(' '))  //reverse words

//reverse number
let revno=12343

let a=revno.toString();
let reverseno=null;
for(let i=a.length-1; i>=0;i--){
    console.log(a[i])
    reverseno=reverseno!=null? reverseno+a[i]: a[i];
}
console.log("Reverse number:"+ reverseno)