// Break - stop looping 
const evenNum = [3,5,7,9,11,13,1];
for (let i = 0; i < evenNum.length; i++){
  const even = evenNum[i];
  if (even > 9){
    break;
  }
  console.log("even",even);
}

console.log("..............");

// Continue - ignore elements
const allNums = [-9,9,-7,0,7,-3,3];
for (let i = 0; i < allNums.length; i++){
  const all = allNums[i];
  if (all > 0){
    continue;
  }
  console.log("all",all);
}