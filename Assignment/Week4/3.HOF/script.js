const arr = [1, 47, 22, 37, 7, 3, 10];

const isLessThan10 = (num) => num < 10;
const isMoreThan10 = (num) => num > 10;

console.log(arr.filter(isLessThan10));

//Given an array of numbers, return an array with each element incremented by 2
const incrementBy2 = (num) => num + 2;
console.log(arr.map(incrementBy2));

//Given an array of numbers return an array of objects
const numToObject = (num) => ({ num: num });
console.log(arr.map(numToObject));
