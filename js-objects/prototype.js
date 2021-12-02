Array.prototype.sum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}


let arr = [2, 6, 7];
console.log(arr.sum());
// example about javascript predefined classes
// String
// Number
// Boolean
// Object
// ArrayBuffer
// let obj = {}
// let bool = true
// let num = 12
// let str = "something"
// const arr = new Array();
// arr.push(1)
// arr.push(2)
// arr.push(3)
// console.log(arr);


// task: add a method to String class using prototype
// method name should be capitalizeWords
// this method should capitalize first letter of each word on the string

String.prototype.capitalizeWords = function () {
    const wordsArr = this.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
        // wordsArr[i] = wordsArr[i].replace(wordsArr[i][0], wordsArr[i][0].toUpperCase());
    }
    this.value = wordsArr.join(' ');
    //return wordsArr.join(' ');
    // return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

}

let str = "i am a string";
//str.capitalizeWords() // => 'I Am A String'
console.log(str.capitalizeWords()); // print I Am A String
//console.log(str);
String.someStatic = function() {
return 'something'
};
console.log(String.someStatic());

