//Given an array of integers
const integerArr = [1, 4, 7, 10, 44, 57, 70, 9, 21, 50];

//
//a. Find the sum of all odd numbers
const oddSumReducer = (sum, num) => (num % 2 === 0 ? sum : sum + num);

console.log(integerArr.reduce(oddSumReducer, 0));

//
//b. Find the sum of all numbers ast odd indices
const oddIndexSumReducer = (sum, num, index) =>
	index % 2 === 0 ? sum : sum + num;

console.log(integerArr.reduce(oddIndexSumReducer, 0));

//
//c. Find the biggest number in the array
const largestNumberReducer = (largest, num) => (num > largest ? num : largest);

console.log(integerArr.reduce(largestNumberReducer));

//
//d. Find the numbers divisible by 10
const divisibleBy10Reducer = (acc, curr) =>
	curr % 10 === 0 ? acc.concat(curr) : acc;

console.log(integerArr.reduce(divisibleBy10Reducer, []));

//
//e. Return an array of numbers where odd numbers are incremented by 1 and even numbers are decremented by 1
const oddEvenIncrementDecrementReducer = (acc, curr) =>
	curr % 2 === 0 ? acc.concat(curr - 1) : acc.concat(curr + 1);

console.log(integerArr.reduce(oddEvenIncrementDecrementReducer, []));

//
//
//Given an array of strings
const stringArr = ["red", "blue", "green", "pink", "white", "yellow"];

//
//a. Find the number of strings with similar number off characters
const sameCharCountReducer = (acc, curr) =>
	acc[curr.length]
		? { ...acc, [curr.length]: acc[curr.length] + 1 }
		: { ...acc, [curr.length]: 1 };

console.log(stringArr.reduce(sameCharCountReducer, {}));

//
//b. Return an array with strings which have vowels
const vowels = ["a", "e", "i", "o", "u"];
const vowelsReducer = (acc, curr) =>
	acc.concat(
		curr
			.split("")
			.filter((char) => vowels.includes(char))
			.join("")
	);

console.log(stringArr.reduce(vowelsReducer, []));

//
//c. Return an array of objects with key as item and value as number of characters
const strToObjReducer = (acc, curr) => [...acc, { [curr]: curr.length }];

console.log(stringArr.reduce(strToObjReducer, []));

//
//THE ONE HW
//Write a function compose which can take any number of functions and return a function which will run the given functions in order when called with an argument
const increment = (num) => num + 1;
const decrement = (num) => num - 1;
const double = (num) => 2 * num;
const square = (num) => num * num;

const myReducer = (acc, curr) => curr(acc);

const compose =
	(...arguments) =>
	(num) =>
		[...arguments].reduce(myReducer, num);

const myFunc = compose(increment, double, square, decrement, double);

console.log(myFunc(1));
