
function reversing(str){
   let reverse = "" ;
   for(let i = 0; i < str.length; i++){
      let item = str[i];
      reverse = item + reverse;
   }
   return reverse;
}

let statement = "i'll reverse it";
console.log(reversing(statement));

let statement2 = "0 1 2 3 4 5 6 7 8 9";
console.log(reversing(statement2));