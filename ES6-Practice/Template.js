const firstName = 'Farhan' ;
const midName = 'Sadik' ;
const num = 2000; 
// String
const fullNameString = firstName + ' ' + midName + ' Nirjhor ' + num + 22;
console.log(fullNameString);

// ES6 Template
const fullNameTemplate = ` ${firstName} ${midName} Nirjhor ${num + 22} `;
console.log(fullNameTemplate);

// String multiline
const multilineString = "I live in Bangladesh.\n" + "I live in Khulna.\n" + "I live in Batiaghata.";
console.log(multilineString);

 //Template multiline
const multilineTemplate = `I live in Bangladesh.
I live in Khulna.
I live in Batiaghata.` ;
console.log(multilineTemplate);

