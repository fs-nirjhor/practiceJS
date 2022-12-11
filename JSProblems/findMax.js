
let babu = 10;
let mithi = 6;
let mawa = 2;

let elder = Math.max(babu,mithi,mawa);
console.log(elder, "is elder among -",babu,mithi,mawa);

let younger = Math.min(babu,mithi,mawa);
console.log(younger, "is younger among - ",babu,mithi,mawa);


//find max
let Babu = 10;
let Mithi = 6;
let Mawa = 2;

if(Babu > Mithi){
   if(Babu > Mawa){
      console.log("Babu is elder");
   }
   else{
      console.log("Mawa is elder");
   }
}
else if(Mithi > Babu){
   if(Mithi > Mawa){
      console.log("Mithi is elder");
   }
   else{
      console.log("Mawa is elder");
   }
}

//find max 2
let B = 10;
let M = 6;
let T = 2;
if(B > M && B > T){
   console.log("B is elder");
}
else if(M > B && M > T){
   console.log("M is elder");
}
else{
   console.log("T is elder");
}