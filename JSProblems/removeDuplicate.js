let applicant = [
   "rahim",
   "karim",
   "alim",
   "selim",
   "rahim",
   "karim",
   "rahim",
   "kamil",
   "selim",
   "rahim",
];
let selected = [];
for (let i = 0; i < applicant.length; i++) {
   let person = applicant[i];
   let verification = selected.indexOf(person);
   if (verification == -1) {
      selected.push(person);
   }
}
console.log(selected);
