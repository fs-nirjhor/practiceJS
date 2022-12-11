//math

var num1 = 100;
var num2 = 22.74;
console.log(num1+num2);
var total = num1+num2;
console.log(total);

/*Fixed digit after point*/
console.log(total.toFixed(3));
total = total.toFixed(2);
console.log("fixed",total);

/*number to string*/
console.log(typeof num1);
num1 = ''+num1;
console.log("' '+num1",typeof num1);

/* String to Number */
var numOne = 'One';
console.log(numOne);
console.log(typeof numOne);
numOne = +numOne;
console.log(typeof numOne, '+numOne');
/*purse*/
var num1 = 100;
var num3 = "22.74";
console.log(num1+num3); //10022.74
num3 = +num3;
console.log(num1+num3); //122.74
num3 = parseFloat(num3);
console.log(num1+num3);
num3 = parseInt(num3);
console.log(num1+num3); //122


/*Oparetors*/
var num1 = 100;
var num2 = 22.74;
var firstName = "Farhan";
var midName = "Sadik";
var lastName = " Nirjhor";
var fullName = firstName + ' ' + midName + lastName;
console.log(fullName);
console.log(firstName + midName);

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

// increments & decrement
var num1 = 100;
num1++;
console.log(num1); //100+1=101
num1--; 
console.log(num1); //101-1=100
num1 = num1 - 1; // num--;
console.log(num1); //100-1=99


// Digit After point 
var num2 = 22.74;
num2 = Math.abs(num2); 
console.log(num2);  //22.74
var num2 = 22.74;
num2 = Math.round(num2);
console.log(num2); //23
var num2 = 22.74;
num2 = Math.floor(num2);
console.log(num2); //22
var num2 = 22.74;
num2 = Math.ceil(num2);
console.log(num2); //23

// Random (between 0 to 1)
var lotteryWinner = Math.random() * 100;
console.log(parseInt(lotteryWinner)); //Random Answer