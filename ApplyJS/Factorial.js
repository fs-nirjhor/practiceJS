//iterative (i++) & (i--)
  
    //5!=1*2*3*4*5
//using for loop
let factorialF = 1;
let n1 = 5;
for (i=1; i <= n1; i++){
   factorialF = factorialF * i;
   //console.log('for',n1,factorialF);
}
console.log('for',n1,factorialF);


//using function 
function factorialNumber(n){
   let factorialFF = 1;
   for (let i = 1; i <= n; i++) {
       factorialFF = factorialFF * i;
   }
   return factorialFF;
}
const n2 = 6; 
console.log('function',n2, factorialNumber(n2));


//using while loop
let n3 = 7;
let factorialW = 1;
  i = 1;
while(i<=n3){
 factorialW = factorialW * i;
 i++;
 //console.log('while',n3, factorialW);
}
console.log('while',n3, factorialW);


//using function 2
function factorialNumber2(n){
   let factorialWF = 1;
    i = 1;
   while ( i <= n) {
       factorialWF = factorialWF * i;
       i++;
   }
   console.log('function2',n,factorialWF);
}
factorialNumber2(8);

// for (i--)
   //10!=10*9*8*7*6*5*4*3*2*1
n = 10;
let factorialRF = 1;
for(let i = n; i >= 1; i--){
   factorialRF = factorialRF * i;
}
console.log("Recursive for",n,factorialRF);


//Recursive Way Factorial 

n = 6;

function factorialNumber3(n){
   
if(n == 0){
   return 1;
}
else{
   return factorialNumber3(n-1) * n;
}
}
console.log('Recursive',n,factorialNumber3(n));