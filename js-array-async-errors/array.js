const arr = [2, 6, 8, 1, 7];
// the following methods effect on the array it self

// push will return the length of the array 
// and add the value to the end of the array
const pushResult = arr.push(9);
console.log('push', pushResult, arr);
// pop will remove the last value from the array and return it
const popResult = arr.pop();
console.log('pop', popResult, arr);
// shift will remove the first value from the array and return it
const shiftResult = arr.shift();
console.log('shift', shiftResult, arr);
// unshift will add the value to the beginning of the array and return the length of the array
const unshiftResult = arr.unshift(4)
console.log('unshift', unshiftResult, arr);
// splice will remove the values from the array and return them as an array
const spliceResult = arr.splice(1, 1)
console.log('splice', spliceResult, arr);
///////////////////////////////////////////////////////////////////////////////
const fruits = ['watermelon', 'apple', 'banana', 'berry'];

// for (let i = 0; i< fruits.length; i++) {
//     console.log(fruits[i]);
// }
fruits.forEach((item, idx, arr) => {
    console.log(item, idx, arr);
})
// only print the indexes so the item is not important
// we replace item param with [_]
fruits.forEach((_, idx) => {
    console.log(idx);
})
 


// create a NEW ARRAY which is copy of fruits but capitalized

// using for loop
// const capitalizedFruits = [];
// for (let i = 0; i < fruits.length; i++){
//     capitalizedFruits.push(fruits[i].toUpperCase())
// }
// console.log(capitalizedFruits);

// using forEach
// const capitalizedFruits = [];
// fruits.forEach(item => {
//     capitalizedFruits.push(item.toUpperCase())
// })
// console.log(capitalizedFruits);

// using Array method map
// const capitalizedFruits = fruits.map((item) => {
//     return item.toUpperCase()
// })
// console.log(capitalizedFruits);

// if we have only one command on the scop
const capitalizedFruits = fruits.map(item => item.toUpperCase());
console.log(capitalizedFruits);
const copyFruits = fruits.slice(); // [...fruits]

// create a new array that contains items from fruits Array which includes 'a'
const fruitsA = fruits.filter(item => item.toLowerCase().includes('a'))
console.log(fruitsA);

const str = 'we are in DCI learning Web development' + 
' using JavaScript for back and front end.';
// create a new sentence which is a copy of str 
// but should only contain words that includes 'e'

// result = 'we are learning Web development' + 
// ' end.';

const result = str.split(' ').filter(word => word.toLowerCase().includes('e')).join(' ');
console.log(result);


// get the first fruit inside the array that includes 'e';
const foundFruit = fruits.find(item => item.toLowerCase().includes('e'));
console.log(foundFruit);

const vegetables = ['spinach', 'tomato', 'potato', 'carrot', 'cucumber'] 
// find the second item that contains 'o'

const secondResult = vegetables.filter(item => item.toLowerCase().includes('o'))[1];
console.log(secondResult);

// check if one vegetable at least contains o
const check = vegetables.some(item => item.toLowerCase().includes('x'))
console.log(check);

// return the array only with numbers without the falsy
const falsy =[0, 1, 2,'', false, NaN, 4, 'sss']

const falsyResult = falsy.filter(item => typeof(item) === 'number' && item )
// const falsyResult = falsy.filter(item => item);

console.log(falsyResult);









