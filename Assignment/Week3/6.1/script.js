const displayAfterEveryInterval = (msg, delay) =>
	setInterval(() => console.log(msg), delay);

const msg = "Hello User";
const delay = 2000;

displayAfterEveryInterval(msg, delay);
