const myFetch = (msg, shouldReject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			shouldReject ? reject(`ERROR: ${msg}`) : resolve(`SUCCESS: ${msg}`);
		}, 2000);
	});
};

const getServerResponseLength = (msg) =>
	myFetch(msg).then((data) => console.log(data.length));

getServerResponseLength("testing");

const asyncAwaitGetServerResponseLength = async (msg) => {
	try {
		const data = await myFetch(msg);
		console.log(data.length);
	} catch (err) {
		console.error(err);
	}
};
asyncAwaitGetServerResponseLength("test");
