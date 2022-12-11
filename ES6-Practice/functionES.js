
// set default parameters
 const defaultParameters = function defaultParameter(num1, num2 = 10){
 /*  ..normal way..
 if(num2 == undefined){
      num2 = 0;
   } */ 
  /* ..normal way 2..
  num2 = num2 || 0; 
  */
   return num1 + num2;
};
console.log(defaultParameters(30,20));
console.log(defaultParameters(40));


// Arrow Function

/* ..normal way..
const double = function doubleIt(num){
return num * 2 ;
}
console.log( double(6) );
*/

//single parameters arrow function 
const doubleIt = num => num * 2 ;
console.log('double',doubleIt(6) );

//multi parameters arrow function
const age = (currentY,birthY) => currentY - birthY;
console.log("age",age(2022,2002) );

// no parameters arrow function
const giveName = () => "farhan";
console.log("name",giveName() );

//multiline arrow function
const totalPrice = () => {
   const price = 100 ;
   const tax = 10 ;
   const tips = 20 ;
   const total = price + tax + tips ;
   return total ;
};
console.log("totalPrice",totalPrice() );


