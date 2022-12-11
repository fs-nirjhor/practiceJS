//call a function
function myMark() {
   console.log("mark bolbo na");
   console.log("prestige thakbena");
   console.log("khub kom");
}
myMark();

//parameter
function math(mark) {
   var mathMarks = mark + 20;
   console.log("parameter");
   console.log(mathMarks);
}
math(50);

//double parameter
function chemistry(mcq, written) {
   var chemistryMarks = mcq + written;
   console.log("Double Parameter", chemistryMarks);
}
chemistry(35, 50);

//return
function physics(mcq, written) {
   var physicsMark = mcq + written;
   return physicsMark;
}
var Physics = physics(35, 45);
console.log("Return", Physics);

/** year to day */
function yearToDate(year) {
   var day = year * 365;
   return day;
}
var age = [12, 19, 22, 36, 47];
for (var i = 0; i < age.length; i++) {
   let days = age[i];
   let result = yearToDate(days);
   console.log(days, result);
}

/** year to day (full function) */
function yearToDates(year) {
   for (var i = 0; i < year.length; i++) {
      let y = year[i];
      var day = year[i] * 365;
      console.log(y, day);
   }
}
var ages = [12, 19, 22, 36, 47];
yearToDates(ages);


// anonymous function with variable
const avarageMark = function (physics, chemistry,math){
   const totalMark = physics + chemistry + math;
   const avarage = totalMark / 3 ;
   return avarage;
};
console.log("avarageMark",avarageMark( 60,70,80));