const currency = [
	{ value: 2000, number: 0 },
	{ value: 500, number: 0 },
	{ value: 100, number: 0 },
	{ value: 20, number: 0 },
	{ value: 10, number: 0 },
	{ value: 5, number: 0 },
	{ value: 1, number: 0 },
];

const totalBill = 50;
const cashGiven = 2000;

const balance = () => {
	return cashGiven - totalBill;
};

const change = () => {
	let change = balance();
	currency.forEach((currency) => {
		let temp = change % currency.value;
		currency.number = Math.floor(change / currency.value);
		change = temp;
	});
};

const output = () => {
	let output = "";
	currency.forEach((currency) => {
		currency.number !== 0
			? (output = output + `${currency.number}-₹${currency.value} `)
			: null;
	});
	console.log(`Balance: ${output}`);
};

change();
output();
