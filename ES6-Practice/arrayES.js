
const mejorSubject = ["phycology", "mycology", "microbiology"];
const nonMejorSubject = ["chemistry", "zoology" ];
const practical = ["MejorSubjectPractical"];

// normal array - addition
const allSubjectArray = mejorSubject.concat(nonMejorSubject).concat(["history"]).concat(practical) ;
console.log(allSubjectArray) ;

// spread oparetor (...) - addition
const allSubjectSpread = [...mejorSubject, ...nonMejorSubject, "history", ...practical] ;
console.log(allSubjectSpread);

//Array max 
const ageList = [26,29,17,39,47,35,37];
const age1 = 11 ;
const age2 = 22 ;
const age3 = 33 ;

const maxVariable = Math.max(age1,age2,age3);
console.log(maxVariable);

const maxSpreadOparetor = Math.max(...ageList);
console.log(maxSpreadOparetor);

// Array Distracter
const numbers = [1,3,5,7,9];
const [firstNum, secondNum, ...otherNum] = numbers;
console.log(firstNum,secondNum,otherNum);

