//Prime Number (moulik shonkha)

function primeNumber(n) {
   for (let i = 2; i < n; i++) {
      if (n % i == 0) {
         return "Its not a Prime number!";
      }
   }
   return "Its a Prime Number";
}
let num = 75;
let result = primeNumber(num);
console.log(result);
