var Person = function Person (name) {
  this.name = name;
};

Person.prototype.sayHi = function sayHi () {
  console.log(this.name);
};

new Person('Bob')
  .sayHi();
