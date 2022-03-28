const myFetch = (msg, shouldReject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			shouldReject ? reject(`ERROR: ${msg}`) : resolve(`SUCCESS: ${msg}`);
		}, 2000);
	});
};

const syncCallsToServer = (msg1, msg2) =>
	myFetch(msg1).then((msg1Data) =>
		myFetch(msg2).then((msg2Data) => console.log({ msg1Data, msg2Data }))
	);

syncCallsToServer("hello", "world");

const asyncAwaitSyncCallsToServer = async (msg1, msg2) => {
	try {
		const data1 = await myFetch(msg1);
		const data2 = await myFetch(msg2);
		console.log({ data1, data2 });
	} catch (err) {
		console.error(err);
	}
};
asyncAwaitSyncCallsToServer("HELLO", "WORLD");

const asyncAwaitParallelCallsToServer = async (msg1, msg2) => {
	try {
		const data1 = myFetch(msg1);
		const data2 = myFetch(msg2);
		console.log({ data1: await data1, data2: await data2 });
	} catch (err) {
		console.error(err);
	}
};
asyncAwaitParallelCallsToServer("HELLO", "WORLD!!");
