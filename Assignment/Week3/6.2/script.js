const countdown = (timer) => {
	let myInterval = setInterval(() => {
		console.log(timer);
		timer--;
		if (timer === 0) clearInterval(myInterval);
	}, 1000);
};

let timer = 10;

countdown(timer);
