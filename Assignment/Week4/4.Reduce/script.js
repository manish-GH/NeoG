const arr = [1, 3, 5, 2, 22, 11, 9];

//Find the sum of all add numbers
const oddSumReducer = (acc, curr) => {
	return curr % 2 === 0 ? acc : acc + curr;
};
console.log(arr.reduce(oddSumReducer, 0));

//Return an object with the sum of all add numbers and the sum of even numbers
const oddAndEvenSumReducer = (acc, curr) => {
	return curr % 2 === 0
		? { ...acc, evenSum: acc.evenSum + curr }
		: { ...acc, oddSum: acc.oddSum + curr };
};
console.log(arr.reduce(oddAndEvenSumReducer, { oddSum: 0, evenSum: 0 }));

//IMPORTANT
//Polyfill for Reduce using for loop
Array.prototype.myReduce = function (myReducer, myInitial) {
	let myArr = this;
	let output = !myInitial ? myArr[0] : myInitial;
	let startIndex = myInitial ? 0 : 1;

	for (let i = startIndex; i < myArr.length; i++) {
		output = myReducer(output, myArr[i]);
	}

	return output;
};

console.log(arr.myReduce(oddAndEvenSumReducer, { oddSum: 0, evenSum: 0 }));
