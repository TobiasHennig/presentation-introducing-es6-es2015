let person = {
  name: 'John',
  age: 25
};

let { name, age } = person;

console.log(name, age);

function sayName ({ name }) {
  console.log(name);
}

sayName(person);
