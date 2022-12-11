//Call-Back, pass function
console.log("*** CALL-BACK/PASS FUNCTION ***");

function yourInstitute(name, passed, institute) {
   console.log(name);
   console.log(passed);
   institute();
   /* 
 forJSC();
 forSSC();
 forHSC();
 */
}

function forJSC() {
   console.log("Go to School.");
}
function forSSC() {
   console.log("Go to college.");
}
function forHSC() {
   console.log("Go to varsity.");
}
yourInstitute("Farhan", "JSC", forJSC);
yourInstitute("Sadik", "SSC", forSSC);
yourInstitute("Nirjhor", "HSC", forHSC);


// checking arguments
console.log("*** CHECKING ARGUMENT ***");

function checkingArgument (num1,num2){
   console.log("arguments",arguments);
   console.log("4th Argument",arguments[4]);
   let ans = num1 + num2;
   return ans;
}
console.log("checkingArgument",checkingArgument (3,5,6,7,45,8));

// Argument Summation function 
function sumArgument (){
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      let num = arguments[i];
      sum = sum + num;
   }
   return sum;
}
console.log("sumArgument",sumArgument(10,20,30,40,50,150));

// undefined
function isUndefined(num1,num2){
   if(num2 == undefined){
      num2 = 0;
   }
   // num2 = num2 || 0;
   return num1 + num2;
}
console.log(isUndefined(5,10));
console.log(isUndefined(5));