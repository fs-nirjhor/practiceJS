//Fibonacci series - litarative way 

// 1 for 
var fibo = [0,1];
var n = 12;
for(var i = 2; i <= n; i++){
   fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log("for",fibo);


//2 function 

function fibonacci(n){
   var fibo2 = [0,1];
   for(var i = 2; i <= n; i++){
      fibo2[i] = fibo2[i-1] + fibo2[i-2];
   }
   return fibo2;
}
var n2 = 10;
console.log('function',fibonacci(n2));


//Recursive way
//Recursive function 

function fibonacciR(n){
   
   if(n == 0){
      return 0;
   }
   else{
     return fibonacciR(n-1)+fibonacciR(n-2);
}
}
let result3 = fibonacciR(12);
console.log('Recursive', result3) ;

//Recursive Array Fibonacci

function fibonacciRA(n){
   if(n == 0){
      return [0];
   }
   else if(n == 1){
      return [0,1];
   }
   else{
     let fiboRA = fibonacciRA(n-1);
      let nextElement = fiboRA[n-1] + fiboRA[n-2] ;
      fiboRA.push(nextElement);
      return fiboRA ;
   }
}
console.log(fibonacciRA(12));




/* function fibonacciRA(n){
   if(n == 0){
      return [0];
   }
   else if(n == 1){
      return [0,1];
   }
   else{
      var fiboRA = fibonacciRA(n-1);
      var nextElement = fiboRA[n-1] + fiboRA[n-2];
      fiboRA.push(nextElement);
      return fiboRA;
   }
}
let resultRA = fibonacciRA(10);
console.log('Recursive Array',resultRA); */