const birthday = (person) => ({ ...person, age: person.age + 1 });

console.log(birthday({ name: "Manish", age: 24 }));
