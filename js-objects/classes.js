class Person {
    //  fName ;
    //  lName ;
    //  bDate ;
    constructor(firstName, lastName, birthDate) {
        this.fName = firstName;
        this.lName = lastName;
        this.bDate = birthDate;
        
    }
    age() {
        return new Date().getFullYear() - this.bDate;
    }
}

const jay = new Person("Jay", "Radan", 1992);
const ahmad = new Person("Ahmad", "Osman", 1986, 'hamburg');
console.log(ahmad.lName);
console.log(ahmad.age());

// Student class will inherit all properties and methods from Person class
class Student extends Person {
    constructor(firstName, lastName, birthDate, className, classType) {
        // call the constructor of the parent class
        super(firstName, lastName, birthDate);

        this.className = className;
        this.classType = classType;
    }
    getDetails(){
        return `${this.fName} ${this.lName} is a student in ${this.className} 
        ,studying ${this.classType} and is ${this.age()} years old`;
    }
}
const ivo = new Student('Ivo', 'Serra', 1979, 'FBW e07-1', 'Web Dev');
console.log(ivo.age());
