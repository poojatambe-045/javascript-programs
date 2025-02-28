let sumOfNumber="5734";
console.log(sumOfNumber.split('').reduce((a,b)=>Number(a)+Number(b)))



//2
let sum=0;
for(let c of sumOfNumber.split('')){
sum+=Number(c);
}
console.log(sum);