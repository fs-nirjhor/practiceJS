//Array (index- 0,1,2,3..)
var boardExam = [2012, 2015, 2018, 2020, "Honours"];
console.log(boardExam); //array

console.log(boardExam[4]); //index

console.log(boardExam[9]); //wrong index

//named index
var JSC = boardExam[1]; 
console.log(JSC);

//search index
var SSC = boardExam.indexOf(2018);
console.log(SSC); 
console.log(boardExam.indexOf(2022));

//change index
boardExam[3] = "HSC"; 
console.log(boardExam[3]);
console.log(boardExam); //changed array 

// push, pop (Add-Remove > End)
console.log(boardExam);
boardExam.push("Science"); //Add
boardExam.push("Botany");
console.log(boardExam);
boardExam.pop(); //Remove
console.log(boardExam);

//length
var boardExam = [2012, 2015, 2018, 2020, "Honours"];
console.log(boardExam.length); 


// shift & unshift (Add-Remove > Start)
var boardExam = [2012, 2015, 2018, 2020, "Honours"];
boardExam.unshift(2002,2007); //Add
console.log(boardExam);
boardExam.shift(); //Remove
console.log(boardExam);

// SLICE
var nums1 = [0,1,2,3,4,5,6,7,8,9];
//slice(1,4) = index1 - index3
console.log("slice(1,4)",nums1.slice(1,4)); 
console.log("no-channge in main array",nums1);
//slice(2) = index2 to last 
console.log("slice(2)",nums1.slice(2));

// SPLICE
const nums2 = [0,1,2,3,4,5,6,7,8,9];
// slice(2,4) -> index2 - next 4 index(2,3,4,5) replace with 22,55(optional)
const splice = nums2.splice(2,5,22,55);
console.log("splice(2,5)",splice);
console.log("main array changed",nums2);

// JOIN 
//join something between elements
const nums3 = [1,3,5,7,9];
const join = nums3.join("+");
console.log(join);