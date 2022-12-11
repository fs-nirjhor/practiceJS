// Double Equal == Value
//Threeple Equal === Value + Type 

const num = 2 ;
const string = "2" ;

function equality (value1,value2){
   if (value1 == value2) {
      console.log(`${value1} == ${value2}`);
   } else {
      console.log(` ${value1} !== ${value2}`);
   }
   if (value1 === value2){
      console.log(` ${value1} === ${value2}`);
   } else {
      console.log(` ${value1} !=== ${value2}`);
   }
}
equality(2,"2");
equality(1,true);
equality(0, false);


