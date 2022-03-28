const myFetch = (msg, shouldReject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			shouldReject ? reject(`ERROR: ${msg}`) : resolve(`SUCCESS: ${msg}`);
		}, 2000);
	});
};

const asyncAwaitFetch = async () => {
	try {
		const data = await myFetch("testing");
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

asyncAwaitFetch();
