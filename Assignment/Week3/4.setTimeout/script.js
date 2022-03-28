const displayAfterDelay = (msg, delay) =>
	setTimeout(() => console.log(msg), delay);

const msg = "Hello User";
const delay = 2000;

displayAfterDelay(msg, delay);
