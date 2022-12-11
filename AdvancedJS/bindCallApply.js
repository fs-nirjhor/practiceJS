
// Bind, Call & Apply are 3 way to borrow a mathod from other object

//main object 
const firstPerson = {
  firstName: "FS",
  lastName: "Nirjhor",
  salary: 15000,
  fullName: function () {
    fullName = this.firstName + " " +this.lastName;
    console.log(fullName);
  },
  totalSalary: function (bonus,tax){
    this.salary = this.salary + bonus - tax;
    return this.salary;
  }
};
/*console.log(firstPerson);
firstPerson.fullName();
const fullSalary = firstPerson.totalSalary(5000,50);
console.log(fullSalary);*/


// BIND 
console.log('***Bind***');
const secondPerson = {
  firstName: "Farhan",
  lastName: "Sadik",
  salary: 50000 
};
const totalBind = firstPerson.totalSalary.bind(secondPerson);
totalBind(10000,10);
console.log(secondPerson.salary);


// CALL 
console.log('***CALL***');
const thirdPerson = {
  firstName: "Far",
  lastName: "Han",
  salary: 400
};
 firstPerson.totalSalary.call(thirdPerson,2000,20);
 console.log(thirdPerson.salary);
 
 
 // APPLY
 console.log("***APPLY***");
 const fourthPerson = {
   firstName: "Nir",
   lastName: "Jhor",
   salary: 800
 };
 firstPerson.totalSalary.apply(fourthPerson,[200,10]);
 console.log(fourthPerson.salary);
 
 
 //Normal way
 console.log("***NORMAL***");
 const fifthPerson = {
   firstName: "F",
   lastName: "Sadik",
   salary: 1200
 };
 fifthPerson.totalSalary = firstPerson.totalSalary ;
 console.log(fifthPerson.totalSalary(100,10));
 
 
 // firstPerson not changed but others object changed
 console.log(firstPerson,secondPerson,thirdPerson,fourthPerson,fifthPerson);