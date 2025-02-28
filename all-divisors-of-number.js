function recursiveFactor(n, d) {
    if (n < 1) return [];    
    if (n == 1) return [1];
    if (n == 2) return [1,2];
    if(n/d<2)
    return [n];
    if (n % d == 0) return [d, ...recursiveFactor(n, d + 1)];
    return recursiveFactor(n, d + 1);
}


const num = 85;
console.log(
    "All factors of " +
        num + ": " +
        recursiveFactor(num, 1)
);



//2
var FindFactorsofNumber=(num)=>{
    //let num=12
    console.log("Factors of Number: ",[...Array(num+1).keys()].filter((n)=>num%n===0))
    
    }
    
    FindFactorsofNumber(85)