
// True-False function

function trueFalse (value){
   if(value){
      return `function is true for- ${value}`;
   } else {
      return `function is false for- ${value}`;
   }
}
// FALSE 
console.log( trueFalse(0) );
console.log( trueFalse("") );
console.log( 
   trueFalse(undefined),
trueFalse(null), 
trueFalse(NaN),
trueFalse(false) );
console.log( trueFalse() );

// TRUE
console.log( trueFalse(-5) );
console.log( trueFalse('0') );
console.log( trueFalse(" ") );
console.log( trueFalse([]) );
console.log( trueFalse({}) );

// ----ALERT-----
// 0 is a FALSE Condition 
const value2 = 0 ;
if (value2 || value2 == 0 ){
   console.log("Its normal value.");
} else {
   console.log("Its Abnormal Value.");
}
let value3;
console.log(value3);

// False Conditions
/* 
* 0 - ZERO
* "" - empty string 
* '' ;
* false ;
* null ;
* undefined - funcName(), value;
* NaN - Not a Number
*/

// True Conditions 
/* 
* any number without 0 - 1,2 ;
* any string without empty string - "0" ;
* string with white-space - " " ;
* any Array - [] ;
* any Object - {} ;
*/
