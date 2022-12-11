
//  Arguments - Array like Object to Array 
function summation (num1,num2){
   console.log("arguments", arguments);
   const arg = [...arguments] ;
   console.log("arg",arg);
}
summation(6,5,9,17);