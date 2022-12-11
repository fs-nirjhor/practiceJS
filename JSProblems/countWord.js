let law = "Every reaction   has an equal and opposite reaction.";
let word = 0;
for (let i = 0; i < law.length; i++) {
   let element = law[i];
   if (element == " " && law[i-1] != " ") {
      word++;
   }
}
word++;
console.log(word, "word");
