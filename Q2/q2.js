// JavaScript Document


/* This part here is creating a constructor class to represent a Person object */
class Person {
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
/* A greeting/goodbye will populate in the console on the browser when you type in the name of the Person object */
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
	
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

/* Creating new instances 'parth' and 'harmanpreet' which is a Person object instance */
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


/* This is a subclass of for Teacher that inherits from the Person object */
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

/* ** Instantiating new Teacher object ** */

let newTeacher = new Teacher('Jasmine', 'Nguyen', 27, 'female', ['art', 'hanging out'], 'Design', 'B');
