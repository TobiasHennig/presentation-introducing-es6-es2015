class Person {
  constructor (name, friends = []) {
    this.name = name;
    this.friends = friends;
  }
  sayHiToFriends () {
    var that = this;
    // TODO
    this.friends.forEach(function (friend) {
      // TODO
      console.log(that.name + ' greets ' + friend);
    });
  }
}

new Person('Bob', ['Paul', 'Sarah', 'Max'])
    .sayHiToFriends();
