//window.onload = () => {
    // const div1 = document.getElementById('div1');
    // console.log(div1);
//}

const ahmad = {
    fName: 'Ahmad',
    lName: 'Osman',
    bDate: 1986,
    work: 'web dev trainer',
    address: {
        city: 'Hamburg',
        street: 'Wandalenweg',
        number: '30',
        country: 'Germany',
        postalCode: '20357',
        oneLineAddress: function() {
            return `${this.street}, ${this.number} 
            ${this.postalCode}, ${this.city}
            ${this.country}`;
        }
        
    },
    age: function() {
        // return the age of the person
        return new Date().getFullYear() - this.bDate;
    }

    // get age() {
    //     return new Date().getFullYear() - this.bDate;
    // }
}

console.log(ahmad.address.oneLineAddress());
//ahmad.bDate = 1988;
console.log(ahmad.age());
console.log(ahmad['fName']);

// object.keys will return an array of all the keys in the object
console.log(Object.keys(ahmad));


// task: print all object values to the console
console.log(Object.values(ahmad));

let x = 2;
let y = 3;

y = x;
y = 4
console.log(y, x); // 4, 2

const obj = {
    a: 1,
    b: 2,
    bDate: 1999
}

// let ahmad1 = ahmad; // not copy, just reference
// Object.copy(obj1, obj2); // copy the object
let ahmad1 = {...obj,...ahmad, city: "Hamburg"}; // copy
ahmad1.fName = 'Ahmad1';
console.log(ahmad);
console.log(ahmad1);





