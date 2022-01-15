// EASY
// 1. Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const power = (a, b) => Math.pow(a, b);
console.log(power(2, 3));

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (length) =>
	((3 * Math.pow(3, 0.5) * Math.pow(length, 2)) / 2).toFixed(2);
console.log(areaOfHexagon(10));

// 3. Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (str) => str.split(" ").length;
console.log(noOfWords("We are neoGrammers"));

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const findMin = (...attributes) => {
	let min = attributes[0];
	for (let i = 0; i < attributes.length; i++) {
		if (min > attributes[i]) {
			min = attributes[i];
		}
	}
	return min;
};
console.log(findMin(3, 5, 9, 1));

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMax = (...attributes) => {
	let max = attributes[0];
	for (let i = 0; i < attributes.length; i++) {
		if (max < attributes[i]) {
			max = attributes[i];
		}
	}
	return max;
};
console.log(findMax(3, 5, 9, 1));

// 6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (a, b, c) => {
	if (a + b + c === 180) {
		if ((a === b) === c) return "Equilateral Triangle";
		else if (a === b || b === c) return "Isosceles Triangle";
		else return "Scalene Triangle";
	} else return "Not a triangle";
};
console.log(typeOfTriangle(50, 50, 70));

// MEDIUM
// 1. Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = (arr) => arr.length;
console.log(arrayLength([1, 5, 3, 7, 8]));

// 2. Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOf = (arr, element) => arr.indexOf(element);
console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replace = (arr, oldElement, newElement) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === oldElement) arr[i] = newElement;
	}
	return arr;
};
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

// 4. Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const mergeArray = (arr1, arr2) => arr1.concat(arr2);
console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// 5. Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

const charAt = (str, index) => str.charAt(index);
console.log(charAt("neoGcamp", 4));

// 6. Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate = (a, b) => {
	const date1 = a.split("/").reverse();
	const date2 = b.split("/").reverse();
	for (let i = 0; i < date1.length; i++) {
		if (date1[i] < date2[i]) return a;
		if (date1[i] > date2[i]) return b;
	}
};
console.log(minDate("02/05/2021", "24/01/2021"));

// ADVANCED
// 1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

const encodeString = (str, shift) => {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		newStr = newStr + String.fromCharCode(str[i].charCodeAt(0) + shift);
	}
	return newStr;
};
console.log(encodeString("neogcamp", 2));

// 2. Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase = (str) => {
	const newArr = [];
	const arr = str.split(" ");
	arr.forEach((element) => {
		let temp = element.split("");
		temp[0] = temp[0].toUpperCase();
		newArr.push(temp.join(""));
	});
	return newArr.join(" ");
};
console.log(toSentenceCase("we are neoGrammers"));

// 3. Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray = (arr) => arr.sort((a, b) => a - b);
console.log(sortArray([100, 83, 32, 9, 45, 61]));

// 4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = (str) => {
	const arr = str.split(" ");
	const revArr = [];
	arr.forEach((element) => {
		revArr.push(element.split("").reverse().join(""));
	});
	return revArr.join(" ");
};
console.log(reverseCharactersOfWord("we are neoGrammers"));
