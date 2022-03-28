const strLength = (name, cb) => cb(name.length);

const name = "Manish";
const displayLength = (len) => console.log(`OMG! my name is ${len} char long!`);

strLength(name, displayLength);
