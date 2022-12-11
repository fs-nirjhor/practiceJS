// Call A Class
class MemberInfo {
  constructor(name, age, district, regular) {
    this.id = "student";
    this.name = name;
    this.age = age;
    this.district = district;
    this.batch = 4;
    this.regular = regular;
  }
}
const student1 = new MemberInfo("rakib", 16, "khulna", true);
console.log(student1);
const student2 = new MemberInfo("sakib", 19, "Dhaka", false);
console.log(student2);

//---CLASS INHERITANCE---

// Parent Class
class Title {
  constructor(title) {
    this.title = title;
  }
}
//Child Class
class Name extends Title {
  constructor(name) {
    super ("Dr.");
    this.name = name;
    this.fullname = `${this.title} ${this.name}`;
  }
  // function in class
  fullName() {
    return `${this.title} ${this.name}`;
  }
}
//Calling Child Class
const name1 = new Name("Shakib");
const fullName1 = name1.fullName();
console.log(name1, fullName1);