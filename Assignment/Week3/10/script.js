const myFetch = (msg, shouldReject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			shouldReject ? reject(`ERROR: ${msg}`) : resolve(`SUCCESS: ${msg}`);
		}, 2000);
	});
};

myFetch("testing", true)
	.then((resolve) => console.log(resolve))
	.catch((reject) => console.error(reject));
