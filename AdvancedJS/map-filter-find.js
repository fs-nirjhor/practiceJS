// map is looping 
// filter is filtering all with condition 
// find is finding the first with condition

const numbers = [2,3,4,5,6,7,8];

// square in normal way 
const square_for = [];
for (let i = 0; i < numbers.length; i++) {
  const e = numbers[i];
   const square = e * e;
   square_for.push(square);
}
console.log("square_for",square_for);

// square in map
const square_map = numbers.map(e => e * e);
console.log("square_map",square_map);

//map
numbers.map((x,index,array) => console.log("map", x, index, array) );


// filter 
const filter = numbers.filter(x => x < 5);
const filter2 = numbers.filter(x => x > 8);
console.log("filter",filter,filter2);

// find
const find = numbers.find(x => x < 5);
const find2 = numbers.find(x => x > 5);
const find3 = numbers.find(x => x > 8);
console.log("find",find,find2,find3);

// relative content: reduce, for each

// On Object of Array
const students = [
  { roll: 27, name: "abdul" },
  { roll: 22, name: "korim" },
  { roll: 29, name: "rohim" },
  { roll: 38, name: "rajjak" },
  { roll: 40, name: "omor" },
  { roll: 43, name: "sunny" }
  ];
  
  const studentRolls = students.map(s => s.roll);
  const studentA = students.filter(s => s.roll < 30);
  console.log(studentRolls,studentA);