//condition (>, <, ==, !=, >=, <=)
var myMark = 75;
if(myMark > 33){
   console.log("Passed");
}
else{
   console.log("Failed");
}


//multiple condition [&&=and,||=or]
var Passed = true;
var GPA = 4.78;
if(GPA > 5.00){
   console.log("Invalid GPA !");
}
else if(Passed == true && GPA > 4.00){
   console.log("You are selected !");
} 
else if(Passed == false || GPA < 2.00){
   console.log("You are rejected !");
}
else{console.log("You are waiting !");}



//grade mark

var GPA = 4.78;

if (GPA == 5.00){
   console.log("Golden A+ !");
}
else if(GPA >= 4.00 && GPA < 5.00){
   console.log("A+ !");
}
else if (GPA >= 3.00 && GPA < 4.00){
   console.log("A !");
}
else if (GPA >= 2.00 && GPA < 3.00){
   console.log("A- !");
}
else if (GPA >= 1.00 && GPA < 2.00 ){
   console.log("B !");
}
else if (GPA > 0 && GPA < 1.00){
   console.log("C !");
}
 else if (GPA == 0.00){
   console.log("Failed !");
}
else{ console.log("Invalid input");}


