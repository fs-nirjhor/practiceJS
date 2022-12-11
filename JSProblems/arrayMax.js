//find max using for-loop
let run = [10, 15, 54, 25, 22, 5, 14];
let manOfTheMatch = run[0];
for (let i = 0; i < run.length; i++) {
   let score = run[i];
   if (score > manOfTheMatch) {
      manOfTheMatch = score;
   }
}
console.log(manOfTheMatch);

//find max using function
function highestGPA(gpa) {
   let highest = gpa[0];
   for (let i = 0; i < gpa.length; i++) {
      let most = gpa[i];
      if (most > highest) {
         highest = most;
      }
   }
   return highest;
}
let GPA = [3.22, 4.50, 3.19, 4.78, 4.20];
console.log(highestGPA(GPA));

let result = highestGPA([1.99, 2.36,1.70,2.65,2.78]);
console.log(result);