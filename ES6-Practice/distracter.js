// OBJECT DESTRUCTOR
const memberInfo = {
   id : ["student","captain","monitor"], 
   names : "Arman", 
   age : 19, 
   batch : 4 , 
   regular : true, 
   address : {
      thana :  "Batiaghata",
      district: "Khulna" ,
      division: "Khulna",
      country: "Bangladesh" 
   }
};
const { batch,names,id,regular,address} = memberInfo ;
console.log(batch,names,id);
console.log(address);
console.log({regular});

// COMPLEX OBJECT DESTRUCTOR
const {district, thana} = memberInfo.address ;
console.log(thana,district);

// Array DESTRUCTOR
const numbers = [1,3,5,7,9];
const [firstNum, secondNum, ...otherNum] = numbers;
console.log(firstNum,secondNum,otherNum); 