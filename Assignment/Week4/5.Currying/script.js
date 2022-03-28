const nameLogger = (name) => (msg) => console.log(`${name} says, ${msg}`);

const manishLogger = nameLogger("Manish");

manishLogger("hello");
