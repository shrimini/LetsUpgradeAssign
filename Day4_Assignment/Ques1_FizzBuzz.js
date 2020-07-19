console.log('FizzBuzz');
var lis=[];
for (let i = 1; i <=100; i++) {
    if(i%3==0 && i%5==0){
        lis.push(`Multiple of 3 and 5 : ${i} FizzBuzz`);
    }
    else if(i%3==0){
        lis.push(`Multiple of 3 : ${i} fizz`);
    }
    else if(i%5==0){
        lis.push(`Multiple of 5 : ${i} buzz`);
    } 
}
let strlis=lis.join("\n");
console.log(strlis);
