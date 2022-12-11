let marks = [10,13,17,19,16,14,7];
let totalMarks = 0;
for(let i = 0; i < marks.length; i++){
   let total = marks[i];
   totalMarks = totalMarks + total;
}
console.log(totalMarks);


//function
function score(run){
   let totalRun = 0;
   for(let i = 0; i < run.length; i++){
      let total = run[i];
      totalRun = totalRun + total ;
   }
   return totalRun;
}
let runs = [12,17,27,38,45,54,67,87];
console.log(score(runs));