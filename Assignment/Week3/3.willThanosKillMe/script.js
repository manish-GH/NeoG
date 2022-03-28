const willThanosKillMe = (name, evenCB, oddCB) =>
	name.length % 2 === 0 ? evenCB() : oddCB();

const name = "Manish";
const successCB = () => console.log(`Yay! I am alive!`);
const failureCB = () =>
	console.log(`Give my bose speakers and apple headphones to my sister`);

willThanosKillMe(name, successCB, failureCB);
