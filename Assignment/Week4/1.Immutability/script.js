const Manish = { motherName: "Kavitha", age: 24 };
const Hemanth = { ...Manish, age: Manish.age - 3 };
console.log(Hemanth);

const arr1 = ["red", "green", "yellow", "blue"];
const arr2 = [...arr1, "pink", "purple"];
console.log(arr2);
