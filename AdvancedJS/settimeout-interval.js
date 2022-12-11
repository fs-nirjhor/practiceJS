// it will work asynchronously. its work after all normal console.
function testing () {
  console.log(2222);
}
console.log(1111);

setTimeout(testing, 500);

console.log(3333);

setInterval( ()=>console.log(4444), 500 );
console.log(5555);