// show time
console.log(Date());
// get estimate time for loop
let start = new Date();
let sum = 0;
for (let i = 0; i < 100000000; i++) {
  sum++ ;
}
let end = new Date();
console.log(end-start,sum);