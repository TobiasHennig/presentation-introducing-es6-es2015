class Person {
  constructor (name, friends = []) {
    this.name = name;
    this.friends = friends;
  }
  sayHiToFriends () {
    this.friends.forEach((friend) => {
      console.log(this.name + ' greets ' + friend);
    });
  }
}

new Person('Bob', ['Paul', 'Sarah', 'Max'])
    .sayHiToFriends();
