//feetToMile
function feetToMile(f) {
   let mile = 0.00018939394 * f;
   if (f >= 0) {
      return mile;
   } else {
      return "Invalid!";
   }
}
let feet = 6;
console.log(feet, "feet =", feetToMile(feet), "mile");

//woodCalculator
function woodCalculator(chair, table, bed) {
   let totalWood = chair * 2 + table * 5 + bed * 9;
   if (chair >= 0 && table >= 0 && bed >= 0) {
      return totalWood;
   } else {
      return "Invalid!";
   }
}
let products = woodCalculator(50, 30, 10);
console.log(products, "cubic²");

//brickCalculator2 (my practice)

function brickCalculator2(floors) {
   let floors1To10 = floors * 20000;
   let floors11To20 = (floors - 10) * 15000 + 200000;
   let floors21plus = (floors - 20) * 10000 + 350000;
   let totalBricks2 = 0;

   if (floors >= 0 && floors <= 10) {
      totalBricks2 = floors1To10;
   } else if (floors >= 11 && floors <= 20) {
      totalBricks2 = floors11To20;
   } else if (floors >= 21) {
      totalBricks2 = floors21plus;
   } else {
      totalBricks2 = "Invalid!";
   }
   return totalBricks2;
}
let totalFloor2 = 35;
console.log("Total Bricks 2:", brickCalculator2(totalFloor2));

// brickCalculator
function brickCalculator(floors) {
   let totalBricks = 0;
   if (floors < 0) {
      return "invalid!";
   } else if (floors <= 10) {
      totalBricks = floors * 20000;
   } else if (floors <= 20) {
      let to10 = 10 * 20000;
      let remain = floors - 10;
      let to20 = remain * 15000;
      totalBricks = to10 + to20;
   } else {
      let to10 = 10 * 20000;
      let to20 = 10 * 15000;
      let remain = floors - 20;
      let from21 = remain * 10000;
      totalBricks = to10 + to20 + from21;
   }
   return totalBricks;
}
let totalFloor = 35;
console.log("Total Bricks:", brickCalculator(totalFloor));

//tinyFriends
function tinyFriends(friends) {
   let tiny = friends[0];
   let tinyNames = [];
   for (let i = 0; i < friends.length; i++) {
      let name = friends[i];
      if (name.length <= tiny.length) {
         tiny = name;
         tinyNames.unshift(tiny);
         } 
   }
   return tinyNames ;
}

let list = ["mim", "humu", "piash","jim",  "lamiya", "jahirul", "tanzibur"];

console.log("tiniest name", tinyFriends(list));

