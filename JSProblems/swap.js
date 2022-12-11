
// swap with temporary variable 
let a = 5;
let b = 10;
console.log('Before','a=',a,'b=',b);
let temp = a;
a = b;
b = temp;
console.log('After','a=',a,'b=',b);


// swap without temporary variable
let x = 70;
let y = 80;
console.log('Before','x=',x,'y=',y);
x = x + y;
y = x - y;
x = x - y;
console.log('After','x=',x,'y=',y);


//swap with Array
let p = 40;
let q = 60;
console.log('Before','p=',p,'q=',q);
[p,q] =[q,p];
console.log('After','p=',p,'q=',q);


